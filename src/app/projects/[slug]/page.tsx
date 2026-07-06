import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <SiteShell>
      <section className="border-b border-gray-200 bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <Link href="/projects" className="text-sm font-medium text-primary hover:text-primary-dark">
            ← Back to Projects
          </Link>
          <h1 className="mt-6 text-gray-900">{project.title}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-md bg-white px-3 py-1 text-sm font-medium text-gray-700 ring-1 ring-gray-200">
              {project.industry}
            </span>
            <span className="rounded-md bg-white px-3 py-1 text-sm font-medium text-gray-700 ring-1 ring-gray-200">
              {project.serviceType}
            </span>
          </div>
        </div>
      </section>

      <SectionContainer>
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">{project.overview}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Client Requirements</h2>
            <ul className="mt-4 space-y-2">
              {project.requirements.map((req) => (
                <li key={req} className="flex gap-3 text-base text-gray-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {req}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Solution Approach</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">{project.solutionApproach}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Responsibilities</h2>
            <ul className="mt-4 space-y-2">
              {project.responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-base text-gray-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Outcome Summary</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">{project.outcome}</p>
          </section>

          {project.technologies && project.technologies.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Technologies</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          <div className="border-t border-gray-200 pt-8">
            <Button href="/contact">Discuss a Similar Project</Button>
          </div>
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
