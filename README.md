# mmtolsma.github.io

Michael Tolsma's personal site — a static [SvelteKit](https://kit.svelte.dev/) + [Tailwind](https://tailwindcss.com/) site deployed to GitHub Pages at [mmtolsma.github.io](https://mmtolsma.github.io).

## Stack

- **SvelteKit** with `adapter-static` (fully prerendered, no server runtime)
- **Tailwind CSS**
- **Font Awesome** (loaded via CDN in `src/app.html`)

## Local development

```bash
npm install
npm run dev        # Vite dev server
npm run lint       # prettier --check + eslint
npm run format     # prettier --write
```

## Environment

The contact form POSTs to `VITE_VERCEL_URL` (the Vercel `/api/contact` endpoint). Because it's a
`VITE_`-prefixed variable, Vite inlines it into the client bundle at build time.

- Set it in a local **`.env.production`** — this file is gitignored, so create it on any machine you
  build from.
- **`.env.example`** documents the required variable.

```bash
# .env.production
VITE_VERCEL_URL=<your Vercel /api/contact endpoint>
```

## Contact form

The form submits to a serverless function hosted separately, which emails the submission. This
frontend only needs that function's endpoint URL (`VITE_VERCEL_URL`) and holds no credentials of
its own.

- **Dev** (`npm run dev`): submission is faked (`import.meta.env.DEV`) — it shows a styled in-page
  success message without hitting the endpoint, so no real email is sent.
- **Production** build: the real native form POST to `VITE_VERCEL_URL` is used.

**Known limitation — success behaves differently in prod.** Because production uses a native form
POST, on success the browser *navigates away* to the serverless function's own (unstyled) response
page, instead of staying on the site like the dev fake does. Unifying them — a styled, in-page
success in production too — would mean submitting via `fetch()` and rendering the result
client-side, which requires the serverless function to return CORS headers (it's a cross-origin
request). That's a change in the separate function repo and hasn't been done; the native POST is
the simple, working fallback.

## Build & deploy

```bash
npm run build      # vite build && cp .nojekyll build
npm run preview    # serve the built output (production mode) to sanity-check before deploying
npm run deploy     # npx gh-pages -d build -t true  → pushes build/ to the gh-pages branch
```

Notes:

- `.env.production` must exist on the machine you build from (it's gitignored, so it won't come from
  git).
- Deploy publishes whatever is in `build/`, so always `npm run build` from the code you intend to
  ship before `npm run deploy`.

## Troubleshooting

GitHub Pages runs Jekyll by default, which ignores files/folders starting with `_` — that breaks
SvelteKit's `_app` output. The empty `.nojekyll` file disables Jekyll, and the `build` script copies
it into the build output:

```jsonc
"scripts": {
  "build": "vite build && cp .nojekyll build",  // ensures .nojekyll ends up in build/ (cp on macOS/Linux; was `copy` on Windows)
  "deploy": "npx gh-pages -d build -t true"       // -t true includes dotfiles (.nojekyll) in the deploy
}
```
