import { siteImage } from "./site-image";

/**
 * Site marketing images — all local files under public/images/.
 * Copy your image files using the exact paths shown in each entry's `file` field.
 */
export const visuals = {
  hero: {
    home: siteImage("images/hero/home.png", "Cloud computing and digital network infrastructure"),
    about: siteImage("images/hero/about.png", "Global enterprise network connectivity"),
    licensing: siteImage("images/hero/licensing.png", "Enterprise software licensing dashboard"),
    products: siteImage("images/hero/products.png", "Software product catalog overview"),
    services: siteImage("images/hero/services.png", "Enterprise IT services workspace"),
    support: siteImage("images/hero/support.png", "Helpdesk and customer support operations"),
    contact: siteImage("images/hero/contact.png", "Global business communication network"),
    redeem: siteImage("images/hero/redeem.png", "Secure voucher redemption portal"),
    login: siteImage("images/hero/login.png", "Secure enterprise login portal"),
  },
  services: {
    licensing: siteImage("images/services/licensing.png", "Software license key management"),
    consulting: siteImage("images/services/consulting.png", "IT consulting and strategy planning"),
    deployment: siteImage("images/services/deployment.png", "Software deployment and rollout"),
    cloud: siteImage("images/services/cloud.png", "Cloud infrastructure and integration"),
    support: siteImage("images/services/support.png", "Technical support and helpdesk"),
  },
  ecosystems: {
    microsoft: siteImage("images/ecosystems/microsoft.png", "Microsoft software ecosystem"),
    adobe: siteImage("images/ecosystems/adobe.png", "Adobe Creative Cloud ecosystem"),
    windows: siteImage("images/ecosystems/windows.png", "Windows operating system platform"),
    office: siteImage("images/ecosystems/office.png", "Microsoft Office productivity suite"),
    business: siteImage("images/ecosystems/business.png", "Business application software"),
    cloud: siteImage("images/ecosystems/cloud.png", "Cloud SaaS solutions"),
  },
  categories: {
    softwareLicensing: siteImage("images/categories/software-licensing.png", "Software licensing category"),
    subscription: siteImage("images/categories/subscription.png", "Subscription license management"),
    volume: siteImage("images/categories/volume.png", "Volume enterprise licensing"),
    procurement: siteImage("images/categories/procurement.png", "Software procurement assistance"),
    adobe: siteImage("images/categories/adobe.png", "Adobe product licensing"),
    microsoft365: siteImage("images/categories/microsoft-365.png", "Microsoft 365 licensing"),
    office: siteImage("images/categories/office.png", "Microsoft Office licensing"),
    windows: siteImage("images/categories/windows.png", "Windows license category"),
  },
  about: {
    overview: siteImage("images/about/overview.png", "Enterprise IT company overview"),
    focus: siteImage("images/about/focus.png", "Software ecosystem focus areas"),
    model: siteImage("images/about/model.png", "Dual delivery licensing model"),
    support: siteImage("images/about/support.png", "Enterprise support operations"),
    storyEmbed: siteImage("images/about/story-embed.png", "Enterprise collaboration environment"),
    quoteBg: siteImage("images/about/quote-bg.png", "Corporate skyline mission backdrop"),
    skyline: siteImage("images/about/skyline.png", "Global business skyline"),
  },
  servicePages: {
    consulting: siteImage("images/service-pages/consulting.png", "IT consulting discovery session"),
    deployment: siteImage("images/service-pages/deployment.png", "Software deployment execution"),
    cloud: siteImage("images/service-pages/cloud.png", "Cloud migration services"),
    integration: siteImage("images/service-pages/integration.png", "System integration architecture"),
    support: siteImage("images/service-pages/support.png", "Ongoing technical support"),
    migration: siteImage("images/service-pages/migration.png", "Platform migration services"),
    architecture: siteImage("images/service-pages/architecture.png", "End-to-end service architecture"),
    pipeline: siteImage("images/service-pages/pipeline.png", "Service delivery workflow pipeline"),
  },
  trust: {
    security: siteImage("images/trust/security.png", "Enterprise security infrastructure"),
    infrastructure: siteImage("images/trust/infrastructure.png", "Business IT infrastructure"),
  },
  redeem: {
    flow: siteImage("images/redeem/flow.png", "Voucher redemption workflow"),
  },
  products: {
    fallback: siteImage("images/products/fallback.png", "Generic software product placeholder"),
  },
  partners: {
    microsoft: siteImage("images/partners/microsoft.png", "Microsoft Gold Partner logo"),
    adobe: siteImage("images/partners/adobe.png", "Adobe Certified Partner logo"),
    parallels: siteImage("images/partners/parallels.png", "Parallels Official Partner logo"),
    kaspersky: siteImage("images/partners/kaspersky.png", "Kaspersky Registered Partner logo"),
    mcafee: siteImage("images/partners/mcafee.png", "McAfee Authorized Partner logo"),
  },
} as const;

export type VisualKey = keyof typeof visuals;
