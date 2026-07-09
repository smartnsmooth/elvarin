import type { Metadata } from "next";
import { branding } from "./branding";

export function getMetadataBase(): URL {
  return new URL(branding.siteUrl);
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

function resolveUrl(path?: string): string {
  if (!path || path === "/") {
    return branding.siteUrl;
  }
  return `${branding.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function resolveTitle(title: string): string {
  if (title === "Home") {
    return `${branding.name} | Enterprise IT Services`;
  }
  return title.includes("|") ? title : `${title} | ${branding.name}`;
}

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const url = resolveUrl(path);
  const ogTitle = resolveTitle(title);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: branding.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: `${branding.name} | Enterprise IT Services`,
    template: `%s | ${branding.name}`,
  },
  description: branding.description,
  openGraph: {
    title: `${branding.name} | Enterprise IT Services`,
    description: branding.description,
    url: branding.siteUrl,
    siteName: branding.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${branding.name} | Enterprise IT Services`,
    description: branding.description,
  },
  icons: {
    icon: branding.logo.src,
    shortcut: branding.logo.src,
    apple: branding.logo.src,
  },
};
