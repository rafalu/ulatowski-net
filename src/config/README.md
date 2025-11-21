# Site Config

This folder contains `site-config.json` — a committed, non-sensitive JSON file with site-level defaults (social links, public email, etc.).

Approach
- `site-config.json` is safe to commit and is treated like `appsettings.json` in .NET for non-sensitive settings.
- At runtime we inject `site-config.json` into the browser via `window.__SITE_CONFIG` using an inline script in `src/app/layout.tsx` so client code can read runtime values without requiring a rebuild.
- Priority order for values (highest → lowest):
  1. `window.__SITE_CONFIG` (runtime client injection)
  2. `src/config/site-config.json` (committed defaults used at build/server)
  3. `NEXT_PUBLIC_*` env variables (build-time overrides)

Deployment notes
- For values that must differ between dev/production, set `NEXT_PUBLIC_*` env vars in your hosting provider (Vercel, Netlify, Azure App Service, etc.) so they are available during `next build`.
- To change runtime non-sensitive values without rebuilding, update the `site-config.json` file on the server that serves the built app and reload the page.

Security
- Do NOT store secrets or API keys in `site-config.json`. Keep those in secure environment variables or a secrets manager.
