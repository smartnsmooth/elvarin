import Link from "next/link";
import MarketingImage from "./MarketingImage";
import type { SiteImage } from "@/lib/site-image";
import { resolveImageAlt } from "@/lib/site-image";

type Cta = { label: string; href: string; variant?: "primary" | "outline" };

export default function SplitHero({
  title,
  subtitle,
  ctas,
  image,
  imageAlt,
  imagePosition = "right",
  fullHeight = true,
  dark = true,
  platformLabel,
  coverImage = false,
}: {
  title: string;
  subtitle: string;
  ctas?: Cta[];
  image: SiteImage | string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  fullHeight?: boolean;
  dark?: boolean;
  platformLabel?: string;
  /** Full-bleed image behind content; hidden on mobile (gradient only). */
  coverImage?: boolean;
}) {
  const alt = resolveImageAlt(image, imageAlt);
  const textBlock = (padClassName = `pl-12 py-12 lg:py-0 xl:pl-24`) => (
    <div className={`flex w-full flex-col justify-center ${padClassName} ${dark ? "text-white" : "text-gray-900"}`}>
      <p className={`mb-3 text-sm font-semibold uppercase tracking-widest ${dark ? "text-accent" : "text-primary"}`}>
        {platformLabel ?? "Enterprise Platform"}
      </p>
      <h1 className="max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.25rem] xl:text-4xl">
        {title}
      </h1>
      <p className={`mt-5 max-w-lg text-base leading-relaxed lg:text-lg ${dark ? "text-blue-100" : "text-gray-600"}`}>
        {subtitle}
      </p>
      {ctas && ctas.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-4">
          {ctas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className={
                cta.variant === "outline"
                  ? "rounded-lg border-2 border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  : "rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition hover:bg-gray-100"
              }
            >
              {cta.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  if (coverImage) {
    return (
      <section
        className={`relative overflow-hidden ${fullHeight ? "min-h-[75vh] lg:min-h-[85vh]" : "min-h-[50vh]"} ${dark ? "hero-gradient" : "bg-white"
          }`}
      >
        <div className="absolute inset-0 hidden lg:block">
          <MarketingImage src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/65 to-primary/25" />
        </div>
        <div className="pattern-grid absolute inset-0 opacity-30" />
        <div className="relative flex min-h-[inherit] w-full items-center">
          <div className="flex w-full max-w-xl lg:max-w-2xl">
            {textBlock()}
          </div>
        </div>
      </section>
    );
  }

  const imageBlock = (
    <div className="relative min-h-[280px] lg:min-h-[400px] lg:flex-1 lg:self-stretch">
      <MarketingImage src={image} alt={alt} fill priority sizes="(max-width:1024px) 100vw, 55vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent lg:bg-gradient-to-l lg:from-primary-dark/30 lg:via-transparent lg:to-transparent" />
    </div>
  );

  return (
    <section
      className={`relative overflow-hidden ${fullHeight ? "min-h-[75vh] lg:min-h-[85vh]" : ""} ${dark ? "hero-gradient" : "bg-white"
        }`}
    >
      <div className="pattern-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto flex min-h-[inherit] max-w-7xl flex-col lg:flex-row lg:items-center">
        {imagePosition === "left" ? (
          <>
            {imageBlock}
            <div className="flex lg:w-[45%] lg:shrink-0 lg:items-center">{textBlock()}</div>
          </>
        ) : (
          <>
            <div className="flex lg:w-[45%] lg:shrink-0 lg:items-center">{textBlock()}</div>
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}

export function BannerHero({
  title,
  subtitle,
  ctas,
  image,
  imageAlt,
  solutionsLabel,
}: {
  title: string;
  subtitle: string;
  ctas?: Cta[];
  image: SiteImage | string;
  imageAlt?: string;
  solutionsLabel?: string;
}) {
  const alt = resolveImageAlt(image, imageAlt);
  return (
    <section className="relative min-h-[50vh] overflow-hidden lg:min-h-[60vh]">
      <MarketingImage src={image} alt={alt} fill priority sizes="100vw" className="brightness-[0.45]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/80 to-primary/40" />
      <div className="pattern-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-20 lg:min-h-[inherit] lg:py-28">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          {solutionsLabel ?? "Enterprise Solutions"}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.25rem] xl:text-4xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-blue-100 lg:text-lg">{subtitle}</p>
        {ctas && ctas.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4">
            {ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={
                  cta.variant === "outline"
                    ? "rounded-lg border-2 border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                    : "rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-gray-100"
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
