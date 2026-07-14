"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "vinextai-cookie-notice";

function hasAnalytics(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const analyticsEnabled = hasAnalytics();

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  if (!visible) {
    return null;
  }

  const dismiss = (choice: "essential" | "all") => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
    if (analyticsEnabled && choice === "all") {
      window.dispatchEvent(new Event("vinextai:analytics-consent"));
    }
  };

  if (analyticsEnabled) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg rounded-xl border border-gray-200 bg-white p-5 shadow-2xl md:left-6 md:right-auto">
        <h3 className="mb-1 font-semibold text-gray-900">Cookie preferences</h3>
        <p className="mb-4 text-sm text-gray-600">
          We use essential cookies to operate this site. With your consent, we also use privacy-friendly
          analytics to understand how visitors use our website. See our{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => dismiss("all")}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            Accept analytics
          </button>
          <button
            type="button"
            onClick={() => dismiss("essential")}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Essential only
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg rounded-xl border border-gray-200 bg-white p-5 shadow-2xl md:left-6 md:right-auto">
      <p className="text-sm text-gray-600">
        This site uses only essential cookies required for operation. We do not use analytics or advertising
        cookies. See our{" "}
        <Link href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={() => dismiss("essential")}
        className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
      >
        Understood
      </button>
    </div>
  );
}
