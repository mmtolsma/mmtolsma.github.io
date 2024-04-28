import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        appDir: 'app', // Required as the default is _app
        adapter: adapter()
    },
    preprocess: preprocess()
};
export default config;