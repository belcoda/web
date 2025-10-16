<script lang="ts">
	import Badge from '$lib/comps/widgets/Badge.svelte';

	const tiers = [
		{
			name: 'Organization',
			price: 0,
			description: 'Everything needed for distributed campaigns.',
			interval: null,
			features: [
				{
					name: 'All platform features'
				},
				{
					name: '3 admin accounts'
				},
				{
					name: 'Unlimited contacts, volunteers, and organizers'
				},
				{
					name: 'Access to API & integrations'
				},
				{
					name: 'Community & AI support'
				}
			]
		},
		{
			name: 'Institution',
			price: 279,
			description: 'For organizations and campaigns',
			interval: 'admin',
			features: [
				{
					name: 'All free features'
				},
				{
					name: '5 admin accounts'
				},

				{
					name: 'Webhooks'
				},
				{
					name: 'Custom domain'
				},
				{
					name: 'Email & page templates'
				},
				{
					name: 'Email & live chat support'
				}
			]
		},
		{
			name: 'Network',
			price: 1879,
			interval: 'month',
			description: 'For large organizations and campaigns',
			features: [
				{
					name: 'All institution features'
				},
				{
					name: 'Cross-network organizing'
				},
				{
					name: 'Advanced analytics & reporting'
				},
				{
					name: 'SSO & role based access control'
				},
				{
					name: 'Dedicated support engineer'
				}
			]
		}
	];
	const backgroundImage = '/background-auth.jpg';
</script>

<div class="bg-gray-900 bg-cover bg-center" style="background-image: url({backgroundImage})">
	<div class="mx-auto max-w-7xl px-6 pt-24 pb-96 text-center sm:pt-32 lg:px-8">
		<div class="mx-auto max-w-4xl">
			<h2 class="text-base/7 font-semibold">
				<Badge>Pricing</Badge>
			</h2>
			<p class="mt-2 text-5xl font-extrabold text-balance text-white sm:text-6xl">
				Free. For everyone. Forever.
			</p>
		</div>
		<div class="relative mt-6">
			<p class="mx-auto max-w-2xl text-lg font-medium text-pretty text-blue-200 sm:text-xl/8">
				We try to only charge for advanced features for enterprise and network users. Most
				organizers should be able to use Belcoda forever without paying a cent.
			</p>
		</div>
	</div>
	<div class="flow-root pb-24 sm:pb-32">
		<div class="-mt-80">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-3">
					{#each tiers as tier}
						<div class="flex flex-col justify-between rounded-3xl bg-white/80 p-8 sm:p-10">
							<div>
								<h3
									id="tier-{tier.name.toLowerCase()}"
									class="text-base/7 font-semibold text-blue-900"
								>
									{tier.name}
								</h3>
								<div class="mt-4 flex items-baseline gap-x-2">
									<span class="text-5xl font-semibold tracking-tight text-gray-900">
										{tier.price === 0 ? 'Free' : `$${tier.price}`}
									</span>
									{#if tier.interval}
										<span class="text-base/7 font-semibold text-gray-600">/month</span>
									{/if}
								</div>
								<p class="mt-6 text-base/7 text-gray-600">
									{tier.description}
								</p>
								<ul role="list" class="mt-10 space-y-4 text-sm/6 text-gray-600">
									{#each tier.features as feature}
										<li class="flex gap-x-3">
											<svg
												viewBox="0 0 20 20"
												fill="currentColor"
												data-slot="icon"
												aria-hidden="true"
												class="h-6 w-5 flex-none text-blue-900"
											>
												<path
													d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
													clip-rule="evenodd"
													fill-rule="evenodd"
												/>
											</svg>
											{feature.name}
										</li>
									{/each}
								</ul>
							</div>
							<a
								href="#"
								aria-describedby="tier-{tier.name.toLowerCase()}"
								class="mt-8 block rounded-md bg-blue-900 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
								>Get started today</a
							>
						</div>
					{/each}
					<div
						class="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl bg-white/80 p-8 sm:gap-y-10 sm:p-10 lg:col-span-3 lg:flex-row lg:items-center"
					>
						<div class="lg:min-w-0 lg:flex-1">
							<h3 class="font-serif text-xl font-extrabold text-gray-900">
								The Belcoda Foundation
							</h3>
							<p class="mt-1 text-base/7 text-gray-600">
								Need paid features, but don't have the budget? The Belcoda Foundation partners with
								philanthropic foundations to provide software grants and support to eligible
								locally-led grassroots initatives in the Global South.
							</p>
							<div class="mt-6">
								<a
									href="#"
									class="rounded-md bg-blue-900 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800 hover:inset-ring-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
									>Learn more <span aria-hidden="true">&rarr;</span></a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
