<script lang="ts">
	import Header from '$lib/comps/nav/Header.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
	import imageManStandingStreet from './_images/man-standing-street.jpg';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	const { data } = $props();
	import DjangoPic from './_images/django-img.jpg';
	import KennethPic from './_images/kenneth.jpg';
	import FriendsAtMarket from './_images/friends-at-market.jpg';
	import SupportOurPlanet from './_images/support-our-planet.jpg';
	import ShareTablet from './_images/share-tablet.jpg';
	import WomanLookingAway from './_images/woman-looking-away.jpg';
	import manWithMegaphone from './_images/man-with-megaphone.webp';
</script>

<Header variant="transparent" />

<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
<div class="bg-white">
	<main class="isolate">
		<!-- Hero section -->
		<div class="relative isolate -z-10 bg-gray-900">
			<svg
				aria-hidden="true"
				class="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-white/10"
			>
				<defs>
					<pattern
						id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
						width="200"
						height="200"
						x="50%"
						y="-1"
						patternUnits="userSpaceOnUse"
					>
						<path d="M.5 200V.5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y="-1" class="overflow-visible fill-gray-800">
					<path
						d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
						stroke-width="0"
					/>
				</svg>
				<rect
					width="100%"
					height="100%"
					fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
					stroke-width="0"
				/>
			</svg>
			<div
				aria-hidden="true"
				class="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
			>
				<div
					style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
					class="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
				></div>
			</div>
			<div class="overflow-hidden">
				<div class="mx-auto max-w-7xl px-6 pt-8 pb-32 sm:pt-12 lg:px-8 lg:pt-32">
					<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
						<div class="relative w-full pt-30 lg:max-w-xl lg:shrink-0 lg:pt-12 xl:max-w-2xl">
							<h1 class="text-5xl font-semibold tracking-tight text-pretty text-white sm:text-6xl">
								Software for social change
							</h1>
							<p
								class="mt-8 text-lg font-medium text-pretty text-gray-200 sm:max-w-md sm:text-xl/8 lg:max-w-none"
							>
								Belcoda started with a simple idea: Everyone working to make the world a better
								place should have the software they need to succeed.
							</p>
							<p
								class="text-md mt-4 font-light text-pretty text-gray-400 sm:max-w-md sm:text-lg/8 lg:max-w-none"
							>
								But far too often, people working to create change are being held back by software
								that doesn't meet their needs.
							</p>
							<p
								class="text-md mt-4 font-light text-pretty text-gray-400 sm:max-w-md sm:text-lg/8 lg:max-w-none"
							>
								Most software for social change organizing is designed for a specific type of
								digital campaigning that emerged in the United States and Western Europe in the
								2000s.
							</p>
							<p
								class="text-md mt-4 font-light text-pretty text-gray-400 sm:max-w-md sm:text-lg/8 lg:max-w-none"
							>
								<strong class="font-semibold"
									>So we started building organizing tools for the rest of the world.</strong
								> Tools that were centered on mobile and messaging, and worked on any device with any
								internet connection — anywhere in the world.
							</p>
							<p
								class="text-md mt-4 font-light text-pretty text-gray-400 sm:max-w-md sm:text-lg/8 lg:max-w-none"
							>
								Over time, this vision has coalesced into Belcoda: a fully-featured toolset for
								digital advocacy and organizing, with a deep and powerful intergation with WhatsApp
								at its core.
							</p>
							<p
								class="text-md mt-4 font-light text-pretty text-gray-400 sm:max-w-md sm:text-lg/8 lg:max-w-none"
							>
								Our unique history is also reflected in the <a
									href="https://www.belcoda.org"
									class="text-blue-500 hover:underline"
									target="_blank">Belcoda Foundation</a
								>, a non-profit organization that provides software grants and support to
								locally-led community initiatives and grassroots organizing in the Global South.
							</p>
						</div>
						<div
							class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
						>
							<div
								class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80"
							>
								<div class="relative">
									<img
										src={imageManStandingStreet}
										alt="Man standing on a street looking at the camera"
										class="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset"
									></div>
								</div>
							</div>
							<div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
								<div class="relative">
									<img
										src={WomanLookingAway}
										alt="Woman at a community meeting looking away from the camera"
										class="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset"
									></div>
								</div>
								<div class="relative">
									<img
										src={SupportOurPlanet}
										alt="Man holding a sign that says 'Support your local planet'"
										class="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset"
									></div>
								</div>
							</div>
							<div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
								<div class="relative">
									<img
										src={ShareTablet}
										alt="Man showing a tablet to a woman"
										class="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset"
									></div>
								</div>
								<div class="relative">
									<img
										src={FriendsAtMarket}
										alt="Friends at a market posing"
										class="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Content section -->
		<!-- <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-24">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<h2 class="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
					Our story
				</h2>
				<div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
					<div class="lg:w-full lg:max-w-2xl lg:flex-auto">
						<p class="text-xl/8 text-gray-300">
							Belcoda started with a simple idea: Everyone working to make the world a better place
							should have the software they need to succeed.
						</p>
						<p class="mt-6 max-w-xl text-base/7 text-gray-400">
							Far too often, people working to create change are being held back by software that
							doesn't meet their needs.
						</p>
						<p class="mt-4 max-w-xl text-base/7 text-gray-400">
							We built Belcoda for a <em>new generation</em> of organizing – highly decentralized,
							coordinated through apps like WhatsApp, and happening <em>everywhere</em> (not just in
							the United States and Western Europe).
						</p>
						<p class="mt-4 max-w-xl text-base/7 text-gray-400">
							These design choices have made Belcoda a unique tool for social change organizing –
							focused on growing and mobilizing large, decentralized communities, and with WhatsApp
							as the primary communication channel.
						</p>
					</div>
					<div class="lg:flex lg:flex-auto lg:justify-center">
						<dl class="w-64 space-y-8 xl:w-80">
							<div class="flex flex-col-reverse gap-y-4">
								<dt class="text-base/7 text-gray-400">Transactions every 24 hours</dt>
								<dd class="text-5xl font-semibold tracking-tight text-white">44 million</dd>
							</div>
							<div class="flex flex-col-reverse gap-y-4">
								<dt class="text-base/7 text-gray-400">Assets under holding</dt>
								<dd class="text-5xl font-semibold tracking-tight text-white">$119 trillion</dd>
							</div>
							<div class="flex flex-col-reverse gap-y-4">
								<dt class="text-base/7 text-gray-400">New users annually</dt>
								<dd class="text-5xl font-semibold tracking-tight text-white">46,000</dd>
							</div>
						</dl>
					</div> 
				</div>
			</div>
		</div>-->

		<!-- Image section -->
		<div class="bg-gray-900 pb-20">
			<div class="-mt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
				<img
					src={manWithMegaphone}
					alt="Woman addressing a meeting"
					class="aspect-5/2 w-full object-cover outline-1 -outline-offset-1 outline-white/10 xl:rounded-3xl"
				/>
			</div>
		</div>

		<!-- Feature section -->
		<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
					Our values
				</h2>
				<p class="mt-6 text-lg/8 text-gray-600">
					These aren't just words. They’re baked into every decision we make, and every line of code
					we write.
				</p>
			</div>
			<dl
				class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				<div>
					<dt class="font-semibold text-gray-800">Be a pleasure to use</dt>
					<dd class="mt-1 text-gray-500">
						Using Belcoda should be delightful. We aim to keep the interface fast, streamlined,
						intuitive and beautiful. And we're always looking for little improvements and shortcuts
						to make your life easier.
					</dd>
				</div>
				<div>
					<dt class="font-semibold text-gray-800">Make our users better</dt>
					<dd class="mt-1 text-gray-500">
						Belcoda is carefully engineered to nudge you into organizing best practices, so that the
						default way of doing things is to be the best version of your organizing self.
					</dd>
				</div>
				<div>
					<dt class="font-semibold text-gray-800">Never forget the free tier</dt>
					<dd class="mt-1 text-gray-500">
						Belcoda was built to serve locally-led community initatives in low- and middle-income
						countries (ie: people who don't have budgets for paid software). That's still our north
						star.
					</dd>
				</div>
				<div>
					<dt class="font-semibold text-gray-800">Solve big problems</dt>
					<dd class="mt-1 text-gray-500">
						We're at our best when we're trying to solve big problems, chasing crazy goals, or
						facing down impossible deadlines. We won't always succeed, but we're not afraid to take
						on the hard stuff.
					</dd>
				</div>
				<div>
					<dt class="font-semibold text-gray-800">Learn from our users</dt>
					<dd class="mt-1 text-gray-500">
						Belcoda's users are world experts in organizing. They're the best product managers we
						could possibly hope for. So we're not building a product for them, we're building a
						product with them.
					</dd>
				</div>
				<div>
					<dt class="font-semibold text-gray-800">Don’t cut corners. Especially on security.</dt>
					<dd class="mt-1 text-gray-500">
						In general, try not to cut corners. But especially don’t cut corners on security or
						privacy. Honor our users' trust by maintaining the highest standards of security and
						privacy.
					</dd>
				</div>
			</dl>
		</div>

		<!-- Logo cloud -->
		<!-- <div class="relative isolate -z-10 mt-32 sm:mt-48">
			<div
				class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden mask-[radial-gradient(50%_45%_at_50%_55%,white,transparent)]"
			>
				<svg aria-hidden="true" class="h-160 w-7xl flex-none stroke-white/10">
					<defs>
						<pattern
							id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
							width="200"
							height="200"
							x="50%"
							y="50%"
							patternUnits="userSpaceOnUse"
							patternTransform="translate(-100 0)"
						>
							<path d="M.5 200V.5H200" fill="none" />
						</pattern>
					</defs>
					<svg x="50%" y="50%" class="overflow-visible fill-gray-800">
						<path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
					</svg>
					<rect
						width="100%"
						height="100%"
						fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
						stroke-width="0"
					/>
				</svg>
			</div>
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 class="text-center text-lg/8 font-semibold text-white">
					Trusted by the world’s most innovative teams
				</h2>
				<div
					class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
				>
					<img
						width="158"
						height="48"
						src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
						alt="Transistor"
						class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
					/>

					<img
						width="158"
						height="48"
						src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
						alt="Reform"
						class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
					/>

					<img
						width="158"
						height="48"
						src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
						alt="Tuple"
						class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
					/>

					<img
						width="158"
						height="48"
						src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
						alt="SavvyCal"
						class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
					/>

					<img
						width="158"
						height="48"
						src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
						alt="Statamic"
						class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
					/>
				</div>
			</div>
		</div> -->

		<!-- Team section -->
		<div class=" py-24 md:py-32 lg:py-40">
			<div class="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
				<div class="mx-auto max-w-2xl lg:mx-0">
					<h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
						Our team
					</h2>
					<p class="mt-6 text-lg/8 text-gray-600">
						Belcoda is built by a small remote team. If you’re interested in joining us, check out
						our <a
							href="https://belcoda.notion.site/Careers-78f34ed4508d46f69a92e5fea15a7e19"
							class="text-blue-500 hover:underline"
							target="_blank">careers</a
						> page.
					</p>
				</div>
				<ul
					role="list"
					class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
				>
					<li>
						<img
							src={DjangoPic}
							alt="Django Merope"
							class="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-white/10"
						/>
						<h3 class="mt-6 text-lg/8 font-semibold text-gray-800">Django Merope</h3>
						<p class="text-base/7 text-gray-500">Founder & project lead</p>
						<div class="mt-1 flex items-center gap-x-1 text-gray-500">
							<MapPinIcon class="inline-block size-4" />
							<p class="text-sm">Japan</p>
						</div>

						<p class="mt-4 text-base/7 text-gray-500">
							Django has been a campaigner, communications consultant, organizer, and software
							engineer. He’s worked at the intersection of technology and social change for more
							than 15 years.
						</p>
						<ul role="list" class="mt-6 flex gap-x-6">
							<li>
								<a
									href="https://www.linkedin.com/in/dmsynge/"
									target="_blank"
									class="text-gray-400 hover:text-gray-600"
								>
									<span class="sr-only">LinkedIn</span>
									<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5">
										<path
											d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<img
							src={KennethPic}
							alt="Kenneth Lebu"
							class="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-white/10"
						/>
						<h3 class="mt-6 text-lg/8 font-semibold text-gray-800">Kenneth Lebu</h3>
						<p class="text-base/7 text-gray-500">Software engineer</p>
						<div class="mt-1 flex items-center gap-x-1 text-gray-500">
							<MapPinIcon class="inline-block size-4" />
							<p class="text-sm">Kenya</p>
						</div>
						<p class="mt-4 text-base/7 text-gray-500">
							Kenneth is a software engineer with a background working in non-profits and public
							health organizations.
						</p>
						<ul role="list" class="mt-6 flex gap-x-6">
							<li>
								<a
									href="https://www.linkedin.com/in/kenneth-lebu"
									target="_blank"
									class="text-gray-400 hover:text-gray-600"
								>
									<span class="sr-only">LinkedIn</span>
									<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5">
										<path
											d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
											clip-rule="evenodd"
											fill-rule="evenodd"
										/>
									</svg>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>

		<!-- Blog section -->
		<div class="mx-auto mt-8 max-w-7xl px-6 pb-32 sm:mt-12 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<div class="flex items-start justify-center antialiased">
					<div class="">
						<h2
							class="mx-auto max-w-3xl text-center text-4xl font-black tracking-tight text-gray-900 uppercase italic sm:text-5xl"
						>
							Power Tools
						</h2>
						<h4
							class="mx-auto max-w-3xl text-right text-lg font-extralight tracking-tight text-gray-600"
						>
							The Belcoda Blog
						</h4>
					</div>
				</div>
			</div>
			<div
				class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				{#each data.posts as post}
					<article
						class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
					>
						<img
							src={post.post.image}
							alt={post.post.title}
							class="absolute inset-0 -z-10 size-full object-cover"
						/>
						<div class="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/40"></div>
						<div class="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-white/10"></div>

						<div
							class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300"
						>
							<time datetime={post.post.date} class="mr-8"
								>{new Date(post.post.date).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}</time
							>
							<div class="-ml-4 flex items-center gap-x-4">
								<svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-gray-300/50">
									<circle r="1" cx="1" cy="1" />
								</svg>
								<div class="flex gap-x-2.5">
									<img
										src={post.author.avatar}
										alt={post.author.name}
										class="size-6 flex-none rounded-full bg-gray-800/10"
									/>
									{post.author.name}
								</div>
							</div>
						</div>
						<h3 class="mt-3 text-lg/6 font-semibold text-white">
							<a href={`/blog/${post.post.slug}`}>
								<span class="absolute inset-0"></span>
								{post.post.title}
							</a>
						</h3>
					</article>
				{/each}
			</div>
		</div>
	</main>
</div>

<Footer />
