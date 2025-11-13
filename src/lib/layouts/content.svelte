<script lang="ts">
	import Header from '$lib/comps/nav/Header.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
	import { type Snippet } from 'svelte';
	type Props = {
		title: string;
		description?: string;
		children: Snippet;
	};
	const { title, description, children }: Props = $props();

	const backgroundImage = '/background-auth.jpg';
</script>

<div
	class="relative flex h-100 w-full items-end justify-start bg-linear-to-b from-blue-200 to-white bg-cover bg-center bg-no-repeat"
	style="background-image: url('{backgroundImage}')"
>
	<Header />

	<div class="z-10 mx-auto mb-8 w-full max-w-5xl px-4">
		<!-- Title -->
		<h1 class="text-4xl font-extrabold tracking-tight text-balance text-white">{title}</h1>
		<!-- Description -->
		{#if description}<p class="mt-2 text-lg/8 text-pretty text-white/70">{description}</p>{/if}
	</div>
</div>

<div class="prose mx-auto mt-12 mb-20 max-w-5xl px-4">{@render children?.()}</div>

<Footer />
