# SEO Go-Live Checklist

## 1) Production domain setup
- Set `NEXT_PUBLIC_SITE_URL` to your real production domain (for example `https://kernels.lv`).
- Deploy and verify:
  - `/` returns `200`
  - `/en` returns `200`
  - `/robots.txt` returns `200`
  - `/sitemap.xml` returns `200`
  - `/lv` redirects to `/` with `301`

## 2) Search Console
- Open Google Search Console.
- Add property:
  - `Domain` property (recommended), or
  - `URL prefix` (`https://kernels.lv`).
- Verify ownership.
- Submit sitemap:
  - `https://kernels.lv/sitemap.xml`

## 3) Indexing checks
- In Search Console URL Inspection:
  - inspect `https://kernels.lv/`
  - inspect `https://kernels.lv/en`
- Request indexing for both pages.

## 4) Rich results validation
- Test pages in Google Rich Results Test:
  - ensure `Organization` and `LocalBusiness` structured data are detected
  - ensure no critical errors

## 5) Performance and crawl quality
- Run PageSpeed Insights for `/` and `/en`.
- Focus on:
  - Largest Contentful Paint (LCP)
  - Cumulative Layout Shift (CLS)
  - Interaction to Next Paint (INP)

## 6) Monitoring after launch
- Check Search Console weekly for:
  - Coverage issues
  - Crawl anomalies
  - Mobile usability issues
  - Manual actions
