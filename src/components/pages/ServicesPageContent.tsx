import Link from "next/link";
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
              <Link key={service.slug} href={`/services/${service.slug}`} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
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
