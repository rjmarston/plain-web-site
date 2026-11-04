// Copy for the "Start a site" page (/start).
// The site's worker (worker/index.ts) checks submissions with the same error messages,
// and src/lib/validate.ts holds the checks both of them use.

export const start = {
  eyebrow: 'Start a site',
  title: 'Tell us about your site.',
  intro: 'Just the basics, about a minute. Then pick a time for a 30-minute call about your site.',
  next: [
    { n: '01', title: 'Send the basics', body: 'about you and your business.' },
    { n: '02', title: 'Pick a time to talk', body: 'for a 30-minute call, right after you send them.' },
    { n: '03', title: 'We send a plan', body: 'with a price and a launch date.' },
  ],
  emailInstead: 'Rather email?',

  sections: {
    you: { n: '01', title: 'About you' },
    business: { n: '02', title: 'Your business' },
  },

  fields: {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phone: 'Phone',
    business: 'Business name',
    website: 'Website',
    websiteHint: 'Leave it blank if you don’t have one yet.',
    notes: 'Notes',
    notesHint: 'What you need, pages you have in mind, sites you like, or when you want to launch.',
    optional: 'Optional',
  },

  // Tier cards on the homepage link here with ?need=<tier>. It isn't asked on the form;
  // it's sent along so we know which package they looked at.
  needs: [
    { value: 'build', label: 'Build', detail: 'from $2,000' },
    { value: 'content', label: 'Build + Content', detail: 'from $3,500' },
    { value: 'brand', label: 'Build + Brand', detail: 'from $7,500' },
  ],

  submit: 'Send and pick a time',
  sending: 'Sending…',
  privacy: 'We only use this to reply to you.',

  errors: {
    firstName: 'Add your first name.',
    lastName: 'Add your last name.',
    email: 'Enter an email like name@business.com.',
    phone: 'Enter a phone number like (555) 555-0100, or leave it blank.',
    business: 'Add your business name.',
    website: 'Enter a web address like yourbusiness.com, or leave it blank.',
    summary: 'A few answers need a look. They’re highlighted above.',
    failed: 'We couldn’t send your answers. They’re still here, so try again, or email us at',
  },

  // After sending: book the 30-minute call (the Cal.com link is in src/data/site.ts).
  success: {
    title: 'Thanks, we got your details.',
    body: 'Last step: pick a time for a 30-minute call. We’ll talk through your business and the site you need.',
    pick: 'Pick a time',
    loading: 'Loading open times…',
    slow: 'Calendar not loading?',
    open: 'Open the booking page',
    failed: 'The calendar didn’t load here. You can still pick a time on the booking page.',
    bookedTitle: 'You’re booked.',
    bookedBody: 'Check your email for the invite and the video call link.',
    back: 'Back to the homepage',
  },
  // Sent along to the booking as notes, so the call has context.
  bookingNotes: { business: 'Business', website: 'Website', phone: 'Phone', need: 'Package' },
} as const;

export type Need = (typeof start.needs)[number]['value'];
