import SiteShell from "@/components/SiteShell";
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
