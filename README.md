# ulatowski.net

This is the personal portfolio website of Rafal Ulatowski, built with [Next.js](https://nextjs.org) 16.

## Getting Started

First, install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Testing

This project uses [Vitest](https://vitest.dev) for unit testing.

```bash
pnpm test          # Run tests
pnpm test:ui       # Run tests with UI
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Environment Variables

This project uses environment variables for configuration. Defaults are provided in `src/config/site-config.json`, but can be overridden with `NEXT_PUBLIC_*` prefixed variables for client-side access.

Required keys (with defaults in `site-config.json`):
- `NEXT_PUBLIC_LINKEDIN_URL` - LinkedIn profile URL
- `NEXT_PUBLIC_GITHUB_URL` - GitHub profile URL
- `NEXT_PUBLIC_EMAIL` - Contact email

Optional keys:
- `NEXT_PUBLIC_GA_ID` - Google Analytics Measurement ID
- `NEXT_PUBLIC_HOTJAR_ID` - Hotjar site ID
- `NEXT_PUBLIC_HOTJAR_SV` - Hotjar snippet version (defaults to 6)
- `MAINTENANCE_MODE` - Set to `true` to enable maintenance mode

Best practice:
- Do NOT commit production secrets to the repo. Use your hosting provider's environment variable settings.
- Add a `.env.example` to the repo to show the required keys (already included).

Examples:

- **Vercel**: Project → Settings → Environment Variables. Add the keys for the Production environment so `next build` sees them.

- **Netlify**: Site settings → Build & deploy → Environment → Environment variables.

- **GitHub Actions**: Set env variables in the workflow before `next build`:

```yaml
env:
  NEXT_PUBLIC_GA_ID: ${{ secrets.NEXT_PUBLIC_GA_ID }}
  NEXT_PUBLIC_HOTJAR_ID: ${{ secrets.NEXT_PUBLIC_HOTJAR_ID }}
  NEXT_PUBLIC_EMAIL: ${{ secrets.NEXT_PUBLIC_EMAIL }}

steps:
  - name: Build
    run: npm run build
```

If you build locally or run a custom server, create `.env.local` on the server or provide the variables to the process environment prior to building.

## Image Optimization

This repo includes a small script to convert raster images located in `public/images` to WebP format using `sharp`.

Run locally:

```powershell
pnpm install
pnpm run convert-images
```

## CI/CD

The project includes GitHub Actions workflows for continuous integration and deployment:

- `.github/workflows/ci-cd.yml`: Runs linting, testing, and deploys to Vercel on pushes to the main branch.
- `.github/workflows/lighthouse-ci.yml`: Runs Lighthouse performance audits weekly (and on-demand) to gather metrics for the production site. Set `SITE_URL` as a GitHub secret (e.g. `https://ulatowski.net`) and optionally `LHCI_GITHUB_APP_TOKEN` for artifact uploads.

<!-- Test deploy trigger - 2025-11-21 03:11:21 -->

<!-- Webhook test - 2025-11-21 03:13:08 -->
