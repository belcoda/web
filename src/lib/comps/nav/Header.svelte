<script lang="ts">
	type Props = {
		variant?: 'default' | 'transparent';
	};
	const { variant = 'default' }: Props = $props();
	const backgroundImage = variant === 'transparent' ? null : '/background-auth.jpg';
</script>

<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
<header
	class="absolute top-0 right-0 left-0 z-50 bg-cover bg-center"
	style={backgroundImage ? `background-image: url('{backgroundImage}')` : ''}
>
	<nav
		aria-label="Global"
		class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
	>
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Belcoda</span>
				<img src="/logos/white_logomark.svg" alt="" class="h-8 w-auto" />
			</a>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			<a
				href="#"
				class="rounded-md px-3 py-2 text-sm/6 font-semibold text-blue-50 hover:bg-gray-100/10 hover:text-white"
				>About</a
			>
			<a
				href="#"
				class="rounded-md px-3 py-2 text-sm/6 font-semibold text-blue-50 hover:bg-gray-100/10 hover:text-white"
				>Features</a
			>
			<a
				href="#"
				class="rounded-md px-3 py-2 text-sm/6 font-semibold text-blue-50 hover:bg-gray-100/10 hover:text-white"
				>Resources</a
			>
			<a
				href="/pricing"
				class="rounded-md px-3 py-2 text-sm/6 font-semibold text-blue-50 hover:bg-gray-100/10 hover:text-white"
				>Pricing</a
			>
		</div>
		<div class="flex flex-1 items-center justify-end gap-x-2">
			<a
				href="#"
				class="hidden rounded-md px-3 py-2 text-sm/6 font-semibold text-blue-50 hover:bg-gray-100/10 hover:text-white lg:block"
				>Log in</a
			>
			<a
				href="#"
				class="rounded-md bg-white px-3 py-2 text-sm font-extrabold text-blue-900 shadow-xs hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>Get started</a
			>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				command="show-modal"
				commandfor="mobile-menu"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					data-slot="icon"
					aria-hidden="true"
					class="size-6"
				>
					<path
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
	</nav>
</header>
