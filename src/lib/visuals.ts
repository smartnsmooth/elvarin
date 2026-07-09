import { siteImage } from "./site-image";

const industrySlugs = [
  "finance-banking",
  "public-sector",
  "manufacturing",
  "telecommunications",
  "retail",
  "healthcare",
] as const;

const projectSlugs = [
  "manufacturing-erp-system",
  "financial-reporting-platform",
  "healthcare-patient-management",
  "education-learning-platform",
  "retail-inventory-system",
  "logistics-tracking-platform",
] as const;

const serviceSlugs = [
  "system-integration",
  "system-management",
  "software-solutions",
  "saas-products",
  "it-consulting",
] as const;

export type IndustrySlug = (typeof industrySlugs)[number];
export type ProjectSlug = (typeof projectSlugs)[number];
export type ServiceSlug = (typeof serviceSlugs)[number];

export const visuals = {
  hero: {
    home: siteImage("images/hero/home.png", "Enterprise IT services and cloud infrastructure"),
    about: siteImage("images/hero/about.png", "Collaborative enterprise technology team"),
    services: siteImage("images/hero/services.png", "IT services delivery workspace"),
    industries: siteImage("images/hero/industries.png", "Industry sectors and business operations"),
    projects: siteImage("images/hero/projects.png", "Enterprise software project delivery"),
    contact: siteImage("images/hero/contact.png", "Business communication and client engagement"),
  },
  about: {
    hero: siteImage("images/hero/about.png", "Enterprise IT company team collaboration"),
    storyEmbed: siteImage("images/about/story-embed.png", "Wide-format enterprise operations environment"),
    quoteBg: siteImage("images/about/quote-bg.png", "Corporate skyline mission backdrop"),
    timeline: siteImage("images/about/timeline.png", "Company growth and delivery milestones"),
  },
  services: {
    pipeline: siteImage("images/services/pipeline.png", "Service delivery pipeline workflow"),
    architecture: siteImage("images/services/architecture.png", "End-to-end service architecture diagram"),
  },
  capabilities: Object.fromEntries(
    serviceSlugs.map((slug) => [
      slug,
      siteImage(`images/capabilities/${slug}.png`, `IT capability: ${slug.replace(/-/g, " ")}`),
    ]),
  ) as Record<ServiceSlug, ReturnType<typeof siteImage>>,
  industries: Object.fromEntries(
    industrySlugs.map((slug) => [
      slug,
      siteImage(`images/industries/${slug}.png`, `Industry: ${slug.replace(/-/g, " ")}`),
    ]),
  ) as Record<IndustrySlug, ReturnType<typeof siteImage>>,
  projects: Object.fromEntries(
    projectSlugs.map((slug) => [
      slug,
      siteImage(`images/projects/${slug}.png`, `Project case study: ${slug.replace(/-/g, " ")}`),
    ]),
  ) as Record<ProjectSlug, ReturnType<typeof siteImage>>,
  servicePages: Object.fromEntries(
    serviceSlugs.map((slug) => [
      slug,
      siteImage(`images/service-pages/${slug}.png`, `Service detail: ${slug.replace(/-/g, " ")}`),
    ]),
  ) as Record<ServiceSlug, ReturnType<typeof siteImage>>,
  contact: {
    panel: siteImage("images/hero/contact.png", "Business inquiry and client partnership"),
  },
} as const;

export function industryImage(slug: string) {
  return visuals.industries[slug as IndustrySlug] ?? siteImage(`images/industries/${slug}.png`, `Industry: ${slug}`);
}

export function projectImage(slug: string) {
  return visuals.projects[slug as ProjectSlug] ?? siteImage(`images/projects/${slug}.png`, `Project: ${slug}`);
}

export function servicePageImage(slug: string) {
  return visuals.servicePages[slug as ServiceSlug] ?? siteImage(`images/service-pages/${slug}.png`, `Service: ${slug}`);
}

export function capabilityImage(slug: string) {
  return visuals.capabilities[slug as ServiceSlug] ?? servicePageImage(slug);
}
