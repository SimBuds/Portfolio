import { defineCollection, z } from 'astro:content';

const now = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    cmd: z.string(),
    title: z.string(),
    note: z.string(),
    tags: z.array(z.string()),
    status: z.string(),
    day: z.string(),
  }),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    client: z.string(),
    title: z.string(),
    stack: z.array(z.string()),
    annotation: z.string(),
    snippet: z.string(),
    role: z.string(),
  }),
});

export const collections = { now, work };
