<script lang="ts">
	const { data } = $props();
	import BlogPageLayout from '$lib/comps/blog/BlogPageLayout.svelte';
	import BlogPostCard from '$lib/comps/blog/BlogPostCard.svelte';
	import BlogBreadcrumbs from '$lib/comps/blog/BlogBreadcrumbs.svelte';
	import { slugify } from '$lib/utils';
</script>

<svelte:head>
	<title>{data.tag} | The Belcoda Blog</title>
</svelte:head>

{#snippet breadcrumbs()}
	{#if data.tag}
		<BlogBreadcrumbs title={data.tag} href={`/blog/tag/${slugify(data.tag)}`} />
	{/if}
{/snippet}
<BlogPageLayout breadcrumbs={data.tag ? breadcrumbs : undefined}>
	{#each data.posts as item}
		<BlogPostCard post={item.post} author={item.author} />
	{/each}
</BlogPageLayout>
