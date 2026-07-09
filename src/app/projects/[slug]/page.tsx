import type { Metadata } from "next";
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
