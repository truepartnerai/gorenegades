import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    socialImage: z.string().optional(),
    imageAlt: z.string().optional(),
    visualKicker: z.string().optional(),
    visualTone: z.enum(['gold','blue','cream','mono']).default('gold'),
    socialTitle: z.string().optional(),
    socialSummary: z.string().optional(),
    category: z.string().default('Marketing'),
    series: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Darin Rhodes'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

const podcast = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/podcast' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    episode: z.number().int().positive().optional(),
    season: z.number().int().positive().optional(),
    duration: z.string().optional(),
    image: z.string().optional(),
    socialTitle: z.string().optional(),
    socialSummary: z.string().optional(),
    audioUrl: z.string().url(),
    audioBytes: z.number().int().positive(),
    audioType: z.string().default('audio/mpeg'),
    guid: z.string(),
    youtubeUrl: z.string().url().optional(),
    guests: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    explicit: z.boolean().default(false),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog, podcast };
