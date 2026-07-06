# Elvarin — Company Portfolio

Static company website for Elvarin. Marketing pages only — no database, auth, or e-commerce.

## Pages

- Home, About, Services, Licensing, Careers, Contact
- Links to the license store for shopping and support

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | This site URL |
| `NEXT_PUBLIC_LICENSE_STORE_URL` | License store URL (default `http://localhost:3001`) |
| `NEXT_PUBLIC_BRAND_NAME` | Brand name (default `Elvarin`) |

## Related projects

- **elvarin-license** — Customer license store (`:3001`)
- **elvarin-license-admin** — Admin portal (`:3002`)
- **elvarin-original** — Original monolith backup
