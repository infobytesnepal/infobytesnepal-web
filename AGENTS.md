<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-rules -->
# Infobytes Nepal — working rules

## Before you call anything done

```
node ./node_modules/typescript/bin/tsc --noEmit   # typecheck
npm run lint                                      # 1 pre-existing warning in (public)/about/page.tsx
npm run check:blog                                # blog markdown round-trips + every author has a /team page
npm run check:pages                               # all landing pages satisfy the CMS schema
npm run build                                     # the real gate; this is a live site with no staging
```

## `.env.local` points at the PRODUCTION database

`TURSO_DATABASE_URL` in `.env.local` is the live Turso database, and `loadEnvConfig`
reads it in every script. So `npm run db:migrate`, `db:seed*`, `db:user` and
`db:optimize-images` all write to **production** by default. `local.db` in the repo
root is a decoy — nothing uses it while that variable is set.

Check where you are pointing before writing, and tell the user before you do:

```
grep TURSO_DATABASE_URL .env.local
```

## Never store an uploaded image as a data URI on a referencing row

There is no object storage, so `media_assets.url` holds base64 data URIs — that
table is the byte store and is correct as it is. Everything that *points* at an
image (`site_settings`, `products`, `page_content`, `posts`) must hold a
`/api/media/<id>.<ext>` path instead.

This is not a style preference. When those rows held data URIs the home page was a
2.3 MB document of which 90% was inlined base64, re-downloaded on every view,
uncacheable and impossible to run through the image optimizer. Use
`storeUploadedImage()` / `storeBlogImage()` from `lib/media.ts`, which return the
path form. `npm run db:optimize-images` reports and fixes any that slip through.

The extension on the path matters: `next/image` refuses to optimize an SVG unless
the URL ends in `.svg`, so a path without one renders a broken image.

## Roles

`admin` reaches the whole CMS. `editor` reaches the content sections only — the
blog and the landing pages. Guards live in `lib/auth.ts`; every page and every
server action checks for itself, because hiding a sidebar link is presentation,
not access control. `requireAdmin()` is the default for anything new.

## Content that lives in the database

The blog (`posts`) and the SEO landing pages (`landing_page_content`) are both
CMS-editable. The landing pages merge the stored version *over* the typed objects
in `lib/seo-landing-pages*.ts`, so the repo stays the source of truth for anything
nobody has edited, and an empty or unreachable database degrades to the site as
committed. Never invert that direction.

When you change what a page shows, revalidate every surface that carries the same
content — the page, the sitemap, `llms.txt`, the `/api/v1/*` endpoints and the
`Accept: text/markdown` rendering. An agent reading a stale copy is the same bug
as a visitor seeing one.

## Windows

`pkill` does not reliably kill `next start` here; a stale server on the port will
silently serve old output and make you measure the wrong thing. Use PowerShell:

```
Get-CimInstance Win32_Process -Filter "Name='node.exe'" |
  Where-Object { $_.CommandLine -like '*next*start*' } |
  ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
```
<!-- END:project-rules -->
