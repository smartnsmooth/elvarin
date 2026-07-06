import {
  ArrowLeftRight,
  Cloud,
  Layers,
  RefreshCw,
  Server,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  focus: string;
};

export const services: Service[] = [
  {
    slug: "system-integration",
    icon: Layers,
    title: "System Integration",
    description:
      "Design and development of enterprise systems tailored to business operations and workflow digitization.",
    focus: "Business workflow digitization",
  },
  {
    slug: "system-management",
    icon: Server,
    title: "System Management",
    description:
      "Ongoing operation, maintenance, and support of deployed systems to ensure stability and continuity.",
    focus: "System stability and continuity",
  },
  {
    slug: "software-solutions",
    icon: RefreshCw,
    title: "Software Solutions",
    description:
      "Development of business software for operational efficiency and custom enterprise applications.",
    focus: "Custom enterprise applications",
  },
  {
    slug: "saas-services",
    icon: Cloud,
    title: "SaaS Services",
    description:
      "Cloud-based software products delivered on a subscription model for scalable digital services.",
    focus: "Scalable digital services",
  },
  {
    slug: "it-consulting",
    icon: Users,
    title: "IT Consulting",
    description:
      "Business and system analysis for digital transformation planning and strategic IT direction.",
    focus: "Strategic IT planning",
  },
  {
    slug: "digital-transformation",
    icon: ArrowLeftRight,
    title: "Digital Transformation",
    description:
      "End-to-end modernization of business processes using technology for process optimization.",
    focus: "Process optimization and modernization",
  },
];
