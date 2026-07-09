export const companyIntro = {
  title: "About the Company",
  paragraphs: [
    "Elvarin is an IT services company specializing in system integration, system management, software solutions, SaaS products, and IT consulting for enterprise business clients.",
    "We structure delivery around engineering teams, delivery teams, maintenance teams, and consulting teams. Each engagement begins with operational analysis before system design and implementation.",
  ],
};

export const capabilities = [
  {
    title: "System Integration (SI)",
    description: "Design and implementation of enterprise systems connected to business operations and workflows.",
    items: ["ERP integration", "API connectivity", "Legacy system migration"],
  },
  {
    title: "System Management (SM)",
    description: "Ongoing operation, monitoring, and maintenance of deployed enterprise systems.",
    items: ["Incident response", "Release management", "Performance monitoring"],
  },
  {
    title: "Software Solutions",
    description: "Development of custom business applications for operational requirements.",
    items: ["Web applications", "Internal tools", "Workflow systems"],
  },
  {
    title: "SaaS Products",
    description: "Cloud-based software products delivered on a subscription model.",
    items: ["Platform development", "Multi-tenant architecture", "Subscription management"],
  },
  {
    title: "IT Consulting",
    description: "Business and technical analysis for system planning and IT strategy.",
    items: ["Requirements analysis", "Architecture review", "Technology assessment"],
  },
] as const;

export const organizationalTeams = [
  {
    title: "Engineering Teams",
    description: "Responsible for system architecture, development, and technical implementation.",
  },
  {
    title: "Delivery Teams",
    description: "Manage project execution, deployment, and client coordination throughout engagements.",
  },
  {
    title: "Maintenance Teams",
    description: "Provide ongoing system operation, support, and enhancement after deployment.",
  },
  {
    title: "Consulting Teams",
    description: "Conduct business analysis, requirements definition, and strategic IT planning.",
  },
] as const;

export const companyMilestones = [
  { year: "2012", title: "Company Founded", description: "Established as an IT services firm focused on enterprise system integration and consulting." },
  { year: "2016", title: "Delivery Teams Expanded", description: "Built dedicated engineering, delivery, and maintenance teams for structured project execution." },
  { year: "2020", title: "SaaS & Software Practice", description: "Launched software solutions and SaaS product development capabilities for subscription platforms." },
  { year: "2024", title: "Multi-Industry Portfolio", description: "Delivered enterprise projects across finance, healthcare, manufacturing, retail, and public sector." },
] as const;

export const companyQuote = {
  text: "We structure every engagement around operational analysis, defined scope, and measurable delivery outcomes.",
  attribution: "Elvarin Delivery Leadership",
} as const;

export const deliveryProcess = [
  { step: 1, title: "Requirement Analysis", description: "Document business context, scope, and operational requirements." },
  { step: 2, title: "System Design", description: "Define architecture, integration points, and delivery plan." },
  { step: 3, title: "Implementation", description: "Build, integrate, and configure system components." },
  { step: 4, title: "Testing", description: "Validate functionality, integration, and operational readiness." },
  { step: 5, title: "Deployment", description: "Release systems and support user onboarding." },
  { step: 6, title: "Maintenance", description: "Provide ongoing operation, support, and planned enhancements." },
] as const;
