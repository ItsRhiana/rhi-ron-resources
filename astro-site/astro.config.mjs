// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';

export default defineConfig({
	site: 'https://itsrhiana.github.io',
	base: '/rhi-ron-resources',
	trailingSlash: 'always',

	integrations: [
		starlight({
			title: "Rhi's RoN Resources",

			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				{
					label: 'Tier Lists',
					link: '/tier-lists/',
				},
				{
					label: 'Styles',
					link: '/styles/',
				},
			],
		}),
		icon(),
	],
});