"use client";

import { useState } from "react";
import type { Product } from "@/lib/catalog";

export function ProductPhoto({
  product,
  priority = false,
  showCredit = false,
}: {
  product: Product;
  priority?: boolean;
  showCredit?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const missing = !product.image || failed;

  return (
    <div>
      <div className="flex aspect-[4/3] items-center justify-center bg-[#f2f5f7]">
        {missing ? (
          <p className="px-6 text-center text-sm text-[#3A4F66]">
            No product photo in the catalog
          </p>
        ) : (
          // Manufacturer CDNs are loaded by the browser. Next's optimizer would have to fetch them server-side.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image?.url}
            alt={`${product.brand} ${product.model}`}
            className="h-full w-full object-contain"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {showCredit && product.image && !failed ? (
        <p className="px-4 pt-2 text-xs leading-relaxed text-[#3A4F66]">
          {product.image.credit}
        </p>
      ) : null}
    </div>
  );
}
