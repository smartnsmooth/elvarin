import fs from "fs";
import path from "path";

const root = process.cwd();
const write = (rel, content) => {
  const fp = path.join(root, rel);
  fs.mkdirSync(path.dirname(fp), { recursive: true });
  fs.writeFileSync(fp, content, "utf8");
  console.log("wrote", rel);
};

// Add milestones to company.ts
const companyPath = path.join(root, "src/data/company.ts");
let company = fs.readFileSync(companyPath, "utf8");
if (!company.includes("companyMilestones")) {
  company = company.replace(
    "export const deliveryProcess = [",
    `export const companyMilestones = [
  { year: "2012", title: "Company Founded", description: "Established as an IT services firm focused on enterprise system integration and consulting." },
  { year: "2016", title: "Delivery Teams Expanded", description: "Built dedicated engineering, delivery, and maintenance teams for structured project execution." },
  { year: "2020", title: "SaaS & Software Practice", description: "Launched software solutions and SaaS product development capabilities for subscription platforms." },
  { year: "2024", title: "Multi-Industry Portfolio", description: "Delivered enterprise projects across finance, healthcare, manufacturing, retail, and public sector." },
] as const;

export const companyQuote = {
  text: "We structure every engagement around operational analysis, defined scope, and measurable delivery outcomes.",
  attribution: "VinextAI Delivery Leadership",
} as const;

export const deliveryProcess = [`
  );
  fs.writeFileSync(companyPath, company);
  console.log("updated company.ts");
}

write("src/components/pages/HomePage.tsx", `import Link from "next/link";
import SplitHero from "@/components/marketing/SplitHero";
import MarketingImage from "@/components/marketing/MarketingImage";
import { SectionHeader } from "@/components/marketing/SplitSection";
import { branding } from "@/lib/branding";
import { capabilities } from "@/data/company";
import { getFeaturedProjects } from "@/data/projects";
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
        title={\`\${branding.name} — Enterprise IT Services\`}
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
          <SectionHeader title="Featured Projects" subtitle="Recent enterprise engagements across industries and service categories." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={\`/projects/\${project.slug}\`}
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
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
`);

write("src/components/pages/AboutPageContent.tsx", `import Link from "next/link";
import MarketingImage from "@/components/marketing/MarketingImage";
import { companyIntro, companyMilestones, companyQuote, organizationalTeams } from "@/data/company";
import { visuals } from "@/lib/visuals";

export default function AboutPageContent() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden">
        <MarketingImage src={visuals.about.hero} alt="About VinextAI" fill priority sizes="100vw" className="brightness-[0.55]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">About the Company</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-white md:text-4xl">Enterprise IT Services for Business Systems</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">Structured delivery across integration, management, software, SaaS, and consulting.</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">{companyIntro.title}</h2>
          {companyIntro.paragraphs.map((p) => (
            <p key={p.slice(0, 32)} className="mt-6 text-lg leading-relaxed text-gray-700">{p}</p>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-xl">
            <MarketingImage src={visuals.about.storyEmbed} alt="Enterprise collaboration" fill sizes="100vw" />
          </div>
        </div>
      </section>

      <section className="relative section-spacing overflow-hidden">
        <MarketingImage src={visuals.about.quoteBg} alt="" fill sizes="100vw" className="brightness-[0.35]" />
        <div className="absolute inset-0 bg-primary-dark/70" />
        <blockquote className="relative mx-auto max-w-3xl px-4 text-center">
          <p className="text-xl font-medium leading-relaxed text-white md:text-2xl">&ldquo;{companyQuote.text}&rdquo;</p>
          <footer className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent">{companyQuote.attribution}</footer>
        </blockquote>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900">Company Timeline</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {companyMilestones.map((m) => (
              <article key={m.year} className="rounded-xl border border-gray-200 bg-white p-6">
                <span className="text-sm font-bold text-accent">{m.year}</span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{m.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{m.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">Organizational Teams</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {organizationalTeams.map((team) => (
              <article key={team.title} className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">{team.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{team.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-hover">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
`);

write("src/components/pages/ServicesPageContent.tsx", `import Link from "next/link";
import MarketingImage from "@/components/marketing/MarketingImage";
import { SectionHeader } from "@/components/marketing/SplitSection";
import { deliveryProcess } from "@/data/company";
import { services } from "@/data/services";
import { servicePageImage, visuals } from "@/lib/visuals";

const heroSteps = deliveryProcess.slice(0, 4);

export default function ServicesPageContent() {
  return (
    <>
      <section className="relative min-h-[75vh] overflow-hidden">
        <MarketingImage src={visuals.hero.services} alt="IT Services" fill priority sizes="100vw" className="brightness-[0.4]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/80 to-primary/50" />
        <div className="pattern-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center px-4 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Service Delivery</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold text-white md:text-4xl">Enterprise IT Services</h1>
          <p className="mt-4 max-w-xl text-blue-100">Structured service categories with defined scope, deliverables, and delivery process.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroSteps.map((step) => (
              <div key={step.step} className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <span className="text-xs font-bold text-accent">Step {step.step}</span>
                <h3 className="mt-1 font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-xs text-blue-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader title="Service Categories" subtitle="Each service is delivered as a structured business capability." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} href={\`/services/\${service.slug}\`} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
                <div className="relative aspect-[16/9]">
                  <MarketingImage src={servicePageImage(service.slug)} alt={service.title} fill sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white">{service.shortTitle}</h3>
                </div>
                <p className="p-5 text-sm text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Service Architecture</h2>
            <p className="mt-4 text-gray-600">Our delivery model connects business requirements to deployed systems through structured analysis, design, implementation, and maintenance.</p>
            <Link href="/contact" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">Discuss your requirements →</Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <MarketingImage src={visuals.services.architecture} alt="Service architecture" fill sizes="(max-width:768px) 100vw, 50vw" />
          </div>
        </div>
      </section>
    </>
  );
}
`);

write("src/components/pages/IndustriesShowcase.tsx", `import Link from "next/link";
import SplitHero, { BannerHero } from "@/components/marketing/SplitHero";
import SplitSection from "@/components/marketing/SplitSection";
import { industries } from "@/data/industries";
import { industryImage, visuals } from "@/lib/visuals";

export default function IndustriesShowcase() {
  return (
    <>
      <BannerHero
        title="Industries We Serve"
        subtitle="Deployment contexts where our IT services are applied across enterprise business sectors."
        solutionsLabel="Industry Coverage"
        image={visuals.hero.industries}
        ctas={[{ label: "Contact Us", href: "/contact" }]}
      />
      {industries.map((industry, index) => (
        <SplitSection
          key={industry.slug}
          title={industry.name}
          subtitle={industry.description}
          image={industryImage(industry.slug)}
          reverse={index % 2 === 1}
        >
          <ul className="space-y-2 text-sm text-gray-600">
            {industry.challenges.slice(0, 3).map((c) => (
              <li key={c}>— {c}</li>
            ))}
          </ul>
          <Link href={\`/industries/\${industry.slug}\`} className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
            View industry details →
          </Link>
        </SplitSection>
      ))}
    </>
  );
}
`);

write("src/components/pages/ProjectsShowcase.tsx", `import ProjectsShowcaseClient from "./ProjectsShowcaseClient";
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
          <Link href={\`/projects/\${featured.slug}\`} className="mt-8 inline-block w-fit rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-gray-100">
            Read Case Study
          </Link>
        </div>
      </section>
      <ProjectsShowcaseClient />
    </>
  );
}
`);

write("src/components/pages/ProjectsShowcaseClient.tsx", `"use client";

import { useState } from "react";
import ProjectFilter, { FilteredProjectGrid } from "@/components/projects/ProjectFilter";
import { projects, type ProjectCategory } from "@/data/projects";
import { SectionHeader } from "@/components/marketing/SplitSection";

export default function ProjectsShowcaseClient() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader title="Case Studies" subtitle="Filter by service category to explore relevant work." />
        <ProjectFilter active={active} onChange={setActive} />
        <div className="mt-8">
          <FilteredProjectGrid projects={projects} active={active} />
        </div>
      </div>
    </section>
  );
}
`);

write("src/components/pages/ContactPageContent.tsx", `import Link from "next/link";
import { BannerHero } from "@/components/marketing/SplitHero";
import ContactForm from "@/components/marketing/ContactForm";
import MarketingImage from "@/components/marketing/MarketingImage";
import { branding } from "@/lib/branding";
import { visuals } from "@/lib/visuals";

export default function ContactPageContent() {
  return (
    <>
      <BannerHero
        title="Contact Us"
        subtitle="Submit a structured inquiry for business discussions, project proposals, or general questions."
        solutionsLabel="Business Inquiries"
        image={visuals.hero.contact}
      />
      <section className="section-spacing">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-12">
          <aside className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Company</h2>
              <p className="mt-2 text-sm text-gray-700">{branding.company}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Email</h2>
              <Link href={\`mailto:\${branding.email}\`} className="mt-2 block text-sm text-primary hover:underline">{branding.email}</Link>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Phone</h2>
              <Link href={\`tel:\${branding.phone.replace(/\\s/g, "")}\`} className="mt-2 block text-sm text-primary hover:underline">{branding.phone}</Link>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Office Hours</h2>
              <p className="mt-2 text-sm text-gray-700">{branding.supportHours}</p>
            </div>
          </aside>
          <div className="lg:col-span-4">
            <ContactForm />
          </div>
          <div className="relative hidden min-h-[400px] overflow-hidden rounded-2xl lg:col-span-3 lg:block">
            <MarketingImage src={visuals.contact.panel} alt="Business inquiry" fill sizes="25vw" />
          </div>
        </div>
      </section>
    </>
  );
}
`);

console.log("Phase 2 complete");
