# Contract Agent API - Copilot Instructions

## Code Language Policy — **ALL code, comments, commit messages, and documentation MUST be in English.** No exceptions.

## Project Overview
This is a **Next.js 14 API-only application** deployed to Vercel. It aggregates and scores contract job opportunities from multiple sources (Emagine, Verama) based on tech stack preferences and recency. No frontend UI—pure API routes.

### Public API Design Philosophy
- **Public, read-only** endpoints with no authentication required
- Consumers include ChatGPT, CLI tools, Notion integrations, or any HTTP client
- **Server-side credentials only** - All job source API keys stored securely in Vercel environment variables
- Zero PII or user data collection—purely job aggregation and scoring

## Architecture & Structure

### API Routes (`src/app/api/*/route.ts`)
- Uses **Next.js App Router** convention: each folder under `src/app/api/` exports HTTP handlers (GET, POST, etc.)
- `/api/health` - Health check endpoint returning `{ ok: true, ts: Date.now() }`
- `/api/jobs?since=ISO_DATE` - Main endpoint that fetches, filters, deduplicates, scores, and returns jobs

### Job Scoring Algorithm (`src/app/api/jobs/route.ts`)
The `score()` function is central to the business logic:
- **Tech stack match** (+6 points each): Azure, .NET, C#, DevOps, Kubernetes, Terraform, Bicep, CI/CD, microservices
- **Domain match** (+3 points each): fintech, bank, payments, trading, capital markets
- **Remote preference** (+1 point): `onsite_remote === "remote"`
- **Recency bonus**: Up to +1 point for jobs published within last 24 hours (linear decay)
- Jobs sorted by score descending before returning

### Type System
- `Job` type defined inline in `route.ts` with fields: `id`, `title`, `company`, `location`, `onsite_remote` (enum), optional rate/start/duration, `link`, `source`, `published_at`, `reasons`
- TypeScript strict mode enabled; uses `@/*` path alias for `src/*`

## Development Workflow

### Package Manager: **pnpm** (not npm/yarn)
```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server on port 3000
pnpm build            # Production build
pnpm lint             # ESLint (non-blocking, || true)
pnpm test             # Placeholder (vitest planned but not implemented)
```

### Local Development
- Run `pnpm dev` to start Next.js on `http://localhost:3000`
- API routes available at `/api/health` and `/api/jobs`
- Copy `.env.local.example` to `.env.local` for local environment setup
- Environment variables: `EMAGINE_API_KEY`, `VERAMA_API_KEY` (currently unused with demo data)

### Testing
- Automated smoke test: `bash scripts/smoke-test.sh http://localhost:3000`
- VS Code tasks available: Run Task → "API: smoke test (local)" or "API: health check"
- Manual tests:
  ```bash
  curl -sS http://localhost:3000/api/health | jq .
  curl -sS http://localhost:3000/api/jobs | jq '.jobs | length, .[0]'
  ```
- Test specification in `.github/smoke-test.yml` for agent-based testing

### Deployment
- **Vercel** is the production platform
- CI/CD via `.github/workflows/ci-cd.yml`:
  - Runs lint + test on all PRs and pushes to `main`
  - Preview deployments on PRs
  - Production deployment on `main` branch pushes
- Requires GitHub secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
- Function timeout: 10s max (configured in `vercel.json`)

## Conventions & Patterns

### API Response Format
- Use `NextResponse.json({ ... })` for all responses
- Jobs endpoint returns `{ jobs: Job[] }` with jobs sorted by score
- No pagination implemented yet

### Deduplication Strategy
Jobs are deduplicated by composite key: `title.toLowerCase()|company.toLowerCase()|source|link`

### Error Handling
- Currently minimal—no explicit try/catch blocks
- Lint errors tolerated (`|| true` in CI)
- Consider adding proper error boundaries and validation when expanding

### Environment Variables
- **Local development**: Copy `.env.local.example` to `.env.local` with placeholder values
- **Production/Preview**: Set in Vercel Dashboard → Project → Settings → Environment Variables
- Access via `process.env.VARIABLE_NAME`
- Use `void` to suppress unused variable warnings (e.g., `void EMAGINE_API_KEY;`)
- Never commit real credentials—`.env*` files are gitignored

## Adding New Features

### New API Route
1. Create folder under `src/app/api/<route-name>/`
2. Add `route.ts` with exported HTTP method functions (GET, POST, etc.)
3. Import `NextResponse` from `next/server` for responses
4. TypeScript types defined inline or in separate file

### New Job Source Integration
1. Add API key to environment variables (`.env.local` locally, Vercel dashboard for production)
2. Fetch jobs in `GET` handler of `/api/jobs/route.ts`
3. Transform to `Job` type format
4. Add to `raw` array before filtering/scoring
5. Update deduplication logic if needed

### Modifying Scoring Logic
- Edit `score()` function in `src/app/api/jobs/route.ts`
- Adjust weights for stack/domain keywords or add new criteria
- Consider adding tests (vitest) when more complex logic is added

## Key Files Reference
- `package.json` - Scripts, dependencies (Next.js 14, React 18, TypeScript 5.6)
- `tsconfig.json` - Strict mode, `@/*` aliases, ES2020 target
- `vercel.json` - API route timeout configuration (10s max)
- `.github/workflows/ci-cd.yml` - CI pipeline and Vercel deployment
- `.github/smoke-test.yml` - Smoke test specification for API validation
- `scripts/smoke-test.sh` - Executable smoke test script (bash)
- `.vscode/tasks.json` - VS Code tasks for quick API testing
- `src/app/api/jobs/route.ts` - Core business logic (fetching, scoring, filtering)
- `.env.local.example` - Template for local environment variables
- `README.md` - Complete project documentation and usage guide

## Known Gaps & TODOs
- No actual external API integration yet (demo data only)
- No tests (vitest planned but not configured)
- No pagination or limit query params
- No authentication/rate limiting
- Lint configured but errors non-blocking

## CRITICAL: Documentation Policy
**NEVER create README files, documentation files, or summary markdown files unless explicitly requested by the user.**
- Do NOT create `README.md`, `COMPONENT-NAME-README.md`, or similar documentation files
- Do NOT create summary or changelog files after making changes
- Focus on implementing the actual code changes requested
- User will request documentation separately if needed
