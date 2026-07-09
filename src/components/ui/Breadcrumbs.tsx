import Link from "next/link";
import { cn } from "@/lib/cn";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items, className }: { items: BreadcrumbItem[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-gray-500", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-primary hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
