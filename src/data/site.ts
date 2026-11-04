// Site-wide settings. Change these in one place.
export const site = {
  name: 'Plainweb',
  tagline: 'Custom websites in two weeks.',
  description:
    'Custom websites for small businesses, designed, built and launched in two weeks. No WordPress, no retainer, from $2,000. Then we show you how to keep it current with Claude.',
  // Forwarded to the owner's inbox by Cloudflare Email Routing.
  email: 'hello@plain-web.com',
};

// "Start a site" buttons open an email with this subject until there's a form.
export const startHref = `mailto:${site.email}?subject=${encodeURIComponent('Start a site')}`;

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
  { label: 'Contact', href: '/#start' },
];
