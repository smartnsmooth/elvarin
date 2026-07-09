import Link from "next/link";
import SplitHero from "@/components/marketing/SplitHero";
import MarketingImage from "@/components/marketing/MarketingImage";
import { SectionHeader } from "@/components/marketing/SplitSection";
import { branding } from "@/lib/branding";
import { capabilities } from "@/data/company";
import { getFeaturedProjects, projectsDisclaimer } from "@/data/projects";
import { capabilityImage, projectImage, visuals } from "@/lib/visuals";

const capabilitySlugs = [
  "system-integration",
  "system-management",
  "software-solutions",
  "saas-products",
  "it-consulting",
] as const;

export default function HomePage() {
  const featured = getFeaturedProjects(4);

  return (
    <>
      <SplitHero
        title={`${branding.name} — Enterprise IT Services`}
        subtitle={branding.description}
        platformLabel="IT Services Portfolio"
        image={visuals.hero.home}
        ctas={[
          { label: "Our Services", href: "/services" },
          { label: "View Projects", href: "/projects", variant: "outline" },
        ]}
      />

      <section className="section-spacing bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            title="Core Capabilities"
            subtitle="Structured IT service categories for enterprise system planning, implementation, and operation."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => {
              const slug = capabilitySlugs[i] ?? "it-consulting";
              return (
                <article key={cap.title} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <div className="relative aspect-[16/9]">
                    <MarketingImage src={capabilityImage(slug)} alt={cap.title} fill sizes="(max-width:768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">{cap.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{cap.description}</p>
                    <ul className="mt-4 space-y-1">
                      {cap.items.map((item) => (
                        <li key={item} className="text-sm text-gray-600">— {item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            title="Representative Projects"
            subtitle="Illustrative examples of typical enterprise engagement scope across industries and service categories."
          />
          <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-gray-600">{projectsDisclaimer}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md"
              >
                <div className="relative aspect-[4/3]">
                  <MarketingImage src={projectImage(project.slug)} alt={project.title} fill sizes="(max-width:768px) 50vw, 25vw" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">{project.industry}</p>
                  <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-primary">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/projects" className="text-sm font-semibold text-primary hover:underline">View all projects →</Link>
          </div>
        </div>
      </section>

      <section className="hero-gradient section-spacing">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-2xl font-bold md:text-3xl">Discuss Your Requirements</h2>
          <p className="mt-4 text-blue-100">Contact us to initiate a business inquiry or project proposal discussion.</p>
          <p className="mt-3 text-sm text-blue-200">{branding.responseTime}</p>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
