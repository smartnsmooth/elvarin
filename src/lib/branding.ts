import { siteImage } from "./site-image";

export const branding = {
  name: process.env.NEXT_PUBLIC_BRAND_NAME || "Elvarin",
  tagline: "Enterprise IT Services for Business System Transformation",
  description:
    "IT services company specializing in system integration, software solutions, and digital transformation for business clients.",
  logo: siteImage("images/logo.png", "Elvarin company logo"),
  company: "Elvarin Inc.",
  email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@elvarin.com",
  phone: process.env.NEXT_PUBLIC_SUPPORT_PHONE || "+1 555 010 2000",
  supportHours: "Monday – Friday, 9:00 AM – 6:00 PM",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  colors: {
    primary: "#1E3A8A",
    primaryDark: "#172554",
    secondary: "#2563EB",
    accent: "#3B82F6",
  },
} as const;
