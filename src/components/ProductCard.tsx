import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/data/products";

function ProductBox({ product }: { product: Product }) {
  const savings = product.originalPrice - product.price;

  return (
    <div className="relative mx-auto w-full max-w-[140px]">
      <div
        className="relative overflow-hidden rounded-t-lg shadow-md"
        style={{ backgroundColor: product.color }}
      >
        <div className="absolute left-1/2 top-0 h-3 w-8 -translate-x-1/2 rounded-b-full bg-white/30" />
        <div className="flex h-32 flex-col items-center justify-center p-3 text-white">
          <span className="text-[10px] font-medium uppercase opacity-80">{product.brand}</span>
          <span className="mt-1 text-center text-xs font-bold leading-tight">{product.name}</span>
        </div>
      </div>
      {savings > 0 && (
        <span className="absolute -left-1 -top-2 rounded bg-accent-red px-2 py-0.5 text-[10px] font-bold text-white shadow">
          Save -${savings.toFixed(0)}
        </span>
      )}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-lg">
      <Link href="#" className="mb-3 block">
        <ProductBox product={product} />
      </Link>

      <span className="mb-1 text-xs font-medium text-primary">{product.displayCategory}</span>
      <Link href="#" className="mb-1 text-sm font-semibold leading-snug hover:text-primary">
        {product.name}
      </Link>
      <p className="mb-1 text-xs text-gray-500">{product.brand}</p>
      <p className="mb-2 text-xs text-gray-400">{product.sku}</p>

      {product.rating > 0 && (
        <div className="mb-2 flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xs text-yellow-400">
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.rating})</span>
        </div>
      )}

      <div className="mb-3 flex items-baseline gap-2">
        <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
        <span className="text-sm text-gray-400 line-through">
          ${product.originalPrice.toFixed(2)}
        </span>
      </div>

      {product.description && (
        <p className="mb-3 line-clamp-2 text-xs text-gray-600">{product.description}</p>
      )}

      {product.action === "cart" ? (
        <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark">
          <ShoppingCart className="h-4 w-4" />
          Add to cart
        </button>
      ) : (
        <Link
          href="#"
          className="mt-auto block w-full rounded-lg border border-primary py-2.5 text-center text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Details
        </Link>
      )}
    </article>
  );
}
