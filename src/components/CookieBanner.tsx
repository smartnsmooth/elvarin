"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 mx-auto max-w-lg rounded-xl border border-gray-200 bg-white p-5 shadow-2xl md:bottom-6 md:left-6 md:right-auto">
      <h3 className="mb-1 font-semibold">Your privacy matters</h3>
      <p className="mb-4 text-sm text-gray-600">
        We use cookies to show you relevant software deals and remember your preferences. You can
        customize your choices anytime.
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={accept}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
        >
          Accept all
        </button>
        <button
          onClick={accept}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Necessary
        </button>
        <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
          Preferences
        </button>
      </div>
    </div>
  );
}
