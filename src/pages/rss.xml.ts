import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from "../site.config";

export async function GET(context: APIContext) {
	const posts = await getCollection('blog');
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site!,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
