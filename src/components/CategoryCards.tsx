import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Category = {
  slug: string;
  name: string;
  description: string | null;
  _count?: { products: number };
};

const GRADIENTS: Record<string, string> = {
  office: "from-[#0078D4] to-[#005A9E]",
  "operating-systems": "from-slate-700 to-slate-900",
  multimedia: "from-[#FF0000] to-[#CC0000]",
  "3d-architecture-cad": "from-[#E51937] to-[#B01429]",
  security: "from-[#00A88E] to-[#007A6B]",
  utility: "from-[#6366F1] to-[#4338CA]",
};

export default function CategoryCards({ categories }: { categories: Category[] }) {
  const featured = categories.filter((c) =>
    ["office", "security", "multimedia", "3d-architecture-cad"].includes(c.slug)
  );

  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${GRADIENTS[cat.slug] || "from-primary to-primary-dark"} p-6 text-white shadow-lg transition-transform hover:scale-[1.02]`}
            >
              <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                {cat.name.split(" ")[0]}
              </span>
              <h3 className="mb-2 text-lg font-bold leading-tight">{cat.name} Software</h3>
              <p className="mb-4 text-sm text-white/80">{cat.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2">
                Browse <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
