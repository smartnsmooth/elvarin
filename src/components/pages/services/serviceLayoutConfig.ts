import type { Service } from "@/data/services";

export type ServiceLayoutVariant = "splitHeroRight" | "bannerHero" | "splitHeroLeft" | "imageBand" | "editorial";

export const serviceLayoutConfig: Record<string, ServiceLayoutVariant> = {
  "system-integration": "splitHeroRight",
  "system-management": "bannerHero",
  "software-solutions": "splitHeroLeft",
  "saas-products": "imageBand",
  "it-consulting": "editorial",
};

export function getServiceLayoutVariant(slug: string): ServiceLayoutVariant {
  return serviceLayoutConfig[slug] ?? "editorial";
}
