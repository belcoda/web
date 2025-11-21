export const tiers = [
	{
		name: 'Organization',
		price: 0,
		description: 'Everything needed for distributed campaigns.',
		interval: null,
		features: [
			{
				name: 'Unlimited contacts, users & teams'
			},
			{
				name: '3 admins accounts'
			},
			{
				name: 'All organizing features'
			},
			{
				name: 'Integrations & API'
			},
			{
				name: 'Community support'
			}
		]
	},
	{
		name: 'Institution',
		price: 279,
		description: 'For well-established organizations & campaigns',
		interval: 'admin',
		features: [
			{
				name: '25 admin accounts'
			},
			{
				name: 'Custom domain'
			},
			{
				name: 'Advanced analytics & reporting'
			},
			{
				name: 'Email & page templates'
			},
			{
				name: 'Live chat support'
			}
		]
	},
	{
		name: 'Network',
		price: 0,
		description: 'For large enterprise organizations & networks',
		features: [
			{
				name: 'SSO & role based access control'
			},
			{
				name: 'Dedicated support engineer'
			},
			{
				name: 'Cross-network organizing'
			},
			{
				name: 'White-glove onboarding'
			}
		]
	}
];
