import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

const baseStyles =
  "inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-hover focus-visible:outline-primary active:scale-[0.98]",
  secondary:
    "border border-gray-300 bg-transparent text-gray-900 hover:border-gray-300 hover:bg-gray-100 focus-visible:outline-gray-500 active:scale-[0.98]",
  ghost: "bg-transparent text-primary hover:underline focus-visible:outline-primary",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  disabled,
  loading,
  onClick,
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variants[variant],
    (disabled || loading) && "pointer-events-none opacity-50",
    className,
  );

  const content = loading ? "Loading..." : children;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled || loading} onClick={onClick}>
      {content}
    </button>
  );
}
