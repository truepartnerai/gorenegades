// Site-wide settings. Swap values here and every page updates.

// Brand images. Leave as null to fall back to the text wordmark.
// logo: shown in the black header and hero. Use a version that reads on black.
// homeHero: optional header image on the right side of the home page hero.
export const brand = {
  logo: null,
  logoAlt: 'Marketing Renegades',
  homeHero: null,
  homeHeroAlt: ''
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
