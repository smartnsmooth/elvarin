import SiteShell from "@/components/SiteShell";
import ProjectsShowcase from "@/components/pages/ProjectsShowcase";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Representative enterprise IT engagements from Elvarin across manufacturing, finance, healthcare, education, retail, and logistics.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <SiteShell>
      <ProjectsShowcase />
    </SiteShell>
  );
}
