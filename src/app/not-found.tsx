import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="section-spacing">
        <div className="mx-auto max-w-xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Page not found</h1>
          <p className="mt-4 text-gray-600">
            The page you requested does not exist or may have been moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/">Return home</Button>
            <Link href="/contact" className="inline-flex h-11 items-center rounded-lg border border-gray-300 px-6 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
