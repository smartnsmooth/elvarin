export type Industry = {
  slug: string;
  name: string;
  description: string;
  overview: string;
  challenges: string[];
  serviceMapping: string[];
  contextDescription: string;
};

export const industries: Industry[] = [
  {
    slug: "finance-banking",
    name: "Finance & Banking",
    description:
      "Financial reporting, compliance workflows, and transaction processing systems for regulated environments.",
    contextDescription:
      "Financial institutions operate under strict regulatory requirements with high demands for data accuracy, audit trails, and system reliability.",
    overview:
      "We deliver system integration, maintenance, and consulting services for financial organizations requiring consolidated reporting, compliance management, and secure data processing infrastructure.",
    challenges: [
      "Consolidating financial data from multiple internal sources",
      "Maintaining audit trails and regulatory compliance",
      "Ensuring system availability for critical reporting cycles",
    ],
    serviceMapping: ["System Integration (SI)", "System Management (SM)", "IT Consulting"],
  },
  {
    slug: "public-sector",
    name: "Public Sector & Government",
    description:
      "Document management, citizen service platforms, and government workflow systems.",
    contextDescription:
      "Public sector organizations require systems that support structured workflows, document management, and service delivery to citizens and internal departments.",
    overview:
      "We support public sector clients with system integration and software solutions for document management, citizen services, and internal administrative workflows.",
    challenges: [
      "Digitizing paper-based administrative processes",
      "Integrating legacy systems with modern platforms",
      "Managing access controls across departments",
    ],
    serviceMapping: ["System Integration (SI)", "Software Solutions", "IT Consulting"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    description:
      "Production scheduling, inventory control, and operational workflow management systems.",
    contextDescription:
      "Manufacturing operations depend on coordinated production planning, inventory tracking, and shop floor workflow management across departments.",
    overview:
      "We implement enterprise resource planning, inventory management, and production scheduling systems tailored to manufacturing operational requirements.",
    challenges: [
      "Coordinating production schedules across multiple lines",
      "Tracking inventory across warehouses and production floors",
      "Integrating with existing equipment and reporting systems",
    ],
    serviceMapping: ["System Integration (SI)", "Software Solutions"],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    description:
      "Network operations support systems, customer management platforms, and service provisioning infrastructure.",
    contextDescription:
      "Telecommunications providers manage complex service provisioning, network operations, and customer account systems requiring high availability.",
    overview:
      "We provide system integration and maintenance services for telecommunications operations including service management platforms and internal workflow systems.",
    challenges: [
      "Integrating service provisioning with billing systems",
      "Maintaining uptime for customer-facing platforms",
      "Managing data across distributed network operations",
    ],
    serviceMapping: ["System Integration (SI)", "System Management (SM)", "SaaS Products"],
  },
  {
    slug: "retail",
    name: "Retail & E-Commerce",
    description:
      "Inventory management, point-of-sale integration, and multi-channel retail operations.",
    contextDescription:
      "Retail operations require coordinated inventory, sales, and fulfillment systems across physical and digital channels.",
    overview:
      "We deliver inventory management, POS integration, and e-commerce platform solutions for retail organizations operating across multiple locations and channels.",
    challenges: [
      "Synchronizing inventory across store locations and online channels",
      "Integrating point-of-sale with backend inventory systems",
      "Managing stock transfers and replenishment workflows",
    ],
    serviceMapping: ["SaaS Products", "System Integration (SI)"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description:
      "Patient management, clinical workflows, and healthcare information systems.",
    contextDescription:
      "Healthcare providers require structured patient data management, appointment coordination, and clinical record systems with role-based access controls.",
    overview:
      "We develop and integrate healthcare information systems including patient registration, appointment scheduling, and clinical record management platforms.",
    challenges: [
      "Maintaining consistent patient records across departments",
      "Coordinating appointment scheduling for clinical staff",
      "Implementing role-based access for administrative and clinical users",
    ],
    serviceMapping: ["Software Solutions", "System Integration (SI)", "IT Consulting"],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
