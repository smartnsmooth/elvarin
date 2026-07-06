"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQ = { question: string; answer: string };

export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
      {items.map((item, i) => (
        <div key={item.question}>
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-medium text-gray-900">{item.question}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
