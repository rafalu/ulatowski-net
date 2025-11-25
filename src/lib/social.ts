// Central source of truth for social links.
// Strategy:
// 1. If running in the browser and `window.__SITE_CONFIG` is present (injected by layout), prefer that.
// 2. Else, use committed `src/config/site-config.json` (non-sensitive, safe to commit) if available on the server.
// 3. Fall back to NEXT_PUBLIC_* env vars (useful for builds or overriding values).

import siteConfig from "@/config/site-config.json";

interface SiteConfig {
  linkedin?: string;
  github?: string;
  email?: string;
}

declare global {
  interface Window {
    __SITE_CONFIG?: SiteConfig;
  }
}

let LINKEDIN_URL = siteConfig.linkedin ?? "";
let GITHUB_URL = siteConfig.github ?? "";
let EMAIL = siteConfig.email ?? "";

// 1) Browser runtime injected config
if (typeof window !== "undefined" && window.__SITE_CONFIG) {
  const cfg = window.__SITE_CONFIG;
  LINKEDIN_URL = cfg.linkedin ?? LINKEDIN_URL;
  GITHUB_URL = cfg.github ?? GITHUB_URL;
  EMAIL = cfg.email ?? EMAIL;
} else {
  // 2) Environment overrides
  LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? LINKEDIN_URL;
  GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL ?? GITHUB_URL;
  EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? EMAIL;
}

export { EMAIL, GITHUB_URL, LINKEDIN_URL };

const socialConfig = {
  LINKEDIN_URL,
  GITHUB_URL,
  EMAIL,
};

export default socialConfig;
