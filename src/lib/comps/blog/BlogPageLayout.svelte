<script lang="ts">
	import type { Snippet } from 'svelte';
	type Props = {
		children: Snippet;
		breadcrumbs?: Snippet;
	};
	const { children, breadcrumbs }: Props = $props();
	import Header from '$lib/comps/nav/Header.svelte';
	import BlogHeader from '$lib/comps/blog/BlogHeader.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
</script>

<Header />
<BlogHeader />

<div class="bg-white pt-12 pb-40" class:pt-20={!breadcrumbs}>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		{#if breadcrumbs}<div class="mb-8">{@render breadcrumbs?.()}</div>{/if}
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{@render children?.()}
		</div>
	</div>
</div>
<Footer />
