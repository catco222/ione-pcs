"use client";

import { useI18n } from "@/components/language-provider";
import { RateNote } from "@/components/rate-note";
import { estimateMnt, primaryPrice, type Product } from "@/lib/catalog";
import { formatMnt } from "@/lib/format";

export function PriceBlock({
  product,
  detailed = false,
}: {
  product: Product;
  detailed?: boolean;
}) {
  const { phrase } = useI18n();
  const primary = primaryPrice(product);

  return (
    <div>
      <p className="text-xs tracking-wide text-[#3A4F66] uppercase">
        {phrase(primary.seller)}
      </p>
      <p className={detailed ? "mt-2 text-3xl font-semibold text-[#192a3d]" : "mt-2 text-xl font-semibold text-[#192a3d]"}>
        {formatMnt(estimateMnt(primary.usd))}
      </p>
      {detailed && product.priceCaution ? (
        <p className="mt-2 text-xs leading-relaxed text-[#3A4F66]">{phrase(product.priceCaution)}</p>
      ) : null}
      {detailed ? (
        <div className="mt-3">
          <RateNote />
        </div>
      ) : null}
    </div>
  );
}
