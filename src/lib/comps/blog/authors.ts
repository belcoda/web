const authors = [
	{
		name: 'Django Merope',
		slug: 'django-merope',
		avatar: '/avatars/django-img.jpg',
		title: 'Project lead'
	},
	{
		name: 'Dr. Fabuloso the Fabulous',
		slug: 'dr-fabuloso-the-fabulous',
		avatar:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		title: 'Senior developer'
	}
] as const;

export type Author = {
	name: (typeof authors)[number]['name'];
	slug: (typeof authors)[number]['slug'];
	avatar: string;
	title: string;
};

export function isAuthor(name: string): name is Author['name'] {
	return authors.some((author) => author.name === name);
}

export function getAuthorBySlug(slug: string): Author | undefined {
	return authors.find((author) => author.slug === slug);
}

export default authors;
