// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://ChaNg1o1.github.io',
	base: '/chang1o-blog',
	integrations: [mdx(), sitemap(), tailwind()],
	server: {
		port: 4321,
	},
	// 启用实验性的检查器功能
	experimental: {
		// 在 Astro 5 中可以直接在这里开启或通过 Vite 插件
	},
	devToolbar: {
		enabled: true
	},
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
		shikiConfig: {
			theme: 'github-dark',
			wrap: true,
		},
	},
});
