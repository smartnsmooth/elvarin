import Button from "@/components/ui/Button";
import FadeInSection from "@/components/ui/FadeInSection";
import { EnterpriseDiagram } from "@/components/ui/EnterpriseDiagram";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionContainer";
import { branding } from "@/lib/branding";
import { companyIntro, companyValues, deliveryProcess } from "@/data/company";
import { industries } from "@/data/industries";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";

export function HeroSection() {
  return (
    <section className="hero-subtle-bg">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <FadeInSection>
              <h1 className="max-w-2xl text-gray-900">
                Enterprise IT Services for Business System Transformation
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600">
                We provide comprehensive IT services for businesses — planning, building, integrating,
                operating, and improving enterprise software systems. Our work spans system integration,
                software development, SaaS delivery, IT consulting, and digital transformation across
                multiple industries. We focus on understanding business operations first, then delivering
                technology solutions that support long-term operational reliability.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/services">Explore Services</Button>
                <Button href="/projects" variant="secondary">
                  View Projects
                </Button>
              </div>
            </FadeInSection>
          </div>
          <div className="lg:col-span-2">
            <FadeInSection>
              <EnterpriseDiagram className="mx-auto w-full max-w-md" />
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CompanyIntroSection() {
  return (
    <SectionContainer id="about" background="gray">
      <FadeInSection>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-gray-900">{companyIntro.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600">{companyIntro.paragraph}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-3">
          {companyValues.map((value) => (
            <div key={value.title} className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </SectionContainer>
  );
}

export function ServicesOverviewSection() {
  return (
    <SectionContainer id="services">
      <FadeInSection>
        <SectionHeader
          title="Services Overview"
          subtitle="Business capabilities for planning, building, and operating enterprise software systems."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href="/services"
            />
          ))}
        </div>
      </FadeInSection>
    </SectionContainer>
  );
}

export function IndustriesSection() {
  return (
    <SectionContainer id="industries" background="gray">
      <FadeInSection>
        <SectionHeader
          title="Industries"
          subtitle="Experience delivering enterprise systems across multiple business sectors."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Card
              key={industry.slug}
              icon={industry.icon}
              title={industry.name}
              description={industry.description}
            />
          ))}
        </div>
      </FadeInSection>
    </SectionContainer>
  );
}

export function FeaturedProjectsSection() {
  const featured = getFeaturedProjects(6);

  return (
    <SectionContainer id="projects">
      <FadeInSection>
        <SectionHeader
          title="Featured Projects"
          subtitle="Selected work demonstrating system integration, software development, and ongoing operations."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Card
              key={project.slug}
              title={project.title}
              description={project.shortDescription}
              tags={[project.industry, project.serviceType]}
              href={`/projects/${project.slug}`}
              linkLabel="View Details"
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
      </FadeInSection>
    </SectionContainer>
  );
}

export function DeliveryProcessSection() {
  return (
    <SectionContainer id="process" background="gray">
      <FadeInSection>
        <SectionHeader
          title="Delivery Process"
          subtitle="A structured approach from discovery through ongoing support."
          centered
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-5">
          {deliveryProcess.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                {step.step}
              </div>
              <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </SectionContainer>
  );
}

export function CtaBannerSection() {
  return (
    <SectionContainer>
      <FadeInSection>
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 px-8 py-16 text-center md:px-12">
          <h2 className="text-gray-900">Have a project in mind? Let&apos;s discuss your requirements.</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            We accept business inquiries, project proposals, and maintenance requests from organizations
            seeking a technology partner for enterprise systems. Share your requirements and our team
            will respond within one to two business days.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">Contact Us</Button>
            <Button href={`mailto:${branding.email}`} variant="secondary">
              Email Inquiry
            </Button>
          </div>
        </div>
      </FadeInSection>
    </SectionContainer>
  );
}
