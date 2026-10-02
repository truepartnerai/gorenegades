// Site-wide settings. Swap values here and every page updates.

// Brand images. Leave as null to fall back to the text wordmark.
// logo: shown in the black header and hero. Use a version that reads on black.
// homeHero: optional header image on the right side of the home page hero.
export const brand = {
  logo: null,
  logoAlt: 'Marketing Renegades',
  homeHero: null,
  homeHeroAlt: '',
  // Homepage offer imagery: add approved URLs and descriptive alt text here.
  // Null URLs render no image or empty placeholder. Existing page banners stay separate.
  homeOffers: {
    crm: { src: 'https://assets.cdn.filesafe.space/752TznWg3s9PT7P486mf/media/6abe6a4c17f6f30939b0fb15.jpg', alt: 'Renegade CRM — Marketing Command Center' },
    academy: { src: 'https://assets.cdn.filesafe.space/752TznWg3s9PT7P486mf/media/6abe6a4c1670d0abe8148a5a.png', alt: 'Renegade Marketing Academy' },
    community: { src: null, alt: '' }
  },
  // Full-width banners shown at the top of each page.
  banners: {
    crm: 'https://assets.cdn.filesafe.space/752TznWg3s9PT7P486mf/media/6abe6a4c17f6f30939b0fb15.jpg',
    academy: 'https://assets.cdn.filesafe.space/752TznWg3s9PT7P486mf/media/6abe6a4c1670d0abe8148a5a.png',
    blog: 'https://assets.cdn.filesafe.space/752TznWg3s9PT7P486mf/media/6abe6a4c7bca8cd20c124446.png',
    podcast: 'https://assets.cdn.filesafe.space/752TznWg3s9PT7P486mf/media/6abe6a4c3df2ee8bbe2f370f.png'
  }
};

// Renegade Academy pricing.
export const academyPrice = {
  monthly: 199,
  annual: 1999,
  annualSavings: 199 * 12 - 1999,
  minMonths: 6 // minimum commitment on the monthly plan
};

// The current Renegade Academy semester.
// Classes meet weekly on the dates below. A `break` entry shows on the
// schedule but is not a class.
export const semester = {
  name: 'Fall Semester 2026',
  short: 'Fall Semester',
  starts: 'Wednesday, October 21',
  startsShort: 'Oct 21',
  graduation: 'December 16',
  time: '10:00 AM Mountain',
  seats: 30,
  schedule: [
    { week: 1, date: 'Wed, Oct 21', title: 'Orientation + the foundation', text: 'Meet your classmates, set your marketing rhythm and organize the system so you know exactly what deserves your attention.' },
    { week: 2, date: 'Wed, Oct 28', title: 'Content + visibility', text: 'Turn useful ideas into a repeatable content system instead of random posting.' },
    { week: 3, date: 'Wed, Nov 4', title: 'Email + your database', text: 'Build simple, consistent communication with the people who already know you.' },
    { week: 4, date: 'Wed, Nov 11', title: 'Lead generation', text: 'Launch a campaign that brings new people into your world, with the follow-up already waiting.' },
    { week: 5, date: 'Wed, Nov 18', title: 'Build lab', text: 'Bring whatever is stuck, confusing or unfinished, and we work on it together.' },
    { break: true, date: 'Wed, Nov 25', title: 'Thanksgiving break', text: 'No class. Eat pie. Catch up if you need to.' },
    { week: 6, date: 'Wed, Dec 2', title: 'Events + relationships', text: 'Use partner check-ins, client events and webinars to create more opportunity.' },
    { week: 7, date: 'Wed, Dec 9', title: 'Reviews + referrals', text: 'Build the ask into the customer journey so it happens every time.' },
    { week: 8, date: 'Wed, Dec 16', title: 'Make it repeatable + graduation', text: 'Tie it all together into a system you keep running after the semester ends, then graduate into the alumni.' }
  ]
};
