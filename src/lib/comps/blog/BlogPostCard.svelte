<script lang="ts">
	import { slugify } from '$lib/utils';
	import type { Post } from '$lib/comps/blog/posts.js';
	import type { Author } from '$lib/comps/blog/authors.js';
	type Props = {
		post: Post;
		author: Author;
	};
	const { post, author }: Props = $props();
</script>

<article class="flex flex-col items-start justify-between">
	<div class="flex max-w-xl grow flex-col justify-between">
		<a class="relative block w-full" href={`/blog/${post.slug}`}>
			<img
				src={post.image}
				alt={post.title}
				class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
			/>
			<div class="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10"></div>
		</a>
		<div class="flex max-w-xl grow flex-col justify-between">
			<div class="mt-8 flex items-center gap-x-4 text-xs">
				<time datetime={post.date} class="text-gray-500">
					{new Date(post.date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</time>
				<a
					href={`/blog/tag/${slugify(post.tag)}`}
					class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
					>{post.tag}</a
				>
			</div>
			<div class="group relative grow">
				<h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
					<a href={`/blog/${post.slug}`}>
						<span class="absolute inset-0"></span>
						{post.title}
					</a>
				</h3>
				<p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
					{post.description}
				</p>
			</div>
			<div class="relative mt-8 flex items-center gap-x-4 justify-self-end">
				<img src={author.avatar} alt={author.name} class="size-10 rounded-full bg-gray-100" />
				<div class="text-sm/6">
					<p class="font-semibold text-gray-900">
						<a href={`/blog/author/${author.slug}`}>
							<span class="absolute inset-0"></span>
							{author.name}
						</a>
					</p>
					<p class="text-gray-600">{author.title}</p>
				</div>
			</div>
		</div>
	</div>
</article>
