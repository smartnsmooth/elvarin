import {
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  icon: LucideIcon;
  name: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    description: "Production systems, inventory control, and operational workflow management.",
  },
  {
    slug: "finance",
    icon: Landmark,
    name: "Finance",
    description: "Reporting platforms, compliance workflows, and financial data management.",
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    description: "Patient management, clinical workflows, and healthcare information systems.",
  },
  {
    slug: "education",
    icon: GraduationCap,
    name: "Education",
    description: "Learning platforms, student management, and institutional administration systems.",
  },
  {
    slug: "retail",
    icon: ShoppingCart,
    name: "Retail",
    description: "Point-of-sale integration, inventory tracking, and multi-channel operations.",
  },
  {
    slug: "logistics",
    icon: Truck,
    name: "Logistics",
    description: "Shipment tracking, warehouse management, and supply chain coordination.",
  },
  {
    slug: "public-sector",
    icon: Building2,
    name: "Public Sector",
    description: "Document management, citizen services, and government workflow systems.",
  },
];
