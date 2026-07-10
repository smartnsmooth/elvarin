import { siteImage } from "./site-image";

/** Stable interim production URL until a custom domain is connected. */
export const DEFAULT_PRODUCTION_URL = "https://elvarin.vercel.app";

function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configured && !configured.includes("localhost")) {
    return configured.replace(/\/$/, "");
  }

  const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionDomain) {
    const normalized = productionDomain.replace(/\/$/, "");
    return normalized.startsWith("http") ? normalized : `https://${normalized}`;
  }

  if (process.env.VERCEL_ENV === "production") {
    return DEFAULT_PRODUCTION_URL;
  }

  const deploymentUrl = process.env.VERCEL_URL?.trim();
  if (deploymentUrl) {
    return `https://${deploymentUrl}`;
  }

  return configured?.replace(/\/$/, "") || "http://localhost:3000";
}

export const branding = {
  name: process.env.NEXT_PUBLIC_BRAND_NAME || "Elvarin",
  tagline: "Enterprise IT Services for Business Systems",
  description:
    "IT services company specializing in system integration, system management, software solutions, SaaS products, and IT consulting.",
  logo: siteImage("images/logo.png", "Elvarin company logo"),
  company: process.env.NEXT_PUBLIC_COMPANY_NAME || "Elvarin Ltd",
  companiesHouseNumber: process.env.NEXT_PUBLIC_COMPANIES_HOUSE_NUMBER?.trim() || "",
  registeredAddress: process.env.NEXT_PUBLIC_REGISTERED_ADDRESS?.trim() || "",
  vatNumber: process.env.NEXT_PUBLIC_VAT_NUMBER?.trim() || "",
  email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@elvarin.com",
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
