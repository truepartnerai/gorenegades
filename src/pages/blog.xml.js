import { getCollection } from 'astro:content';

export const prerender = true;

const SITE = 'https://gorenegades.com';
const FEED = `${SITE}/blog.xml`;

const escapeXml = (value='') => String(value)
  .replaceAll('&','&amp;')
  .replaceAll('<','&lt;')
  .replaceAll('>','&gt;')
  .replaceAll('"','&quot;')
  .replaceAll("'","&apos;");

export async function GET() {
  const posts = (await getCollection('blog'))
    .filter((post) => !post.data.draft)
    .sort((a,b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const items = posts.map((post) => {
    const d = post.data;
    const url = `${SITE}/blog/${post.id}/`;
    const image = d.socialImage
      ? (d.socialImage.startsWith('http') ? d.socialImage : `${SITE}${d.socialImage.startsWith('/') ? '' : '/'}${d.socialImage}`)
      : `${SITE}/og/${post.id}.png`;
    return `
    <item>
      <title>${escapeXml(d.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${d.pubDate.toUTCString()}</pubDate>
      <description>${escapeXml(d.description)}</description>
      <dc:creator>${escapeXml(d.author)}</dc:creator>
      <category>${escapeXml(d.category)}</category>
      <media:content url="${escapeXml(image)}" medium="image" width="1200" height="630" />
      <media:thumbnail url="${escapeXml(image)}" width="1200" height="630" />
    </item>`;
  }).join('');

  const lastBuild = posts[0]?.data.pubDate ?? new Date();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Renegade Articles | Marketing Renegades</title>
    <link>${SITE}/blog</link>
    <description>Practical marketing systems, experiments, technology, and ideas for independent business owners.</description>
    <language>en-US</language>
    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
    <atom:link href="${FEED}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
