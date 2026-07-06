"use client";

import Link from "next/link";
import SplitHero from "@/components/marketing/SplitHero";
import { SectionHeader } from "@/components/marketing/SplitSection";
import { ServiceVisualCard } from "@/components/marketing/TrustBanner";
import MarketingImage from "@/components/marketing/MarketingImage";
import { redeemPath, shopPath } from "@/lib/urls";
import { visuals } from "@/lib/visuals";
import {
  Building2,
  Cloud,
  Headphones,
  KeyRound,
  Monitor,
  ShieldCheck,
  ShoppingBag,
  Users,
} from "lucide-react";

export default function EnterpriseHero() {
  return (
    <SplitHero
      title="Enterprise Software Licensing & IT Solutions"
      subtitle="We support software procurement, deployment, and lifecycle management for business customers."
      image={visuals.hero.home}
      platformLabel="Enterprise Platform"
      ctas={[
        { label: "Browse License Store", href: shopPath("/products") },
        { label: "Our Services", href: "/services", variant: "outline" },
      ]}
    />
  );
}

export function CoreServicesSection() {
  const services = [
    {
      icon: KeyRound,
      title: "Software Licensing",
      description: "Volume and subscription licensing for Microsoft, Adobe, and business software ecosystems.",
      image: visuals.services.licensing,
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic guidance for software selection, compliance, and enterprise IT planning.",
      image: visuals.services.consulting,
    },
    {
      icon: Monitor,
      title: "Deployment Services",
      description: "Professional installation, configuration, and rollout support for business environments.",
      image: visuals.services.deployment,
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Cloud integration, migration, and managed infrastructure for modern workplaces.",
      image: visuals.services.cloud,
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Dedicated support for licensing, activation, and software-related technical issues.",
      image: visuals.services.support,
    },
  ];

  return (
    <section className="section-spacing pattern-dots">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          title="Core Services"
          subtitle="Comprehensive IT solutions for enterprise business customers"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <ServiceVisualCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function StoreCtaSection() {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg lg:grid lg:grid-cols-2">
          <div className="relative min-h-[240px]">
            <MarketingImage src={visuals.hero.products} fill sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <ShoppingBag className="h-4 w-4" />
              License Store
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Purchase genuine software licenses online</h2>
            <p className="mt-3 text-gray-600">
              Browse Microsoft, Adobe, Autodesk, and security software with instant email delivery, voucher
              redemption, and dedicated support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={shopPath("/products")}
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
              >
                Browse Products
              </a>
              <a
                href={redeemPath("/")}
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Redeem Voucher
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Enterprise Software Support Provider",
      description: "Dedicated licensing and technical support for business customers.",
      image: visuals.trust.security,
    },
    {
      icon: Monitor,
      title: "Software Deployment Assistance",
      description: "Professional rollout, configuration, and environment setup.",
      image: visuals.services.deployment,
    },
    {
      icon: KeyRound,
      title: "Licensing Lifecycle Management",
      description: "Procurement, renewal, and compliance across your software stack.",
      image: visuals.services.licensing,
    },
    {
      icon: Building2,
      title: "Business IT Solutions",
      description: "End-to-end IT services aligned to enterprise operations.",
      image: visuals.trust.infrastructure,
    },
  ];

  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          title="Why Businesses Trust Us"
          subtitle="Enterprise-grade licensing and IT operations built for reliability and long-term partnership."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <ServiceVisualCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
