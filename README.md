# Elvarin — Company Portfolio

Static company website for Elvarin Ltd. Marketing pages only — no database, auth, or e-commerce.

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
| `NEXT_PUBLIC_COMPANY_NAME` | Legal entity name (default `Elvarin Ltd`) |
| `NEXT_PUBLIC_COMPANIES_HOUSE_NUMBER` | Companies House registration number |
| `NEXT_PUBLIC_REGISTERED_ADDRESS` | Registered office address |
| `NEXT_PUBLIC_VAT_NUMBER` | VAT number (if registered) |
| `NEXT_PUBLIC_BRAND_NAME` | Brand name (default `Elvarin`) |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Public contact email |
| `NEXT_PUBLIC_SUPPORT_PHONE` | Public phone (leave empty to hide) |
| `RESEND_API_KEY` | Resend API key for contact form delivery |
| `CONTACT_FROM_EMAIL` | Verified sender address in Resend |
| `CONTACT_EMAIL` | Inbox for form submissions |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible domain (optional analytics) |

## Production checklist

Before launch, set in Vercel:

1. `NEXT_PUBLIC_SITE_URL` to your live domain
2. Real Companies House number, registered address, and VAT (if applicable)
3. `RESEND_API_KEY` + verified sender for contact form delivery
4. Remove or set a real `NEXT_PUBLIC_SUPPORT_PHONE`

## Related projects

- **elvarin-license** — Customer license store (`:3001`)
- **elvarin-license-admin** — Admin portal (`:3002`)
