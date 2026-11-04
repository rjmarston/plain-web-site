# Plainweb website

Marketing site for Plainweb: custom small-business websites in two weeks. Built with [Astro](https://astro.build) and hosted on Cloudflare, the same setup as the InHouse Labs site.

## Where things live

| What | Where |
| --- | --- |
| Homepage copy | `src/data/home.ts` |
| Site name, email, nav links, booking link | `src/data/site.ts` |
| Colors, type sizes, spacing, corners, shadows | `src/styles/tokens.css` (mirrors the Figma variables) |
| Shared styles: buttons, chips, textures, type classes | `src/styles/global.css` |
| Homepage sections | `src/components/sections/` |
| Cube, logo, hero timeline, tier art, chat demo | `src/components/` |
| Social share image, favicon, robots.txt | `public/` |
| "Start a site" page copy and answer options | `src/data/start.ts` |
| Contact form handler (emails each submission) | `worker/index.ts` |

## Design sources

- **Design system:** the Plainweb Design System artifact (tokens, brand book, component specs).
- **Figma:** [Plainweb — Design Kit & Site](https://www.figma.com/design/QHK7rnibmjbRLBgzCCG1vP). Its variables, text styles and components use the same names as the CSS here, for example `color/brand/cobalt` is `var(--cobalt)`.

## Running it locally

Needs Node 24 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run check    # type-check the Astro files
```

## Deploying

Cloudflare builds every push to `main` (build command `npm run build`, output directory `dist`). Other branches get preview links. Settings are in `wrangler.jsonc`.

## Contact form

`/start` posts to `/api/contact`, a small Cloudflare Worker (`worker/index.ts`) that checks the answers and emails them through Cloudflare, with Reply-To set to the person who filled it in. Everything else on the site is static files.

After sending, the form is replaced by a Cal.com calendar for booking a 30-minute call, filled in with the person's name, email and a short summary of their answers. The booking link is `booking` in `src/data/site.ts`. The calendar script only loads after someone sends the form. If it can't load, the page links to the booking page instead, and the no-JavaScript thanks page (`/start/sent`) links there too.

Before the form goes live:

1. **Don't turn on Email Routing for plain-web.com itself.** Its mail is handled by Google Workspace, and Email Routing would replace Google's MX record. The form's sending address needs to move to a subdomain (for example `forms.plain-web.com`) that Cloudflare can send from. This is still to do.
2. **Workers & Pages → plain-web-site → Settings → Variables and secrets → Add**: a **Secret** named `CONTACT_TO` set to the address that should receive submissions (verified as a Cloudflare email destination). Add it under both **Production** and **Previews Base** if you want previews to send too.

The address lives only in Cloudflare, not in this public repo. To test locally: `npm run build`, then `npx wrangler dev --var CONTACT_TO:you@example.com`; emails are written to `.wrangler/tmp/email/` instead of being sent.

Spam: a hidden field and a minimum fill time catch most bots. If spam gets through, add Cloudflare Turnstile.

## Domain and email

- The site is served at https://plain-web.com (and www), set in `wrangler.jsonc` and `astro.config.mjs`.
- `hello@plain-web.com` is set in `src/data/site.ts`. It's an alias in the owner's Google Workspace inbox; plain-web.com's MX, SPF, DKIM and DMARC records point at Google.
- Update "It's 2026" in `src/data/home.ts` every January.
