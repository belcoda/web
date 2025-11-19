import { getPosts } from '$lib/comps/blog/posts.js';
import authors from '$lib/comps/blog/authors.js';

export async function load() {
	const posts = getPosts(3);
	const postList = posts
		.map((post) => {
			const author = authors.find((author) => author.name === post.author);
			if (!author) {
				return null;
			}
			return { post, author };
		})
		.filter((post) => post !== null);
	return { posts: postList };
}
