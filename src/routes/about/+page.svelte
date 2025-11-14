<script lang="ts">
	import Header from '$lib/comps/nav/Header.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';
	import SpeedMonitor from '$lib/comps/widgets/SpeedMonitor.svelte';
</script>

<Header variant="transparent" />

<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
<div class="bg-gray-900">
	<main class="isolate">
		<!-- Hero section -->
		<div class="relative isolate -z-10">
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
				<div class="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
					<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
						<div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
							<h1 class="text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
								We’re changing the way people connect
							</h1>
							<p
								class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:max-w-md sm:text-xl/8 lg:max-w-none"
							>
								Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit
								aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation
								tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu
								voluptate tempor esse minim amet fugiat veniam occaecat aliqua.
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
										src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
										alt=""
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
										src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
										alt=""
										class="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset"
									></div>
								</div>
								<div class="relative">
									<img
										src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
										alt=""
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
										src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
										alt=""
										class="aspect-2/3 w-full rounded-xl bg-gray-700/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset"
									></div>
								</div>
								<div class="relative">
									<img
										src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
										alt=""
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
		<div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<h2 class="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
					Our mission
				</h2>
				<div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
					<div class="lg:w-full lg:max-w-2xl lg:flex-auto">
						<p class="text-xl/8 text-gray-300">
							Everyone working to make the world a better place should have the software they need
							to succeed.
						</p>
						<p class="mt-6 max-w-xl text-base/7 text-gray-400">
							Belcoda was built to support a new generation of organizing. It's designed for any
							language, on any device, with any internet connection, in any country.
						</p>
						<p class="mt-4 max-w-xl text-base/7 text-gray-400">
							Belcoda was built to support a new generation of organizing. It's designed for any
							language, on any device, with any internet connection, in any country.
						</p>
						<p class="mt-4 max-w-xl text-base/7 text-gray-400">
							Belcoda was built to support a new generation of organizing. It's designed for any
							language, on any device, with any internet connection, in any country.
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
		</div>

		<!-- Image section -->
		<div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
			<img
				src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
				alt=""
				class="aspect-5/2 w-full object-cover outline-1 -outline-offset-1 outline-white/10 xl:rounded-3xl"
			/>
		</div>

		<!-- Feature section -->
		<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
					Our values
				</h2>
				<p class="mt-6 text-lg/8 text-gray-300">
					Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
					veritatis in accusamus quisquam.
				</p>
			</div>
			<dl
				class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				<div>
					<dt class="font-semibold text-white">Be world-class</dt>
					<dd class="mt-1 text-gray-400">
						Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam
						exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro
						vero.
					</dd>
				</div>
				<div>
					<dt class="font-semibold text-white">Share everything you know</dt>
					<dd class="mt-1 text-gray-400">
						Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id
						molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.
					</dd>
				</div>
				<div>
					<dt class="font-semibold text-white">Always learning</dt>
					<dd class="mt-1 text-gray-400">
						Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore
						quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.
					</dd>
				</div>
				<div>
					<dt class="font-semibold text-white">Be supportive</dt>
					<dd class="mt-1 text-gray-400">
						Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit
						veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt
						harum.
					</dd>
				</div>
				<div>
					<dt class="font-semibold text-white">Take responsibility</dt>
					<dd class="mt-1 text-gray-400">
						Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure.
						Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.
					</dd>
				</div>
				<div>
					<dt class="font-semibold text-white">Enjoy downtime</dt>
					<dd class="mt-1 text-gray-400">
						Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius.
						Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.
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
		<div class="bg-gray-900 py-24 md:py-32 lg:py-40">
			<div class="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
				<div class="mx-auto max-w-2xl lg:mx-0">
					<h2 class="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
						Our team
					</h2>
					<p class="mt-6 text-lg/8 text-gray-400">
						We’re a dynamic group of individuals who are passionate about what we do and dedicated
						to delivering the best results for our clients.
					</p>
				</div>
				<ul
					role="list"
					class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
				>
					<li>
						<img
							src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
							alt=""
							class="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-white/10"
						/>
						<h3 class="mt-6 text-lg/8 font-semibold text-white">Emma Dorsey</h3>
						<p class="text-base/7 text-gray-400">Senior Developer</p>
						<p class="mt-4 text-base/7 text-gray-400">
							Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla
							officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut
							voluptas. Officiis velit eos ducimus.
						</p>
						<ul role="list" class="mt-6 flex gap-x-6">
							<li>
								<a href="#" class="text-gray-400 hover:text-gray-300">
									<span class="sr-only">X</span>
									<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5">
										<path
											d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"
										/>
									</svg>
								</a>
							</li>
							<li>
								<a href="#" class="text-gray-400 hover:text-gray-300">
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
							src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
							alt=""
							class="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-white/10"
						/>
						<h3 class="mt-6 text-lg/8 font-semibold text-white">Alicia Bell</h3>
						<p class="text-base/7 text-gray-400">Junior Copywriter</p>
						<p class="mt-4 text-base/7 text-gray-400">
							Turpis lectus et amet elementum. Mi duis integer sed in vitae consequat. Nam vitae, in
							felis mi dui tempus. Porta at turpis eu odio. Et, sed duis in blandit bibendum
							accumsan. Purus viverra facilisi suspendisse quis est.
						</p>
						<ul role="list" class="mt-6 flex gap-x-6">
							<li>
								<a href="#" class="text-gray-400 hover:text-gray-300">
									<span class="sr-only">X</span>
									<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5">
										<path
											d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"
										/>
									</svg>
								</a>
							</li>
							<li>
								<a href="#" class="text-gray-400 hover:text-gray-300">
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
							src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
							alt=""
							class="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-white/10"
						/>
						<h3 class="mt-6 text-lg/8 font-semibold text-white">Jenny Wilson</h3>
						<p class="text-base/7 text-gray-400">Studio Artist</p>
						<p class="mt-4 text-base/7 text-gray-400">
							Aliquet adipiscing lectus praesent cras sed quis lectus egestas erat. Bibendum
							curabitur eget habitant feugiat nec faucibus eu lorem suscipit. Vitae vitae tempor
							enim eget lacus nulla leo.
						</p>
						<ul role="list" class="mt-6 flex gap-x-6">
							<li>
								<a href="#" class="text-gray-400 hover:text-gray-300">
									<span class="sr-only">X</span>
									<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5">
										<path
											d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"
										/>
									</svg>
								</a>
							</li>
							<li>
								<a href="#" class="text-gray-400 hover:text-gray-300">
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
							src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
							alt=""
							class="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-white/10"
						/>
						<h3 class="mt-6 text-lg/8 font-semibold text-white">Anna Roberts</h3>
						<p class="text-base/7 text-gray-400">Partner, Creative</p>
						<p class="mt-4 text-base/7 text-gray-400">
							Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque
							tortor. Metus lectus mattis id id. Tellus ornare etiam id velit ut enim lacinia congue
							ultrices. Sit morbi vel elit a maecenas mauris elit lectus magna.
						</p>
						<ul role="list" class="mt-6 flex gap-x-6">
							<li>
								<a href="#" class="text-gray-400 hover:text-gray-300">
									<span class="sr-only">X</span>
									<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5">
										<path
											d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"
										/>
									</svg>
								</a>
							</li>
							<li>
								<a href="#" class="text-gray-400 hover:text-gray-300">
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
		<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<h2 class="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
					From the blog
				</h2>
				<p class="mt-2 text-lg/8 text-gray-400">
					Learn how to grow your business with our expert advice.
				</p>
			</div>
			<div
				class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				<article
					class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
				>
					<img
						src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
						alt=""
						class="absolute inset-0 -z-10 size-full object-cover"
					/>
					<div class="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/40"></div>
					<div class="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-white/10"></div>

					<div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
						<time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>
						<div class="-ml-4 flex items-center gap-x-4">
							<svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-gray-300/50">
								<circle r="1" cx="1" cy="1" />
							</svg>
							<div class="flex gap-x-2.5">
								<img
									src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
									class="size-6 flex-none rounded-full bg-gray-800/10"
								/>
								Michael Foster
							</div>
						</div>
					</div>
					<h3 class="mt-3 text-lg/6 font-semibold text-white">
						<a href="#">
							<span class="absolute inset-0"></span>
							Vel expedita assumenda placeat aut nisi optio voluptates quas
						</a>
					</h3>
				</article>
				<article
					class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
				>
					<img
						src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
						alt=""
						class="absolute inset-0 -z-10 size-full object-cover"
					/>
					<div class="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/40"></div>
					<div class="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-white/10"></div>

					<div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
						<time datetime="2020-03-10" class="mr-8">Mar 10, 2020</time>
						<div class="-ml-4 flex items-center gap-x-4">
							<svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-gray-300/50">
								<circle r="1" cx="1" cy="1" />
							</svg>
							<div class="flex gap-x-2.5">
								<img
									src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
									class="size-6 flex-none rounded-full bg-gray-800/10"
								/>
								Lindsay Walton
							</div>
						</div>
					</div>
					<h3 class="mt-3 text-lg/6 font-semibold text-white">
						<a href="#">
							<span class="absolute inset-0"></span>
							Libero quisquam voluptatibus nam iusto qui dolor
						</a>
					</h3>
				</article>
				<article
					class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
				>
					<img
						src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
						alt=""
						class="absolute inset-0 -z-10 size-full object-cover"
					/>
					<div class="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/40"></div>
					<div class="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-white/10"></div>

					<div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
						<time datetime="2020-02-12" class="mr-8">Feb 12, 2020</time>
						<div class="-ml-4 flex items-center gap-x-4">
							<svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-gray-300/50">
								<circle r="1" cx="1" cy="1" />
							</svg>
							<div class="flex gap-x-2.5">
								<img
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
									class="size-6 flex-none rounded-full bg-gray-800/10"
								/>
								Tom Cook
							</div>
						</div>
					</div>
					<h3 class="mt-3 text-lg/6 font-semibold text-white">
						<a href="#">
							<span class="absolute inset-0"></span>
							Asperiores mollitia et dolor autem modi sit eius quisquam
						</a>
					</h3>
				</article>
			</div>
		</div>
	</main>
</div>

<Footer />
