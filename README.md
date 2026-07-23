# RLJ Website

The public website for the Reinforcement Learning Journal (RLJ), styled after
[JMLR](https://jmlr.org/): volumes of papers, per-paper pages with
abstract/PDF/BibTeX, an editorial board page, and submission info. Manuscript
submission and peer review happen on OpenReview — this site only publishes
accepted papers.

Built with Next.js (App Router) and Prisma + PostgreSQL.

## Setup

1. Install dependencies:

   ```
   npm install
   ```

2. Make sure PostgreSQL is running locally and `DATABASE_URL` in `.env`
   points to it (defaults to a local `rlj` database/role — see below).

3. Apply migrations and generate the Prisma client:

   ```
   npx prisma migrate dev
   ```

4. Seed sample data (volumes, papers, editorial board):

   ```
   npx prisma db seed
   ```

5. Start the dev server:

   ```
   npm run dev
   ```

   Then open http://localhost:3000.

### Local PostgreSQL

This project expects a local Postgres role/database named `rlj`:

```
createuser rlj --pwprompt   # password: rlj
createdb rlj --owner=rlj
```

Or, if you use Homebrew's `postgresql@16`, just install it once:

```
brew install postgresql@16
```

## Running locally (day-to-day)

Once set up, this is all you need each time you come back to work on it:

```
brew services run postgresql@16   # start Postgres for this session only
npm run dev                       # start the dev server
```

Then open http://localhost:3000.

`brew services run` starts Postgres without registering it to auto-launch on
every login — it only runs until you stop it or restart your machine. If you
*do* want it to always be running in the background, use
`brew services start postgresql@16` instead (and `brew services stop
postgresql@16` to undo that).

### Stopping

- Dev server: `Ctrl+C` in the terminal it's running in (or
  `pkill -f "next dev"` if it was started in the background).
- Postgres: `brew services stop postgresql@16`.

## Adding real content

Papers, volumes, and editorial board members are stored in Postgres, not
hand-coded in the pages. Edit them via `npx prisma studio`, or replace the
sample data in `prisma/seed.ts` and re-run `npx prisma db seed`.

Before going live, update the OpenReview venue link in
`app/submit/page.tsx` (`OPENREVIEW_VENUE_URL`).

## Project structure

- `app/` — routes (home, volumes, papers, board, about, submit, search)
- `components/` — shared UI (sidebar, footer, paper list item, BibTeX block)
- `lib/db.ts` — Prisma client singleton
- `lib/bibtex.ts` — BibTeX generation from paper data
- `prisma/schema.prisma` — data model
- `prisma/seed.ts` — sample seed data
