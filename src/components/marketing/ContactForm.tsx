"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type InquiryType = "business" | "proposal" | "maintenance" | "general";

const inquiryTypes: { value: InquiryType; label: string }[] = [
  { value: "business", label: "Business Inquiry" },
  { value: "proposal", label: "Project Proposal" },
  { value: "maintenance", label: "Maintenance Request" },
  { value: "general", label: "General Question" },
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: InquiryType;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.company.trim()) errors.company = "Company name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!form.message.trim()) errors.message = "Message is required";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "business",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
        setForm({ name: "", company: "", email: "", phone: "", inquiryType: "business", message: "" });
        setTouched({});
        setErrors({});
      }
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-gray-900">Thank you for your inquiry</h2>
        <p className="mt-3 text-base text-gray-600">
          Your message has been received. Our team will respond within one to two business days.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-primary hover:text-primary-dark"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-8" noValidate>
      <h2 className="text-xl font-semibold text-gray-900">Send an Inquiry</h2>
      <p className="mt-2 text-sm text-gray-600">
        Fields marked with <span className="text-primary">*</span> are required.
      </p>

      <div className="mt-8 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            label="Name"
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
            label="Email"
            type="email"
            required
            value={form.email}
            error={touched.email ? errors.email : undefined}
            onChange={(v) => handleChange("email", v)}
            onBlur={() => handleBlur("email")}
          />
          <FormField
            label="Contact Number"
            type="tel"
            value={form.phone}
            onChange={(v) => handleChange("phone", v)}
            onBlur={() => handleBlur("phone")}
          />
        </div>

        <div>
          <label htmlFor="inquiryType" className="mb-2 block text-sm font-medium text-gray-700">
            Inquiry Type <span className="text-primary">*</span>
          </label>
          <select
            id="inquiryType"
            value={form.inquiryType}
            onChange={(e) => handleChange("inquiryType", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
            Message <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            className={cn(
              "w-full rounded-md border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
              touched.message && errors.message ? "border-red-400" : "border-gray-300",
            )}
          />
          {touched.message && errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
        >
          {loading ? "Sending..." : "Submit Inquiry"}
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
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={cn(
          "w-full rounded-md border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
          error ? "border-red-400" : "border-gray-300",
        )}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
