import SiteShell from "@/components/SiteShell";
import SectionContainer from "@/components/ui/SectionContainer";
import { branding } from "@/lib/branding";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${branding.name} enterprise IT services website.`,
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <section className="border-b border-gray-200 bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <h1 className="text-gray-900">Privacy Policy</h1>
        </div>
      </section>
      <SectionContainer>
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-gray-600">
          <p>
            {branding.company} respects your privacy. This policy describes how we collect and use
            information submitted through our website contact forms.
          </p>
          <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
          <p>
            When you submit an inquiry, we collect the information you provide including your name,
            company name, email address, contact number, inquiry type, and message content.
          </p>
          <h2 className="text-xl font-semibold text-gray-900">How We Use Information</h2>
          <p>
            We use submitted information solely to respond to your inquiry and conduct business
            communications related to your request. We do not sell personal information to third parties.
          </p>
          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
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
