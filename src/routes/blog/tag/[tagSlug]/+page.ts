import { getPostsByTag } from '$lib/comps/blog/posts';
import authors from '$lib/comps/blog/authors';
import { getTagBySlug } from '$lib/comps/blog/tags';
export async function load({ params }) {
	const { tagSlug } = params;
	const posts = getPostsByTag(tagSlug);
	const tag = getTagBySlug(tagSlug);
	const postList = posts
		.map((post) => {
			const author = authors.find((author) => author.name === post.author);
			if (!author) {
				return null;
			}
			return { post, author };
		})
		.filter((post) => post !== null);
	return { posts: postList, tag };
}
