import type { Metadata } from "next";
import ProjectsPageClient from "@/components/projects/ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Enterprise system integration, software development, and SaaS projects delivered for business clients across multiple industries.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
