import SiteShell from "@/components/SiteShell";
import {
  HeroSection,
  CompanyIntroSection,
  ServicesOverviewSection,
  IndustriesSection,
  FeaturedProjectsSection,
  DeliveryProcessSection,
  CtaBannerSection,
} from "@/components/home/HomeSections";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <CompanyIntroSection />
      <ServicesOverviewSection />
      <IndustriesSection />
      <FeaturedProjectsSection />
      <DeliveryProcessSection />
      <CtaBannerSection />
    </SiteShell>
  );
}
