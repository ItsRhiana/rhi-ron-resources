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

			customCss: [
				'./src/styles/fonts.css',
				'./src/styles/colors.css',
				"./src/styles/sidebar.css",

			],

			components: {
    Header: "./src/components/Header.astro",
},

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