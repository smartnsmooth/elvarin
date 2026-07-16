import type { ReactNode } from "react";
import Link from "next/link";
import { branding, hasPhone, hasRegisteredAddress } from "@/lib/branding";
import { footerServices, legalLinks, mainNav } from "@/lib/navigation";
import Button from "@/components/ui/Button";

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-gray-900">{title}</h4>
      {children}
    </div>
  );
}

function LegalDetails() {
  const items: string[] = [];

  if (branding.companiesHouseNumber) {
    items.push(`Company No. ${branding.companiesHouseNumber}`);
  }
  if (hasRegisteredAddress()) {
    items.push(branding.registeredAddress);
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 space-y-1 text-xs text-gray-500">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container-enterprise section-padding !py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <FooterColumn title={branding.company}>
              <p className="text-sm leading-[22px] text-gray-700">{branding.description}</p>
              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <Link href={`mailto:${branding.email}`} className="block hover:text-primary hover:underline">
                  {branding.email}
                </Link>
                {hasPhone() && (
                  <Link href={`tel:${branding.phone.replace(/\s/g, "")}`} className="block hover:text-primary hover:underline">
                    {branding.phone}
                  </Link>
                )}
              </div>
              <LegalDetails />
            </FooterColumn>
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Navigation">
              <ul className="space-y-2">
                {mainNav.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-700 hover:text-primary hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>

          <div className="lg:col-span-3">
            <FooterColumn title="Services">
              <ul className="space-y-2">
                {footerServices.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-700 hover:text-primary hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>

          <div className="lg:col-span-3">
            <FooterColumn title="Contact">
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link href={`mailto:${branding.email}`} className="hover:text-primary hover:underline">
                    {branding.email}
                  </Link>
                </li>
                {hasPhone() && (
                  <li>
                    <Link href={`tel:${branding.phone.replace(/\s/g, "")}`} className="hover:text-primary hover:underline">
                      {branding.phone}
                    </Link>
                  </li>
                )}
              </ul>
              <div className="mt-6">
                <Button href="/contact" className="h-10 px-4">
                  Contact Us
                </Button>
              </div>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-[18px] text-gray-500">
              © {new Date().getFullYear()} {branding.company}. All rights reserved.
            </p>
            <ul className="flex gap-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-gray-500 hover:text-primary hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
