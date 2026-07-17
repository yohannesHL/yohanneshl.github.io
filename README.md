
# Yohannes Libanos — Personal Website

A static personal portfolio built with [Astro](https://astro.build) and design-token-driven CSS.

## Development

```bash
corepack enable
yarn install --immutable
yarn dev
```

## Build

```bash
yarn check
yarn build
```

The static output is written to `dist/`.

## Deployment

Pushes to `master` are checked, built and deployed by
`.github/workflows/deploy.yml`. In GitHub, set **Settings → Pages → Source** to
**GitHub Actions** before the first deployment.

## Project structure

- `src/layouts/` — Astro page layouts.
- `src/components/` — Section and UI components.
- `src/styles/` — Global styles and CSS design tokens.
- `src/scripts/` — Small client-side enhancement scripts.
- `src/data/` — Structured portfolio content.
- `docs/project-evidence.md` — Verified project claims and visual-source notes.
- `public/` — Static assets served at root (`/img/...`, favicon, etc.).
