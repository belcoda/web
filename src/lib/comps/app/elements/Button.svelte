<script lang="ts">
	import { type Snippet } from 'svelte';
	type Props = {
		icon?: Snippet;
		justifyIcon?: 'start' | 'end';
		action: string | (() => void) | (() => Promise<void>);
		variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'danger';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		disabled?: boolean;
		children: Snippet;
	};
	const {
		icon,
		justifyIcon = 'start',
		action,
		variant = 'default',
		size = 'md',
		disabled = false,
		children
	}: Props = $props();
	//@apply cursor-pointer rounded-md border border-gray-200 bg-zinc-50 px-4 py-1.5 text-center text-sm font-medium text-gray-600 shadow-xs not-disabled:hover:bg-white not-disabled:hover:text-gray-800 active:border-gray-300 disabled:cursor-not-allowed disabled:opacity-50;
	const sizes: Record<typeof size, string> = {
		xs: 'text-sm font-medium py-0.5 px-1 rounded-xs',
		sm: 'text-sm font-medium py-1 px-2 rounded-sm',
		md: 'text-sm font-medium py-1.5 px-4 rounded-md',
		lg: 'text-base font-semibold py-2.5 px-6 rounded-lg',
		xl: 'text-lg font-bold py-4 px-8 rounded-xl'
	};

	const color: Record<typeof variant, string> = {
		default:
			'text-gray-600 bg-zinc-50 border-gray-200 border not-disabled:hover:bg-white not-disabled:hover:text-gray-800 active:border-gray-300',
		primary:
			'text-white bg-purple-500 hover:bg-purple-600 border border-purple-600 hover:border-purple-700 active:border-purple-600',
		secondary:
			'text-white bg-gray-900 hover:bg-gray-700 border-1 border-gray-700 hover:border-gray-600 active:border-gray-400',
		ghost: 'bg-tranparant',
		danger:
			'bg-red-500 hover:bg-red-600 border-1 border-red-600 hover:border-red-700 active:border-red-800'
	};

	const style = `cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${sizes[size]} ${color[variant]}`;
</script>

{#if typeof action === 'function'}
	<button class={style} onclick={action}>
		{@render inside()}
	</button>
{:else}
	<a class={style} href={action as string}>
		{@render inside()}
	</a>
{/if}

{#snippet inside()}
	{#if icon}
		<div class="flex items-center justify-center gap-1">
			{@render icon()}
			{@render children()}
		</div>
	{:else}
		{@render children()}
	{/if}
{/snippet}
