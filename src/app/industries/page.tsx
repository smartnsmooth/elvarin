import SiteShell from "@/components/SiteShell";
import IndustriesShowcase from "@/components/pages/IndustriesShowcase";

export const metadata = {
  title: "Industries",
  description: "Industries served by Elvarin including finance, public sector, manufacturing, telecommunications, retail, and healthcare.",
};

export default function IndustriesPage() {
  return (
    <SiteShell>
      <IndustriesShowcase />
    </SiteShell>
  );
}
