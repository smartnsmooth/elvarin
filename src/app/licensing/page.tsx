import SiteShell from "@/components/SiteShell";
import LicensingDashboard from "@/components/marketing/pages/LicensingDashboard";

export const metadata = {
  title: "Software Licensing",
  description: "Enterprise software licensing solutions for Microsoft, Adobe, and business applications.",
};

export default function LicensingPage() {
  return (
    <SiteShell>
      <LicensingDashboard />
    </SiteShell>
  );
}
