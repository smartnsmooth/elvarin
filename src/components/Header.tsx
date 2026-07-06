"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import SiteLogo from "./SiteLogo";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { mainNav } from "@/lib/navigation";

function NavLink({
  href,
  label,
  external,
  active,
  onClick,
}: {
  href: string;
  label: string;
  external?: boolean;
  active?: boolean;
  onClick?: () => void;
}) {
  const className = cn(
    "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
    active ? "text-primary" : "text-gray-700 hover:text-primary",
  );

  if (external) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b border-gray-200 bg-white transition-all duration-200 ease-out",
          scrolled ? "h-[72px]" : "h-[90px]",
        )}
      >
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex shrink-0 items-center">
            <SiteLogo compact={scrolled} />
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Main navigation">
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                external={item.external}
                active={!item.external && pathname === item.href}
              />
            ))}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Button href="/contact">Contact Us</Button>
          </div>

          <button
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} aria-hidden="true" />
          <div className="absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
              <span className="font-semibold text-gray-900">Menu</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 p-4" aria-label="Mobile navigation">
              {mainNav.map((item) => (
                <div key={item.href} className="border-b border-gray-100 py-3">
                  <NavLink
                    href={item.href}
                    label={item.label}
                    external={item.external}
                    active={!item.external && pathname === item.href}
                    onClick={() => setMenuOpen(false)}
                  />
                </div>
              ))}
            </nav>
            <div className="border-t border-gray-200 p-4">
              <Button href="/contact" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
