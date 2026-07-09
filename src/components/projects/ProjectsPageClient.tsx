"use client";

import { useState } from "react";
import SiteShell from "@/components/SiteShell";
import SectionContainer from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionContainer";
import ProjectFilter, { FilteredProjectGrid } from "@/components/projects/ProjectFilter";
import { projects, type ProjectCategory } from "@/data/projects";

export default function ProjectsPageClient() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  return (
    <SiteShell>
      <section className="border-b border-gray-200 bg-gray-50 section-padding !py-16">
        <div className="container-enterprise">
          <h1 className="text-gray-900">Projects</h1>
          <p className="mt-4 max-w-[720px] text-base leading-[26px] text-gray-700">
            Enterprise system projects demonstrating integration, software development, SaaS delivery, and
            ongoing operations.
          </p>
        </div>
      </section>

      <SectionContainer>
        <SectionHeader
          title="Case Studies"
          subtitle="Filter by service category to explore relevant work."
        />
        <ProjectFilter active={active} onChange={setActive} />
        <div className="mt-8">
          <FilteredProjectGrid projects={projects} active={active} />
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
