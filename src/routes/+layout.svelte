<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Belcoda</title>
	<meta name="author" content="Belcoda" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="bingbot" content="index, follow" />
	<meta name="yandexbot" content="index, follow" />
	<meta name="description" content="Belcoda is a platform for community organizing and activism." />
	<meta name="keywords" content="Belcoda, community organizing, activism, social change" />
	<meta name="image" content="https://belcoda.com/images/belcoda-image.png" />
	<meta name="url" content="https://belcoda.com" />
	<meta name="type" content="website" />
	<meta name="published_time" content="2025-11-22" />
	<meta name="modified_time" content="2025-11-22" />
</svelte:head>

<main class="min-h-screen bg-gray-50">
	{@render children?.()}
</main>
