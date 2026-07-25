# RLJ Website

The public website for the Reinforcement Learning Journal (RLJ), styled after
[JMLR](https://www.jmlr.org/): volumes of papers, per-paper pages with
abstract/PDF/BibTeX, an editorial board page, submission info, and search.

Built with Next.js (App Router) as a fully static site — no database, no
server. All website content lives in plain `.md` and `.json` files under
`content/`.

## Running locally

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Building for deployment

```
npm run build
```

This produces a fully static site in `out/` that can be hosted on any static
file host (GitHub Pages, Netlify, S3, a plain web server, ...).

## Editing content

All content is in `content/` — no code changes needed:

- `content/pages/home.md` — the home page
- `content/pages/submit.md` — the Submissions page
- `content/board.json` — editorial board members (grouped by role)
- `content/papers/<year>.json` — one file per proceedings year, containing
  that year's issue metadata (`title`, `doi`, `issuePdf`, optional
  `coverPagesPdf`) and its papers. Each paper has: `slug` (its URL, e.g.
  `/papers/<slug>`), `number` (its paper number in the source proceedings,
  matching the PDF filename), `title`, `authors`, `volume`, `year`, `pages`,
  `venue`, `pdfUrl`, `suppUrl`, `abstract`, and `bibtex` (shown verbatim on
  the paper page).

Volume pages and the volume index are derived automatically from the papers'
`volume` fields. Titles and abstracts may contain inline LaTeX (`$...$`),
rendered in the browser by MathJax.

The initial paper data (2024 volumes 1–5, 2025 volume 6) and page text were
imported from [rlj.cs.umass.edu](https://rlj.cs.umass.edu) on 2026-07-24; PDF
links point at the files hosted there.

## Project structure

- `app/` — routes (home, volumes, papers, board, submit, search)
- `components/` — shared UI (sidebar, footer, paper list entry, BibTeX block)
- `lib/content.ts` — reads and parses the `content/` files at build time
- `content/` — all website content (see above)
