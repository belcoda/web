<script lang="ts">
	import Header from '$lib/comps/nav/Header.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
	import { type Snippet } from 'svelte';
	type Props = {
		title: string;
		author: string;
		date: string;
		slug: string;
		description: string;
		author_avatar: string;
		author_title?: string;
		tag: string;
		image?: string;
		darken_image?: boolean;
		children: Snippet;
	};
	const {
		title,
		author,
		date,
		description,
		author_avatar,
		slug,
		author_title,
		tag,
		image,
		children,
		darken_image = false
	}: Props = $props();

	const backgroundImage = image || '/background-auth.jpg';
	import BlogBreadcrumbs from '$lib/comps/blog/BlogBreadcrumbs.svelte';
	import { slugify } from '$lib/utils';
</script>

<div
	class="relative flex h-120 w-full items-end justify-start bg-linear-to-b from-blue-200 to-white bg-cover bg-center bg-no-repeat"
	style="background-image: url('{backgroundImage}')"
>
	<Header />

	<div class="z-10 mx-auto w-full max-w-[65ch] px-4">
		<!-- Tag -->
		<div class="lg:mb-4">
			<span
				class="relative z-10 rounded-full bg-white/20 px-3 py-1.5 text-sm font-medium text-white/70"
				>{tag}</span
			>
		</div>

		<!-- Title -->
		<h1 class="text-4xl font-extrabold tracking-tight text-balance text-white lg:text-5xl">
			{title}
		</h1>
		<!-- Date and Author -->
		<div class="mt-4 flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-200">
			<time datetime={date} class="mr-8"
				>{new Date(date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}</time
			>
			<div class="-ml-4 flex items-center gap-x-4">
				<svg viewBox="0 0 2 2" class="-ml-0.5 size-1 flex-none fill-white/50">
					<circle r="1" cx="1" cy="1" />
				</svg>
				<div class="flex items-center gap-x-2.5">
					<img
						src={author_avatar}
						alt="{author} avatar"
						class="size-8 flex-none rounded-full bg-white/10"
					/>
					<div>
						<div class="font-medium">{author}</div>
						{#if author_title}
							<div class="-mt-1 text-gray-200/70">{author_title}</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
		<!-- Description -->
		<p class="mt-4 mb-8 text-lg/8 text-pretty text-gray-200">{description}</p>
	</div>
	{#if darken_image}
		<div class="absolute inset-0 bg-black/50"></div>
	{/if}
</div>

<div class="mx-auto mb-20 max-w-[65ch] px-4">
	<div class="mt-6 mb-8"><BlogBreadcrumbs {title} href={`/blog/${slug}`} /></div>
	<div class="prose prose-lg max-w-[65ch]">
		{@render children?.()}
	</div>
</div>

<Footer />
