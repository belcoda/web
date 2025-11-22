<script lang="ts">
	const { data } = $props();
	import BlogPageLayout from '$lib/comps/blog/BlogPageLayout.svelte';
	import BlogPostCard from '$lib/comps/blog/BlogPostCard.svelte';
	import BlogBreadcrumbs from '$lib/comps/blog/BlogBreadcrumbs.svelte';
	import { slugify } from '$lib/utils';
</script>

<svelte:head>
	<title>{data.author.name} | The Belcoda Blog</title>
</svelte:head>

{#snippet breadcrumbs()}
	{#if data.author}
		<BlogBreadcrumbs title={data.author.name} href={`/blog/author/${slugify(data.author.slug)}`} />
	{/if}
{/snippet}
<BlogPageLayout {breadcrumbs}>
	{#each data.posts as item}
		<BlogPostCard post={item.post} author={item.author} />
	{/each}
</BlogPageLayout>
