# S-1 — IPO Investment Analysis

A Next.js (App Router) site rendering the S-1 IPO investment committee report.

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

