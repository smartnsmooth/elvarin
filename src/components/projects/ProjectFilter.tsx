"use client";

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
          href={`/projects/${project.slug}`}
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
