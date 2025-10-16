<script lang="ts">
	const { children } = $props();
</script>

<span
	class="rounded-full bg-white/10 px-3 py-1.5 text-sm/6 font-semibold text-white/80 ring-1 ring-white/10 ring-inset"
>
	{@render children()}
</span>
