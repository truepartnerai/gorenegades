import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';

export const prerender = true;

const WIDTH = 1200;
const HEIGHT = 630;

const palette = {
  gold: { bg: '#F4C20D', fg: '#111111', accent: '#111111', muted: '#5B4B09' },
  blue: { bg: '#2E6BFF', fg: '#FFFFFF', accent: '#F4C20D', muted: '#D9E3FF' },
  cream: { bg: '#EFE9DB', fg: '#111111', accent: '#F4C20D', muted: '#6A6256' },
  mono: { bg: '#0A0A0A', fg: '#FFFFFF', accent: '#F4C20D', muted: '#AFAFAF' }
};

const escapeXml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

function wrapText(value: string, maxChars = 27, maxLines = 4) {
  const words = value.trim().split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxChars || !current) {
      current = candidate;
    } else {
      lines.push(current);
      current = word;
      if (lines.length === maxLines - 1) break;
    }
  }

  if (current && lines.length < maxLines) lines.push(current);

  const consumed = lines.join(' ').split(/\s+/).length;
  if (consumed < words.length && lines.length) {
    lines[lines.length - 1] = lines[lines.length - 1].replace(/[.,;:!?-]*$/, '') + '…';
  }

  return lines.slice(0, maxLines);
}

function textLines(lines: string[], startY: number, lineHeight: number, fontSize: number, fill: string) {
  return lines.map((line, index) =>
    `<text x="76" y="${startY + index * lineHeight}" fill="${fill}" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="800" letter-spacing="-1.8">${escapeXml(line)}</text>`
  ).join('');
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = (await getCollection('blog')).filter((post) => !post.data.draft);
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post }
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const post = props.post;
  const tone = post.data.visualTone ?? 'gold';
  const colors = palette[tone as keyof typeof palette] ?? palette.gold;
  const kicker = (post.data.visualKicker || post.data.series || post.data.category || 'Renegade Ideas').toUpperCase();
  const titleLines = wrapText(post.data.title, 28, 4);
  const titleFont = titleLines.length >= 4 ? 62 : titleLines.length === 3 ? 70 : 78;
  const titleLineHeight = Math.round(titleFont * 1.02);
  const titleStartY = titleLines.length >= 4 ? 242 : 270;

  const svg = `
  <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${WIDTH}" height="${HEIGHT}" fill="${colors.bg}"/>
    <rect x="0" y="0" width="18" height="${HEIGHT}" fill="${colors.accent}"/>
    <rect x="76" y="92" width="1048" height="2" fill="${colors.fg}" opacity=".24"/>
    <circle cx="1086" cy="108" r="190" fill="none" stroke="${colors.fg}" stroke-width="2" opacity=".08"/>
    <circle cx="1086" cy="108" r="130" fill="none" stroke="${colors.fg}" stroke-width="2" opacity=".08"/>
    <path d="M820 535 L1160 195" stroke="${colors.fg}" stroke-width="2" opacity=".08"/>
    <path d="M860 575 L1200 235" stroke="${colors.fg}" stroke-width="2" opacity=".08"/>

    <text x="76" y="63" fill="${colors.fg}" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="800" letter-spacing="2.2">MARKETING RENEGADES</text>
    <text x="76" y="145" fill="${colors.muted}" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" letter-spacing="2.6">${escapeXml(post.data.series?.toUpperCase() || 'RENEGADE MEDIA')}</text>
    <text x="76" y="190" fill="${colors.fg}" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="800" letter-spacing=".6">${escapeXml(kicker)}</text>

    ${textLines(titleLines, titleStartY, titleLineHeight, titleFont, colors.fg)}

    <rect x="76" y="548" width="1048" height="2" fill="${colors.fg}" opacity=".24"/>
    <text x="76" y="590" fill="${colors.fg}" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" letter-spacing="1.6">${escapeXml(post.data.category.toUpperCase())}</text>
    <text x="1124" y="590" fill="${colors.fg}" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="800" text-anchor="end" letter-spacing="1.4">MR / IDEAS</text>
  </svg>`;

  const png = await sharp(Buffer.from(svg))
    .png({ quality: 92, compressionLevel: 9 })
    .toBuffer();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Length': String(png.length)
    }
  });
};
