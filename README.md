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

## Before launch

- Set the real domain in `astro.config.mjs`, `public/robots.txt` and `wrangler.jsonc` (routes).
- Set the real email address in `src/data/site.ts`. "Start a site" opens an email until there's a form.
- Update "It's 2026" in `src/data/home.ts` every January.
