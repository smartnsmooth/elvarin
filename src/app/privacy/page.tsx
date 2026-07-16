import SiteShell from "@/components/SiteShell";
import SectionContainer from "@/components/ui/SectionContainer";
import { branding, hasRegisteredAddress } from "@/lib/branding";
import { createPageMetadata } from "@/lib/metadata";

const LAST_UPDATED = "10 July 2026";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${branding.company}. How we collect, use, and protect personal data.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <SiteShell>
      <section className="border-b border-gray-200 bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <h1 className="text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>
      <SectionContainer>
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-gray-600">
          <p>
            {branding.company} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains how we
            collect and use personal data when you visit our website or submit an inquiry. We process personal data in
            accordance with applicable U.S. privacy laws.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Data Controller</h2>
          <p>
            The data controller is {branding.company}.
            {hasRegisteredAddress() && <> Registered address: {branding.registeredAddress}.</>}
            {branding.companiesHouseNumber && <> Registration No. {branding.companiesHouseNumber}.</>}
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
          <p>When you submit a contact inquiry, we collect the information you provide, including:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Full name</li>
            <li>Company name</li>
            <li>Email address</li>
            <li>Inquiry type</li>
            <li>Message content</li>
          </ul>
          <p>
            When you browse our website, we may collect technical data such as IP address, browser type, and pages
            visited. If analytics are enabled and you consent, we use privacy-friendly analytics that do not use
            advertising cookies.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Legal Basis for Processing</h2>
          <p>We process personal data on the following bases:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Legitimate interests</strong> — to respond to business inquiries and operate our website.
            </li>
            <li>
              <strong>Consent</strong> — where required for non-essential cookies or analytics.
            </li>
            <li>
              <strong>Contract</strong> — where processing is necessary to take steps at your request before entering
              into a contract.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">How We Use Information</h2>
          <p>
            We use submitted information solely to respond to your inquiry, conduct business communications related to
            your request, and improve our website. We do not sell personal information to third parties.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Data Retention</h2>
          <p>
            Contact inquiry data is retained for up to 24 months from the date of submission, unless a longer period is
            required for legal or contractual purposes. Analytics data, if collected, is retained according to our
            analytics provider&apos;s policy.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Third-Party Processors</h2>
          <p>We use trusted third-party providers to operate this website, which may process data on our behalf:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Hosting infrastructure (Vercel Inc., United States)</li>
            <li>Email delivery for contact form submissions (if configured)</li>
            <li>Privacy-friendly analytics (Plausible Analytics, if enabled and consented to)</li>
          </ul>
          <p>
            Where data is transferred across jurisdictions, we rely on appropriate contractual and technical safeguards
            with our processors.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Cookies</h2>
          <p>
            Essential cookies may be used to operate the site. Non-essential analytics cookies are only used with your
            consent. You can manage cookie preferences via the notice shown on first visit.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability, where applicable</li>
            <li>Withdraw consent at any time, where processing is based on consent</li>
            <li>Lodge a complaint with a relevant data protection authority</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p>
            For privacy-related questions or to exercise your rights, contact us at{" "}
            <a href={`mailto:${branding.email}`} className="text-primary hover:underline">
              {branding.email}
            </a>
            .
          </p>

          <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            This policy is provided for general information. It should be reviewed by qualified legal counsel before
            relying on it for regulatory compliance.
          </p>
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
