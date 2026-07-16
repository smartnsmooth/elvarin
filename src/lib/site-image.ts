/** Local image under public/ with standardized alt text. */
export type SiteImage = {
  /** URL path served by Next.js, e.g. /images/hero/home.png */
  src: string;
  /** Alt text: "description - public/images/hero/home.png" */
  alt: string;
  /** Path relative to public/, e.g. images/hero/home.png */
  file: string;
};

export function siteImage(file: string, description: string): SiteImage {
  const normalized = file.replace(/^\/+/, "");
  const src = `/${normalized}`;
  return {
    file: normalized,
    src,
    alt: `${description} - public/${normalized}`,
  };
}

export function resolveImageSrc(image: SiteImage | string): string {
  return typeof image === "string" ? image : image.src;
}

export function resolveImageAlt(image: SiteImage | string, override?: string): string {
  if (override) return override;
  return typeof image === "string" ? "" : image.alt;
}
