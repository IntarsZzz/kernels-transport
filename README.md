# Kernels Transport (Next.js SSR/SSG)

## Prerequisites
- Node.js 20+
- npm 10+

## Local run
1. Copy environment template:
   - `cp .env.example .env.local`
2. Set production-like values in `.env.local`:
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.tld`
   - `GEMINI_API_KEY=...` (only if chatbot/API usage is enabled)
3. Install and run:
   - `npm install`
   - `npm run dev`
4. Open:
   - `http://localhost:3000`

## Production build check
- `npm run build`
- `npm run start`

## Deploy (Vercel recommended)
1. Import repository in Vercel.
2. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.tld`
   - `GEMINI_API_KEY=...` (if needed)
3. Deploy.
4. Verify:
   - `/`
   - `/en`
   - `/robots.txt`
   - `/sitemap.xml`

## Deploy with Docker
1. Build image:
   - `docker build -t kernels-transport:latest .`
2. Run container:
   - `docker run --rm -p 3000:3000 --env NEXT_PUBLIC_SITE_URL=https://your-domain.tld kernels-transport:latest`
3. Open:
   - `http://localhost:3000`

## SEO checklist
- See [SEO-CHECKLIST.md](./SEO-CHECKLIST.md) for go-live indexing steps.
