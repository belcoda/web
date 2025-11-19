import authors, { getAuthorBySlug } from '$lib/comps/blog/authors';
import { getPostsByAuthor } from '$lib/comps/blog/posts';
import { error } from '@sveltejs/kit';
export async function load({ params }) {
	const { authorSlug } = params;
	const author = getAuthorBySlug(authorSlug);
	if (!author) {
		return error(404, 'Author not found');
	}
	const posts = getPostsByAuthor(author.name);
	const postList = posts
		.map((post) => {
			const author = authors.find((author) => author.name === post.author);
			if (!author) {
				return null;
			}
			return { post, author };
		})
		.filter((post) => post !== null);
	return { posts: postList, author: author };
}
