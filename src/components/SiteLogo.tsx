import Image from "next/image";
import Link from "next/link";
import { branding } from "@/lib/branding";

export default function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex shrink-0 items-center gap-2 ${className}`}>
      <Image
        src={branding.logo.src}
        alt={branding.logo.alt}
        width={120}
        height={28}
        className="h-7 w-auto shrink-0 object-contain"
        priority
      />
      <span className="text-base font-semibold text-gray-900">{branding.name}</span>
    </Link>
  );
}
