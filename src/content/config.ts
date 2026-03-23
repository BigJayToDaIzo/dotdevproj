import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const adad8 = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    teaser: z.string(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, adad8 };
