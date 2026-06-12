# InfoBytes Nepal

Professional full-stack website and CMS for InfoBytes Nepal.

## Setup

1. Copy `.env.example` to `.env.local` and fill the values.
2. Run database migration and seed commands.
3. Start the development server.

```bash
npm run db:migrate
npm run db:seed
npm run dev
```

## Environment Variables

```env
TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=
ADMIN_EMAIL=
ADMIN_PASSWORD=
AUTH_SECRET=
NEXT_PUBLIC_SITE_URL=
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run db:migrate
npm run db:seed
```

## Admin

Admin URL:

```text
/admin-infobytesnepal
```

Create the first admin user through `npm run db:seed` after setting `ADMIN_EMAIL` and `ADMIN_PASSWORD`.

## Deployment

Set the environment variables in Vercel, run the migration against Turso, then deploy with the normal build command.
