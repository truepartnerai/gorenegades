import { getCollection } from 'astro:content';

export const prerender = true;

const SITE = 'https://gorenegades.com';
const SHOW_ART = 'https://marketingrenegadespodcast.com/wp-content/uploads/2025/07/black-yellow-white-animation-modern-podcast-cover-10-1-scaled.png';

const absoluteUrl = (value) => {
  if (!value) return null;
  if (value.startsWith('http://') || value.startsWith('https://')) return value;
  return `${SITE}${value.startsWith('/') ? '' : '/'}${value}`;
};

export async function GET() {
  const blog = (await getCollection('blog'))
    .filter((post) => !post.data.draft)
    .map((post) => {
      const d = post.data;
      const url = `${SITE}/blog/${post.id}/`;
      const imageUrl = d.socialImage
        ? absoluteUrl(d.socialImage)
        : `${SITE}/og/${post.id}.png`;
      const title = d.socialTitle || d.title;
      const summary = d.socialSummary || d.description;

      return {
        key: `article:${post.id}`,
        type: 'article',
        id: post.id,
        publishedAt: d.pubDate.toISOString(),
        title: d.title,
        description: d.description,
        series: d.series || null,
        category: d.category,
        tags: d.tags,
        author: d.author,
        distributionEnabled: d.syndicate !== false,
        url,
        imageUrl,
        community: {
          enabled: d.syndicate !== false,
          title,
          body: summary,
          linkUrl: url,
          imageUrl
        },
        email: {
          enabled: d.syndicate !== false,
          subjectSeed: title,
          summary,
          sourceUrl: url,
          imageUrl
        },
        rss: {
          feedUrl: `${SITE}/blog.xml`,
          itemGuid: url
        }
      };
    });

  const podcast = (await getCollection('podcast'))
    .filter((episode) => !episode.data.draft)
    .map((episode) => {
      const d = episode.data;
      const url = `${SITE}/podcast/${episode.id}/`;
      const imageUrl = absoluteUrl(d.image) || SHOW_ART;
      const title = d.socialTitle || d.title;
      const summary = d.socialSummary || d.description;

      return {
        key: `podcast:${episode.id}`,
        type: 'podcast',
        id: episode.id,
        publishedAt: d.pubDate.toISOString(),
        title: d.title,
        description: d.description,
        episode: d.episode || null,
        season: d.season || null,
        tags: d.tags,
        url,
        imageUrl,
        audioUrl: d.audioUrl,
        community: {
          title,
          body: summary,
          linkUrl: url,
          imageUrl
        },
        email: {
          subjectSeed: title,
          summary,
          sourceUrl: url,
          imageUrl
        },
        rss: {
          feedUrl: `${SITE}/podcast.xml`,
          itemGuid: d.guid
        }
      };
    });

  const items = [...blog, ...podcast]
    .sort((a, b) => new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf())
    .slice(0, 100);

  const payload = {
    version: 1,
    purpose: 'Machine-readable publishing queue for Marketing Renegades distribution automations.',
    canonicalSite: SITE,
    feeds: {
      articles: `${SITE}/blog.xml`,
      podcast: `${SITE}/podcast.xml`
    },
    latest: items[0] || null,
    items
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
