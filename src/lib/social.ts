// Central source of truth for social links.
// Strategy:
// 1. If running in the browser and `window.__SITE_CONFIG` is present (injected by layout), prefer that.
// 2. Else, use committed `src/config/site-config.json` (non-sensitive, safe to commit) if available on the server.
// 3. Fall back to NEXT_PUBLIC_* env vars (useful for builds or overriding values).

let LINKEDIN_URL = "https://www.linkedin.com/in/rafal-kowalski";
let GITHUB_URL = "https://github.com/rafal-kowalski";
let EMAIL = "rafal.kowalski@email.com";

// 1) Browser runtime injected config
if (typeof window !== "undefined" && (window as any).__SITE_CONFIG) {
  const cfg = (window as any).__SITE_CONFIG;
  LINKEDIN_URL = cfg.linkedin ?? LINKEDIN_URL;
  GITHUB_URL = cfg.github ?? GITHUB_URL;
  EMAIL = cfg.email ?? EMAIL;
} else {
  // 2) Try to load committed JSON config on the server (available at build/runtime)
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const siteConfig = require("@/config/site-config.json");
    LINKEDIN_URL = siteConfig.linkedin ?? LINKEDIN_URL;
    GITHUB_URL = siteConfig.github ?? GITHUB_URL;
    EMAIL = siteConfig.email ?? EMAIL;
  } catch {
    // ignore if not available
  }

  // 3) Environment overrides
  LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? LINKEDIN_URL;
  GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL ?? GITHUB_URL;
  EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? EMAIL;
}

export { EMAIL, GITHUB_URL, LINKEDIN_URL };

export default {
  LINKEDIN_URL,
  GITHUB_URL,
  EMAIL,
};
