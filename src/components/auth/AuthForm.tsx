"use client";

import Link from "next/link";

export function AuthCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-primary">{title}</h1>
        {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

export function AuthInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-700">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </label>
  );
}

export function AuthButton({
  children,
  loading,
  type = "submit",
  variant = "primary",
  onClick,
}: {
  children: React.ReactNode;
  loading?: boolean;
  type?: "submit" | "button";
  variant?: "primary" | "outline";
  onClick?: () => void;
}) {
  const base = "w-full rounded-lg py-2.5 text-sm font-semibold transition disabled:opacity-60";
  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-dark"
      : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50";

  return (
    <button type={type} disabled={loading} onClick={onClick} className={`${base} ${styles}`}>
      {loading ? "Please wait..." : children}
    </button>
  );
}

export function SocialButtons() {
  return (
    <div className="space-y-3">
      <a
        href="/api/auth/signin/google?callbackUrl=/account/profile"
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Continue with Google
      </a>
      <a
        href="/api/auth/signin/facebook?callbackUrl=/account/profile"
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        Continue with Facebook
      </a>
    </div>
  );
}

export function AuthDivider() {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-white px-2 text-gray-500">or</span>
      </div>
    </div>
  );
}

export function AuthAlert({ type, message }: { type: "error" | "success" | "info"; message: string }) {
  const styles = {
    error: "bg-red-50 text-red-700 border-red-200",
    success: "bg-green-50 text-green-700 border-green-200",
    info: "bg-blue-50 text-blue-700 border-blue-200",
  };
  return (
    <div className={`mb-4 rounded-lg border px-4 py-3 text-sm ${styles[type]}`}>{message}</div>
  );
}

export function AuthFooterLink({ text, href, linkText }: { text: string; href: string; linkText: string }) {
  return (
    <p className="mt-6 text-center text-sm text-gray-600">
      {text}{" "}
      <Link href={href} className="font-medium text-primary hover:underline">
        {linkText}
      </Link>
    </p>
  );
}
