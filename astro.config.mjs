// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'LunaStream',
			social: {
				github: 'https://github.com/LunaticSea/LunaStream',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', slug: 'getting-started/installation'  },
					],
					badge: { text: 'Updated (review it)', },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
					badge: { text: 'TO-DO', variant: 'caution' },
				},
			],
		}),
	],
});
