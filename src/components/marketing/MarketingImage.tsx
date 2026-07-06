import Image from "next/image";
import { cn } from "@/lib/cn";
import { resolveImageAlt, resolveImageSrc, type SiteImage } from "@/lib/site-image";

export default function MarketingImage({
  src,
  alt,
  className,
  priority,
  fill,
  width,
  height,
  sizes,
}: {
  src: SiteImage | string;
  alt?: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}) {
  const resolvedSrc = resolveImageSrc(src);
  const resolvedAlt = resolveImageAlt(src, alt);

  if (fill) {
    return (
      <Image
        src={resolvedSrc}
        alt={resolvedAlt}
        fill
        priority={priority}
        sizes={sizes ?? "100vw"}
        className={cn("object-cover", className)}
      />
    );
  }
  return (
    <Image
      src={resolvedSrc}
      alt={resolvedAlt}
      width={width ?? 800}
      height={height ?? 600}
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  );
}
