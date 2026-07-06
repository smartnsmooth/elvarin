import Link from "next/link";
import MarketingImage from "./MarketingImage";
import type { SiteImage } from "@/lib/site-image";
import { resolveImageAlt } from "@/lib/site-image";

export default function TrustBanner({
  title,
  items,
  image,
}: {
  title: string;
  items: string[];
  image: SiteImage | string;
}) {
  return (
    <section className="relative overflow-hidden py-24">
      <MarketingImage src={image} fill sizes="100vw" className="brightness-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary-dark/70" />
      <div className="pattern-grid absolute inset-0 opacity-15" />
      <div className="relative mx-auto max-w-7xl px-4">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl">{title}</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="glass-panel rounded-xl p-6 text-center shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-trust-green/20">
                <span className="text-xl text-trust-green">✓</span>
              </div>
              <p className="text-sm font-semibold text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImageCard({
  title,
  description,
  image,
  imageAlt,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  image: SiteImage | string;
  imageAlt?: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <MarketingImage
          src={image}
          alt={resolveImageAlt(image, imageAlt)}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary/20 to-transparent" />
        {Icon && (
          <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 shadow">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        )}
        <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="p-5">
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
        {href && (
          <Link href={href} className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
            Learn more →
          </Link>
        )}
      </div>
    </article>
  );
}

export function ServiceVisualCard({
  title,
  description,
  image,
  imageAlt,
  icon: Icon,
}: {
  title: string;
  description: string;
  image: SiteImage | string;
  imageAlt?: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:shadow-xl">
      <div className="relative h-36 overflow-hidden">
        <MarketingImage src={image} alt={resolveImageAlt(image, imageAlt)} fill sizes="400px" className="opacity-90 transition group-hover:scale-105" />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
      </div>
      <div className="relative -mt-8 px-5 pb-6">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg ring-1 ring-gray-100">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </article>
  );
}
