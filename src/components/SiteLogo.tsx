import Image from "next/image";
import Link from "next/link";
import { branding } from "@/lib/branding";

type SiteLogoProps = {
  size?: "sm" | "md";
  compact?: boolean;
  showTagline?: boolean;
  nameClassName?: string;
  className?: string;
};

export default function SiteLogo({
  size = "md",
  compact = false,
  showTagline = false,
  nameClassName = "text-primary",
  className = "",
}: SiteLogoProps) {
  const effectiveSize = compact ? "sm" : size;
  const imageHeight = effectiveSize === "sm" ? "h-8" : "h-10";

  return (
    <Link href="/" className={`flex shrink-0 items-center gap-2 ${className}`}>
      <Image
        src={branding.logo.src}
        alt={branding.logo.alt}
        width={120}
        height={effectiveSize === "sm" ? 32 : 40}
        className={`${imageHeight} w-auto shrink-0 object-contain transition-all duration-200`}
        priority
      />
      <div>
        <span className={`${effectiveSize === "sm" ? "text-base" : "text-xl"} font-semibold transition-all duration-200 ${nameClassName}`}>
          {branding.name}
        </span>
        {showTagline && (
          <p className="hidden text-[10px] text-gray-500 sm:block">{branding.tagline}</p>
        )}
      </div>
    </Link>
  );
}
