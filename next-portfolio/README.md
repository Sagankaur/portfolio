# Portfolio application

The deployable Next.js application for [Sagandeep Kaur's portfolio](https://portfolio-kappa-swart-36.vercel.app).

## Development

Node.js 20.9 or newer is required.

```bash
npm ci
npm run dev -- --hostname 0.0.0.0
```

Open <http://localhost:3000>.

## Checks

```bash
npm run lint
npm run build
```

## Structure

- `app/page.tsx`: experience, skills, education, and project cards
- `app/about/page.tsx`: short profile route
- `app/layout.tsx`: shared metadata and navigation
- `app/globals.css`: global and Tailwind styles
- `public/`: static visual assets

For Docker, deployment, content-maintenance guidance, and project limitations, see the [repository README](../README.md).
