import MarketingImage from "./MarketingImage";
import { cn } from "@/lib/cn";
import type { SiteImage } from "@/lib/site-image";
import { resolveImageAlt } from "@/lib/site-image";

export default function SplitSection({
  title,
  subtitle,
  children,
  image,
  imageAlt,
  reverse = false,
  className,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  image: SiteImage | string;
  imageAlt?: string;
  reverse?: boolean;
  className?: string;
}) {
  const content = (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-4 leading-relaxed text-gray-600">{subtitle}</p>}
      {children && <div className="mt-6">{children}</div>}
    </div>
  );

  const visual = (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200/80">
      <MarketingImage src={image} alt={resolveImageAlt(image, imageAlt)} fill sizes="(max-width:768px) 100vw, 50vw" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
    </div>
  );

  return (
    <section className={cn("section-spacing", className)}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        {reverse ? (
          <>
            {visual}
            {content}
          </>
        ) : (
          <>
            {content}
            {visual}
          </>
        )}
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("mb-12 max-w-2xl", centered && "mx-auto text-center")}>
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  );
}
