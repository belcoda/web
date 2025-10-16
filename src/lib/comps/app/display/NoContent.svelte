<script lang="ts">
	import { type Snippet } from 'svelte';
	import Button from '../elements/Button.svelte';
	import Link from '../elements/Link.svelte';
	type Props = {
		icon: Snippet;
		title: string | Snippet;
		description: string | Snippet;
		cta: string | Snippet;
		action: string | (() => void) | (() => Promise<void>);
	};
	const { icon, title, description, cta, action }: Props = $props();
</script>

<div class="flex h-full w-full items-center justify-center">
	<div class="rounded-xl bg-gray-200 p-12 text-gray-400">
		{@render icon()}
	</div>
	{#if typeof title === 'string'}
		<div class="text-3xl font-bold text-gray-800 mt-4">{title}</div>
	{:else}
		{@render title()}
	{/if}
	{#if typeof description === 'string'}
		<div class="text-base text-gray-500 mt-3">{description}</div>
	{:else}
		{@render description()}
	{/if}
	{#if typeof action === 'function'}
		<Button icon={icon} onclick={action}>{cta}</Button>
	{:else}
		<Link icon={icon} href={action as string}>{cta}</Link>
	{/if}
</div>
