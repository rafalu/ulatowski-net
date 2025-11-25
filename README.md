This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Environment & Deployment (production envs)

This project expects public environment variables with the `NEXT_PUBLIC_` prefix for social links and email. These values must be available at build time because they are embedded into the client bundle and used in statically generated HTML.

Keys used in this repo:
- NEXT_PUBLIC_LINKEDIN_URL
- NEXT_PUBLIC_GITHUB_URL
- NEXT_PUBLIC_EMAIL

Best practice:
- Do NOT commit production secrets to the repo. Use your hosting provider's environment variable settings.
- Add a `.env.example` to the repo to show the required keys (already included).

Examples:

- Vercel: Project → Settings → Environment Variables. Add the keys for the Production environment so `next build` sees them.

- Netlify: Site settings → Build & deploy → Environment → Environment variables.

- GitHub Actions: set env variables in the workflow before `next build`:

```yaml
env:
	NEXT_PUBLIC_LINKEDIN_URL: ${{ secrets.NEXT_PUBLIC_LINKEDIN_URL }}
	NEXT_PUBLIC_GITHUB_URL: ${{ secrets.NEXT_PUBLIC_GITHUB_URL }}
	NEXT_PUBLIC_EMAIL: ${{ secrets.NEXT_PUBLIC_EMAIL }}

steps:
	- name: Build
		run: npm run build
```

If you build locally or run a custom server, create `.env.production` on the server or provide the variables to the process environment prior to building.
# Image optimization

This repo includes a small script to convert raster images located in `public/images` to WebP format using `sharp`.

Run locally:

```powershell
pnpm install
pnpm run convert-images
```

# Lighthouse CI

There's a GitHub Actions workflow `.github/workflows/lighthouse-ci.yml` which runs weekly (and on-demand) to gather Lighthouse metrics for the production site. Set `SITE_URL` as a GitHub secret (e.g. `https://ulatowski.net`) and optionally `LHCI_GITHUB_APP_TOKEN` for artifact uploads.
# ulatowski-net

<!-- Test deploy trigger - 2025-11-21 03:11:21 -->

<!-- Webhook test - 2025-11-21 03:13:08 -->
