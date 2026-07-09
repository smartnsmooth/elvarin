import Link from "next/link";
import MarketingImage from "@/components/marketing/MarketingImage";
import { companyIntro, companyMilestones, companyQuote, companyRegistration, founderBio, organizationalTeams } from "@/data/company";
import { branding, hasRegisteredAddress } from "@/lib/branding";
import { visuals } from "@/lib/visuals";

export default function AboutPageContent() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden">
        <MarketingImage src={visuals.about.hero} alt="About Elvarin" fill priority sizes="100vw" className="brightness-[0.55]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">About the Company</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-white md:text-4xl">Enterprise IT Services for Business Systems</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">Structured delivery across integration, management, software, SaaS, and consulting.</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">{companyIntro.title}</h2>
          {companyIntro.paragraphs.map((p) => (
            <p key={p.slice(0, 32)} className="mt-6 text-lg leading-relaxed text-gray-700">{p}</p>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-xl">
            <MarketingImage src={visuals.about.storyEmbed} alt="Enterprise collaboration" fill sizes="100vw" />
          </div>
        </div>
      </section>

      <section className="relative section-spacing overflow-hidden">
        <MarketingImage src={visuals.about.quoteBg} alt="" fill sizes="100vw" className="brightness-[0.35]" />
        <div className="absolute inset-0 bg-primary-dark/70" />
        <blockquote className="relative mx-auto max-w-3xl px-4 text-center">
          <p className="text-xl font-medium leading-relaxed text-white md:text-2xl">&ldquo;{companyQuote.text}&rdquo;</p>
          <footer className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent">{companyQuote.attribution}</footer>
        </blockquote>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900">Company Timeline</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {companyMilestones.map((m) => (
              <article key={m.year} className="rounded-xl border border-gray-200 bg-white p-6">
                <span className="text-sm font-bold text-accent">{m.year}</span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{m.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{m.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">Organizational Teams</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {organizationalTeams.map((team) => (
              <article key={team.title} className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">{team.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{team.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">Leadership</h2>
          <article className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">{founderBio.role}</p>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">{founderBio.name}</h3>
            <p className="mt-4 text-gray-700">{founderBio.bio}</p>
          </article>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">{companyRegistration.title}</h2>
          <p className="mt-4 text-gray-700">{companyRegistration.description}</p>
          <dl className="mt-6 space-y-3 text-sm text-gray-700">
            <div>
              <dt className="font-medium text-gray-900">Legal entity</dt>
              <dd>{branding.company}</dd>
            </div>
            {branding.companiesHouseNumber && (
              <div>
                <dt className="font-medium text-gray-900">Companies House number</dt>
                <dd>{branding.companiesHouseNumber}</dd>
              </div>
            )}
            {hasRegisteredAddress() && (
              <div>
                <dt className="font-medium text-gray-900">Registered office</dt>
                <dd>{branding.registeredAddress}</dd>
              </div>
            )}
            {branding.vatNumber && (
              <div>
                <dt className="font-medium text-gray-900">VAT number</dt>
                <dd>{branding.vatNumber}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mt-10">
            <Link href="/contact" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-hover">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
