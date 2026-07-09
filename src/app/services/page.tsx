import SiteShell from "@/components/SiteShell";
import ServicesPageContent from "@/components/pages/ServicesPageContent";

export const metadata = {
  title: "Services",
  description: "System integration, system management, software solutions, SaaS products, and IT consulting for enterprise business clients.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <ServicesPageContent />
    </SiteShell>
  );
}
