import SiteShell from "@/components/SiteShell";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionContainer";
import { deliveryProcess } from "@/data/company";
import { services } from "@/data/services";

export const metadata = {
  title: "Services",
  description:
    "System integration, system management, software solutions, SaaS services, IT consulting, and digital transformation for business clients.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="border-b border-gray-200 bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <h1 className="text-gray-900">Services</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            Business capabilities for planning, building, integrating, operating, and improving
            enterprise software systems.
          </p>
        </div>
      </section>

      <SectionContainer>
        <FadeInSection>
          <SectionHeader
            title="Service Categories"
            subtitle="Each service is delivered as a structured business capability, not a technical specialty."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </FadeInSection>
      </SectionContainer>

      <SectionContainer background="gray">
        <FadeInSection>
          <SectionHeader
            title="Delivery Process"
            subtitle="How we approach every engagement from discovery through ongoing support."
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

      <SectionContainer>
        <FadeInSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-gray-900">Ready to discuss your requirements?</h2>
            <p className="mt-4 text-base text-gray-600">
              Contact us to start a business inquiry or project proposal discussion.
            </p>
            <div className="mt-8">
              <Button href="/contact">Contact Us</Button>
            </div>
          </div>
        </FadeInSection>
      </SectionContainer>
    </SiteShell>
  );
}
