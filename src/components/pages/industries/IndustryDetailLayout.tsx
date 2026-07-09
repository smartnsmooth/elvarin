import Link from "next/link";
import SplitHero, { BannerHero } from "@/components/marketing/SplitHero";
import SplitSection from "@/components/marketing/SplitSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { Industry } from "@/data/industries";
import { industryImage } from "@/lib/visuals";
import { getIndustryLayoutVariant } from "./industryLayoutConfig";

export default function IndustryDetailLayout({ industry }: { industry: Industry }) {
  const variant = getIndustryLayoutVariant(industry.slug);
  const image = industryImage(industry.slug);

  if (variant === "splitHeroLeft") {
    return (
      <>
        <SplitHero title={industry.name} subtitle={industry.description} image={image} imagePosition="left" platformLabel="Industry" dark ctas={[{ label: "Contact Us", href: "/contact" }]} />
        <IndustryBody industry={industry} />
      </>
    );
  }

  if (variant === "splitHeroRight") {
    return (
      <>
        <SplitHero title={industry.name} subtitle={industry.description} image={image} imagePosition="right" platformLabel="Industry" dark ctas={[{ label: "Contact Us", href: "/contact" }]} />
        <IndustryBody industry={industry} />
      </>
    );
  }

  if (variant === "darkHero") {
    return (
      <>
        <section className="hero-gradient relative overflow-hidden py-20">
          <div className="pattern-grid absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-7xl px-4">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: industry.name }]} className="text-blue-200" />
            <h1 className="mt-6 text-3xl font-bold text-white md:text-4xl">{industry.name}</h1>
            <p className="mt-4 max-w-2xl text-blue-100">{industry.description}</p>
          </div>
        </section>
        <SplitSection title="Industry Context" subtitle={industry.contextDescription} image={image} />
        <IndustryBody industry={industry} hideOverview />
      </>
    );
  }

  if (variant === "editorialBand") {
    return (
      <>
        <BannerHero title={industry.name} subtitle={industry.description} image={image} solutionsLabel="Industry" />
        <IndustryBody industry={industry} />
      </>
    );
  }

  if (variant === "cardGrid") {
    return (
      <>
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-4">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: industry.name }]} />
            <h1 className="mt-6 text-3xl font-bold text-gray-900">{industry.name}</h1>
            <p className="mt-3 max-w-2xl text-gray-600">{industry.description}</p>
          </div>
        </section>
        <div className="relative aspect-[21/9] max-h-80 w-full overflow-hidden">
          <img src={image.src} alt={industry.name} className="h-full w-full object-cover" />
        </div>
        <IndustryBody industry={industry} layout="cards" />
      </>
    );
  }

  return (
    <>
      <BannerHero title={industry.name} subtitle={industry.description} image={image} solutionsLabel="Industry" ctas={[{ label: "Contact Us", href: "/contact" }]} />
      <SplitSection title="Industry Overview" subtitle={industry.overview} image={image} reverse />
      <IndustryBody industry={industry} hideOverview />
    </>
  );
}

function IndustryBody({ industry, hideOverview, layout }: { industry: Industry; hideOverview?: boolean; layout?: "cards" | "default" }) {
  const challenges = (
    <section className="section-spacing bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-xl font-bold text-gray-900">Common Challenges</h2>
        {layout === "cards" ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-3">{industry.challenges.map((c) => <div key={c} className="rounded-lg border bg-white p-4 text-sm text-gray-700">{c}</div>)}</div>
        ) : (
          <ul className="mt-4 space-y-2">{industry.challenges.map((c) => <li key={c} className="text-sm text-gray-700">— {c}</li>)}</ul>
        )}
      </div>
    </section>
  );

  const services = (
    <section className="section-spacing">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-xl font-bold text-gray-900">Applied Services</h2>
        <div className="mt-4 flex flex-wrap gap-2">{industry.serviceMapping.map((s) => <span key={s} className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">{s}</span>)}</div>
        <Link href="/contact" className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-hover">Contact Us</Link>
      </div>
    </section>
  );

  return (
    <>
      {!hideOverview && (
        <section className="section-spacing">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-xl font-bold text-gray-900">Industry Overview</h2>
            <p className="mt-4 text-gray-700">{industry.overview}</p>
            <p className="mt-4 text-gray-700">{industry.contextDescription}</p>
          </div>
        </section>
      )}
      {challenges}
      {services}
    </>
  );
}
