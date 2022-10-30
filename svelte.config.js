import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [
		".svelte",
		...mdsvexConfig.extensions
	],
	preprocess: [
		mdsvex(mdsvexConfig)
	],
	kit: {
		adapter: adapter({ edge: true }),

		inlineStyleThreshold: 5000
	}
};

export default config;
