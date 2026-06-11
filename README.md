# SpaceX S-1 — IPO Investment Analysis

A Next.js (App Router) site rendering the SpaceX S-1 IPO investment committee report. Converted from the original static `SpaceX_S1_IPO_Analysis.html`.

## Structure

- `app/layout.tsx` — root layout, fonts (Inter + Space Mono via `next/font`), metadata
- `app/globals.css` — full report stylesheet
- `app/page.tsx` — assembles the report
- `components/` — header, score panel, metrics grid, shared UI primitives
- `components/sections/` — the 16 analysis sections (4 per file)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

Option 1 — Git integration (recommended):

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.

Option 2 — Vercel CLI:

```bash
npm i -g vercel
vercel
```
