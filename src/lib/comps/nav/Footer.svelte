<script lang="ts">
	import StatusIndicator from '$lib/comps/widgets/StatusIndicator.svelte';
</script>

<footer class="bg-gray-900">
	<div class="mx-auto max-w-7xl px-8 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<img src="/logos/white_logomark.svg" alt="Belcoda" class="mx-auto h-9 md:mx-0" />
			<div class="mt-16 grid grid-cols-2 gap-2 md:gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm/6 font-semibold text-white">Features</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="/features/organizing" class="text-sm/6 text-gray-400 hover:text-white"
									>Organizing</a
								>
							</li>
							<li>
								<a href="/features/communications" class="text-sm/6 text-gray-400 hover:text-white"
									>Communications</a
								>
							</li>
							<li>
								<a href="/features/events" class="text-sm/6 text-gray-400 hover:text-white"
									>Events</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm/6 font-semibold text-white">Resources</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a
									href="https://support.belcoda.com/docs"
									target="_blank"
									class="text-sm/6 text-gray-400 hover:text-white">Documentation</a
								>
							</li>
							<li>
								<a
									href="https://belcoda.readme.io"
									target="_blank"
									class="text-sm/6 text-gray-400 hover:text-white">Developers</a
								>
							</li>
							<li>
								<a
									href="https://support.belcoda.com/roadmap"
									target="_blank"
									class="text-sm/6 text-gray-400 hover:text-white">Roadmap</a
								>
							</li>
							<li>
								<a
									href="https://support.belcoda.com/changelog"
									target="_blank"
									class="text-sm/6 text-gray-400 hover:text-white">Changelog</a
								>
							</li>
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm/6 font-semibold text-white">Company</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="/about" class="text-sm/6 text-gray-400 hover:text-white">About</a>
							</li>
							<li>
								<a href="/blog" class="text-sm/6 text-gray-400 hover:text-white">Blog</a>
							</li>
							<li>
								<a
									href="https://belcoda.notion.site/Careers-78f34ed4508d46f69a92e5fea15a7e19"
									target="_blank"
									class="text-sm/6 text-gray-400 hover:text-white">Careers</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm/6 font-semibold text-white">Legal</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="/privacy" class="text-sm/6 text-gray-400 hover:text-white"
									>Privacy policy</a
								>
							</li>
							<li>
								<a href="/security" class="text-sm/6 text-gray-400 hover:text-white">Security</a>
							</li>
							<li>
								<a href="/terms-of-service" class="text-sm/6 text-gray-400 hover:text-white"
									>Terms of service</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- <div
			class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between"
		>
			<div>
				<h3 class="text-sm/6 font-semibold text-white">Subscribe to our newsletter</h3>
				<p class="mt-2 text-sm/6 text-gray-400">
					The latest news, articles, and resources, sent to your inbox exactly once a month.
				</p>
			</div>
			<form class="mt-6 sm:flex sm:max-w-md lg:mt-0">
				<label for="email-address" class="sr-only">Email address</label>
				<input
					id="email-address"
					type="email"
					name="email-address"
					required
					placeholder="Enter your email"
					autocomplete="email"
					class="w-full min-w-0 rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus-visible:outline-indigo-500 sm:w-56 sm:text-sm/6"
				/>
				<div class="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
					<button
						type="submit"
						class="flex w-full items-center justify-center rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
						>Subscribe</button
					>
				</div>
			</form>
		</div> -->
		<div class="mt-32 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
			<div class="w-full justify-center md:flex md:items-center md:justify-between md:gap-x-6">
				<div class="mb-8 flex justify-center md:mb-0"><StatusIndicator /></div>
				<!-- Social media links -->
				<div class="flex items-center justify-evenly gap-x-6 md:order-2 md:justify-start">
					<a
						href="https://discord.com/invite/q7xPnzvswy"
						target="_blank"
						class="text-gray-400 hover:text-white"
					>
						<span class="sr-only">Discord</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
							/></svg
						>
					</a>
					<a
						href="https://bsky.app/profile/belcodasoftware.bsky.social"
						target="_blank"
						class="text-gray-400 hover:text-white"
					>
						<span class="sr-only">Bluesky</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M12 11.388c-.906-1.761-3.372-5.044-5.665-6.662c-2.197-1.55-3.034-1.283-3.583-1.033C2.116 3.978 2 4.955 2 5.528c0 .575.315 4.709.52 5.4c.68 2.28 3.094 3.05 5.32 2.803c-3.26.483-6.157 1.67-2.36 5.898c4.178 4.325 5.726-.927 6.52-3.59c.794 2.663 1.708 7.726 6.444 3.59c3.556-3.59.977-5.415-2.283-5.898c2.225.247 4.64-.523 5.319-2.803c.205-.69.52-4.825.52-5.399c0-.575-.116-1.55-.752-1.838c-.549-.248-1.386-.517-3.583 1.033c-2.293 1.621-4.76 4.904-5.665 6.664"
							/></svg
						>
					</a>
					<a
						href="https://github.com/belcoda"
						target="_blank"
						class="text-gray-400 hover:text-white"
					>
						<span class="sr-only">GitHub</span>
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-6">
							<path
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clip-rule="evenodd"
								fill-rule="evenodd"
							/>
						</svg>
					</a>
					<a
						href="https://www.youtube.com/@belcoda"
						target="_blank"
						class="text-gray-400 hover:text-white"
					>
						<span class="sr-only">YouTube</span>
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-6">
							<path
								d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
								clip-rule="evenodd"
								fill-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
				<!-- End social media links -->
			</div>
		</div>
		<p class="mt-8 text-center text-xs text-gray-400">
			&copy; {new Date().getFullYear()} Belcoda LLC. All rights reserved.
		</p>
	</div>
</footer>
