import Button from "@/components/ui/Button";
import { EnterpriseDiagram } from "@/components/ui/EnterpriseDiagram";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionContainer";
import ContactForm from "@/components/marketing/ContactForm";
import { branding } from "@/lib/branding";
import { capabilities, companyIntro, organizationalTeams } from "@/data/company";
import { industries } from "@/data/industries";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="section-padding-hero bg-white">
      <div className="container-enterprise">
        <div className="grid min-h-[560px] items-center gap-12 lg:min-h-[720px] lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-gray-500">Enterprise IT Services</p>
            <h1 className="mt-3 max-w-[640px] text-gray-900">
              IT Services for Enterprise System Integration and Operations
            </h1>
            <p className="mt-6 max-w-[720px] text-base leading-[26px] text-gray-700">
              We provide system integration, system management, software solutions, SaaS products, and
              IT consulting for business clients. Our work covers planning, implementation, deployment,
              and ongoing operation of enterprise software systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Contact Us</Button>
              <Button href="/projects" variant="secondary">
                View Projects
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <EnterpriseDiagram className="mx-auto w-full max-w-[520px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <SectionContainer id="about" background="gray">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <h2 className="text-gray-900">{companyIntro.title}</h2>
          {companyIntro.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-6 max-w-[720px] text-base leading-[26px] text-gray-700">
              {paragraph}
            </p>
          ))}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div key={cap.title}>
                <h3 className="text-lg font-semibold text-gray-900">{cap.title}</h3>
                <p className="mt-2 text-sm leading-[22px] text-gray-700">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="grid gap-6">
            {organizationalTeams.map((team) => (
              <article key={team.title} className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-[22px] font-semibold leading-[30px] text-gray-900">{team.title}</h3>
                <p className="mt-2 text-sm leading-[22px] text-gray-700">{team.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export function ServicesSection() {
  return (
    <SectionContainer id="services">
      <SectionHeader
        title="Services"
        subtitle="Structured service categories for enterprise system planning, implementation, and operation."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.slug}
            title={service.shortTitle}
            description={service.description}
            tags={service.tags}
            href={`/services/${service.slug}`}
            linkLabel="Learn More"
          />
        ))}
      </div>
    </SectionContainer>
  );
}

export function IndustriesSection() {
  return (
    <SectionContainer id="industries" background="gray">
      <SectionHeader
        title="Industries"
        subtitle="Deployment contexts where our services are applied across enterprise business sectors."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <Card
            key={industry.slug}
            title={industry.name}
            description={industry.description}
            tags={industry.serviceMapping}
            href={`/industries/${industry.slug}`}
            linkLabel="View Details"
          />
        ))}
      </div>
    </SectionContainer>
  );
}

export function ProjectsSection() {
  const featured = getFeaturedProjects(6);

  return (
    <SectionContainer id="projects">
      <SectionHeader
        title="Projects"
        subtitle="Selected implementations demonstrating system integration, software development, and ongoing operations."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <Card
            key={project.slug}
            title={project.title}
            description={project.shortDescription}
            tags={[project.industry, project.serviceType]}
            href={`/projects/${project.slug}`}
            linkLabel="View Case Study"
          />
        ))}
      </div>
      <div className="mt-12">
        <Button href="/projects" variant="secondary">
          View All Projects
        </Button>
      </div>
    </SectionContainer>
  );
}

export function ContactSection() {
  return (
    <SectionContainer id="contact" background="gray">
      <SectionHeader
        title="Contact"
        subtitle="Submit a structured inquiry for business discussions, project proposals, or general questions."
      />
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
        <aside className="lg:col-span-5">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Company</h3>
              <p className="mt-2 text-sm text-gray-700">{branding.company}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              <Link href={`mailto:${branding.email}`} className="mt-2 block text-sm text-primary hover:underline">
                {branding.email}
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
              <Link href={`tel:${branding.phone.replace(/\s/g, "")}`} className="mt-2 block text-sm text-primary hover:underline">
                {branding.phone}
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Hours</h3>
              <p className="mt-2 text-sm text-gray-700">{branding.supportHours}</p>
            </div>
          </div>
        </aside>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
}
