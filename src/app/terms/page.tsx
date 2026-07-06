import SiteShell from "@/components/SiteShell";
import SectionContainer from "@/components/ui/SectionContainer";
import { branding } from "@/lib/branding";

export const metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${branding.name} enterprise IT services website.`,
};

export default function TermsPage() {
  return (
    <SiteShell>
      <section className="border-b border-gray-200 bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <h1 className="text-gray-900">Terms of Use</h1>
        </div>
      </section>
      <SectionContainer>
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-gray-600">
          <p>
            By accessing this website, you agree to these terms of use. This website is operated by{" "}
            {branding.company} to provide information about our IT services for business clients.
          </p>
          <h2 className="text-xl font-semibold text-gray-900">Website Content</h2>
          <p>
            Content on this website is provided for informational purposes. Project descriptions and
            service information represent our capabilities but do not constitute binding offers or
            commitments unless confirmed through formal business agreements.
          </p>
          <h2 className="text-xl font-semibold text-gray-900">Intellectual Property</h2>
          <p>
            All website content, including text, design, and branding, is the property of{" "}
            {branding.company} unless otherwise stated.
          </p>
          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${branding.email}`} className="text-primary hover:underline">
              {branding.email}
            </a>
            .
          </p>
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
