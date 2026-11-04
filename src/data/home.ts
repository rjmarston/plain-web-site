// All homepage copy lives here, in page order.

export const hero = {
  chip: 'Custom websites for small businesses',
  title: 'Your new website, in',
  highlight: 'two weeks.',
  lede: 'Custom design and development, fast pages, and a simple way to keep it updated with AI. No WordPress. No retainer. From $2,000.',
  cta: 'Start a site',
  proof: [
    { value: '14 days', label: 'kickoff to launch' },
    { value: 'From $2,000', label: 'custom, never a template' },
    { value: 'Yours', label: 'code, hosting and updates you control' },
  ],
};

export const what = {
  eyebrow: '01 · What we do',
  title: 'Custom websites, built fast and built to last.',
  intro:
    'We design your site, build and test it fast, and launch it in two weeks. Then we show you how easy it is to keep it current yourself.',
  cards: [
    { title: 'Custom design', body: 'Designed around your business and your customers, not squeezed into a template.', cube: 'brand' },
    { title: 'Rapid development & testing', body: 'We build quickly and test on every screen size as we go, so you see real progress every few days.', cube: 'build' },
    { title: 'Launch support & training', body: 'We launch your site, then show you how easy it is to manage and update it yourself using Claude.', cube: 'launch' },
  ],
} as const;

export const why = {
  eyebrow: '02 · Why we do it',
  // Update the year every January.
  title: 'It’s 2026. Websites are easy.',
  intro:
    'A website shouldn’t take months, a monthly retainer or a weekend fighting a template. Here’s what changed, and why we work the way we do.',
  ledger: [
    { n: '01', statement: 'The traditional process is outdated.', then: 'Months of meetings, decks and revision rounds', now: 'Two weeks, start to finish' },
    { n: '02', statement: 'Site builders cost more time than they save.', then: 'Weekends fighting a Wix or Squarespace template', now: 'A custom site, with no workarounds' },
    { n: '03', statement: 'AI makes updates reliable.', then: 'Logging in, hunting for settings, hoping nothing breaks', now: 'Ask Claude in plain English, review, publish' },
    { n: '04', statement: 'Your website should just work.', then: 'Plugin updates, security patches and backups', now: 'Nothing to patch. It just works.' },
  ],
  panel: {
    eyebrow: 'Simplify your stack',
    title: 'From five moving parts to one conversation.',
    intro: 'Here’s what it takes to change your Saturday hours. Today, it’s a quick chat with Claude.',
    oldWay: [
      'Find your WordPress login, or reset it',
      'Dig through the dashboard for the right page',
      'Edit it in the page builder',
      'Fix what the theme broke on mobile',
      'Update the plugins it keeps nagging about',
      'Or skip all that: email your agency and wait',
    ],
    oldWayFoot: '…and hope nothing else broke.',
  },
};

export const process = {
  eyebrow: '03 · Our process',
  title: 'Two weeks, start to finish.',
  intro: 'A fixed schedule, so you always know what happens next and exactly when your site goes live.',
  // start and end are days 1–14; tone picks the bar color.
  phases: [
    { days: 'Day 1', name: 'Kickoff', note: 'One call to set goals, pages and must-haves.', start: 1, end: 1, tone: 'peach' },
    { days: 'Days 2–4', name: 'Plan', note: 'Sitemap, content plan and a design direction you approve.', start: 2, end: 4, tone: 'mint' },
    { days: 'Days 5–10', name: 'Design + build', note: 'We design in the browser and build as we go, so you see real progress every few days.', start: 5, end: 10, tone: 'cobalt' },
    { days: 'Days 11–12', name: 'Review + polish', note: 'Your feedback, our fixes, then speed and accessibility checks.', start: 11, end: 12, tone: 'peach' },
    { days: 'Days 13–14', name: 'Launch + handoff', note: 'We go live and set you up to update your site with AI.', start: 13, end: 14, tone: 'ink' },
  ],
} as const;

export const pricing = {
  eyebrow: '04 · Tiers of service',
  title: 'Pick your build.',
  intro: 'Every package is custom, and every one is ready in 14 days. Each tier stacks on the one before it.',
  // Prices are always shown as "From".
  tiers: [
    {
      tier: 1,
      name: 'Build',
      price: '$2,000',
      bestFor: 'Businesses with a brand and words they already love, who need a better site.',
      includes: ['Custom design and responsive build', 'Hosting set up on Cloudflare', 'Your code in a GitHub repo you own', 'AI update setup and a walkthrough'],
      cta: 'Start with Build',
    },
    {
      tier: 2,
      name: 'Build + Content',
      price: '$3,500',
      bestFor: 'Owners who know their business inside out but don’t have time to write about it.',
      includes: ['Everything in Build', 'Page copy written with you, in your voice', 'SEO basics: titles, descriptions and structure'],
      cta: 'Start with Build + Content',
    },
    {
      tier: 3,
      name: 'Build + Brand',
      price: '$7,500',
      bestFor: 'New businesses, or ones ready for a fresh start, top to bottom.',
      includes: ['Everything in Build + Content', 'Visual brand: logo, colors and type', 'A styleguide your team (and your AI) can follow'],
      cta: 'Start with Build + Brand',
    },
  ],
} as const;

export const integrations = {
  eyebrow: '05 · Integrations',
  title: 'Plain doesn’t mean limited.',
  intro: 'Your site still connects to the tools you run your business on: your CRM, forms, booking, payments and more.',
  note: 'Need something else? If it offers an embed or an API, we can usually connect it.',
  tools: [
    { category: 'CRM', names: 'HubSpot · Salesforce · Pipedrive' },
    { category: 'Forms', names: 'Tally · Typeform · Jotform' },
    { category: 'Booking', names: 'Calendly · Acuity · Square' },
    { category: 'Payments', names: 'Stripe · Square · PayPal' },
    { category: 'Email marketing', names: 'Mailchimp · Klaviyo · Constant Contact' },
    { category: 'Analytics', names: 'Plausible · Google Analytics · Fathom' },
  ],
};

export const start = {
  eyebrow: 'Ready when you are',
  title: 'Your new website, two weeks from now.',
  intro: 'Tell us about your business. We’ll reply with a plan, a price and a launch date.',
  cta: 'Start a site',
  note: 'kickoff → day 14',
};
