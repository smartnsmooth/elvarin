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
