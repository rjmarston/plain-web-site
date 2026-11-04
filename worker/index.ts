/*
  The Plainweb site's worker. Pages are served straight from dist/ by Cloudflare;
  only requests to /api/* run this code (see run_worker_first in wrangler.jsonc).

  POST /api/contact  checks a "Start a site" submission and emails it to CONTACT_TO
                     (a secret set in Cloudflare), with Reply-To set to the person who sent it.
*/
import { start } from '../src/data/start';
import { site } from '../src/data/site';
import { isEmail, isPhone, isWebsite, normalizeUrl } from '../src/lib/validate';

interface Address { email: string; name?: string }
interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  EMAIL: { send(message: { to: string; from: Address; replyTo?: Address; subject: string; text: string }): Promise<{ messageId: string }> };
  CONTACT_TO?: string;
}

const FROM: Address = { email: 'hello@plain-web.com', name: 'Plainweb website' };
const MAX_BODY = 20_000;

const oneLine = (s: string, max: number) => s.replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);

function readSubmission(form: FormData) {
  const get = (k: string) => String(form.get(k) ?? '').trim();
  const firstName = oneLine(get('first_name'), 60);
  const lastName = oneLine(get('last_name'), 60);
  return {
    firstName,
    lastName,
    name: `${firstName} ${lastName}`.trim(),
    email: oneLine(get('email'), 254),
    phone: oneLine(get('phone'), 30),
    business: oneLine(get('business'), 120),
    website: oneLine(get('website'), 300),
    // Only set when they came from a tier card on the homepage.
    need: start.needs.find((o) => o.value === get('need')),
    notes: get('notes').slice(0, 3000),
    trap: get('url'),
    openedAt: Number(get('t')) || 0,
  };
}
type Submission = ReturnType<typeof readSubmission>;

function validate(d: Submission): Record<string, string> {
  const e: Record<string, string> = {};
  if (!d.firstName) e.firstName = start.errors.firstName;
  if (!d.lastName) e.lastName = start.errors.lastName;
  if (!isEmail(d.email)) e.email = start.errors.email;
  if (!isPhone(d.phone)) e.phone = start.errors.phone;
  if (!d.business) e.business = start.errors.business;
  if (!isWebsite(d.website)) e.website = start.errors.website;
  return e;
}

function emailText(d: Submission): string {
  const lines = [
    'New site request from plain-web.com/start',
    '',
    `Name:      ${d.name}`,
    `Email:     ${d.email}`,
    `Phone:     ${d.phone || 'Not given'}`,
    `Business:  ${d.business}`,
    `Website:   ${normalizeUrl(d.website) || 'None yet'}`,
  ];
  if (d.need) lines.push(`Package:   ${d.need.label}, ${d.need.detail} (they clicked it in the pricing section)`);
  lines.push(
    '',
    'Notes:',
    d.notes || '(none)',
    '',
    '—',
    `Reply to this email to answer ${d.firstName} directly.`,
  );
  return lines.join('\n');
}

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

function page(status: number, message: string) {
  // Plain fallback for people without JavaScript when something goes wrong.
  const html = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Plainweb</title>
<body style="font:17px/1.6 system-ui,sans-serif;max-width:36rem;margin:15vh auto;padding:0 24px;color:#15172b;background:#f6f5f1">
<p>${message}</p><p><a href="/start" style="color:#3346ff">Go back to the form</a> or email <a href="mailto:${site.directEmail}" style="color:#3346ff">${site.directEmail}</a>.</p></body>`;
  return new Response(html, { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  const sent = () => (wantsJson ? json(200, { ok: true }) : Response.redirect(new URL('/start/sent', request.url).toString(), 303));
  const failed = (status: number, code: string) =>
    wantsJson ? json(status, { error: code }) : page(status, 'We couldn’t send your answers.');

  // Only accept posts from this site's own pages.
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) return failed(403, 'forbidden');
  if (Number(request.headers.get('content-length') ?? 0) > MAX_BODY) return failed(413, 'too_large');

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return failed(400, 'bad_request');
  }
  const d = readSubmission(form);

  // Spam: bots fill the hidden field or submit within a moment of loading the page. Pretend it worked.
  if (d.trap) return sent();
  if (d.openedAt && Date.now() - d.openedAt < 2500) return sent();

  const errors = validate(d);
  if (Object.keys(errors).length) return wantsJson ? json(422, { errors }) : page(422, 'A few answers were missing.');

  if (!env.CONTACT_TO) {
    console.error('contact: CONTACT_TO secret is not set');
    return failed(500, 'not_configured');
  }

  try {
    await env.EMAIL.send({
      to: env.CONTACT_TO,
      from: FROM,
      replyTo: { email: d.email, name: d.name },
      subject: oneLine(`New site request: ${d.business}`, 140),
      text: emailText(d),
    });
  } catch (err) {
    const e = err as { code?: string; message?: string };
    console.error('contact: send failed', e.code, e.message);
    return failed(502, 'send_failed');
  }
  return sent();
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/contact') {
      if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { allow: 'POST' } });
      return handleContact(request, env);
    }
    if (pathname.startsWith('/api/')) return json(404, { error: 'not_found' });
    return env.ASSETS.fetch(request);
  },
};
