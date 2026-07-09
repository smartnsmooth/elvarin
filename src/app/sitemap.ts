import type { MetadataRoute } from "next";
import { branding } from "@/lib/branding";
import { industries } from "@/data/industries";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/projects",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  const industryRoutes = industries.map((industry) => `/industries/${industry.slug}`);

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...industryRoutes];

  return allRoutes.map((route) => ({
    url: `${branding.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
