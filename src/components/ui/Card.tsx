import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type CardProps = {
  icon?: LucideIcon;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  tags?: string[];
  className?: string;
};

export default function Card({
  icon: Icon,
  title,
  description,
  href,
  linkLabel = "Learn more",
  tags,
  className,
}: CardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 ease-out",
        "hover:border-primary/30 hover:shadow-md",
        className,
      )}
    >
      {Icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary transition-colors duration-200 group-hover:text-secondary" strokeWidth={1.75} />
        </div>
      )}
      {tags && tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{description}</p>
      {href && (
        <Link
          href={href}
          className="mt-4 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
        >
          {linkLabel} →
        </Link>
      )}
    </article>
  );
}
