import authors, { isAuthor } from './authors.js';
import tags, { isTagSlug } from './tags.js';
import { slugify } from '$lib/utils';

const posts = [
	{
		title: 'Why We Chose Zero',
		description:
			'How query-powered sync enables instant performance, minimal data usage, and offline-first reliability for community organizing—even on slow connections and low-powered devices.',
		image:
			'https://images.unsplash.com/photo-1656322014403-298004da9460?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		slug: 'why-we-chose-zero',
		date: '2025-11-13',
		author: 'Django Merope',
		tag: 'Technology'
	},
	{
		title: 'A test blog post',
		description:
			'In this post, I’ll show how easy it is to integrate markdown in SvelteKit with `mdsvex`.',
		image:
			'https://images.unsplash.com/photo-1761839257287-3030c9300ece?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
		slug: 'test-post',
		date: '2025-11-13',
		author: 'Dr. Fabuloso the Fabulous',
		tag: 'Organizing'
	}
] as const satisfies Post[];

export type Post = {
	title: string;
	slug: string;
	description: string;
	image: string;
	date: string;
	author: (typeof authors)[number]['name'];
	tag: (typeof tags)[number];
};

export function getPosts(count: number = 25) {
	const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return sortedPosts.slice(0, count);
}

export function getPostsByAuthor(author: string, count: number = 25): Post[] {
	if (!isAuthor(author)) {
		return [];
	}
	return posts
		.filter((post) => post.author === author)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, count);
}

export function getPostsByTag(tag: string, count: number = 25): Post[] {
	if (!isTagSlug(tag)) {
		return [];
	}
	return posts
		.filter((post) => slugify(post.tag) === tag)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, count);
}

export default posts;
