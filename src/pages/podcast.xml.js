import { getCollection } from 'astro:content';

export const prerender = true;

const SITE = 'https://gorenegades.com';
const FEED = `${SITE}/podcast.xml`;
const escapeXml = (value='') => String(value)
  .replaceAll('&','&amp;')
  .replaceAll('<','&lt;')
  .replaceAll('>','&gt;')
  .replaceAll('"','&quot;')
  .replaceAll("'","&apos;");

export async function GET() {
  const episodes = (await getCollection('podcast'))
    .filter((episode) => !episode.data.draft)
    .sort((a,b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const items = episodes.map((episode) => {
    const d = episode.data;
    const url = `${SITE}/podcast/${episode.id}/`;
    return `
    <item>
      <title>${escapeXml(d.title)}</title>
      <description>${escapeXml(d.description)}</description>
      <link>${url}</link>
      <guid isPermaLink="false">${escapeXml(d.guid)}</guid>
      <pubDate>${d.pubDate.toUTCString()}</pubDate>
      <enclosure url="${escapeXml(d.audioUrl)}" length="${d.audioBytes}" type="${escapeXml(d.audioType)}" />
      <itunes:episode>${d.episode}</itunes:episode>
      ${d.season ? `<itunes:season>${d.season}</itunes:season>` : ''}
      ${d.duration ? `<itunes:duration>${escapeXml(d.duration)}</itunes:duration>` : ''}
      <itunes:explicit>${d.explicit ? 'true' : 'false'}</itunes:explicit>
      ${d.image ? `<itunes:image href="${escapeXml(d.image)}" />` : ''}
    </item>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>No Fear Marketing Show</title>
    <link>${SITE}/podcast</link>
    <description>Marketing, technology, business building, and practical ideas for independent business owners.</description>
    <language>en-us</language>
    <atom:link href="${FEED}" rel="self" type="application/rss+xml" />
    <itunes:author>Marketing Renegades</itunes:author>
    <itunes:explicit>false</itunes:explicit>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  });
}
