import fs from "fs";
import path from "path";

const root = process.cwd();
const write = (rel, content) => {
  const fp = path.join(root, rel);
  fs.mkdirSync(path.dirname(fp), { recursive: true });
  fs.writeFileSync(fp, content, "utf8");
  console.log("wrote", rel);
};

write("src/components/pages/services/serviceLayoutConfig.ts", `import type { Service } from "@/data/services";

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
`);

write("src/components/pages/services/ServiceDetailLayout.tsx", `import Link from "next/link";
import SplitHero, { BannerHero } from "@/components/marketing/SplitHero";
import MarketingImage from "@/components/marketing/MarketingImage";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { Service } from "@/data/services";
import { servicePageImage } from "@/lib/visuals";
import { getServiceLayoutVariant } from "./serviceLayoutConfig";

export default function ServiceDetailLayout({ service }: { service: Service }) {
  const variant = getServiceLayoutVariant(service.slug);
  const image = servicePageImage(service.slug);

  const hero =
    variant === "splitHeroRight" ? (
      <SplitHero title={service.title} subtitle={service.description} image={image} imagePosition="right" platformLabel={service.shortTitle} ctas={[{ label: "Contact Us", href: "/contact" }]} />
    ) : variant === "splitHeroLeft" ? (
      <SplitHero title={service.title} subtitle={service.description} image={image} imagePosition="left" platformLabel={service.shortTitle} ctas={[{ label: "Contact Us", href: "/contact" }]} />
    ) : variant === "bannerHero" ? (
      <BannerHero title={service.title} subtitle={service.description} image={image} solutionsLabel={service.shortTitle} ctas={[{ label: "Contact Us", href: "/contact" }]} />
    ) : variant === "imageBand" ? (
      <section className="relative">
        <div className="relative h-64 md:h-80">
          <MarketingImage src={image} alt={service.title} fill priority sizes="100vw" className="brightness-[0.5]" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/50" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.shortTitle }]} />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">{service.title}</h1>
          <p className="mt-3 max-w-2xl text-gray-600">{service.description}</p>
        </div>
      </section>
    ) : (
      <section className="border-b border-gray-200 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.shortTitle }]} />
          <h1 className="mt-6 text-3xl font-bold text-gray-900">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-gray-600">{service.description}</p>
        </div>
      </section>
    );

  return (
    <>
      {hero}
      <section className="section-spacing">
        <div className="mx-auto max-w-3xl space-y-12 px-4">
          <section>
            <h2 className="text-xl font-bold text-gray-900">Service Overview</h2>
            <p className="mt-4 text-gray-700">{service.overview}</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">Scope Definition</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-gray-900">Included</h3>
                <ul className="mt-3 space-y-2">{service.scopeIncluded.map((i) => <li key={i} className="text-sm text-gray-700">— {i}</li>)}</ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Excluded</h3>
                <ul className="mt-3 space-y-2">{service.scopeExcluded.map((i) => <li key={i} className="text-sm text-gray-700">— {i}</li>)}</ul>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">Process Flow</h2>
            <ol className="mt-4 space-y-2">{service.process.map((step, idx) => <li key={step} className="text-sm text-gray-700"><span className="font-medium text-gray-500">{idx + 1}.</span> {step}</li>)}</ol>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">Deliverables</h2>
            <ul className="mt-4 space-y-2">{service.deliverables.map((i) => <li key={i} className="text-sm text-gray-700">— {i}</li>)}</ul>
          </section>
          <Link href="/contact" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-hover">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
`);

write("src/components/pages/industries/industryLayoutConfig.ts", `export type IndustryLayoutVariant =
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
`);

write("src/components/pages/industries/IndustryDetailLayout.tsx", `import Link from "next/link";
import SplitHero, { BannerHero } from "@/components/marketing/SplitHero";
import SplitSection from "@/components/marketing/SplitSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { Industry } from "@/data/industries";
import { industryImage } from "@/lib/visuals";
import { getIndustryLayoutVariant } from "./industryLayoutConfig";

export default function IndustryDetailLayout({ industry }: { industry: Industry }) {
  const variant = getIndustryLayoutVariant(industry.slug);
  const image = industryImage(industry.slug);

  if (variant === "splitHeroLeft") {
    return (
      <>
        <SplitHero title={industry.name} subtitle={industry.description} image={image} imagePosition="left" platformLabel="Industry" dark ctas={[{ label: "Contact Us", href: "/contact" }]} />
        <IndustryBody industry={industry} />
      </>
    );
  }

  if (variant === "splitHeroRight") {
    return (
      <>
        <SplitHero title={industry.name} subtitle={industry.description} image={image} imagePosition="right" platformLabel="Industry" dark ctas={[{ label: "Contact Us", href: "/contact" }]} />
        <IndustryBody industry={industry} />
      </>
    );
  }

  if (variant === "darkHero") {
    return (
      <>
        <section className="hero-gradient relative overflow-hidden py-20">
          <div className="pattern-grid absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-7xl px-4">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: industry.name }]} className="text-blue-200" />
            <h1 className="mt-6 text-3xl font-bold text-white md:text-4xl">{industry.name}</h1>
            <p className="mt-4 max-w-2xl text-blue-100">{industry.description}</p>
          </div>
        </section>
        <SplitSection title="Industry Context" subtitle={industry.contextDescription} image={image} />
        <IndustryBody industry={industry} hideOverview />
      </>
    );
  }

  if (variant === "editorialBand") {
    return (
      <>
        <BannerHero title={industry.name} subtitle={industry.description} image={image} solutionsLabel="Industry" />
        <IndustryBody industry={industry} />
      </>
    );
  }

  if (variant === "cardGrid") {
    return (
      <>
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-4">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: industry.name }]} />
            <h1 className="mt-6 text-3xl font-bold text-gray-900">{industry.name}</h1>
            <p className="mt-3 max-w-2xl text-gray-600">{industry.description}</p>
          </div>
        </section>
        <div className="relative aspect-[21/9] max-h-80 w-full overflow-hidden">
          <img src={image.src} alt={industry.name} className="h-full w-full object-cover" />
        </div>
        <IndustryBody industry={industry} layout="cards" />
      </>
    );
  }

  return (
    <>
      <BannerHero title={industry.name} subtitle={industry.description} image={image} solutionsLabel="Industry" ctas={[{ label: "Contact Us", href: "/contact" }]} />
      <SplitSection title="Industry Overview" subtitle={industry.overview} image={image} reverse />
      <IndustryBody industry={industry} hideOverview />
    </>
  );
}

function IndustryBody({ industry, hideOverview, layout }: { industry: Industry; hideOverview?: boolean; layout?: "cards" | "default" }) {
  const challenges = (
    <section className="section-spacing bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-xl font-bold text-gray-900">Common Challenges</h2>
        {layout === "cards" ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-3">{industry.challenges.map((c) => <div key={c} className="rounded-lg border bg-white p-4 text-sm text-gray-700">{c}</div>)}</div>
        ) : (
          <ul className="mt-4 space-y-2">{industry.challenges.map((c) => <li key={c} className="text-sm text-gray-700">— {c}</li>)}</ul>
        )}
      </div>
    </section>
  );

  const services = (
    <section className="section-spacing">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-xl font-bold text-gray-900">Applied Services</h2>
        <div className="mt-4 flex flex-wrap gap-2">{industry.serviceMapping.map((s) => <span key={s} className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">{s}</span>)}</div>
        <Link href="/contact" className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-hover">Contact Us</Link>
      </div>
    </section>
  );

  return (
    <>
      {!hideOverview && (
        <section className="section-spacing">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-xl font-bold text-gray-900">Industry Overview</h2>
            <p className="mt-4 text-gray-700">{industry.overview}</p>
            <p className="mt-4 text-gray-700">{industry.contextDescription}</p>
          </div>
        </section>
      )}
      {challenges}
      {services}
    </>
  );
}
`);

write("src/components/pages/projects/projectLayoutConfig.ts", `export type ProjectSection = "overview" | "context" | "scope" | "approach" | "outcome" | "technologies";

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
`);

write("src/components/pages/projects/ProjectDetailLayout.tsx", `import Link from "next/link";
import MarketingImage from "@/components/marketing/MarketingImage";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { Project } from "@/data/projects";
import { projectImage } from "@/lib/visuals";
import { getProjectLayoutConfig, type ProjectSection } from "./projectLayoutConfig";

export default function ProjectDetailLayout({ project }: { project: Project }) {
  const config = getProjectLayoutConfig(project.slug);
  const image = projectImage(project.slug);

  const sections: Record<ProjectSection, React.ReactNode> = {
    overview: (
      <section key="overview">
        <h2 className="text-xl font-bold text-gray-900">Project Overview</h2>
        <p className="mt-4 text-gray-700">{project.overview}</p>
      </section>
    ),
    context: (
      <section key="context">
        <h2 className="text-xl font-bold text-gray-900">Business Context</h2>
        <p className="mt-4 text-gray-700">{project.businessContext}</p>
      </section>
    ),
    scope: (
      <section key="scope">
        <h2 className="text-xl font-bold text-gray-900">Implementation Scope</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-gray-900">In Scope</h3>
            <ul className="mt-3 space-y-2">{project.inScope.map((i) => <li key={i} className="text-sm text-gray-700">— {i}</li>)}</ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Out of Scope</h3>
            <ul className="mt-3 space-y-2">{project.outOfScope.map((i) => <li key={i} className="text-sm text-gray-700">— {i}</li>)}</ul>
          </div>
        </div>
      </section>
    ),
    approach: (
      <section key="approach">
        <h2 className="text-xl font-bold text-gray-900">Delivery Process</h2>
        <p className="mt-4 text-gray-700">{project.solutionApproach}</p>
        <ul className="mt-4 space-y-2">{project.responsibilities.map((i) => <li key={i} className="text-sm text-gray-700">— {i}</li>)}</ul>
      </section>
    ),
    outcome: (
      <section key="outcome" className="rounded-xl bg-primary/5 p-6 ring-1 ring-primary/10">
        <h2 className="text-xl font-bold text-gray-900">Outcome Summary</h2>
        <p className="mt-4 text-gray-700">{project.outcome}</p>
      </section>
    ),
    technologies: project.technologies && project.technologies.length > 0 ? (
      <section key="technologies">
        <h2 className="text-xl font-bold text-gray-900">Systems & Technologies</h2>
        <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((t) => <span key={t} className="rounded bg-gray-100 px-3 py-1 text-sm text-gray-700">{t}</span>)}</div>
      </section>
    ) : null,
  };

  const ordered = config.sectionOrder.map((key) => sections[key]).filter(Boolean);

  const sidebar = (
    <aside className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:sticky lg:top-24">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Project Details</h3>
      <dl className="mt-4 space-y-4 text-sm">
        <div><dt className="text-gray-500">Industry</dt><dd className="font-medium text-gray-900">{project.industry}</dd></div>
        <div><dt className="text-gray-500">Service Type</dt><dd className="font-medium text-gray-900">{project.serviceType}</dd></div>
        <div><dt className="text-gray-500">Category</dt><dd className="font-medium text-gray-900">{project.category.toUpperCase()}</dd></div>
      </dl>
      <Link href="/contact" className="mt-6 block text-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover">Contact Us</Link>
    </aside>
  );

  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden">
        <MarketingImage src={image} alt={project.title} fill priority sizes="100vw" className="brightness-[0.45]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-end px-4 pb-12 pt-24">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }, { label: project.title }]} className="text-blue-200" />
          <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">{project.title}</h1>
          <p className="mt-3 max-w-2xl text-blue-100">{project.shortDescription}</p>
        </div>
      </section>
      <section className="section-spacing">
        <div className={\`mx-auto grid max-w-7xl gap-10 px-4 \${config.sidebarFirst ? "lg:grid-cols-[280px_1fr]" : "lg:grid-cols-[1fr_280px]"}\`}>
          {config.sidebarFirst ? sidebar : null}
          <div className="space-y-12">{ordered}</div>
          {!config.sidebarFirst ? sidebar : null}
        </div>
      </section>
    </>
  );
}
`);

console.log("Phase 3 complete");
