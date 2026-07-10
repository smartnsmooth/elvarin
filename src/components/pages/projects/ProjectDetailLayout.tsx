import Link from "next/link";
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
        <div className={`mx-auto grid max-w-7xl gap-10 px-4 ${config.sidebarFirst ? "lg:grid-cols-[280px_1fr]" : "lg:grid-cols-[1fr_280px]"}`}>
          {config.sidebarFirst ? sidebar : null}
          <div className="space-y-12">{ordered}</div>
          {!config.sidebarFirst ? sidebar : null}
        </div>
      </section>
    </>
  );
}
