<script lang="ts">
	const { data } = $props();
	import BlogPageLayout from '$lib/comps/blog/BlogPageLayout.svelte';
	import BlogPostCard from '$lib/comps/blog/BlogPostCard.svelte';
</script>

<svelte:head>
	<title>Power Tools | The Belcoda Blog</title>
	<meta
		name="description"
		content="The Belcoda Blog - Deep insights from some of the world's most impactful organizing campaigns."
	/>
	<meta name="keywords" content="Belcoda, blog, community organizing, activism, social change" />
</svelte:head>

<BlogPageLayout>
	{#each data.posts as item}
		<BlogPostCard post={item.post} author={item.author} />
	{/each}
</BlogPageLayout>
