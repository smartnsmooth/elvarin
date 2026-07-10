import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { branding } from "@/lib/branding";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Careers",
  description: `Career opportunities at ${branding.company}. Join our enterprise IT services and delivery teams.`,
  path: "/careers",
});

export default function CareersPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900">Careers</h1>
        <p className="mt-4 leading-relaxed text-gray-600">
          {branding.company} is growing its enterprise IT services and delivery teams. For
          opportunities, reach out via our{" "}
          <Link href="/contact" className="text-primary hover:underline">
            contact page
          </Link>
          .
        </p>
      </div>
    </SiteShell>
  );
}
