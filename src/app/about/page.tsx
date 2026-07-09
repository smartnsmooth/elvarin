import SiteShell from "@/components/SiteShell";
import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata = {
  title: "About",
  description: "Elvarin is an IT services company specializing in system integration, system management, software solutions, SaaS products, and IT consulting.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutPageContent />
    </SiteShell>
  );
}
