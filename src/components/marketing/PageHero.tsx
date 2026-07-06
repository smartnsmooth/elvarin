import Link from "next/link";

type Cta = { label: string; href: string; variant?: "primary" | "outline" };

export default function PageHero({
  title,
  subtitle,
  ctas,
  compact,
}: {
  title: string;
  subtitle: string;
  ctas?: Cta[];
  compact?: boolean;
}) {
  return (
    <section className={`bg-gradient-to-br from-primary to-primary-dark text-white ${compact ? "py-14" : "py-20"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-blue-100">{subtitle}</p>
        {ctas && ctas.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4">
            {ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={
                  cta.variant === "outline"
                    ? "rounded-lg border-2 border-white/80 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    : "rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-gray-100"
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
