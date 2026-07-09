import SiteShell from "@/components/SiteShell";
import ServicesPageContent from "@/components/pages/ServicesPageContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Enterprise IT services from Elvarin: system integration, system management, custom software, SaaS products, and IT consulting for business clients.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <SiteShell>
      <ServicesPageContent />
    </SiteShell>
  );
}
