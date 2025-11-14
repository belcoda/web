<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
	import * as Sidebar from '$lib/comps/ui/sidebar/index.js';
	import NavSidebar from '$lib/comps/nav/Sidebar.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Belcoda</title>
</svelte:head>

<Sidebar.Provider>
	<NavSidebar />
	<main class="h-screen">
		{@render children?.()}
	</main>
</Sidebar.Provider>
