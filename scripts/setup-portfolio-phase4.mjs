import fs from "fs";
import path from "path";

const root = process.cwd();
const write = (rel, content) => {
  const fp = path.join(root, rel);
  fs.mkdirSync(path.dirname(fp), { recursive: true });
  fs.writeFileSync(fp, content, "utf8");
  console.log("wrote", rel);
};

write("src/app/page.tsx", `import SiteShell from "@/components/SiteShell";
import HomePage from "@/components/pages/HomePage";

export default function Home() {
  return (
    <SiteShell>
      <HomePage />
    </SiteShell>
  );
}
`);

write("src/app/about/page.tsx", `import SiteShell from "@/components/SiteShell";
import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata = {
  title: "About",
  description: "Elvarin is an IT services company specializing in system integration, system management, software solutions, SaaS products, and IT consulting.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutPageContent />
    </SiteShell>
  );
}
`);

write("src/app/services/page.tsx", `import SiteShell from "@/components/SiteShell";
import ServicesPageContent from "@/components/pages/ServicesPageContent";

export const metadata = {
  title: "Services",
  description: "System integration, system management, software solutions, SaaS products, and IT consulting for enterprise business clients.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <ServicesPageContent />
    </SiteShell>
  );
}
`);

write("src/app/industries/page.tsx", `import SiteShell from "@/components/SiteShell";
import IndustriesShowcase from "@/components/pages/IndustriesShowcase";

export const metadata = {
  title: "Industries",
  description: "Industries served by Elvarin including finance, public sector, manufacturing, telecommunications, retail, and healthcare.",
};

export default function IndustriesPage() {
  return (
    <SiteShell>
      <IndustriesShowcase />
    </SiteShell>
  );
}
`);

write("src/app/projects/page.tsx", `import SiteShell from "@/components/SiteShell";
import ProjectsShowcase from "@/components/pages/ProjectsShowcase";

export const metadata = {
  title: "Projects",
  description: "Enterprise system integration, software development, and SaaS projects delivered for business clients across multiple industries.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <ProjectsShowcase />
    </SiteShell>
  );
}
`);

write("src/app/contact/page.tsx", `import SiteShell from "@/components/SiteShell";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata = {
  title: "Contact",
  description: "Contact Elvarin for business inquiries, project proposals, and questions about enterprise IT services.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactPageContent />
    </SiteShell>
  );
}
`);

write("src/app/services/[slug]/page.tsx", `import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import ServiceDetailLayout from "@/components/pages/services/ServiceDetailLayout";
import { getServiceBySlug, services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return { title: service.title, description: service.description };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <SiteShell>
      <ServiceDetailLayout service={service} />
    </SiteShell>
  );
}
`);

write("src/app/industries/[slug]/page.tsx", `import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import IndustryDetailLayout from "@/components/pages/industries/IndustryDetailLayout";
import { getIndustryBySlug, industries } from "@/data/industries";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found" };
  return { title: industry.name, description: industry.description };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <SiteShell>
      <IndustryDetailLayout industry={industry} />
    </SiteShell>
  );
}
`);

write("src/app/projects/[slug]/page.tsx", `import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import ProjectDetailLayout from "@/components/pages/projects/ProjectDetailLayout";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.shortDescription };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <SiteShell>
      <ProjectDetailLayout project={project} />
    </SiteShell>
  );
}
`);

write("src/app/careers/page.tsx", `import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { branding } from "@/lib/branding";

export const metadata = {
  title: "Careers",
  description: "Careers at Elvarin.",
};

export default function CareersPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900">Careers</h1>
        <p className="mt-4 leading-relaxed text-gray-600">
          {branding.company} is growing its enterprise IT services and delivery teams. For
          opportunities, reach out via our{" "}
          <Link href="/contact" className="text-primary hover:underline">
            contact page
          </Link>
          .
        </p>
      </div>
    </SiteShell>
  );
}
`);

// Update ProjectFilter with thumbnails
write("src/components/projects/ProjectFilter.tsx", `"use client";

import Link from "next/link";
import MarketingImage from "@/components/marketing/MarketingImage";
import { cn } from "@/lib/cn";
import { projectCategories, type ProjectCategory } from "@/data/projects";
import { projectImage } from "@/lib/visuals";

export default function ProjectFilter({
  active,
  onChange,
}: {
  active: ProjectCategory | "all";
  onChange: (category: ProjectCategory | "all") => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
      {projectCategories.map((cat) => (
        <button
          key={cat.id}
          role="tab"
          aria-selected={active === cat.id}
          onClick={() => onChange(cat.id)}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200",
            active === cat.id
              ? "bg-primary text-white"
              : "border border-gray-300 bg-white text-gray-700 hover:border-gray-300 hover:text-primary",
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export function FilteredProjectGrid({
  projects,
  active,
}: {
  projects: Array<{
    slug: string;
    title: string;
    industry: string;
    serviceType: string;
    shortDescription: string;
    category: ProjectCategory;
  }>;
  active: ProjectCategory | "all";
}) {
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((project) => (
        <Link
          key={project.slug}
          href={\`/projects/\${project.slug}\`}
          className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="relative aspect-[16/10]">
            <MarketingImage src={projectImage(project.slug)} alt={project.title} fill sizes="(max-width:768px) 100vw, 33vw" />
          </div>
          <div className="flex flex-col p-5">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">{project.industry}</span>
              <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">{project.serviceType}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">{project.title}</h3>
            <p className="mt-2 line-clamp-2 flex-1 text-sm text-gray-700">{project.shortDescription}</p>
            <span className="mt-4 text-sm font-medium text-primary">View Case Study →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
`);

// Delete licensing and urls
const toDelete = [
  "src/app/licensing/page.tsx",
  "src/lib/urls.ts",
];
for (const rel of toDelete) {
  const fp = path.join(root, rel);
  if (fs.existsSync(fp)) {
    fs.unlinkSync(fp);
    console.log("deleted", rel);
  }
}
// Remove licensing folder if empty
const licDir = path.join(root, "src/app/licensing");
if (fs.existsSync(licDir)) {
  try { fs.rmdirSync(licDir); console.log("removed licensing dir"); } catch {}
}

// Check Breadcrumbs for className prop
console.log("Phase 4 complete");
