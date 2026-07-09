export type IndustryLayoutVariant =
  | "bannerSplit"
  | "splitHeroLeft"
  | "splitHeroRight"
  | "editorialBand"
  | "darkHero"
  | "cardGrid";

export const industryLayoutConfig: Record<string, IndustryLayoutVariant> = {
  "finance-banking": "bannerSplit",
  "public-sector": "splitHeroLeft",
  "manufacturing": "splitHeroRight",
  "telecommunications": "darkHero",
  "retail": "editorialBand",
  "healthcare": "cardGrid",
};

export function getIndustryLayoutVariant(slug: string): IndustryLayoutVariant {
  return industryLayoutConfig[slug] ?? "bannerSplit";
}
