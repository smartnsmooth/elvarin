export type ProjectSection = "overview" | "context" | "scope" | "approach" | "outcome" | "technologies";

export type ProjectLayoutConfig = {
  sectionOrder: ProjectSection[];
  sidebarFirst?: boolean;
};

export const projectLayoutConfig: Record<string, ProjectLayoutConfig> = {
  "manufacturing-erp-system": { sectionOrder: ["context", "overview", "scope", "approach", "outcome", "technologies"], sidebarFirst: true },
  "financial-reporting-platform": { sectionOrder: ["overview", "context", "approach", "scope", "outcome", "technologies"] },
  "healthcare-patient-management": { sectionOrder: ["overview", "scope", "context", "approach", "outcome"] },
  "education-learning-platform": { sectionOrder: ["context", "overview", "approach", "scope", "outcome", "technologies"] },
  "retail-inventory-system": { sectionOrder: ["overview", "approach", "context", "scope", "outcome"] },
  "logistics-tracking-platform": { sectionOrder: ["context", "approach", "overview", "scope", "outcome", "technologies"], sidebarFirst: true },
};

export function getProjectLayoutConfig(slug: string): ProjectLayoutConfig {
  return projectLayoutConfig[slug] ?? { sectionOrder: ["overview", "context", "scope", "approach", "outcome", "technologies"] };
}
