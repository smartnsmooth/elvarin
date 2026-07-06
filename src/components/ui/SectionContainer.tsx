import { cn } from "@/lib/cn";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray";
};

export default function SectionContainer({
  children,
  className,
  id,
  background = "white",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        background === "gray" && "bg-gray-50",
        className,
      )}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({ title, subtitle, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn(centered && "mx-auto max-w-3xl text-center", "mb-12", className)}>
      <h2 className="text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-gray-600">{subtitle}</p>}
    </div>
  );
}
