# TWOPNM Academy Website

Responsive React/Vite website for TWOPNM Academy with dedicated content pages and an application workflow.

## Run locally

```bash
npm install
npm run dev
```

`npm run dev` starts the Vite frontend and application API together. The site runs at `http://localhost:5173` and the API runs at `http://localhost:3001`.

## Application submissions

The application form sends `POST /api/applications`. Every valid submission is stored server-side in `data/applications.json` and an email notification is sent to `ADMIN_EMAIL` when SMTP is configured.

To enable email notifications:

1. Copy `.env.example` to `.env`.
2. Add the organisation's SMTP host, username, password, port, and sender address.
3. Set `ADMIN_EMAIL` to the admin inbox that should receive applications.
4. Restart `npm run dev`.

SMTP credentials stay in `.env` and are excluded from git. The JSON submission store is also excluded from git and should be moved to a database before production deployment.

## Validation

```bash
npm run lint
npm run build
```
