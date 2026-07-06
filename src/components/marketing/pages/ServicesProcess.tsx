import Link from "next/link";
import MarketingImage from "@/components/marketing/MarketingImage";
import { visuals } from "@/lib/visuals";
import {
  ArrowRight,
  ArrowRightLeft,
  Cloud,
  Headphones,
  MessageSquare,
  Monitor,
  Puzzle,
  Rocket,
  Users,
  Wrench,
} from "lucide-react";

const pipelineSteps = [
  { icon: MessageSquare, label: "Consultation", description: "Discovery & requirements", image: visuals.servicePages.consulting },
  { icon: Rocket, label: "Planning", description: "Architecture & strategy", image: visuals.servicePages.integration },
  { icon: Wrench, label: "Deployment", description: "Install & configure", image: visuals.servicePages.deployment },
  { icon: Headphones, label: "Support", description: "Ongoing operations", image: visuals.servicePages.support },
];

const services = [
  { icon: Users, title: "IT Consulting", description: "Strategic guidance for software selection, compliance, and enterprise IT planning.", image: visuals.servicePages.consulting },
  { icon: Monitor, title: "Software Deployment", description: "Professional rollout across workstations, servers, and cloud environments.", image: visuals.servicePages.deployment },
  { icon: Cloud, title: "Cloud Services", description: "Cloud migration, Microsoft 365 tenant setup, and managed infrastructure.", image: visuals.servicePages.cloud },
  { icon: Puzzle, title: "System Integration", description: "Connect directories, APIs, and business applications seamlessly.", image: visuals.servicePages.integration },
  { icon: Headphones, title: "Technical Support", description: "Licensing, activation, deployment, and escalation support.", image: visuals.servicePages.support },
  { icon: ArrowRightLeft, title: "Migration Services", description: "Legacy platform migration with minimal business disruption.", image: visuals.servicePages.migration },
];

export default function ServicesProcess() {
  return (
    <>
      {/* Process visualization hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-primary-dark">
        <MarketingImage src={visuals.servicePages.pipeline} fill priority sizes="100vw" className="opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Execution Model</p>
          <h1 className="mt-4 max-w-2xl text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            How we deliver enterprise IT services
          </h1>
          <p className="mt-4 max-w-xl text-lg text-blue-100/80">
            A structured pipeline from consultation through deployment to ongoing support —
            built for operational clarity, not brochure browsing.
          </p>
          <Link href="/support" className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-gray-100">
            Start a Project
          </Link>
        </div>
      </section>

      {/* Horizontal step flow — key differentiator */}
      <section className="relative -mt-8 z-10 mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl lg:p-8">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-primary">Service Pipeline</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="relative flex flex-col items-center text-center">
                {i < pipelineSteps.length - 1 && (
                  <ArrowRight className="absolute -right-2 top-8 hidden h-5 w-5 text-gray-300 lg:block" />
                )}
                <div className="relative h-16 w-full max-w-[140px] overflow-hidden rounded-lg">
                  <MarketingImage src={step.image} fill sizes="140px" />
                  <div className="absolute inset-0 bg-primary/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-2 font-semibold text-gray-900">{step.label}</p>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service feature cards — banner top, no split layout */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Service Catalog</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Operational capabilities</h2>
            <p className="mt-3 text-gray-600">Each service is delivered through our standardized execution pipeline.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-40 overflow-hidden">
                  <MarketingImage
                    src={service.image}
                    fill
                    sizes="400px"
                    className="transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-primary/20" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 shadow">
                      <service.icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex-1 text-sm leading-relaxed text-gray-600">{service.description}</p>
                  <Link href="/support" className="mt-4 text-sm font-medium text-primary hover:underline">
                    Request service →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width process architecture diagram */}
      <section className="relative overflow-hidden">
        <MarketingImage src={visuals.servicePages.architecture} fill sizes="100vw" className="brightness-[0.3]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary/80 to-primary-dark/95" />
        <div className="pattern-grid absolute inset-0 opacity-10" />
        <div className="relative px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">End-to-End Lifecycle</p>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Service architecture from intake to ongoing operations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100/80">
              Every engagement flows through consultation, planning, deployment, and support —
              with clear handoffs and documented deliverables at each stage.
            </p>
          </div>
          {/* Architecture flow diagram (CSS-based) */}
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-2 lg:flex-nowrap lg:gap-0">
            {["Intake", "Assess", "Design", "Deploy", "Validate", "Support"].map((node, i, arr) => (
              <div key={node} className="flex items-center">
                <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">Phase {i + 1}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{node}</p>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="mx-1 hidden h-4 w-4 shrink-0 text-white/40 lg:block" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/support" className="inline-flex rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent/90">
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
