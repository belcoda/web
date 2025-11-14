<script lang="ts">
	const { data } = $props();
	import BlogPageLayout from '$lib/comps/blog/BlogPageLayout.svelte';
	import BlogPostCard from '$lib/comps/blog/BlogPostCard.svelte';
</script>

<BlogPageLayout>
	{#each data.posts as item}
		<BlogPostCard post={item.post} author={item.author} />
	{/each}
</BlogPageLayout>
