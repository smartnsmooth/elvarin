import Link from "next/link";
import SplitHero, { BannerHero } from "@/components/marketing/SplitHero";
import MarketingImage from "@/components/marketing/MarketingImage";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { Service } from "@/data/services";
import { servicePageImage } from "@/lib/visuals";
import { getServiceLayoutVariant } from "./serviceLayoutConfig";

export default function ServiceDetailLayout({ service }: { service: Service }) {
  const variant = getServiceLayoutVariant(service.slug);
  const image = servicePageImage(service.slug);

  const hero =
    variant === "splitHeroRight" ? (
      <SplitHero title={service.title} subtitle={service.description} image={image} imagePosition="right" platformLabel={service.shortTitle} ctas={[{ label: "Contact Us", href: "/contact" }]} />
    ) : variant === "splitHeroLeft" ? (
      <SplitHero title={service.title} subtitle={service.description} image={image} imagePosition="left" platformLabel={service.shortTitle} ctas={[{ label: "Contact Us", href: "/contact" }]} />
    ) : variant === "bannerHero" ? (
      <BannerHero title={service.title} subtitle={service.description} image={image} solutionsLabel={service.shortTitle} ctas={[{ label: "Contact Us", href: "/contact" }]} />
    ) : variant === "imageBand" ? (
      <section className="relative">
        <div className="relative h-64 md:h-80">
          <MarketingImage src={image} alt={service.title} fill priority sizes="100vw" className="brightness-[0.5]" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/50" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.shortTitle }]} />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">{service.title}</h1>
          <p className="mt-3 max-w-2xl text-gray-600">{service.description}</p>
        </div>
      </section>
    ) : (
      <section className="border-b border-gray-200 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.shortTitle }]} />
          <h1 className="mt-6 text-3xl font-bold text-gray-900">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-gray-600">{service.description}</p>
        </div>
      </section>
    );

  return (
    <>
      {hero}
      <section className="section-spacing">
        <div className="mx-auto max-w-3xl space-y-12 px-4">
          <section>
            <h2 className="text-xl font-bold text-gray-900">Service Overview</h2>
            <p className="mt-4 text-gray-700">{service.overview}</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">Scope Definition</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-gray-900">Included</h3>
                <ul className="mt-3 space-y-2">{service.scopeIncluded.map((i) => <li key={i} className="text-sm text-gray-700">— {i}</li>)}</ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Excluded</h3>
                <ul className="mt-3 space-y-2">{service.scopeExcluded.map((i) => <li key={i} className="text-sm text-gray-700">— {i}</li>)}</ul>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">Process Flow</h2>
            <ol className="mt-4 space-y-2">{service.process.map((step, idx) => <li key={step} className="text-sm text-gray-700"><span className="font-medium text-gray-500">{idx + 1}.</span> {step}</li>)}</ol>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">Deliverables</h2>
            <ul className="mt-4 space-y-2">{service.deliverables.map((i) => <li key={i} className="text-sm text-gray-700">— {i}</li>)}</ul>
          </section>
          <Link href="/contact" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-hover">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
