# VV Ultimatum Guide

Source-checked fan guide site for `VV: ULTIMATUM` on Roblox.

## Stack

- Next.js 16 App Router
- React 19
- Static export with `output: "export"`
- TypeScript content model
- JSON-LD, sitemap, robots, and `llms.txt`

## Local Development

```bash
pnpm install
pnpm dev -- --port 3001
```

Open `http://localhost:3001/`.

## Quality Check

```bash
pnpm quality
```

This runs content validation, TypeScript, ESLint, and `next build`.

## Cloudflare Pages

- Build command: `pnpm build`
- Output directory: `out`
- Production branch: `main`
- Environment variables:
  - `NEXT_PUBLIC_SITE_URL=https://vvultimatum.games`
  - `NODE_VERSION=22`
  - `PNPM_VERSION=10.13.1`

Use `vvultimatum.games` as the canonical domain. Add `www.vvultimatum.games` in Cloudflare Pages Custom domains or configure a Cloudflare Bulk Redirect from `www` to the apex domain.

## Notes

This is an independent fan-made guide. It is not affiliated with Roblox Corporation, Midnight Continent, Shueisha, Viz Media, or Bleach rights holders.
