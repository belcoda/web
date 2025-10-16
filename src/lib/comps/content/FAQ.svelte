<script lang="ts">
	const faqs = $state([
		{
			title: `What is Belcoda?`,
			answer: `Belcoda is a platform for organizing events and communities.`,
			open: true
		},
		{
			title: `What's the best thing about Switzerland?`,
			answer: `I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.`,
			open: false
		},
		{
			title: `How do you make holy water?`,
			answer: `You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.`,
			open: false
		},
		{
			title: `What do you call someone with no body and no nose?`,
			answer: `Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.`,
			open: false
		},
		{
			title: `Why do you never see elephants hiding in trees?`,
			answer: `Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.`,
			open: false
		},
		{
			title: `Why can't you hear a pterodactyl go to the bathroom?`,
			answer: `Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error.`,
			open: false
		},
		{
			title: `Why did the invisible man turn down the job offer?`,
			answer: `He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.`,
			open: false
		}
	]);
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script>
</svelte:head>
<div class="bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
		<div class="mx-auto max-w-4xl">
			<h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
				Frequently asked questions
			</h2>
			<dl class="mt-16 divide-y divide-gray-900/10">
				{#each faqs as faq}
					<div class="py-6 first:pt-0 last:pb-0">
						<dt>
							<button
								type="button"
								onclick={() => (faq.open = !faq.open)}
								class="flex w-full items-start justify-between text-left text-gray-900"
							>
								<span class="text-base/7 font-semibold">{faq.title}</span>
								<span class="ml-6 flex h-7 items-center">
									{#if !faq.open}
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.5"
											data-slot="icon"
											aria-hidden="true"
											class="size-6 in-aria-expanded:hidden"
										>
											<path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									{:else}
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.5"
											data-slot="icon"
											aria-hidden="true"
											class="size-6 not-in-aria-expanded:hidden"
										>
											<path d="M18 12H6" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									{/if}
								</span>
							</button>
						</dt>
						{#if faq.open}
							<el-disclosure id="faq-0" class="contents">
								<dd class="mt-2 pr-12">
									<p class="text-base/7 text-gray-600">{faq.answer}</p>
								</dd>
							</el-disclosure>
						{/if}
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
