import { slugify } from '$lib/utils';

const tags = [
	'Technology',
	'Organizing',
	'Community',
	'WhatsApp',
	'Email',
	'Events',
	'Belcoda'
] as const satisfies string[];

export type Tag = (typeof tags)[number];

export function isTag(tag: string): tag is Tag {
	return tags.some((t) => t === tag);
}
export function isTagSlug(slug: string): boolean {
	return tags.some((t) => slugify(t) === slug.trim().toLowerCase());
}

export function getTagBySlug(slug: string): Tag | undefined {
	return tags.find((t) => slugify(t) === slug.trim().toLowerCase());
}

export default tags;
