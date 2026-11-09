# Circus Tattoo website (React + Vite)

Business details live in `src/data/businessInfo.js`. Edit there only.

## Run
```
npm install
npm run dev        # local development
npm run build      # production build -> dist/
npm run preview    # preview the build locally
```

## Deploy (Vercel or Cloudflare Pages)
- Framework preset: Vite · Build command: `npm run build` · Output directory: `dist`
- No environment variables are needed. The site is a single page (hash links), so no rewrite rules are required.

## After you have the real HTTPS URL
1. Add `<link rel="canonical" href="YOUR_URL">` and `"url": "YOUR_URL"` in the JSON-LD in `index.html`.
2. Add `public/sitemap.xml` with that URL and a `Sitemap:` line in `public/robots.txt`.
3. Add the URL to the Google Business Profile (owner only) and optionally verify it in Google Search Console.
Google decides approval; nothing here guarantees it.

## Verify with the owner before publishing
- Opening hours (Google lists a holiday note, "hours might differ").
- "Cash only" (taken from a sign in the photos and review tags).
- Instagram @hanimadetattoo as the booking channel (from the owner's Google post).
- Whether piercing services are offered (only the listing category says so).
- Permission to use the supplied photos, which show clients and staff.
- The tattoo machine image looks stylised; confirm it is yours or remove it.
- No ratings or reviews are displayed on purpose.
