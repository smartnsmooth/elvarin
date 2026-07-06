import { Headphones, Shield, Users } from "lucide-react";
import Link from "next/link";
import { branding } from "@/lib/branding";

export default function InfoSections() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Headphones className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Free technical support included</h3>
            <p className="mb-6 text-sm text-gray-600">
              Our support team is available via email and phone to provide professional assistance
              whenever you need it.
            </p>
            <Link
              href={`mailto:${branding.email}`}
              className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Contact us
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-trust-green/10">
              <Shield className="h-8 w-8 text-trust-green" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Purchase protection</h3>
            <p className="mb-6 text-sm text-gray-600">
              Every order includes buyer protection at no extra cost, extending coverage beyond the
              standard guarantee.
            </p>
            <Link
              href="#"
              className="inline-block rounded-lg border border-trust-green px-6 py-2.5 text-sm font-medium text-trust-green hover:bg-trust-green hover:text-white"
            >
              Learn more
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <Users className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="mb-3 text-xl font-bold">About {branding.name}</h3>
            <p className="mb-6 text-sm text-gray-600">
              We provide genuine software licenses at the best price with a transparent shopping
              experience and high-quality customer service.
            </p>
            <Link
              href="#"
              className="inline-block rounded-lg border border-primary px-6 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
