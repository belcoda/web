<script lang="ts">
	import * as Drawer from '$lib/comps/ui/drawer/index.js';
	import XIcon from '@lucide/svelte/icons/x';
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
	import YouTubeIcon from '@lucide/svelte/icons/youtube';
	import PhoneIcon from '@lucide/svelte/icons/phone';
	import { Button } from '$lib/comps/ui/button/index.js';
</script>

<Drawer.Root direction="right">
	<Drawer.Trigger class="text-white">
		{@render sidebarTrigger()}
	</Drawer.Trigger>
	<Drawer.Content class="flex flex-col justify-start gap-4">
		<Drawer.Header>
			<Drawer.Title class="flex items-center justify-between">
				<h2 class="text-2xl font-bold">Menu</h2>
				<Drawer.Close class="rounded-full p-2 text-gray-400 hover:text-gray-500"
					><XIcon class="size-5 " /></Drawer.Close
				>
			</Drawer.Title>
		</Drawer.Header>
		{@render menubar()}
	</Drawer.Content>
</Drawer.Root>

{#snippet sidebarTrigger()}
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
{/snippet}

{#snippet menubar()}
	<nav class="relative flex w-full flex-1 flex-col">
		<ul role="list" class="mx-4 flex flex-1 flex-col gap-y-7">
			<li>
				<ul role="list" class="-mx-2 space-y-1">
					<li>
						<!-- Current: "bg-gray-50", Default: "hover:bg-gray-50" -->
						<a
							href="/"
							class="block rounded-md py-2 pr-2 pl-10 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50"
							>Home</a
						>
					</li>
					<li>
						<button
							type="button"
							command="--toggle"
							commandfor="sub-menu-1"
							class="flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 hover:bg-gray-50"
						>
							<svg
								viewBox="0 0 20 20"
								fill="currentColor"
								data-slot="icon"
								aria-hidden="true"
								class="size-5 shrink-0 not-in-aria-expanded:text-gray-400 in-aria-expanded:rotate-90 in-aria-expanded:text-gray-500"
							>
								<path
									d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
									clip-rule="evenodd"
									fill-rule="evenodd"
								/>
							</svg>
							Features
						</button>
						<el-disclosure id="sub-menu-1" hidden class="contents">
							<ul class="mt-1 px-2">
								<li>
									<a
										href="/features/organizing"
										class="block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700 hover:bg-gray-50"
										>Organizing</a
									>
								</li>
								<li>
									<a
										href="/features/whatsapp"
										class="block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700 hover:bg-gray-50"
										>WhatsApp</a
									>
								</li>
								<li>
									<a
										href="/features/events"
										class="block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700 hover:bg-gray-50"
										>Events</a
									>
								</li>
								<li>
									<a
										href="/features/actions"
										class="block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700 hover:bg-gray-50"
										>Actions</a
									>
								</li>
								<li>
									<a
										href="/features/integrations"
										class="block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700 hover:bg-gray-50"
										>Integrations</a
									>
								</li>
							</ul>
						</el-disclosure>
					</li>
					<li>
						<a
							href="/about"
							class="block rounded-md py-2 pr-2 pl-10 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50"
							>About</a
						>
					</li>
					<li>
						<button
							type="button"
							command="--toggle"
							commandfor="sub-menu-2"
							class="flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 hover:bg-gray-50"
						>
							<svg
								viewBox="0 0 20 20"
								fill="currentColor"
								data-slot="icon"
								aria-hidden="true"
								class="size-5 shrink-0 not-in-aria-expanded:text-gray-400 in-aria-expanded:rotate-90 in-aria-expanded:text-gray-500"
							>
								<path
									d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
									clip-rule="evenodd"
									fill-rule="evenodd"
								/>
							</svg>
							Resources
						</button>
						<el-disclosure id="sub-menu-2" hidden class="contents">
							<ul class="mt-1 px-2">
								<li class="">
									<a
										href="https://support.belcoda.com/docs"
										target="_blank"
										class="flex items-center gap-x-2 rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700 hover:bg-gray-50"
										>Guides & documentation <ExternalLinkIcon class="size-4" /></a
									>
								</li>
								<li>
									<a
										href="/blog"
										class="block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700 hover:bg-gray-50"
										>Blog</a
									>
								</li>
								<li>
									<a
										href="/security"
										class="block rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700 hover:bg-gray-50"
										>Security</a
									>
								</li>
								<li>
									<a
										href="https://belcoda.readme.io"
										class="flex items-center gap-x-2 rounded-md py-2 pr-2 pl-9 text-sm/6 text-gray-700 hover:bg-gray-50"
										>Developers <ExternalLinkIcon class="size-4" /></a
									>
								</li>
							</ul>
						</el-disclosure>
					</li>

					<li>
						<a
							href="/pricing"
							class="block rounded-md py-2 pr-2 pl-10 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50"
							>Pricing</a
						>
					</li>
				</ul>
			</li>
		</ul>
		{@render footer()}
	</nav>
{/snippet}

{#snippet footer()}
	<div class="mt-auto">
		<div class="mx-4 my-6">
			<Button variant="outline" class="w-full" href="https://app.belcoda.com/login">Login</Button>
			<Button
				variant="default"
				class="mt-3 w-full bg-blue-800 font-extrabold hover:bg-blue-900"
				href="https://app.belcoda.com/signup">Get started</Button
			>
		</div>
		<div
			class="flex w-full items-center justify-center divide-x divide-gray-100 border-t border-gray-100 bg-gray-50"
		>
			<a
				href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				target="_blank"
				class="flex w-1/2 items-center justify-center gap-x-2 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
			>
				<YouTubeIcon class="size-4" />
				3 minute demo
			</a>
			<a
				href="https://cal.com/django-merope-8wwjmi/30min"
				target="_blank"
				class="flex w-1/2 items-center justify-center gap-x-2 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
			>
				<PhoneIcon class="size-4" />
				Book a call</a
			>
		</div>
	</div>
{/snippet}
