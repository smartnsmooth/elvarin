"use client";

import { useState } from "react";
import SiteShell from "@/components/SiteShell";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionContainer from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionContainer";
import ProjectFilter, { FilteredProjectGrid } from "@/components/projects/ProjectFilter";
import { projects, type ProjectCategory } from "@/data/projects";

export default function ProjectsPageClient() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  return (
    <SiteShell>
      <section className="border-b border-gray-200 bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <FadeInSection>
            <h1 className="text-gray-900">Projects</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
              Selected enterprise system projects demonstrating our work in system integration,
              software development, SaaS delivery, and ongoing operations.
            </p>
          </FadeInSection>
        </div>
      </section>

      <SectionContainer>
        <FadeInSection>
          <SectionHeader title="Case Studies" subtitle="Filter by service category to explore relevant work." />
          <ProjectFilter active={active} onChange={setActive} />
          <div className="mt-10">
            <FilteredProjectGrid projects={projects} active={active} />
          </div>
        </FadeInSection>
      </SectionContainer>
    </SiteShell>
  );
}
