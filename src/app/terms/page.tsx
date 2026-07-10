import SiteShell from "@/components/SiteShell";
import SectionContainer from "@/components/ui/SectionContainer";
import { branding, hasRegisteredAddress } from "@/lib/branding";
import { createPageMetadata } from "@/lib/metadata";

const LAST_UPDATED = "10 July 2026";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description: `Terms of use for the ${branding.company} website. Acceptable use, intellectual property, and governing law.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <SiteShell>
      <section className="border-b border-gray-200 bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <h1 className="text-gray-900">Terms of Use</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>
      <SectionContainer>
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-gray-600">
          <p>
            By accessing this website, you agree to these terms of use. This website is operated by {branding.company}{" "}
            to provide information about our IT services for business clients.
            {hasRegisteredAddress() && <> Registered office: {branding.registeredAddress}.</>}
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Website Content</h2>
          <p>
            Content on this website is provided for informational purposes only. Project descriptions, case studies,
            and service information describe work we have delivered and our capabilities. They do not constitute
            binding offers, warranties, or commitments unless confirmed through a formal written agreement.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Use this website for unlawful purposes or in violation of applicable regulations</li>
            <li>Attempt to gain unauthorised access to our systems or interfere with website operation</li>
            <li>Submit false, misleading, or malicious information through contact forms</li>
            <li>Copy, scrape, or redistribute website content without permission</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">Intellectual Property</h2>
          <p>
            All website content, including text, design, branding, and graphics, is the property of {branding.company}{" "}
            unless otherwise stated. You may not reproduce or distribute content without prior written consent.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {branding.company} excludes liability for any loss or damage arising
            from use of this website or reliance on its content. Nothing in these terms excludes liability for death or
            personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Third-Party Links</h2>
          <p>
            This website may contain links to third-party sites. We are not responsible for the content or privacy
            practices of external websites.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales. The courts of England and Wales shall have
            exclusive jurisdiction, subject to mandatory consumer protection laws where applicable.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Changes</h2>
          <p>
            We may update these terms from time to time. Continued use of the website after changes are posted
            constitutes acceptance of the revised terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${branding.email}`} className="text-primary hover:underline">
              {branding.email}
            </a>
            .
          </p>

          <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            These terms are provided for general information. They should be reviewed by qualified legal counsel before
            relying on them for regulatory compliance.
          </p>
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
