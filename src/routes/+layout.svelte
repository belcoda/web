<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Belcoda</title>
</svelte:head>

<main class="min-h-screen bg-gray-50">
	{@render children?.()}
</main>
