import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		banner: z.string().optional().default("/banner-placeholder.png"),
		isDraft: z.boolean().optional().default(true),
	}),
});

const resources = defineCollection({
	schema: z.object({
		link: z.string(),
		title: z.string(),
		pubDate: z.date(),
		isPinned: z.boolean().optional().default(false),
		isDraft: z.boolean().optional().default(true),
	}),
});

export const collections = { blog, resources };
