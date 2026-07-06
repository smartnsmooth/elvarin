export type ProjectCategory =
  | "si"
  | "sm"
  | "saas"
  | "consulting"
  | "digital";

export type Project = {
  slug: string;
  title: string;
  industry: string;
  industrySlug: string;
  serviceType: string;
  category: ProjectCategory;
  shortDescription: string;
  overview: string;
  requirements: string[];
  solutionApproach: string;
  responsibilities: string[];
  outcome: string;
  technologies?: string[];
};

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "si", label: "System Integration" },
  { id: "sm", label: "System Management" },
  { id: "saas", label: "SaaS" },
  { id: "consulting", label: "Consulting" },
  { id: "digital", label: "Digital Services" },
];

export const projects: Project[] = [
  {
    slug: "manufacturing-erp-system",
    title: "Manufacturing ERP System (NDA)",
    industry: "Manufacturing",
    industrySlug: "manufacturing",
    serviceType: "System Integration",
    category: "si",
    shortDescription:
      "Enterprise resource planning system for production scheduling, inventory tracking, and workflow management.",
    overview:
      "A manufacturing client required a centralized system to manage production schedules, raw material inventory, and shop floor workflows. Existing processes relied on spreadsheets and disconnected tools, creating delays in production planning and limited visibility across departments. The project focused on digitizing core operational workflows while maintaining compatibility with existing equipment and reporting requirements.",
    requirements: [
      "Centralize production scheduling across multiple production lines",
      "Track raw materials and finished goods inventory in real time",
      "Digitize shop floor workflow approvals and status updates",
      "Generate operational reports for management review",
      "Integrate with existing accounting processes",
    ],
    solutionApproach:
      "We conducted operational analysis with production and warehouse teams to map existing workflows. The system was structured into modular components for scheduling, inventory, and workflow management. Each module was designed around actual business processes rather than generic ERP templates, ensuring the solution matched how the organization operates day to day.",
    responsibilities: [
      "Business process analysis and requirements documentation",
      "System architecture and module design",
      "Backend development and database design",
      "Frontend development for operational dashboards",
      "Deployment and user training",
    ],
    outcome:
      "The client gained improved operational visibility across production and inventory processes. Manual coordination between departments was reduced, and management received consistent reporting from a single system.",
    technologies: ["Web application", "Relational database", "REST API"],
  },
  {
    slug: "financial-reporting-platform",
    title: "Financial Reporting Platform (Confidential Client)",
    industry: "Finance",
    industrySlug: "finance",
    serviceType: "System Integration",
    category: "si",
    shortDescription:
      "Consolidated reporting platform for financial data collection, validation, and management reporting.",
    overview:
      "A financial services organization needed to consolidate reporting data from multiple internal sources into a unified platform. Manual data collection and spreadsheet-based reporting created inconsistencies and delayed decision-making. The project addressed data aggregation, validation workflows, and structured report generation for management teams.",
    requirements: [
      "Aggregate financial data from multiple internal sources",
      "Implement validation rules for data accuracy",
      "Support role-based access for different reporting teams",
      "Generate standardized management reports on schedule",
      "Maintain audit trails for data changes",
    ],
    solutionApproach:
      "We mapped data sources and reporting cycles with finance stakeholders. The platform was designed with a clear data pipeline: collection, validation, approval, and report generation. Validation rules were defined collaboratively to reflect actual business constraints rather than generic checks.",
    responsibilities: [
      "Requirements gathering with finance stakeholders",
      "System design and data model architecture",
      "Backend development and integration connectors",
      "Frontend development for reporting dashboards",
      "Deployment and ongoing maintenance support",
    ],
    outcome:
      "Reporting cycles became more consistent with reduced manual data preparation. Finance teams gained a single platform for data validation and report generation with clear audit trails.",
    technologies: ["Web application", "Data integration", "Role-based access"],
  },
  {
    slug: "healthcare-patient-management",
    title: "Healthcare Patient Management System",
    industry: "Healthcare",
    industrySlug: "healthcare",
    serviceType: "Software Solutions",
    category: "digital",
    shortDescription:
      "Patient registration, appointment scheduling, and clinical record management for a healthcare provider.",
    overview:
      "A healthcare provider required a system to manage patient registration, appointment scheduling, and basic clinical record keeping. Paper-based processes and fragmented tools made it difficult to maintain consistent patient information across departments. The solution focused on structured patient data management and appointment coordination.",
    requirements: [
      "Digitize patient registration and demographic records",
      "Manage appointment scheduling across departments",
      "Provide clinical staff with structured patient history access",
      "Support role-based access for administrative and clinical users",
      "Ensure data consistency across patient interactions",
    ],
    solutionApproach:
      "We worked with administrative and clinical staff to understand daily workflows. The system was organized around patient records as the central entity, with modules for registration, scheduling, and clinical notes. Access controls were designed to match organizational roles and responsibilities.",
    responsibilities: [
      "Workflow analysis with healthcare staff",
      "System design and database architecture",
      "Full-stack application development",
      "User acceptance testing coordination",
      "Deployment and staff training",
    ],
    outcome:
      "Patient information became centrally accessible to authorized staff. Appointment coordination improved, and administrative overhead from paper-based processes was reduced.",
  },
  {
    slug: "education-learning-platform",
    title: "Education Learning Management Platform",
    industry: "Education",
    industrySlug: "education",
    serviceType: "SaaS",
    category: "saas",
    shortDescription:
      "Cloud-based learning platform for course delivery, student enrollment, and academic administration.",
    overview:
      "An educational institution needed a platform to deliver online courses, manage student enrollment, and track academic progress. Existing tools did not provide integrated course management and student administration in a single environment. The project delivered a subscription-based platform tailored to institutional requirements.",
    requirements: [
      "Deliver online course content to enrolled students",
      "Manage student enrollment and class assignments",
      "Track assignment submissions and academic progress",
      "Provide administrative dashboards for institution staff",
      "Support multi-department course organization",
    ],
    solutionApproach:
      "The platform was structured as a multi-tenant SaaS application with modules for course management, student administration, and content delivery. We prioritized clear navigation for both students and administrators, ensuring the system could scale as course offerings expanded.",
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
    shortDescription:
      "Inventory tracking and multi-location stock management for a retail operation.",
    overview:
      "A retail business operating across multiple locations needed a system to track inventory levels, manage stock transfers, and provide store managers with real-time visibility. Manual stock counts and disconnected location records led to stock discrepancies and delayed replenishment decisions.",
    requirements: [
      "Track inventory levels across multiple store locations",
      "Manage stock transfers between locations",
      "Alert managers when stock falls below defined thresholds",
      "Provide reporting on stock movement and turnover",
      "Integrate with existing point-of-sale processes",
    ],
    solutionApproach:
      "We analyzed inventory workflows across store locations and designed a centralized inventory system with location-specific views. Stock movement was tracked through defined transaction types, ensuring every change had a clear business context and audit record.",
    responsibilities: [
      "Operational workflow analysis",
      "System design and development",
      "Integration with existing retail processes",
      "Deployment across store locations",
      "Post-deployment support",
    ],
    outcome:
      "Store managers gained consistent visibility into inventory levels across locations. Stock transfer processes became structured and traceable, reducing discrepancies from manual tracking.",
  },
  {
    slug: "logistics-tracking-platform",
    title: "Logistics Shipment Tracking Platform",
    industry: "Logistics",
    industrySlug: "logistics",
    serviceType: "System Management",
    category: "sm",
    shortDescription:
      "Ongoing operation and enhancement of a shipment tracking and warehouse coordination platform.",
    overview:
      "A logistics company required ongoing management and enhancement of their shipment tracking platform. The system handles shipment status updates, warehouse coordination, and delivery scheduling. Our engagement focused on system stability, feature enhancements based on operational feedback, and continuous support for daily operations.",
    requirements: [
      "Maintain system uptime and operational reliability",
      "Implement shipment status tracking enhancements",
      "Support warehouse team workflow improvements",
      "Resolve operational issues within defined response windows",
      "Plan and deploy feature updates based on business priorities",
    ],
    solutionApproach:
      "We established a structured maintenance and enhancement process with defined priorities from operations teams. Changes were planned in release cycles to minimize disruption to daily logistics operations while addressing the most impactful improvement requests first.",
    responsibilities: [
      "System monitoring and incident response",
      "Feature development and enhancement",
      "Bug resolution and performance optimization",
      "Coordination with operations teams on priorities",
      "Documentation of system changes and releases",
    ],
    outcome:
      "The platform maintained reliable daily operations with structured enhancement cycles. Operations teams received predictable support and planned improvements aligned to business priorities.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 6): Project[] {
  return projects.slice(0, limit);
}
