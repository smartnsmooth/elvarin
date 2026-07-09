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
  active,
  onClick,
}: {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary",
        active && "nav-link-active",
      )}
    >
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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 h-[72px] border-b bg-white transition-colors duration-200 md:h-20 lg:h-[88px]",
          scrolled ? "border-gray-200 shadow-sm" : "border-transparent",
        )}
      >
        <div className="container-enterprise flex h-full items-center">
          <div className="w-1/5 shrink-0">
            <SiteLogo />
          </div>

          <nav className="hidden w-3/5 items-center justify-center gap-2 lg:flex" aria-label="Main navigation">
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
              />
            ))}
          </nav>

          <div className="hidden w-1/5 shrink-0 justify-end lg:flex">
            <Button href="/contact" className="h-10 px-4">
              Contact Us
            </Button>
          </div>

          <button
            className="ml-auto rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
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
              <span className="text-sm font-semibold text-gray-900">Menu</span>
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
                    active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
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
