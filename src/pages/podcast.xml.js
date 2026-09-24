import { getCollection } from 'astro:content';

export const prerender = true;

const SITE = 'https://gorenegades.com';
const FEED = `${SITE}/podcast.xml`;
const SHOW_ART = 'https://marketingrenegadespodcast.com/wp-content/uploads/2025/07/black-yellow-white-animation-modern-podcast-cover-10-1-scaled.png';
const SHOW_GUID = '818552be-8ada-5171-8b06-dd622037e536';
const OWNER_EMAIL = 'darin@truepartnersuccess.com';

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
      ${d.episode ? `<itunes:episode>${d.episode}</itunes:episode>` : ''}
      ${d.season ? `<itunes:season>${d.season}</itunes:season>` : ''}
      ${d.duration ? `<itunes:duration>${escapeXml(d.duration)}</itunes:duration>` : ''}
      <itunes:author>Darin Rhodes</itunes:author>
      <itunes:explicit>${d.explicit ? 'true' : 'false'}</itunes:explicit>
      ${d.image ? `<itunes:image href="${escapeXml(d.image)}" />` : ''}
    </item>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:podcast="https://podcastindex.org/namespace/1.0">
  <channel>
    <title>No Fear Marketing Show</title>
    <link>${SITE}/podcast</link>
    <description>Marketing, technology, business building, and practical ideas for independent business owners.</description>
    <language>en-US</language>
    <atom:link href="${FEED}" rel="self" type="application/rss+xml" />
    <itunes:subtitle>Marketing Renegades</itunes:subtitle>
    <itunes:author>Darin Rhodes</itunes:author>
    <itunes:type>episodic</itunes:type>
    <itunes:owner>
      <itunes:name>Marketing Renegades Podcast</itunes:name>
      <itunes:email>${OWNER_EMAIL}</itunes:email>
    </itunes:owner>
    <itunes:explicit>false</itunes:explicit>
    <itunes:image href="${SHOW_ART}" />
    <itunes:category text="Business">
      <itunes:category text="Marketing" />
      <itunes:category text="Entrepreneurship" />
    </itunes:category>
    <podcast:guid>${SHOW_GUID}</podcast:guid>
    <podcast:locked owner="${OWNER_EMAIL}">yes</podcast:locked>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  });
}
