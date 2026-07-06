"use client";

import { Briefcase, FolderKanban, Home, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Briefcase, label: "Services", href: "/services" },
  { icon: FolderKanban, label: "Projects", href: "/projects" },
  { icon: Mail, label: "Contact", href: "/contact" },
] as const;

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white md:hidden">
      <div className="flex items-center justify-around py-2">
        {items.map(({ icon: Icon, label, href }) => {
          const active = pathname === href;
          const className = `flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] ${
            active ? "font-medium text-primary" : "text-gray-600 hover:text-primary"
          }`;

          return (
            <Link key={label} href={href} className={className}>
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
