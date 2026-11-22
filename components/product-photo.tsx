"use client";

import { useState } from "react";
import type { Product } from "@/lib/catalog";

export function ProductPhoto({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const missing = !product.image || failed;

  return (
    <div className="flex aspect-[4/3] items-center justify-center bg-[#e7edf1]">
      {missing ? (
        <div className="flex flex-col items-center gap-3 text-[#5c7388]">
          <svg viewBox="0 0 64 72" className="h-16 w-14" aria-hidden="true">
            <rect x="14" y="4" width="36" height="56" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="32" cy="16" r="2.5" fill="currentColor" />
            <path d="M24 48h16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M22 64h20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <p className="text-sm font-medium tracking-wide">No photo</p>
        </div>
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
  );
}
