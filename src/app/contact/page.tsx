import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import ContactForm from "@/components/marketing/ContactForm";
import { branding } from "@/lib/branding";
import { Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Contact Elvarin for business inquiries, project proposals, maintenance requests, and general questions about enterprise IT services.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="border-b border-gray-200 bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <h1 className="text-gray-900">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            Submit a structured inquiry for business discussions, project proposals, or maintenance
            requests. Our team responds within one to two business days.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3 text-sm text-gray-600">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                  <Link href={`mailto:${branding.email}`} className="hover:text-primary">
                    {branding.email}
                  </Link>
                </li>
                <li className="flex gap-3 text-sm text-gray-600">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                  <Link href={`tel:${branding.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                    {branding.phone}
                  </Link>
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-500">{branding.supportHours}</p>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
