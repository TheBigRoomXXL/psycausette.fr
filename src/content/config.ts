import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		banner: z.string().optional(),
		isDraft: z.boolean().optional()
	}),
});

export const collections = { blog };
