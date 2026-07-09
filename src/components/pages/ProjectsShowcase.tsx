import ProjectsShowcaseClient from "./ProjectsShowcaseClient";
import { projects } from "@/data/projects";
import { projectImage, visuals } from "@/lib/visuals";
import MarketingImage from "@/components/marketing/MarketingImage";
import Link from "next/link";

export default function ProjectsShowcase() {
  const featured = projects[0];

  return (
    <>
      <section className="relative min-h-[60vh] overflow-hidden">
        <MarketingImage src={projectImage(featured.slug)} alt={featured.title} fill priority sizes="100vw" className="brightness-[0.45]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Featured Case Study</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold text-white md:text-4xl">{featured.title}</h1>
          <p className="mt-4 max-w-xl text-blue-100">{featured.shortDescription}</p>
          <Link href={`/projects/${featured.slug}`} className="mt-8 inline-block w-fit rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-gray-100">
            Read Case Study
          </Link>
        </div>
      </section>
      <ProjectsShowcaseClient />
    </>
  );
}
