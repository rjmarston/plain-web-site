# Plainweb website

Marketing site for Plainweb: custom small-business websites in two weeks. Built with [Astro](https://astro.build) and hosted on Cloudflare, the same setup as the InHouse Labs site.

## Where things live

| What | Where |
| --- | --- |
| Homepage copy | `src/data/home.ts` |
| Site name, email, nav links | `src/data/site.ts` |
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

`/start` posts to `/api/contact`, a small Cloudflare Worker (`worker/index.ts`) that checks the answers and emails them through Cloudflare Email Routing, with Reply-To set to the person who filled it in. Everything else on the site is static files.

One-time setup in Cloudflare:

1. **Email → Email Routing** for plain-web.com: turn it on and add your inbox as a **destination address** (Cloudflare sends a link to verify it).
2. **Workers & Pages → plain-web-site → Settings → Variables and secrets → Add**: a **Secret** named `CONTACT_TO` set to that verified address. Add it under both **Production** and **Previews Base** if you want previews to send too.

The address lives only in Cloudflare, not in this public repo. To test locally: `npm run build`, then `npx wrangler dev --var CONTACT_TO:you@example.com`; emails are written to `.wrangler/tmp/email/` instead of being sent.

Spam: a hidden field and a minimum fill time catch most bots. If spam gets through, add Cloudflare Turnstile.

## Domain and email

- The site is served at https://plain-web.com (and www), set in `wrangler.jsonc` and `astro.config.mjs`.
- `hello@plain-web.com` is set in `src/data/site.ts`; Cloudflare Email Routing forwards it to the owner's inbox.
- Update "It's 2026" in `src/data/home.ts` every January.
