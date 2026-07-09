import { cn } from "@/lib/cn";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray";
  size?: "standard" | "compact" | "hero";
};

export default function SectionContainer({
  children,
  className,
  id,
  background = "white",
  size = "standard",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        size === "hero" ? "section-padding-hero" : size === "compact" ? "py-16" : "section-padding",
        background === "gray" && "bg-gray-50",
        className,
      )}
    >
      <div className="container-enterprise">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 max-w-[720px]", className)}>
      <h2 className="text-gray-900">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-[26px] text-gray-700">{subtitle}</p>}
    </div>
  );
}
