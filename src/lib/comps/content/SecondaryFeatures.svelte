<script lang="ts">
	import SpeedMonitor from '$lib/comps/widgets/SpeedMonitor.svelte';
	import WorksEverywhere from '$lib/comps/content/featuregrid/WorksEverywhere.svelte';
	import Code from '$lib/comps/content/featuregrid/Code.svelte';

	import imageGlobeSliceHires from './assets/globe-slice-hires.png';
</script>

<div class="-mt-20 bg-gray-50 pt-12 pb-40">
	<div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
		<div class="grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
			<div class="relative lg:row-span-2">
				<div class="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
				<div
					class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]"
				>
					<div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
						<p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
							Built for mobile
						</p>
						<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
							If you can do it in Belcoda, you can do it on mobile. Some of our customers run large
							organizations without <em>any</em> laptops.
						</p>
					</div>
					<div class="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
						<div
							class="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl"
						>
							<img
								src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
								alt=""
								class="size-full object-cover object-top"
							/>
						</div>
					</div>
				</div>
				<div
					class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl"
				></div>
			</div>
			<div class="relative max-lg:row-start-1">
				<div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
				<div
					class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]"
				>
					<div class="px-8 pt-8 sm:px-10 sm:pt-10">
						<p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
							Radically fast performance
						</p>
						<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
							Our goal is 0ms response time for 99% of actions, even on slow connections.
							<a href="/" class="text-blue-800 hover:underline">Learn how</a>.
						</p>
					</div>
					<div class="mt-8 w-full px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
						<SpeedMonitor />
					</div>
				</div>
				<div
					class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl"
				></div>
			</div>
			<div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
				<div class="absolute inset-px rounded-lg bg-white"></div>
				<div
					class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]"
				>
					<div class="px-8 pt-8 sm:px-10 sm:pt-10">
						<p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
							Privacy and security
						</p>
						<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
							We genuinely take this <em>very</em> seriously. Read our
							<a href="/privacy" class="text-blue-800 hover:underline">Privacy Principles</a>
							and <a href="/security" class="text-blue-800 hover:underline">Security Whitepaper</a>.
						</p>
					</div>
					<div class="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
						<img
							src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
							alt=""
							class="h-[min(152px,40cqw)] object-cover"
						/>
					</div>
				</div>
				<div
					class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5"
				></div>
			</div>
			<div class="relative">
				<div class="absolute inset-px rounded-lg bg-white lg:rounded-tr-4xl"></div>
				<div
					class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]"
				>
					<div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
						<p class="mt-2 w-full text-lg font-medium tracking-tight text-gray-950">
							<WorksEverywhere />
						</p>
						<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
							Belcoda was built for Global South organizing. It’s designed for any language, on any
							device, with any internet connection, in any country.
						</p>
					</div>
					<div class="relative min-h-20 w-full grow">
						<img src={imageGlobeSliceHires} alt="Globe" class="size-full object-cover object-top" />
					</div>
				</div>
				<div
					class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl"
				></div>
			</div>
			<div class="relative">
				<div
					class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl"
				></div>
				<div
					class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]"
				>
					<div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
						<p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
							Integrations
						</p>
						<p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
							Not yet ready to ditch your existing platforms? Use Belcoda as an alternative (better)
							front-end that keeps all your data synced.
						</p>
					</div>
					<div class="relative min-h-40 w-full grow">
						<Code />
					</div>
				</div>
				<div
					class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl"
				></div>
			</div>
		</div>
	</div>
</div>
