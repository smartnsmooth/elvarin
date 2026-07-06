import Link from "next/link";
import MarketingImage from "@/components/marketing/MarketingImage";
import FAQAccordion from "@/components/marketing/FAQAccordion";
import { visuals } from "@/lib/visuals";
import {
  CheckCircle2,
  ClipboardList,
  Cloud,
  FileKey,
  Layers,
  Monitor,
  PackageCheck,
  Server,
  Shield,
  Truck,
} from "lucide-react";

const capabilityMatrix = [
  { capability: "Microsoft 365", scope: "Business & Enterprise plans", delivery: "Instant / Volume", status: "Active", image: visuals.categories.microsoft365, icon: Monitor },
  { capability: "Office Licensing", scope: "Perpetual & subscription", delivery: "Volume / Retail", status: "Active", image: visuals.categories.office, icon: FileKey },
  { capability: "Windows Licensing", scope: "Desktop & server OS", delivery: "Volume / OEM", status: "Active", image: visuals.categories.windows, icon: Server },
  { capability: "Adobe Licensing", scope: "Acrobat & Creative Cloud", delivery: "Team / Enterprise", status: "Active", image: visuals.categories.adobe, icon: Layers },
  { capability: "Volume Licensing", scope: "Bulk enterprise procurement", delivery: "Quote-based", status: "Active", image: visuals.categories.volume, icon: Shield },
  { capability: "Subscription Mgmt", scope: "Renewals & compliance", delivery: "Managed", status: "Active", image: visuals.categories.subscription, icon: Cloud },
  { capability: "Procurement Support", scope: "Sourcing & audit assistance", delivery: "Consulting", status: "Active", image: visuals.categories.procurement, icon: CheckCircle2 },
  { capability: "Voucher Redemption", scope: "Pre-issued license codes", delivery: "Email instant", status: "Active", image: visuals.redeem.flow, icon: FileKey },
];

const serviceBlocks = [
  {
    icon: PackageCheck,
    title: "Secure License Delivery",
    description: "Electronic delivery of license keys with activation instructions and audit-ready documentation.",
    image: visuals.trust.security,
  },
  {
    icon: Truck,
    title: "Deployment Support",
    description: "Professional rollout assistance for desktop, server, and cloud software environments.",
    image: visuals.services.deployment,
  },
  {
    icon: ClipboardList,
    title: "Lifecycle Management",
    description: "Renewals, compliance tracking, and subscription management across your software portfolio.",
    image: visuals.services.licensing,
  },
  {
    icon: FileKey,
    title: "Procurement Assistance",
    description: "Volume licensing guidance, quote support, and enterprise sourcing for business customers.",
    image: visuals.categories.procurement,
  },
  {
    icon: Shield,
    title: "Enterprise Compliance",
    description: "Licensing audit support and compliance alignment for regulated and enterprise organizations.",
    image: visuals.trust.infrastructure,
  },
];

const faqs = [
  { question: "How are licenses delivered?", answer: "Licenses are delivered electronically via email. After purchase or voucher redemption, you receive your license key and activation instructions directly in your inbox." },
  { question: "How does the Redeem system work?", answer: "Visit the Redeem page, enter your voucher and security codes, and receive your license key by email." },
  { question: "What support is available?", answer: "We provide support for licensing, redemption, purchase assistance, and technical software issues during published support hours." },
  { question: "What software is covered?", answer: "Microsoft (365, Office, Windows, Server), Adobe (Acrobat, Creative Cloud), and business software applications." },
];

export default function LicensingDashboard() {
  return (
    <>
      <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-slate-900 lg:min-h-[65vh]">
        <div className="absolute inset-0">
          <MarketingImage src={visuals.hero.licensing} fill priority sizes="100vw" className="opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-dark/90 to-slate-900" />
        </div>
        <div className="pattern-grid absolute inset-0 opacity-5" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Enterprise Licensing</p>
          <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            Software Licensing Solutions for Enterprise Business
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 lg:text-lg">
            Structured procurement, deployment, and lifecycle management across Microsoft, Adobe,
            Windows, and business software ecosystems — with dedicated support for business customers.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/products" className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90">
              Browse Products
            </Link>
            <Link href="/redeem" className="rounded-lg border border-slate-500 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Redeem Voucher
            </Link>
            <Link href="/support" className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Capability Matrix</p>
          <h2 className="mt-1 text-2xl font-bold text-gray-900">Licensing Capabilities</h2>
          <p className="mt-2 text-sm text-gray-600">Structured overview of platform licensing coverage and delivery models.</p>

          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                    <th className="px-4 py-3">Capability</th>
                    <th className="px-4 py-3">Scope</th>
                    <th className="px-4 py-3">Delivery</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 w-16"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {capabilityMatrix.map((row) => (
                    <tr key={row.capability} className="bg-white transition hover:bg-slate-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                            <MarketingImage src={row.image} fill sizes="40px" />
                          </div>
                          <div className="flex items-center gap-2">
                            <row.icon className="h-4 w-4 text-primary" />
                            <span className="font-medium text-gray-900">{row.capability}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{row.scope}</td>
                      <td className="px-4 py-3">
                        <span className="rounded bg-primary/5 px-2 py-0.5 font-mono text-xs text-primary">{row.delivery}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-trust-green">
                          <span className="h-1.5 w-1.5 rounded-full bg-trust-green" />
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Link href="/products" className="text-xs font-medium text-primary hover:underline">View</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Enterprise Services</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">End-to-end licensing support</h2>
            <p className="mt-3 text-sm text-gray-600">
              From procurement through deployment and renewal — structured support for business software operations.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {serviceBlocks.map((block) => (
              <article
                key={block.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative h-28 overflow-hidden">
                  <MarketingImage src={block.image} fill sizes="250px" className="opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 to-primary/30" />
                  <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow">
                    <block.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-sm font-bold leading-snug text-gray-900">{block.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600">{block.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-center text-xl font-bold text-gray-900">Licensing FAQ</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
