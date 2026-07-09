import Link from "next/link";
import { BannerHero } from "@/components/marketing/SplitHero";
import SplitSection from "@/components/marketing/SplitSection";
import { industries } from "@/data/industries";
import { industryImage, visuals } from "@/lib/visuals";

export default function IndustriesShowcase() {
  return (
    <>
      <BannerHero
        title="Industries We Serve"
        subtitle="Deployment contexts where our IT services are applied across enterprise business sectors."
        solutionsLabel="Industry Coverage"
        image={visuals.hero.industries}
        ctas={[{ label: "Contact Us", href: "/contact" }]}
      />
      {industries.map((industry, index) => (
        <SplitSection
          key={industry.slug}
          title={industry.name}
          subtitle={industry.description}
          image={industryImage(industry.slug)}
          reverse={index % 2 === 1}
        >
          <ul className="space-y-2 text-sm text-gray-600">
            {industry.challenges.slice(0, 3).map((c) => (
              <li key={c}>— {c}</li>
            ))}
          </ul>
          <Link href={`/industries/${industry.slug}`} className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
            View industry details →
          </Link>
        </SplitSection>
      ))}
    </>
  );
}
