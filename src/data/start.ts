// Copy for the "Start a site" page (/start): a Cal.com booking calendar for a 30-minute call.
// The booking link is in src/data/site.ts. The questions people answer when they book
// (business name, phone, website, notes) are set on the event in Cal.com, not here.

export const start = {
  eyebrow: 'Start a site',
  title: 'Pick a time to talk.',
  intro: 'A 30-minute call about your business and the site you need. Pick a time, add a few details, and you’re set.',
  next: [
    { n: '01', title: 'Pick a time', body: 'and tell us a little about your business.' },
    { n: '02', title: 'We talk for 30 minutes', body: 'about your goals, pages and must-haves.' },
    { n: '03', title: 'We send a plan', body: 'with a price and a launch date.' },
  ],
  emailInstead: 'Rather email?',

  // Tier cards on the homepage link here with ?need=<tier>. It's added to the booking notes
  // so we know which package they looked at.
  needs: [
    { value: 'build', label: 'Build', detail: 'from $2,000' },
    { value: 'content', label: 'Build + Content', detail: 'from $3,500' },
    { value: 'brand', label: 'Build + Brand', detail: 'from $7,500' },
  ],
  packageNote: 'Package I’m looking at',

  calendar: {
    label: 'Booking calendar',
    loading: 'Loading open times…',
    slow: 'Calendar not loading?',
    open: 'Open the booking page',
    failed: 'The calendar didn’t load here. You can still pick a time on the booking page.',
    booked: 'You’re booked. Check your email for the invite and the video call link.',
  },
} as const;

export type Need = (typeof start.needs)[number]['value'];
