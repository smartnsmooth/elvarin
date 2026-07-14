import SiteShell from "@/components/SiteShell";
import AboutPageContent from "@/components/pages/AboutPageContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about VinextAI Ltd — our mission, delivery teams, and structured approach to enterprise system integration, software solutions, and IT consulting.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutPageContent />
    </SiteShell>
  );
}
