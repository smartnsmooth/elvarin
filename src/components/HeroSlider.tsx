"use client";

import { ChevronLeft, ChevronRight, Shield, Star, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { branding } from "@/lib/branding";

const slides = [
  {
    title: "Software licenses",
    subtitle: "discounts of up to 70%",
    features: [
      "100% original licenses",
      "Free technical support",
      "Buyer protection included",
    ],
  },
  {
    title: "Microsoft Office",
    subtitle: "Lifetime licenses from $37.90",
    features: ["Instant email delivery", "Official download links", "30-day money-back guarantee"],
  },
  {
    title: "Adobe Creative Cloud",
    subtitle: "All apps from $42.90",
    features: ["Genuine Adobe licenses", "Free installation support", "Certified partner"],
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary-dark to-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-cyan-300 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="animate-slide-in text-white">
            <p className="mb-1 text-sm font-medium uppercase tracking-wider text-accent">
              {branding.name}
            </p>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">{slide.title}</h1>
            <p className="mb-6 text-2xl font-light text-cyan-200 md:text-3xl">{slide.subtitle}</p>
            <ul className="space-y-2">
              {slide.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm md:text-base">
                  <Star className="h-4 w-4 shrink-0 fill-yellow-400 text-yellow-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:grid md:grid-cols-2 md:gap-4">
            {[
              { icon: Shield, label: "100% Genuine", color: "from-green-500 to-emerald-600" },
              { icon: Wrench, label: "Free Support", color: "from-blue-500 to-primary" },
              { icon: Star, label: "4.8 Rating", color: "from-yellow-500 to-orange-500" },
              { icon: Shield, label: "Secure Checkout", color: "from-purple-500 to-violet-600" },
            ].map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className={`flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-br ${color} p-6 text-white shadow-lg`}
              >
                <Icon className="h-8 w-8" />
                <span className="text-center text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-white" : "w-2 bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
