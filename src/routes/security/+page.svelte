<script lang="ts">
	import Header from '$lib/comps/nav/Header.svelte';
	import Footer from '$lib/comps/nav/Footer.svelte';

	import ControlBlock from './_components/ControlBlock.svelte';
	import ControlItem from './_components/ControlItem.svelte';
	import Subprocessor from './_components/Subprocessor.svelte';
</script>

<svelte:head>
	<title>Security | Belcoda</title>
	<meta
		name="description"
		content="Belcoda takes security seriously. We've implemented a comprehensive security program to protect our users' data and privacy."
	/>
	<meta name="keywords" content="Belcoda, security, privacy, data protection" />
</svelte:head>

<Header />
<div class="bg-gray-900 pt-32 pb-8 sm:pt-48">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Security</h2>
			<p class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
				Belcoda takes security seriously. We've implemented a comprehensive security program to
				protect our users' data and privacy.
			</p>
		</div>
	</div>
</div>
<main class="bg-gray-50 pt-8 pb-12 sm:pt-12 sm:pb-20">
	<div class="mx-auto max-w-7xl px-6 text-base lg:px-8 lg:text-lg">
		<div class="mb-8 text-4xl font-black tracking-tight text-gray-900 lg:text-5xl">Controls</div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			<ControlBlock title="Policies">
				<ControlItem>Privacy Policy</ControlItem>
				<ControlItem>Terms of Service</ControlItem>
				<ControlItem>Acceptable Use Policy</ControlItem>
			</ControlBlock>
			<ControlBlock title="Legal">
				<ControlItem>Terms of Service</ControlItem>
				<ControlItem>Privacy Policy</ControlItem>
				<ControlItem>Acceptable Use Agreement</ControlItem>
			</ControlBlock>
			<ControlBlock title="Internal">
				<ControlItem>Single Sign On (SSO)</ControlItem>
				<ControlItem>Internal assessments</ControlItem>
				<ControlItem>Staff training</ControlItem>
				<ControlItem>Least privileged access</ControlItem>
			</ControlBlock>
			<ControlBlock title="Reports">
				<ControlItem>Penetration testing reports</ControlItem>
				<ControlItem>Vulnerability assessment reports</ControlItem>
				<ControlItem>Incident response reports</ControlItem>
			</ControlBlock>
			<ControlBlock title="Data security">
				<ControlItem>Secure password management</ControlItem>
				<ControlItem>Encryption in transit</ControlItem>
				<ControlItem>Encryption at rest</ControlItem>
				<ControlItem>Secure backups</ControlItem>
			</ControlBlock>
			<ControlBlock title="Infrastructure">
				<ControlItem>Virtual Privacy Cloud</ControlItem>
				<ControlItem>Secure tunneling</ControlItem>
				<ControlItem>Separate production environment</ControlItem>
			</ControlBlock>
			<ControlBlock title="Application security">
				<ControlItem>DDoS mitigation</ControlItem>
				<ControlItem>Web application firewall</ControlItem>
				<ControlItem>Automated vulnerability scanning</ControlItem>
				<ControlItem>Credential management</ControlItem>
			</ControlBlock>
		</div>
		<div class="mt-12 mb-8 text-4xl font-black tracking-tight text-gray-900 lg:text-5xl">
			Subprocessors
		</div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			<Subprocessor name="Amazon Web Services" location="Europe" />
			<Subprocessor name="Postmark" location="United States" />
			<Subprocessor name="YCloud" location="Singapore" />
			<Subprocessor name="Whapi" location="Europe" />
			<Subprocessor name="Stripe" location="Europe" />
			<Subprocessor name="Fly.io" location="Europe" />
		</div>
	</div>
</main>
<Footer />
