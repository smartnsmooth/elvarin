import Link from "next/link";
import { cn } from "@/lib/cn";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  tags?: string[];
  className?: string;
};

export default function Card({
  title,
  description,
  href,
  linkLabel = "Learn More",
  tags,
  className,
}: CardProps) {
  const content = (
    <>
      {tags && tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <h3 className="text-[22px] font-semibold leading-[30px] text-gray-900">{title}</h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-[22px] text-gray-700">{description}</p>
      {href && (
        <span className="mt-4 text-sm font-medium text-primary">{linkLabel} →</span>
      )}
    </>
  );

  const cardClass = cn(
    "flex h-full min-h-[160px] flex-col rounded-lg border border-gray-200 bg-white p-6 transition-all duration-200",
    "hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm",
    href && "hover:[&_h3]:text-primary",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cn(cardClass, "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary")}>
        {content}
      </Link>
    );
  }

  return <article className={cardClass}>{content}</article>;
}
