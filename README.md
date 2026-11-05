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
| "Start a site" page copy | `src/data/start.ts` |

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

## Start a site page

`/start` is a Cal.com booking calendar for a 30-minute call (the link is `booking` in `src/data/site.ts`). Every "Start a site" button goes there; tier buttons add `?need=<tier>`, which is added to the booking notes. The questions people answer when they book (business name, phone, website, notes) are set on the event in Cal.com, and Cal.com emails each booking to the owner. Without JavaScript, or if the calendar can't load, the page links to the booking page instead.

The site has no forms or server code of its own: everything is static files.

## Domain and email

- The site is served at https://plain-web.com (and www), set in `wrangler.jsonc` and `astro.config.mjs`.
- `hello@plain-web.com` is set in `src/data/site.ts`. It's an alias in the owner's Google Workspace inbox; plain-web.com's MX, SPF, DKIM and DMARC records point at Google.
- Update "It's 2026" in `src/data/home.ts` every January.
