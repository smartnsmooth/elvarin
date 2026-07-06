import SiteShell from "@/components/SiteShell";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionContainer from "@/components/ui/SectionContainer";
import Button from "@/components/ui/Button";
import { companyIntro, companyValues } from "@/data/company";
import { industries } from "@/data/industries";

export const metadata = {
  title: "About",
  description:
    "Learn about Elvarin — an IT services company specializing in enterprise system integration, software solutions, and digital transformation.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="border-b border-gray-200 bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <h1 className="text-gray-900">About Elvarin</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            An IT services company focused on enterprise software systems for business clients.
          </p>
        </div>
      </section>

      <SectionContainer>
        <FadeInSection>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-gray-900">{companyIntro.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600">{companyIntro.paragraph}</p>
          </div>
        </FadeInSection>
      </SectionContainer>

      <SectionContainer background="gray">
        <FadeInSection>
          <h2 className="text-center text-gray-900">Our Approach</h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
            {companyValues.map((value) => (
              <div key={value.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </SectionContainer>

      <SectionContainer>
        <FadeInSection>
          <h2 className="text-center text-gray-900">Industries We Serve</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-gray-600">
            We work with business clients across multiple sectors, delivering systems tailored to
            operational requirements in each domain.
          </p>
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry.slug}
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
              >
                {industry.name}
              </span>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </FadeInSection>
      </SectionContainer>
    </SiteShell>
  );
}
