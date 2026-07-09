export type ProjectCategory = "si" | "sm" | "solutions" | "saas" | "consulting";

export const projectsDisclaimer =
  "Illustrative example of typical engagement scope. These case studies describe representative work Elvarin is structured to deliver and are not references to specific client engagements unless explicitly stated.";

export type Project = {
  slug: string;
  title: string;
  industry: string;
  industrySlug: string;
  serviceType: string;
  category: ProjectCategory;
  illustrative: boolean;
  shortDescription: string;
  overview: string;
  businessContext: string;
  requirements: string[];
  inScope: string[];
  outOfScope: string[];
  solutionApproach: string;
  responsibilities: string[];
  outcome: string;
  technologies?: string[];
};

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "si", label: "System Integration" },
  { id: "sm", label: "System Maintenance" },
  { id: "solutions", label: "Software Solutions" },
  { id: "saas", label: "SaaS Implementations" },
  { id: "consulting", label: "Consulting Engagements" },
];

export const projects: Project[] = [
  {
    slug: "manufacturing-erp-system",
    title: "Manufacturing ERP System",
    industry: "Manufacturing",
    industrySlug: "manufacturing",
    serviceType: "System Integration",
    category: "si",
    illustrative: true,
    shortDescription:
      "Enterprise resource planning system for production scheduling, inventory tracking, and workflow management.",
    businessContext:
      "A manufacturing client required centralized management of production schedules, raw material inventory, and shop floor workflows. Existing processes relied on spreadsheets and disconnected tools.",
    overview:
      "The project focused on digitizing core operational workflows while maintaining compatibility with existing equipment and reporting requirements. The system was structured into modular components for scheduling, inventory, and workflow management.",
    requirements: [
      "Centralize production scheduling across multiple production lines",
      "Track raw materials and finished goods inventory in real time",
      "Digitize shop floor workflow approvals and status updates",
      "Generate operational reports for management review",
    ],
    inScope: [
      "Business process analysis and requirements documentation",
      "System architecture and module design",
      "Backend development and database design",
      "Frontend development for operational dashboards",
      "Deployment and user training",
    ],
    outOfScope: [
      "Hardware procurement for shop floor devices",
      "Third-party ERP licensing fees",
      "Ongoing maintenance beyond initial support period",
    ],
    solutionApproach:
      "We conducted operational analysis with production and warehouse teams to map existing workflows. Each module was designed around actual business processes rather than generic ERP templates.",
    responsibilities: [
      "Business process analysis and requirements documentation",
      "System architecture and module design",
      "Backend development and database design",
      "Frontend development for operational dashboards",
      "Deployment and user training",
    ],
    outcome:
      "The client gained improved operational visibility across production and inventory processes. Manual coordination between departments was reduced.",
    technologies: ["Web application", "Relational database", "REST API"],
  },
  {
    slug: "financial-reporting-platform",
    title: "Financial Reporting Platform",
    industry: "Finance",
    industrySlug: "finance-banking",
    serviceType: "System Integration",
    category: "si",
    illustrative: true,
    shortDescription:
      "Consolidated reporting platform for financial data collection, validation, and management reporting.",
    businessContext:
      "A financial services organization needed to consolidate reporting data from multiple internal sources. Manual data collection created inconsistencies and delayed decision-making.",
    overview:
      "The platform was designed with a clear data pipeline: collection, validation, approval, and report generation. Validation rules were defined collaboratively to reflect actual business constraints.",
    requirements: [
      "Aggregate financial data from multiple internal sources",
      "Implement validation rules for data accuracy",
      "Support role-based access for different reporting teams",
      "Generate standardized management reports on schedule",
    ],
    inScope: [
      "Requirements gathering with finance stakeholders",
      "System design and data model architecture",
      "Backend development and integration connectors",
      "Frontend development for reporting dashboards",
    ],
    outOfScope: [
      "External regulatory filing submissions",
      "Third-party data provider licensing",
      "Long-term infrastructure hosting",
    ],
    solutionApproach:
      "We mapped data sources and reporting cycles with finance stakeholders. The platform maintained audit trails for all data changes and report generation events.",
    responsibilities: [
      "Requirements gathering with finance stakeholders",
      "System design and data model architecture",
      "Backend development and integration connectors",
      "Frontend development for reporting dashboards",
      "Deployment and ongoing maintenance support",
    ],
    outcome:
      "Reporting cycles became more consistent with reduced manual data preparation. Finance teams gained a single platform for data validation and report generation.",
    technologies: ["Web application", "Data integration", "Role-based access"],
  },
  {
    slug: "healthcare-patient-management",
    title: "Healthcare Patient Management System",
    industry: "Healthcare",
    industrySlug: "healthcare",
    serviceType: "Software Solutions",
    category: "solutions",
    illustrative: true,
    shortDescription:
      "Patient registration, appointment scheduling, and clinical record management for a healthcare provider.",
    businessContext:
      "A healthcare provider required structured patient data management. Paper-based processes made it difficult to maintain consistent patient information across departments.",
    overview:
      "The system was organized around patient records as the central entity, with modules for registration, scheduling, and clinical notes. Access controls were designed to match organizational roles.",
    requirements: [
      "Digitize patient registration and demographic records",
      "Manage appointment scheduling across departments",
      "Provide clinical staff with structured patient history access",
      "Support role-based access for administrative and clinical users",
    ],
    inScope: [
      "Workflow analysis with healthcare staff",
      "System design and database architecture",
      "Full-stack application development",
      "User acceptance testing coordination",
      "Deployment and staff training",
    ],
    outOfScope: [
      "Medical device integration",
      "Insurance billing system integration",
      "Ongoing clinical content management",
    ],
    solutionApproach:
      "We worked with administrative and clinical staff to understand daily workflows. Patient records served as the central data entity with role-appropriate access controls.",
    responsibilities: [
      "Workflow analysis with healthcare staff",
      "System design and database architecture",
      "Full-stack application development",
      "User acceptance testing coordination",
      "Deployment and staff training",
    ],
    outcome:
      "Patient information became centrally accessible to authorized staff. Appointment coordination improved and administrative overhead from paper-based processes was reduced.",
  },
  {
    slug: "education-learning-platform",
    title: "Education Learning Management Platform",
    industry: "Public Sector",
    industrySlug: "public-sector",
    serviceType: "SaaS",
    category: "saas",
    illustrative: true,
    shortDescription:
      "Cloud-based learning platform for course delivery, student enrollment, and academic administration.",
    businessContext:
      "An educational institution needed a platform to deliver online courses and manage student enrollment. Existing tools did not provide integrated course management in a single environment.",
    overview:
      "The platform was structured as a multi-tenant SaaS application with modules for course management, student administration, and content delivery.",
    requirements: [
      "Deliver online course content to enrolled students",
      "Manage student enrollment and class assignments",
      "Track assignment submissions and academic progress",
      "Provide administrative dashboards for institution staff",
    ],
    inScope: [
      "Platform architecture and SaaS infrastructure design",
      "Backend and frontend development",
      "Cloud deployment and environment configuration",
      "Administrative tooling development",
    ],
    outOfScope: [
      "Course content creation",
      "Student marketing and recruitment",
      "Payment processing integration",
    ],
    solutionApproach:
      "We prioritized clear navigation for both students and administrators, ensuring the system could scale as course offerings expanded.",
    responsibilities: [
      "Platform architecture and SaaS infrastructure design",
      "Backend and frontend development",
      "Cloud deployment and environment configuration",
      "Administrative tooling development",
      "Ongoing platform maintenance",
    ],
    outcome:
      "The institution consolidated course delivery and student administration into one platform. Staff gained centralized visibility into enrollment and academic progress.",
    technologies: ["Cloud SaaS", "Web application", "Subscription model"],
  },
  {
    slug: "retail-inventory-system",
    title: "Retail Inventory Management System",
    industry: "Retail",
    industrySlug: "retail",
    serviceType: "System Integration",
    category: "si",
    illustrative: true,
    shortDescription:
      "Inventory tracking and multi-location stock management for a retail operation.",
    businessContext:
      "A retail business operating across multiple locations needed real-time inventory visibility. Manual stock counts led to discrepancies and delayed replenishment decisions.",
    overview:
      "We designed a centralized inventory system with location-specific views. Stock movement was tracked through defined transaction types with clear audit records.",
    requirements: [
      "Track inventory levels across multiple store locations",
      "Manage stock transfers between locations",
      "Alert managers when stock falls below defined thresholds",
      "Integrate with existing point-of-sale processes",
    ],
    inScope: [
      "Operational workflow analysis",
      "System design and development",
      "Integration with existing retail processes",
      "Deployment across store locations",
    ],
    outOfScope: [
      "POS hardware procurement",
      "E-commerce platform development",
      "Long-term hosting infrastructure",
    ],
    solutionApproach:
      "Stock movement was tracked through defined transaction types, ensuring every change had a clear business context and audit record.",
    responsibilities: [
      "Operational workflow analysis",
      "System design and development",
      "Integration with existing retail processes",
      "Deployment across store locations",
      "Post-deployment support",
    ],
    outcome:
      "Store managers gained consistent visibility into inventory levels across locations. Stock transfer processes became structured and traceable.",
  },
  {
    slug: "logistics-tracking-platform",
    title: "Logistics Shipment Tracking Platform",
    industry: "Manufacturing",
    industrySlug: "manufacturing",
    serviceType: "System Management",
    category: "sm",
    illustrative: true,
    shortDescription:
      "Ongoing operation and enhancement of a shipment tracking and warehouse coordination platform.",
    businessContext:
      "A logistics company required ongoing management of their shipment tracking platform handling status updates, warehouse coordination, and delivery scheduling.",
    overview:
      "Our engagement focused on system stability, feature enhancements based on operational feedback, and continuous support for daily operations.",
    requirements: [
      "Maintain system uptime and operational reliability",
      "Implement shipment status tracking enhancements",
      "Support warehouse team workflow improvements",
      "Resolve operational issues within defined response windows",
    ],
    inScope: [
      "System monitoring and incident response",
      "Feature development and enhancement",
      "Bug resolution and performance optimization",
      "Coordination with operations teams on priorities",
    ],
    outOfScope: [
      "Platform re-architecture",
      "New product development outside maintenance scope",
      "Infrastructure hosting fees",
    ],
    solutionApproach:
      "We established a structured maintenance and enhancement process with defined priorities from operations teams. Changes were planned in release cycles to minimize disruption.",
    responsibilities: [
      "System monitoring and incident response",
      "Feature development and enhancement",
      "Bug resolution and performance optimization",
      "Coordination with operations teams on priorities",
      "Documentation of system changes and releases",
    ],
    outcome:
      "The platform maintained reliable daily operations with structured enhancement cycles. Operations teams received predictable support and planned improvements.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 6): Project[] {
  return projects.slice(0, limit);
}
