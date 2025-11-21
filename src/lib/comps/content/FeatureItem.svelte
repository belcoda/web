<script lang="ts">
	import { type Snippet } from 'svelte';
	import Users from '@lucide/svelte/icons/users';
	import DatabaseZap from '@lucide/svelte/icons/database-zap';
	import ActivityTimeline from '@lucide/svelte/icons/activity';
	import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal';
	import FileUpload from '@lucide/svelte/icons/file-up';
	import Hash from '@lucide/svelte/icons/hash';
	import LayoutDashboard from '@lucide/svelte/icons/layout-dashboard';
	import MessageCircleMore from '@lucide/svelte/icons/message-circle-more';
	import BotMessageSquare from '@lucide/svelte/icons/bot-message-square';
	import UsersRound from '@lucide/svelte/icons/users-round';
	import Database from '@lucide/svelte/icons/database';
	import Workflow from '@lucide/svelte/icons/workflow';
	import MessageSquare from '@lucide/svelte/icons/message-square';
	import PenLine from '@lucide/svelte/icons/pen-line';

	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import WalletCards from '@lucide/svelte/icons/wallet-cards';
	import FileStack from '@lucide/svelte/icons/file-stack';

	type Icon =
		| 'users'
		| 'database-zap'
		| 'activity-timeline'
		| 'sliders-horizontal'
		| 'file-up'
		| 'hash'
		| 'layout-dashboard'
		| 'message-circle-more'
		| 'bot-message-square'
		| 'users-round'
		| 'database'
		| 'workflow'
		| 'message-square'
		| 'pen-line'
		| 'shield-check'
		| 'wallet-cards'
		| 'file-stack';

	const {
		title,
		children,
		icon = 'users'
	}: { title: string; children: Snippet; icon: Icon } = $props();

	const iconComponent = {
		users: Users,
		'database-zap': DatabaseZap,
		'activity-timeline': ActivityTimeline,
		'sliders-horizontal': SlidersHorizontal,
		'file-up': FileUpload,
		hash: Hash,
		'layout-dashboard': LayoutDashboard,
		'message-circle-more': MessageCircleMore,
		'bot-message-square': BotMessageSquare,
		'users-round': UsersRound,
		database: Database,
		workflow: Workflow,
		'message-square': MessageSquare,
		'pen-line': PenLine,
		'shield-check': ShieldCheck,
		'wallet-cards': WalletCards,
		'file-stack': FileStack
	};

	const IconComponent = iconComponent[icon];
</script>

<div class="relative pl-16">
	<dt class="text-base/7 font-semibold text-gray-900">
		<div
			class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-900"
		>
			<IconComponent class="size-6 text-white" />
		</div>
		{title}
	</dt>
	<dd class="mt-2 text-base/7 text-gray-600">
		{@render children?.()}
	</dd>
</div>
