"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type InquiryType =
  | "si"
  | "sm"
  | "solutions"
  | "saas"
  | "consulting"
  | "general";

const inquiryTypes: { value: InquiryType; label: string }[] = [
  { value: "si", label: "System Integration (SI)" },
  { value: "sm", label: "System Maintenance (SM)" },
  { value: "solutions", label: "Software Solutions" },
  { value: "saas", label: "SaaS Inquiry" },
  { value: "consulting", label: "IT Consulting" },
  { value: "general", label: "General Inquiry" },
];

type FormState = {
  name: string;
  company: string;
  email: string;
  inquiryType: InquiryType;
  message: string;
  website: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "This field is required";
  if (!form.company.trim()) errors.company = "This field is required";
  if (!form.email.trim()) {
    errors.email = "This field is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Email format is invalid";
  }
  if (!form.message.trim()) errors.message = "This field is required";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    inquiryType: "general",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function validateField(field: keyof FormState, value: string) {
    const next = { ...form, [field]: value };
    const fieldErrors = validate(next);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) validateField(field, value);
  }

  function handleBlur(field: keyof FormState) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, form[field]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");
    const allTouched = Object.keys(form).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {} as Record<keyof FormState, boolean>,
    );
    setTouched(allTouched);

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", company: "", email: "", inquiryType: "general", message: "", website: "" });
        setTouched({});
        setErrors({});
      } else {
        setSubmitError("Submission failed. Please try again.");
      }
    } catch {
      setSubmitError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <p className="text-base text-gray-900">Your inquiry has been received.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-gray-200 bg-white p-6" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => handleChange("website", e.target.value)}
        />
      </div>

      <div className="space-y-6">
        <FormField
          label="Full Name"
          required
          value={form.name}
          error={touched.name ? errors.name : undefined}
          onChange={(v) => handleChange("name", v)}
          onBlur={() => handleBlur("name")}
        />
        <FormField
          label="Company Name"
          required
          value={form.company}
          error={touched.company ? errors.company : undefined}
          onChange={(v) => handleChange("company", v)}
          onBlur={() => handleBlur("company")}
        />
        <FormField
          label="Email Address"
          type="email"
          required
          value={form.email}
          error={touched.email ? errors.email : undefined}
          onChange={(v) => handleChange("email", v)}
          onBlur={() => handleBlur("email")}
        />

        <div>
          <label htmlFor="inquiryType" className="mb-2 block text-sm font-medium text-gray-700">
            Inquiry Type <span className="text-gray-500">*</span>
          </label>
          <select
            id="inquiryType"
            value={form.inquiryType}
            onChange={(e) => handleChange("inquiryType", e.target.value)}
            className="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {inquiryTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
            Message <span className="text-gray-500">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            className={cn(
              "min-h-[120px] w-full rounded-lg border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
              touched.message && errors.message ? "border-error" : "border-gray-300",
            )}
          />
          {touched.message && errors.message && (
            <p className="mt-2 text-sm text-error">{errors.message}</p>
          )}
        </div>

        {submitError && <p className="text-sm text-error">{submitError}</p>}

        <button
          type="submit"
          disabled={loading}
          className="h-11 w-full rounded-lg bg-primary text-sm font-medium text-white transition-colors duration-200 hover:bg-primary-hover disabled:opacity-50"
        >
          {loading ? "Loading..." : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
}

function FormField({
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  required,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const id = label.toLowerCase().replace(/\s/g, "-");
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-gray-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={cn(
          "h-11 w-full rounded-lg border px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
          error ? "border-error" : "border-gray-300",
        )}
      />
      {error && <p className="mt-2 text-sm text-error">{error}</p>}
    </div>
  );
}
