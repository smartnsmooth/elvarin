import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark focus-visible:outline-primary",
  secondary:
    "border border-gray-300 bg-transparent text-gray-700 hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-gray-500",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], disabled && "opacity-60 pointer-events-none", className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
