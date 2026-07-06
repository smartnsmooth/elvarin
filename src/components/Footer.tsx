import type { ReactNode } from "react";
import Link from "next/link";
import { branding } from "@/lib/branding";
import { footerNav, legalLinks } from "@/lib/navigation";

function FooterLinkItem({ href, label, external }: { href: string; label: string; external?: boolean }) {
  const className = "block py-1.5 text-sm text-gray-400 transition-colors hover:text-white";

  if (external) {
    return (
      <li>
        <a href={href} className={className}>
          {label}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} className={className}>
        {label}
      </Link>
    </li>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold text-white">{title}</h4>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer-dark text-gray-400">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title={branding.name}>
            <p className="text-sm leading-relaxed">{branding.description}</p>
            <div className="mt-4 space-y-1 text-sm">
              <p className="font-medium text-gray-300">{branding.company}</p>
              <Link href={`mailto:${branding.email}`} className="block transition-colors hover:text-white">
                {branding.email}
              </Link>
              <Link href={`tel:${branding.phone.replace(/\s/g, "")}`} className="block transition-colors hover:text-white">
                {branding.phone}
              </Link>
            </div>
          </FooterColumn>

          <FooterColumn title="Navigation">
            <ul className="space-y-0.5">
              {footerNav.map((link) => (
                <FooterLinkItem key={link.label} {...link} />
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Services">
            <ul className="space-y-0.5">
              <FooterLinkItem href="/services" label="All Services" />
              <FooterLinkItem href="/projects" label="Projects" />
              <FooterLinkItem href="/about" label="About" />
              <FooterLinkItem href="/contact" label="Contact" />
            </ul>
          </FooterColumn>

          <FooterColumn title="Legal">
            <ul className="space-y-0.5">
              {legalLinks.map((link) => (
                <FooterLinkItem key={link.label} {...link} />
              ))}
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} {branding.company}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
