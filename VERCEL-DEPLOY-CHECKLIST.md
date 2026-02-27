# Vercel Deploy Checklist (kernels.lv)

## 1) Project import
- Vercel dashboard -> `Add New...` -> `Project`
- Import this repository.
- Framework preset: `Next.js` (auto-detected).
- Root directory: repository root.
- Build command: `npm run build`
- Output: default (leave empty).

## 2) Environment variables
- Add in `Project -> Settings -> Environment Variables`:
  - `NEXT_PUBLIC_SITE_URL` = `https://kernels.lv`
  - `GEMINI_API_KEY` = `<real key>` (only if chatbot/API is used)
- Apply to `Production`, `Preview`, `Development`.
- Redeploy after adding/updating variables.

## 3) Domain setup
- `Project -> Settings -> Domains`:
  - Add `kernels.lv` (set as Primary).
  - Add `www.kernels.lv` (optional, recommended for redirect control).
- DNS at registrar:
  - Apex `kernels.lv` -> A record to Vercel (as instructed by Vercel UI).
  - `www` -> CNAME to Vercel target (shown by Vercel UI).

## 4) Canonical host policy
- Ensure canonical host is `https://kernels.lv`.
- If `www.kernels.lv` is connected, configure redirect `www -> apex` in Vercel Domains UI.
- Keep app-level language redirects active:
  - `/lv` -> `/`
  - `/lv/*` -> `/*`

## 5) Post-deploy technical checks
- Verify these URLs return `200`:
  - `https://kernels.lv/`
  - `https://kernels.lv/en`
  - `https://kernels.lv/robots.txt`
  - `https://kernels.lv/sitemap.xml`
- Verify these URLs return `301`:
  - `https://kernels.lv/lv`
  - `https://kernels.lv/lv/anything`
- If `www` is enabled, verify:
  - `https://www.kernels.lv/` -> `301` to `https://kernels.lv/`

## 6) Search Console activation
- Add `kernels.lv` as a `Domain property` in Google Search Console.
- Submit sitemap:
  - `https://kernels.lv/sitemap.xml`
- URL Inspection:
  - request indexing for `/`
  - request indexing for `/en`

## 7) Validation tools
- Run Google Rich Results Test on:
  - `https://kernels.lv/`
  - `https://kernels.lv/en`
- Confirm `Organization` and `LocalBusiness` structured data are detected.
- Run PageSpeed Insights for both pages and log baseline metrics (LCP, CLS, INP).

## 8) Release gate
- Go live only when all checks above pass.

## 9) Automated smoke check
- Run:
  - `npm run check:deploy`
- Or for a different host:
  - `bash scripts/post-deploy-check.sh your-domain.tld`

## 10) If you see missing chunk/module runtime errors
- Run a clean rebuild locally:
  - `npm run build:clean`
- In Vercel, trigger `Redeploy` with `Clear build cache` enabled.
