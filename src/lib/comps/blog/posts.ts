import authors, { isAuthor } from './authors.js';
import tags, { isTagSlug } from './tags.js';
import { slugify } from '$lib/utils';

const posts = [
	{
		title: 'Why We Chose Zero',
		description:
			'How query-powered sync enables instant performance, minimal data usage, and offline-first reliability for community organizing—even on slow connections and low-powered devices.',
		image: '/images/blog/zero.webp',
		slug: 'why-we-chose-zero',
		date: '2025-11-13',
		author: 'Django Merope',
		tag: 'Technology'
	},
	{
		title: 'What is Power Tools?',
		description: 'Why does Belcoda need a blog? What will we write about? And why should you care?',
		image: '/images/blog/what-is-power-tools.webp',
		slug: 'what-is-power-tools',
		date: '2025-11-13',
		author: 'Django Merope',
		tag: 'Belcoda'
	},
	{
		title: 'Building the Wrong Thing',
		description: 'How we built Belcoda, and why we built it the way we did.',
		image: '/images/blog/what-is-power-tools.webp',
		slug: 'building-the-wrong-thing',
		date: '2025-11-13',
		author: 'Django Merope',
		tag: 'Belcoda'
	},
	{
		title: "One integration isn't enough",
		description: 'Why you need to integrate with WhatsApp, Facebook, and Instagram.',
		image: '/images/blog/what-is-power-tools.webp',
		slug: 'whatsapp-one-integration-is-not-enough',
		date: '2025-11-13',
		author: 'Django Merope',
		tag: 'WhatsApp'
	},
	{
		title: 'WhatsApp, why and how',
		description: 'How to use WhatsApp for community organizing.',
		image: '/images/blog/what-is-power-tools.webp',
		slug: 'whatsapp-why-and-how',
		date: '2025-11-13',
		author: 'Django Merope',
		tag: 'WhatsApp'
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
