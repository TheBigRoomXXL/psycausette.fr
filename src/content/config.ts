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

const resources = defineCollection({
	schema: z.object({
		link: z.string(),
		title: z.string(),
		pubDate: z.date(),
		isPinned: z.boolean().optional(),
		isDraft: z.boolean().optional(),
	}),
});

export const collections = { blog, resources };
