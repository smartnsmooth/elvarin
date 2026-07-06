import Link from "next/link";
import MarketingImage from "@/components/marketing/MarketingImage";
import { visuals } from "@/lib/visuals";
import {
  Award,
  Cloud,
  Globe,
  Handshake,
  Layers,
  Rocket,
  Shield,
  Target,
} from "lucide-react";

const timeline = [
  {
    year: "Foundation",
    title: "Enterprise IT Focus",
    description: "Built as a full-service IT company — not a reseller — combining licensing, deployment, and support under one operational model.",
    icon: Rocket,
    image: visuals.about.overview,
  },
  {
    year: "Expansion",
    title: "Software Ecosystem Coverage",
    description: "Extended coverage across Microsoft, Adobe, Windows, and business application ecosystems with volume and subscription programs.",
    icon: Layers,
    image: visuals.about.focus,
  },
  {
    year: "Platform",
    title: "Dual Delivery Model",
    description: "Launched direct product purchase and voucher redemption pathways — both delivering licenses via secure email with activation support.",
    icon: Cloud,
    image: visuals.about.model,
  },
  {
    year: "Today",
    title: "Lifecycle Operations",
    description: "Supporting procurement, deployment, renewal, and technical operations for business customers with structured enterprise support.",
    icon: Shield,
    image: visuals.about.support,
  },
];

const cultureGrid = [
  { icon: Award, title: "Operational Integrity", description: "Genuine licenses, transparent delivery, and documented support processes.", image: visuals.trust.security },
  { icon: Target, title: "Technical Depth", description: "Deployment, cloud integration, and lifecycle management — not just key delivery.", image: visuals.services.deployment },
  { icon: Handshake, title: "Business Alignment", description: "Software procurement aligned to how organizations actually operate and scale.", image: visuals.services.consulting },
  { icon: Globe, title: "Global Reach", description: "Enterprise licensing and IT solutions for business customers worldwide.", image: visuals.hero.about },
  { icon: Shield, title: "Secure Delivery", description: "Encrypted communications, audit trails, and reliable license fulfillment.", image: visuals.trust.infrastructure },
  { icon: Cloud, title: "Continuous Support", description: "Dedicated channels for licensing, redemption, purchase, and technical issues.", image: visuals.services.support },
];

export default function AboutEditorial() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden lg:min-h-[70vh]">
        <MarketingImage src={visuals.hero.about} fill priority sizes="100vw" className="brightness-[0.35]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/75 to-primary/40" />
        <div className="relative mx-auto w-full max-w-4xl px-6 pb-14 pt-28 lg:pb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Story</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.5rem]">
            Building the bridge between software and business operations
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 lg:text-lg">
            An IT company dedicated to enterprise software licensing, deployment, and technical support.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Who We Are</p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
            An enterprise IT partner, not a storefront
          </h2>
          <div className="mt-8 space-y-6 text-base leading-[1.85] text-gray-600 lg:text-lg">
            <p>
              We are an enterprise-focused IT company providing software licensing, deployment services,
              and ongoing technical support. Our mission is to simplify software procurement and lifecycle
              management for businesses of all sizes.
            </p>
            <p>
              Our core business spans software license sales, voucher-based license delivery, IT consulting,
              cloud infrastructure, and technical support for organizations that need reliable procurement partners.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl px-6">
          <div className="relative aspect-[21/9] min-h-[200px] overflow-hidden rounded-lg shadow-xl">
            <MarketingImage src={visuals.about.storyEmbed} fill sizes="90vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-md p-6 text-white lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Enterprise Operations</p>
              <p className="mt-2 text-lg font-semibold leading-snug lg:text-xl">
                Connecting procurement, deployment, and support into one workflow.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl px-6">
          <p className="text-base leading-[1.85] text-gray-600 lg:text-lg">
            We operate a dual delivery model: direct product purchase or voucher redemption — both with
            professional support and clear activation instructions.
          </p>
        </div>
      </section>

      <section className="relative min-h-[320px] py-20 lg:py-28">
        <div className="absolute inset-0">
          <MarketingImage src={visuals.about.quoteBg} fill sizes="100vw" className="brightness-[0.35]" />
          <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-[2px]" />
        </div>
        <blockquote className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-xl font-medium leading-relaxed text-white md:text-2xl lg:text-3xl">
            &ldquo;We build systems that connect software and business operations.&rdquo;
          </p>
          <footer className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent">
            — Digitalyra Enterprise Mission
          </footer>
        </blockquote>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Journey</p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">Milestones that shaped our platform</h2>
        </div>
        <div className="mx-auto mt-12 max-w-2xl px-6">
          <div className="relative space-y-0 border-l-2 border-primary/25 pl-8 sm:pl-10">
            {timeline.map((item) => (
              <div key={item.title} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[41px] flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-white shadow sm:-left-[45px] sm:h-10 sm:w-10">
                  <item.icon className="h-4 w-4 text-primary" />
                </span>
                <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                  <div className="relative h-24 sm:h-28">
                    <MarketingImage src={item.image} fill sizes="400px" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/75 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-wider text-white">
                      {item.year}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Culture</p>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">What defines how we work</h2>
            <p className="mt-4 text-gray-600">
              Enterprise trust is built through operational discipline, technical capability, and consistent delivery.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cultureGrid.map((cell) => (
              <article
                key={cell.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-slate-50 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative h-36 overflow-hidden">
                  <MarketingImage src={cell.image} fill sizes="400px" className="transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg">
                    <cell.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-bold text-gray-900">{cell.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{cell.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/support" className="inline-flex rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
