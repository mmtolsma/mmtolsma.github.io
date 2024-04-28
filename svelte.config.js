import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      // default options are shown, you can leave these out
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'
    }),
    routes: 'src/routes',
    paths: {
      base: '/mysite', // The base path for your project
    },
	}
};

export default config;
