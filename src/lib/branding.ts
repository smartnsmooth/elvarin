import { siteImage } from "./site-image";

/**
 * Stable public site URL used for og:url, canonical, sitemap, and JSON-LD.
 * Never use VERCEL_URL here — that is a per-deploy preview hostname and changes every deploy.
 */
export const DEFAULT_PRODUCTION_URL = "https://vinextai.vercel.app";

/** Canonical public support email — keep in sync with Vercel NEXT_PUBLIC_SUPPORT_EMAIL. */
export const DEFAULT_SUPPORT_EMAIL = "support@vinextai.com";

function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

  // Explicit non-localhost env wins (custom domain or stable vercel.app).
  if (configured && !configured.includes("localhost")) {
    return configured;
  }

  // Prefer Vercel's stable production hostname when available.
  const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionDomain) {
    const normalized = productionDomain.replace(/\/$/, "");
    return normalized.startsWith("http") ? normalized : `https://${normalized}`;
  }

  // On any Vercel deployment (production or preview), use the stable public URL.
  // Do NOT fall back to VERCEL_URL — that caused og:url to point at preview hostnames.
  if (process.env.VERCEL === "1" || process.env.VERCEL_ENV) {
    return DEFAULT_PRODUCTION_URL;
  }

  // Local development only.
  return configured || "http://localhost:3000";
}

export const branding = {
  name: process.env.NEXT_PUBLIC_BRAND_NAME || "VinextAI",
  tagline: "Enterprise IT Services for Business Systems",
  description:
    "IT services company specializing in system integration, system management, software solutions, SaaS products, and IT consulting.",
  logo: siteImage("images/logo.png", "VinextAI company logo"),
  company: process.env.NEXT_PUBLIC_COMPANY_NAME || "VinextAI Ltd",
  companiesHouseNumber: process.env.NEXT_PUBLIC_COMPANIES_HOUSE_NUMBER?.trim() || "",
  registeredAddress: process.env.NEXT_PUBLIC_REGISTERED_ADDRESS?.trim() || "",
  vatNumber: process.env.NEXT_PUBLIC_VAT_NUMBER?.trim() || "",
  email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || DEFAULT_SUPPORT_EMAIL,
  phone: process.env.NEXT_PUBLIC_SUPPORT_PHONE?.trim() || "",
  supportHours: "Monday – Friday, 9:00 AM – 6:00 PM (UK)",
  responseTime: "We reply within 1 business day.",
  siteUrl: getSiteUrl(),
} as const;

export function hasPhone(): boolean {
  return branding.phone.length > 0;
}

export function hasRegisteredAddress(): boolean {
  return branding.registeredAddress.length > 0;
}

export function hasCompaniesHouseNumber(): boolean {
  return branding.companiesHouseNumber.length > 0;
}
