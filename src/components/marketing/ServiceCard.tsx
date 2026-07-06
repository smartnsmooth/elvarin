import { LucideIcon } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  href?: string;
}) {
  return (
    <article className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{description}</p>
      {features && features.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>
      )}
      {href && (
        <Link href={href} className="mt-5 text-sm font-medium text-primary hover:underline">
          Learn more →
        </Link>
      )}
    </article>
  );
}
