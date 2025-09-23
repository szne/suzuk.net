import { defineCollection, z } from 'astro:content';

const journal = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),             // 表示タイトル
        date: z.string(),              // YYYY-MM-DD
        type: z.string().optional(),   // work, research, leadership, education...
        tags: z.array(z.string()).optional(),
        note: z.string().optional(),   // 補足
        link: z.string().url().optional(),
        git: z.string().url().optional(),
    }),
});

export const collections = { journal };
