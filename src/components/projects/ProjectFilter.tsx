"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { projectCategories, type ProjectCategory } from "@/data/projects";

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
              : "border border-gray-300 bg-white text-gray-700 hover:border-primary/30 hover:text-primary",
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
  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div
      className="grid gap-6 transition-opacity duration-300 sm:grid-cols-2 lg:grid-cols-3"
      key={active}
    >
      {filtered.map((project) => (
        <article
          key={project.slug}
          className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-md"
        >
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
              {project.industry}
            </span>
            <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
              {project.serviceType}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{project.shortDescription}</p>
          <a
            href={`/projects/${project.slug}`}
            className="mt-4 text-sm font-medium text-primary hover:text-primary-dark"
          >
            View Details →
          </a>
        </article>
      ))}
    </div>
  );
}
