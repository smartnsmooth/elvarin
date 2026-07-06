"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Kevin Mellor",
    date: "3 days ago",
    title: "Excellent service and quick delivery",
    text: "Received my Office license within minutes. Installation was straightforward with the provided instructions.",
  },
  {
    name: "Sarah Johnson",
    date: "1 week ago",
    title: "Great prices on genuine software",
    text: "Saved over 60% compared to retail. The license activated without any issues on my Windows 11 PC.",
  },
  {
    name: "Marco Rossi",
    date: "2 weeks ago",
    title: "Outstanding customer support",
    text: "Had a question about activation and got help via WhatsApp within 10 minutes. Highly recommended!",
  },
];

export default function TrustpilotSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="border-b border-gray-100 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Excellent</p>
            <div className="my-1 flex justify-center gap-0.5 md:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-trust-green text-trust-green" />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Based on <strong>1,500+ reviews</strong>
            </p>
            <p className="mt-1 flex items-center justify-center gap-1 text-sm font-medium text-trust-green md:justify-start">
              <Star className="h-4 w-4 fill-trust-green" /> Trustpilot
            </p>
          </div>

          <div className="relative w-full max-w-xl">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-trust-green text-trust-green" />
                  ))}
                </div>
                <span className="rounded bg-trust-green/10 px-2 py-0.5 text-xs font-medium text-trust-green">
                  Verified
                </span>
              </div>
              <p className="text-xs text-gray-500">
                {reviews[current].name}, {reviews[current].date}
              </p>
              <p className="mt-1 font-semibold">{reviews[current].title}</p>
              <p className="mt-1 text-sm text-gray-600">{reviews[current].text}</p>
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-1.5 shadow hover:bg-gray-50"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % reviews.length)}
              className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-1.5 shadow hover:bg-gray-50"
              aria-label="Next review"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
