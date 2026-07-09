import SiteShell from "@/components/SiteShell";
import HomePage from "@/components/pages/HomePage";
import { createPageMetadata } from "@/lib/metadata";
import { branding } from "@/lib/branding";

export const metadata = createPageMetadata({
  title: "Home",
  description: branding.description,
  path: "/",
});

export default function Home() {
  return (
    <SiteShell>
      <HomePage />
    </SiteShell>
  );
}
