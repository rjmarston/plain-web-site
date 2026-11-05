// Site-wide settings. Change these in one place.
export const site = {
  name: 'Plainweb',
  tagline: 'Custom websites in two weeks.',
  description:
    'Custom websites for small businesses, designed, built and launched in two weeks. No WordPress, no retainer, from $2,000. Then we show you how to keep it current with Claude.',
  // An alias in the owner's Google Workspace inbox (labelled Plainweb).
  email: 'hello@plain-web.com',
  // Shown on the "Start a site" page for people who'd rather email than book a call.
  directEmail: 'robert@plain-web.com',
};

// The 30-minute call people book on the "Start a site" page (a Cal.com booking link).
export const booking = {
  link: 'rjmarston/plainweb-intro',
  url: 'https://cal.com/rjmarston/plainweb-intro',
};

// Every "Start a site" button goes to the booking page. Tier buttons add ?need=<tier>.
export const startHref = '/start';

export const nav = [
  { label: 'What we do', href: '/#what' },
  { label: 'Why', href: '/#why' },
  { label: 'Process', href: '/#process' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Integrations', href: '/#integrations' },
];

export const footerNav = [
  { label: 'What we do', href: '/#what' },
  { label: 'Process', href: '/#process' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/start' },
];
