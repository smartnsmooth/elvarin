"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/products";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">FAQs</h2>
          <p className="mt-1 text-gray-600">These answers may be helpful to you</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              <button
                className="flex w-full items-center justify-between p-5 text-left font-medium hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-gray-100 px-5 pb-5 pt-3 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
