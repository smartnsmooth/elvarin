export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  overview: string;
  scopeIncluded: string[];
  scopeExcluded: string[];
  deliverables: string[];
  process: string[];
  tags?: string[];
};

export const services: Service[] = [
  {
    slug: "system-integration",
    title: "Enterprise System Integration",
    shortTitle: "System Integration (SI)",
    description:
      "Design and implementation of enterprise systems integrated with business operations and existing infrastructure.",
    overview:
      "System integration services cover the design, development, and deployment of enterprise systems connected to business workflows, third-party platforms, and legacy infrastructure. Engagements include requirements analysis, architecture design, API development, and data migration.",
    scopeIncluded: [
      "Business process and integration requirements analysis",
      "System architecture and integration design",
      "API development and middleware configuration",
      "Data migration and synchronization",
      "Deployment and integration testing",
    ],
    scopeExcluded: [
      "End-user hardware procurement",
      "Third-party software licensing fees",
      "Ongoing maintenance beyond agreed support period",
    ],
    deliverables: [
      "Integration architecture documentation",
      "Configured integration components",
      "Test reports and deployment runbooks",
    ],
    process: [
      "Requirement Analysis",
      "System Design",
      "Implementation",
      "Testing",
      "Deployment",
      "Maintenance",
    ],
    tags: ["ERP", "API", "Middleware"],
  },
  {
    slug: "system-management",
    title: "Application Maintenance Services",
    shortTitle: "System Management (SM)",
    description:
      "Ongoing operation, monitoring, and maintenance of deployed enterprise systems to ensure stability.",
    overview:
      "System management services provide structured operation and maintenance of enterprise applications after deployment. This includes incident response, release management, performance monitoring, and planned enhancements aligned to business priorities.",
    scopeIncluded: [
      "System monitoring and incident response",
      "Bug resolution and performance optimization",
      "Planned release and enhancement cycles",
      "Operational documentation updates",
      "Coordination with client operations teams",
    ],
    scopeExcluded: [
      "Major system redesign or re-architecture",
      "New module development outside maintenance scope",
      "Infrastructure hosting fees",
    ],
    deliverables: [
      "Incident and change logs",
      "Release notes and deployment records",
      "Monthly operational status reports",
    ],
    process: [
      "Requirement Analysis",
      "System Design",
      "Implementation",
      "Testing",
      "Deployment",
      "Maintenance",
    ],
    tags: ["Operations", "Support", "Monitoring"],
  },
  {
    slug: "software-solutions",
    title: "Custom Software Solutions",
    shortTitle: "Software Solutions",
    description:
      "Development of business software applications tailored to operational requirements and workflows.",
    overview:
      "Software solutions services cover the design and development of custom business applications including web platforms, internal tools, and workflow management systems. Each project is scoped around documented business requirements and defined delivery milestones.",
    scopeIncluded: [
      "Requirements gathering and documentation",
      "Application design and development",
      "Database design and backend implementation",
      "User interface development",
      "Testing, deployment, and handover",
    ],
    scopeExcluded: [
      "Ongoing hosting and infrastructure management",
      "Third-party API subscription costs",
      "Content creation and data entry",
    ],
    deliverables: [
      "Functional application with source code",
      "Technical and user documentation",
      "Deployment package and environment configuration",
    ],
    process: [
      "Requirement Analysis",
      "System Design",
      "Implementation",
      "Testing",
      "Deployment",
      "Maintenance",
    ],
    tags: ["Web Apps", "Workflow", "Custom Development"],
  },
  {
    slug: "saas-products",
    title: "SaaS Product Development",
    shortTitle: "SaaS Products",
    description:
      "Cloud-based software products designed for subscription delivery and multi-tenant operation.",
    overview:
      "SaaS product services include platform architecture, application development, and cloud deployment for subscription-based software products. Engagements address multi-tenant design, subscription management, and scalable infrastructure configuration.",
    scopeIncluded: [
      "SaaS platform architecture design",
      "Multi-tenant application development",
      "Cloud deployment and environment setup",
      "Subscription and access management features",
      "Administrative tooling development",
    ],
    scopeExcluded: [
      "Marketing and customer acquisition",
      "Payment gateway transaction fees",
      "Long-term infrastructure hosting costs",
    ],
    deliverables: [
      "Deployed SaaS platform",
      "Administrative and user interfaces",
      "Platform documentation and deployment guides",
    ],
    process: [
      "Requirement Analysis",
      "System Design",
      "Implementation",
      "Testing",
      "Deployment",
      "Maintenance",
    ],
    tags: ["Cloud", "Subscription", "Multi-tenant"],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting Services",
    shortTitle: "IT Consulting",
    description:
      "Business and technical analysis for system planning, architecture review, and IT strategy.",
    overview:
      "IT consulting services provide structured analysis of business operations, system requirements, and technology options. Engagements include requirements documentation, architecture assessment, and recommendations for system planning and procurement decisions.",
    scopeIncluded: [
      "Business process and workflow analysis",
      "System requirements documentation",
      "Architecture and technology assessment",
      "Vendor and solution evaluation support",
      "Implementation planning and roadmaps",
    ],
    scopeExcluded: [
      "Software development and implementation",
      "Hardware procurement and installation",
      "Ongoing system operation and support",
    ],
    deliverables: [
      "Requirements and analysis reports",
      "Architecture recommendations",
      "Implementation roadmap documentation",
    ],
    process: [
      "Requirement Analysis",
      "System Design",
      "Implementation",
      "Testing",
      "Deployment",
      "Maintenance",
    ],
    tags: ["Strategy", "Analysis", "Planning"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
