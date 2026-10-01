// Small helpers shared by the blog and podcast pages.
export const fmtDate = (d, long = false) =>
  d.toLocaleDateString('en-US', { month: long ? 'long' : 'short', day: 'numeric', year: 'numeric', timeZone: 'America/Denver' });

export const readTime = (body = '') =>
  `${Math.max(1, Math.round(body.trim().split(/\s+/).length / 230))} min read`;

// Old visualTone values map onto the plain palette.
export const tone = (t) => ({ gold: 'gold', blue: 'ink', mono: 'ink', cream: 'cream' }[t] || 'gold');
