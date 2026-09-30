// A post is live when it is not a draft and its pubDate has arrived.
// Future-dated posts are committed ahead of time and appear on the first
// build after their pubDate (see .github/workflows/daily-publish.yml).
// Takes one argument on purpose: it is passed straight to Array.filter.
export const isLive = (entry) =>
  !entry.data.draft && entry.data.pubDate.valueOf() <= Date.now();
