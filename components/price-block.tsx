"use client";

import { estimateMnt, primaryPrice, type Product } from "@/lib/catalog";
import { formatMnt } from "@/lib/format";

export function PriceBlock({
  product,
  detailed = false,
}: {
  product: Product;
  detailed?: boolean;
}) {
  const primary = primaryPrice(product);

  return (
    <p className={detailed ? "text-3xl font-semibold text-[#192a3d]" : "text-xl font-semibold text-[#192a3d]"}>
      {formatMnt(estimateMnt(primary.usd))}
    </p>
  );
}
