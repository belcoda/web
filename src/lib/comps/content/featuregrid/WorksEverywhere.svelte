<script lang="ts">
	let timeout: ReturnType<typeof setTimeout>;
	import { onMount, onDestroy } from 'svelte';
	let index = $state(0);
	const textInDifferentLanguages: Array<{ text: string; rightAlign: boolean }> = [
		{ text: 'Works everywhere', rightAlign: false },
		// Thai
		{ text: 'ทำงานทุกที่', rightAlign: false },
		// Vietnamese
		{ text: 'Làm việc ở mọi nơi', rightAlign: false },
		// Indonesian
		{ text: 'Bekerja di mana saja', rightAlign: false },
		// Filipino
		{ text: 'Gumagamit ng kahit saan', rightAlign: false },
		// Korean
		{ text: '어디서나 작동합니다', rightAlign: false },
		// Japanese
		{ text: 'どこでも使えます', rightAlign: false },
		// Chinese
		{ text: '在任何地方都能使用', rightAlign: false },
		// Russian
		{ text: 'Работает везде', rightAlign: false },
		// Arabic
		{ text: 'يعمل في كل مكان', rightAlign: true },
		// French
		{ text: 'Fonctionne partout', rightAlign: false },
		// Spanish
		{ text: 'Funciona en todos lados', rightAlign: false },
		// Portuguese
		{ text: 'Funciona em qualquer lugar', rightAlign: false },
		// German
		{ text: 'Funktioniert überall', rightAlign: false },
		// Polish
		{ text: 'Działa wszędzie', rightAlign: false },
		// Turkish
		{ text: 'Her yerde çalışır', rightAlign: false },
		// Hindi
		{ text: 'हर जगह काम करता है', rightAlign: false },
		// Hebrew
		{ text: 'עובד בכל מקום', rightAlign: true },
		// Greek
		{ text: 'Λειτουργεί παντού', rightAlign: false },
		// Swahili
		{ text: 'Inafanya kazi kila mahali', rightAlign: false }
	];
	onMount(() => {
		timeout = setInterval(() => {
			index = Math.floor(Math.random() * textInDifferentLanguages.length);
		}, 1000);
	});

	onDestroy(() => {
		clearTimeout(timeout);
	});

	const currentText = $derived(textInDifferentLanguages[index]);
	const text = $derived(currentText.text);
	const rightAlign = $derived(currentText.rightAlign);
</script>

<div class:text-right={rightAlign}>
	{text}
</div>
