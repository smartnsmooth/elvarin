"use client";

import { useState } from "react";
import ProjectFilter, { FilteredProjectGrid } from "@/components/projects/ProjectFilter";
import { projects, projectsDisclaimer, type ProjectCategory } from "@/data/projects";
import { SectionHeader } from "@/components/marketing/SplitSection";

export default function ProjectsShowcaseClient() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          title="Representative Projects"
          subtitle="Illustrative examples of typical engagement scope. Filter by service category to explore."
        />
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-gray-600">{projectsDisclaimer}</p>
        <ProjectFilter active={active} onChange={setActive} />
        <div className="mt-8">
          <FilteredProjectGrid projects={projects} active={active} />
        </div>
      </div>
    </section>
  );
}
