# README

### Troubleshooting
After installing Tailwind according to this site: https://tailwindcss.com/docs/guides/sveltekit, it is also very important that your package.json is also updated to ensure that after running `npm run build`, the .nojekyll file is added to the `build` folder. The standandard `gh-pages` config does not do this. Had to add in these values:

```
"scripts": {
 "build": "vite build && copy .nojekyll build", // Ensures the `.nojekyll` is added to build folder.
 "deploy": "npx gh-pages -d build -t true", // `-t true` tells gh-pages to include dotfiles in the deployment.
},
```
