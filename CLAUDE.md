# Working on the Plainweb site

This is the Plainweb marketing site (Astro, hosted on Cloudflare). Plainweb sells sites that owners update by asking Claude, so this repo should stay easy to change that way.

## Where to make changes

- Words on the homepage: `src/data/home.ts`. Change copy there, not in the components.
- Name, email, nav links and the Cal.com booking link: `src/data/site.ts`.
- The "Start a site" form (`/start`): labels, hints and error messages in `src/data/start.ts`; the field checks in `src/lib/validate.ts`. The page and the worker (`worker/index.ts`) both use these, so a change there applies in both places. Adding a field means adding it to the page, the worker's `readSubmission` and `emailText`, and `start.ts`.
- Layout and styling of a section: `src/components/sections/<Section>.astro` (styles are scoped to the file).
- Shared styles (buttons, chips, textures, type classes): `src/styles/global.css`.

## Design rules

- Use the tokens in `src/styles/tokens.css` (`var(--cobalt)`, `var(--space-6)`, `var(--radius-lg)`). Don't add new hex colors, font sizes or shadows. If something new is needed, add a token and tell the user so it can be added to Figma too.
- Cobalt is the only action color. Mint highlights one phrase per page. Peach is a small warm accent.
- Borders are 1.5px ink. Shadows are hard ink offsets, never blurred.
- One texture per section, and never two textured sections in a row.
- Buttons: `pw-btn` plus one of `pw-btn-primary`, `-secondary`, `-dark`, `-warm`, `-ghost-light`. At least 44px tall.
- Motion is for feedback and a few story moments, never decoration:
  - Hover and press states on buttons, links and tier cards, plus the sticky header (hides on scroll down, returns on scroll up).
  - The process chart: on desktop, hovering, focusing or clicking a row shows that step in the detail box beside it; on phones, rows open inline. Step details live in `src/data/home.ts` (`process.phases`).
  - Four moments that play once: the hero highlight, the ledger strike, the chat replay and the process bars. Mark new ones with `data-play`.
  - Use the motion tokens (100 / 150 / 200 / 300ms; ease out to enter, ease in to leave) and animate only `transform` and `opacity`.
  - Every animation needs a `prefers-reduced-motion: reduce` fallback, and content must show finished without JavaScript.
  - The hero timeline and the chat pacing are the only longer timings. Nothing loops.

## Voice

Plain words, short sentences, no hype. Sentence case except mono labels. Prices are always "From" ($2,000 / $3,500 / $7,500). Buttons start with a verb ("Start a site"). No exclamation marks or emoji.

## Before you finish

Run `npm run build`. Check the page at phone width (390px) and desktop width (1440px), with nothing scrolling sideways.
