// Copy and answer options for the "Start a site" page (/start).
// The site's worker (worker/index.ts) uses the same options to check submissions,
// so a choice added here works in both places.

export const start = {
  eyebrow: 'Start a site',
  title: 'Tell us about your site.',
  intro: 'A few questions, about two minutes. We’ll reply with a plan, a price and a launch date.',
  next: [
    { n: '01', title: 'We read your answers', body: 'and look at your current site, if you have one.' },
    { n: '02', title: 'We reply by email', body: 'with a plan, a price and a launch date.' },
    { n: '03', title: 'We book your kickoff', body: 'and day 1 of your two weeks starts.' },
  ],
  emailInstead: 'Rather email?',

  sections: {
    you: { n: '01', title: 'About you' },
    site: { n: '02', title: 'Your website today' },
    need: { n: '03', title: 'What you need' },
    scope: { n: '04', title: 'Size, features and timing', note: 'Optional, but it helps us confirm your launch date.' },
    notes: { n: '05', title: 'Anything else' },
  },

  hasSite: [
    { value: 'yes', label: 'Yes, I have a website' },
    { value: 'no', label: 'No, not yet' },
  ],
  needs: [
    { value: 'build', label: 'Design and development', detail: 'Build · from $2,000', note: 'You have your brand and your words.' },
    { value: 'content', label: 'Design, development and content', detail: 'Build + Content · from $3,500', note: 'We write the pages with you.' },
    { value: 'brand', label: 'All of that, plus a visual brand', detail: 'Build + Brand · from $7,500', note: 'A new look, or a refresh of yours.' },
    { value: 'unsure', label: 'Not sure yet', detail: 'We’ll help you pick', note: 'Tell us a bit below.' },
  ],
  brandTypes: [
    { value: 'new', label: 'A new brand' },
    { value: 'tweaks', label: 'Tweaks to my current brand' },
  ],
  sizes: [
    { value: '1-3', label: '1–3 pages' },
    { value: '4-8', label: '4–8 pages' },
    { value: '9-15', label: '9–15 pages' },
    { value: '16+', label: 'More than 15' },
    { value: 'unsure', label: 'Not sure' },
  ],
  features: [
    { value: 'forms', label: 'Contact or quote forms' },
    { value: 'booking', label: 'Online booking' },
    { value: 'payments', label: 'Payments or a small shop' },
    { value: 'newsletter', label: 'Email newsletter' },
    { value: 'crm', label: 'CRM connection' },
    { value: 'blog', label: 'Blog or news' },
    { value: 'other', label: 'Something else' },
  ],
  launch: [
    { value: 'asap', label: 'As soon as possible' },
    { value: 'month', label: 'Within a month' },
    { value: 'quarter', label: 'In 1–3 months' },
    { value: 'exploring', label: 'Just exploring' },
  ],

  submit: 'Send my answers',
  sending: 'Sending…',
  privacy: 'We only use this to reply to you.',

  errors: {
    name: 'Add your name so we know who to reply to.',
    email: 'Enter an email like name@business.com.',
    business: 'Add your business name.',
    hasSite: 'Choose yes or no.',
    siteUrl: 'Add your website’s address, like yourbusiness.com.',
    need: 'Pick what you need, or choose “Not sure yet”.',
    brandType: 'Choose a new brand or tweaks to your current one.',
    summary: 'A few answers need a look. They’re highlighted above.',
    failed: 'We couldn’t send your answers. They’re still here, so try again, or email us at',
  },

  success: {
    title: 'Thanks, we got your answers.',
    body: 'We’ll email you back with a plan, a price and a launch date.',
    back: 'Back to the homepage',
  },
} as const;

export type Need = (typeof start.needs)[number]['value'];
