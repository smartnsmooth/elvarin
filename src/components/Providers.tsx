"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import CookieBanner from "@/components/CookieBanner";

const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export default function Providers({ children }: { children: React.ReactNode }) {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    if (!domain) {
      return;
    }

    const stored = localStorage.getItem("elvarin-cookie-notice");
    if (stored === "all") {
      setAnalyticsAllowed(true);
    }

    const onConsent = () => setAnalyticsAllowed(true);
    window.addEventListener("elvarin:analytics-consent", onConsent);
    return () => window.removeEventListener("elvarin:analytics-consent", onConsent);
  }, []);

  return (
    <>
      {children}
      <CookieBanner />
      {domain && analyticsAllowed && (
        <Script
          defer
          data-domain={domain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
