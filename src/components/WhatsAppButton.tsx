import Link from "next/link";
import { branding } from "@/lib/branding";

export default function WhatsAppButton() {
  return (
    <Link
      href={`mailto:${branding.email}`}
      className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-110 md:bottom-6"
      aria-label="Contact support"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    </Link>
  );
}
