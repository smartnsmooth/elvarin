export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const footerServices = [
  { label: "System Integration (SI)", href: "/services/system-integration" },
  { label: "System Management (SM)", href: "/services/system-management" },
  { label: "Software Solutions", href: "/services/software-solutions" },
  { label: "SaaS Products", href: "/services/saas-products" },
  { label: "IT Consulting", href: "/services/it-consulting" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
] as const;
