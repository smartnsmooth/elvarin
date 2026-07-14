import SiteShell from "@/components/SiteShell";
import IndustriesShowcase from "@/components/pages/IndustriesShowcase";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Industries",
  description:
    "Industries served by VinextAI including manufacturing, finance, healthcare, public sector, retail, and telecommunications.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <SiteShell>
      <IndustriesShowcase />
    </SiteShell>
  );
}
