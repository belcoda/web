<script lang="ts">
	import { onMount } from 'svelte';
	import Badge from '$lib/comps/widgets/Badge.svelte';
	// You'll need to import these images and Container component in your Svelte setup
	// import Container from '$lib/components/Container.svelte'
	// import backgroundImage from '$lib/images/background-features.jpg'
	// import screenshotExpenses from '$lib/images/screenshots/expenses.png'
	// import screenshotPayroll from '$lib/images/screenshots/payroll.png'
	// import screenshotReporting from '$lib/images/screenshots/reporting.png'
	// import screenshotVatReturns from '$lib/images/screenshots/vat-returns.png'

	// For demo purposes, using placeholder images
	const backgroundImage = '/background-auth.jpg';
	const screenshotExpenses = '/screenshots/contacts.png';
	const screenshotPayroll = '/screenshots/payroll.png';
	const screenshotReporting = '/screenshots/reporting.png';
	const screenshotVatReturns = '/screenshots/vat-returns.png';

	const bookACallUrl = 'https://cal.com/django-merope-8wwjmi/belcoda-information-call';

	const features = [
		{
			title: 'Community',
			description:
				'Organize and grow your network with tools for managing people, groups, and WhatsApp group chats.',
			image: screenshotPayroll
		},
		{
			title: 'Communications',
			description:
				'Go where your people are. WhatsApp-first communications tools, including interactive messages and actions via WhatsApp.',
			image: screenshotExpenses
		},
		{
			title: 'Events',
			description:
				'A best-in-class events management toolkit. Organize, recruit for, and run events with flexible and powerful tools.',
			image: screenshotVatReturns
		},
		{
			title: 'Action',
			description: `Roll out petitions, surveys, and contact campaigns targeting your community's local elected officials.`,
			image: screenshotReporting
		}
	];

	let tabOrientation = 'horizontal';
	let selectedIndex = 0;

	function handleTabClick(index: number) {
		selectedIndex = index;
	}

	function handleKeydown(event: KeyboardEvent, index: number) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			selectedIndex = index;
		}
	}

	onMount(() => {
		const lgMediaQuery = window.matchMedia('(min-width: 1024px)');

		function onMediaQueryChange({ matches }: { matches: boolean }) {
			tabOrientation = matches ? 'vertical' : 'horizontal';
		}

		onMediaQueryChange(lgMediaQuery);
		lgMediaQuery.addEventListener('change', onMediaQueryChange);

		return () => {
			lgMediaQuery.removeEventListener('change', onMediaQueryChange);
		};
	});

	function clsx(...classes: (string | boolean | undefined)[]) {
		return classes.filter(Boolean).join(' ');
	}
</script>

<section
	id="features"
	aria-label="Features for organizing your community"
	class="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
>
	<img
		class="absolute inset-y-0 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
		src={backgroundImage}
		alt=""
		width="2245"
		height="1636"
	/>

	<!-- Container component - replace with your actual Container implementation -->
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="pt-18 pb-16">
			{@render whatsnew()}
			<div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
				<h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-6xl">
					Software for organizers who want to win.
				</h2>
				<p class="mt-6 text-lg font-medium text-pretty text-blue-50 sm:text-2xl">
					Building powerful distributed communities — from zero to victory.
				</p>
			</div>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a
					href="http://app.belcoda.com/signup"
					class="rounded-lg bg-white px-6 py-3 font-extrabold text-blue-900 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>Get started</a
				>
				<a
					href={bookACallUrl}
					class="rounded-lg px-5 py-3 font-semibold text-white hover:bg-white/10 hover:text-white"
					>Schedule a demo <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
		<div
			class="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
			role="tablist"
			aria-orientation={tabOrientation as 'horizontal' | 'vertical' | null | undefined}
		>
			<div
				class="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5"
			>
				<div
					class="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
				>
					{#each features as feature, featureIndex}
						<div
							class={clsx(
								'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
								selectedIndex === featureIndex
									? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset'
									: 'hover:bg-white/10 lg:hover:bg-white/5'
							)}
						>
							<h3>
								<button
									type="button"
									role="tab"
									aria-selected={selectedIndex === featureIndex}
									aria-controls="tabpanel-{featureIndex}"
									tabindex={selectedIndex === featureIndex ? 0 : -1}
									class={clsx(
										'font-display w-full text-left text-lg font-extrabold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
										selectedIndex === featureIndex
											? 'text-blue-600 lg:text-white'
											: 'text-blue-100 hover:text-white lg:text-white'
									)}
									on:click={() => handleTabClick(featureIndex)}
									on:keydown={(event) => handleKeydown(event, featureIndex)}
								>
									<span class="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none"
									></span>
									{feature.title}
								</button>
							</h3>
							<p
								class={clsx(
									'mt-2 hidden text-sm lg:block',
									selectedIndex === featureIndex
										? 'text-white'
										: 'text-blue-100 group-hover:text-white'
								)}
							>
								{feature.description}
							</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="lg:col-span-7">
				{#each features as feature, featureIndex}
					<div
						role="tabpanel"
						id="tabpanel-{featureIndex}"
						aria-labelledby="tab-{featureIndex}"
						class={selectedIndex === featureIndex ? 'block' : 'hidden'}
					>
						<div class="relative sm:px-6 lg:hidden">
							<div
								class="absolute -inset-x-4 -top-26 -bottom-17 bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl"
							></div>
							<p class="relative mx-auto max-w-2xl text-base text-white sm:text-center">
								{feature.description}
							</p>
						</div>
						<div
							class="mt-10 w-180 overflow-hidden rounded-b-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-271.25 lg:rounded-t-xl"
						>
							<img
								class="w-full"
								src={feature.image}
								alt=""
								loading="eager"
								width="800"
								height="600"
							/>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- end bottom -->

{#snippet whatsnew()}
	<div class="mb-4 flex justify-center">
		<a href="/" class="inline-flex space-x-6">
			<div><Badge>What's new</Badge></div>
			<span class="inline-flex items-center space-x-2 text-sm/6 font-medium text-white">
				<span>🎉 Just shipped v1.0</span>
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
					class="size-5 text-gray-100"
				>
					<path
						d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
						clip-rule="evenodd"
						fill-rule="evenodd"
					/>
				</svg>
			</span>
		</a>
	</div>
{/snippet}
