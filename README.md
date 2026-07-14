# VinextAI — Company Portfolio

Static company website for VinextAI Ltd. Marketing pages only — no database, auth, or e-commerce.

## Pages

- Home, About, Services (+ 5 service detail pages), Industries, Projects (+ case study pages), Contact
- Privacy Policy, Terms of Use

## Setup

```bash
npm install
cp .env.example .env
npm run images:download
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL (required in Vercel for correct OG/canonical URLs) |
| `NEXT_PUBLIC_COMPANY_NAME` | Legal entity name (default `VinextAI Ltd`) |
| `NEXT_PUBLIC_COMPANIES_HOUSE_NUMBER` | Companies House registration number |
| `NEXT_PUBLIC_REGISTERED_ADDRESS` | Registered office address |
| `NEXT_PUBLIC_VAT_NUMBER` | VAT number (if registered) |
| `NEXT_PUBLIC_BRAND_NAME` | Brand name (default `VinextAI`) |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Public contact email |
| `NEXT_PUBLIC_SUPPORT_PHONE` | Public phone (leave empty to hide) |
| `RESEND_API_KEY` | Resend API key for contact form delivery |
| `CONTACT_FROM_EMAIL` | Verified sender address in Resend |
| `CONTACT_EMAIL` | Inbox for form submissions |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible domain (optional analytics) |

## Production checklist

Set these in Vercel for **both Production and Preview** (same values):

1. `NEXT_PUBLIC_SITE_URL=https://vinextai.vercel.app` (or custom domain when live)
2. `NEXT_PUBLIC_SUPPORT_EMAIL=support@vinextai.com` — **one address only**; do not leave Preview on `.com` and Production on `.org`
3. `NEXT_PUBLIC_COMPANIES_HOUSE_NUMBER` — actual Companies House number
4. `NEXT_PUBLIC_REGISTERED_ADDRESS` — registered office address
5. `NEXT_PUBLIC_VAT_NUMBER` — if VAT-registered
6. `RESEND_API_KEY` + verified `CONTACT_FROM_EMAIL` for contact form delivery
7. Leave `NEXT_PUBLIC_SUPPORT_PHONE` empty unless you have a real business number

**Important:**
- Do **not** set `NEXT_PUBLIC_SITE_URL=http://localhost:3000` in Vercel.
- Do **not** rely on preview deployment hostnames for `og:url` — the code now always uses the stable public URL on Vercel.
- Homepage and Privacy use the **same** `SiteShell` / `Footer` / `createPageMetadata` as every other page. If a review still shows "VinextAI LLC" or localhost on those routes, the reviewer is looking at a **stale or preview URL**, not current production.

### Verified on production (`https://vinextai.vercel.app`) as of latest deploy

| Check | Result |
|-------|--------|
| Homepage entity / phone / Representative Project labels | Fixed |
| Privacy UK GDPR content + VinextAI Ltd | Fixed |
| `og:url` on `/`, `/privacy`, `/about`, `/contact`, project pages | All `https://vinextai.vercel.app/...` |
| Support email | Driven by `NEXT_PUBLIC_SUPPORT_EMAIL` (align Vercel to `.com`) |

## Implemented production features (developer confirmation)

| Feature | Location | Status |
|---------|----------|--------|
| `robots.txt` | `src/app/robots.ts` | Allows all public pages; references sitemap |
| `sitemap.xml` | `src/app/sitemap.ts` | All static + dynamic routes (32 pages) |
| JSON-LD Organization schema | `src/components/OrganizationJsonLd.tsx` | In root layout |
| Security headers (CSP, X-Frame-Options, etc.) | `next.config.ts` | Applied site-wide |
| Contact form honeypot | `src/components/marketing/ContactForm.tsx` | Hidden `website` field |
| Rate limiting (5 req/min/IP) | `src/app/api/contact/route.ts` | Returns 429 when exceeded |
| Server-side validation/sanitization | `src/app/api/contact/route.ts` | Trim, max length, email format |
| Cookie notice | `src/components/CookieBanner.tsx` | Essential-only default; consent for Plausible |
| Custom 404 page | `src/app/not-found.tsx` | Branded |
| Stable production `og:url` | `src/lib/branding.ts` | Uses `NEXT_PUBLIC_SITE_URL`, then `VERCEL_PROJECT_PRODUCTION_URL`, then `https://vinextai.vercel.app` on production — not preview deploy URLs |

## Related projects

- **vinextai-license** — Customer license store (`:3001`)
- **vinextai-license-admin** — Admin portal (`:3002`)
