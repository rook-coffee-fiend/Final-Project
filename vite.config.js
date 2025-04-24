import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
//import path from 'path';

export default defineConfig(
	{
	base: '/Final-Project/',
	plugins: [svelte()],
	build: {
		outDir: 'docs',
		emptyOutDir: true
		}
	}
);


