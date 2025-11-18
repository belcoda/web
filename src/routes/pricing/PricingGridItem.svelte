<script lang="ts">
	const { children } = $props();
</script>

<li class="flex gap-x-3 py-2">
	<svg
		viewBox="0 0 20 20"
		fill="currentColor"
		data-slot="icon"
		aria-hidden="true"
		class="h-6 w-5 flex-none text-gray-500 group-data-featured/tier:text-indigo-600"
	>
		<path
			d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
			clip-rule="evenodd"
			fill-rule="evenodd"
		/>
	</svg>
	{@render children?.()}
</li>
