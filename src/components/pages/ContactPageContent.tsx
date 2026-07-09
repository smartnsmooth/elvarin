import Link from "next/link";
import { BannerHero } from "@/components/marketing/SplitHero";
import ContactForm from "@/components/marketing/ContactForm";
import MarketingImage from "@/components/marketing/MarketingImage";
import { branding } from "@/lib/branding";
import { visuals } from "@/lib/visuals";

export default function ContactPageContent() {
  return (
    <>
      <BannerHero
        title="Contact Us"
        subtitle="Submit a structured inquiry for business discussions, project proposals, or general questions."
        solutionsLabel="Business Inquiries"
        image={visuals.hero.contact}
      />
      <section className="section-spacing">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-12">
          <aside className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Company</h2>
              <p className="mt-2 text-sm text-gray-700">{branding.company}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Email</h2>
              <Link href={`mailto:${branding.email}`} className="mt-2 block text-sm text-primary hover:underline">{branding.email}</Link>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Phone</h2>
              <Link href={`tel:${branding.phone.replace(/\s/g, "")}`} className="mt-2 block text-sm text-primary hover:underline">{branding.phone}</Link>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Office Hours</h2>
              <p className="mt-2 text-sm text-gray-700">{branding.supportHours}</p>
            </div>
          </aside>
          <div className="lg:col-span-4">
            <ContactForm />
          </div>
          <div className="relative hidden min-h-[400px] overflow-hidden rounded-2xl lg:col-span-3 lg:block">
            <MarketingImage src={visuals.contact.panel} alt="Business inquiry" fill sizes="25vw" />
          </div>
        </div>
      </section>
    </>
  );
}
