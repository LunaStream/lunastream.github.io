// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https:/lunastream.github.io',
	integrations: [
		starlight({
			title: 'LunaStream',
			social: {
				github: 'https://github.com/LunaStream/LunaStream',
			},
			logo: {
				src: './src/assets/lunastream.svg',
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
