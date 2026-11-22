"use client";

import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/language-provider";
import { RateNote } from "@/components/rate-note";
import { estimateMnt, primaryPrice, type Product } from "@/lib/catalog";
import { formatMnt, formatUsd } from "@/lib/format";

export function PriceBlock({
  product,
  detailed = false,
}: {
  product: Product;
  detailed?: boolean;
}) {
  const { t, phrase } = useI18n();
  const primary = primaryPrice(product);
  const alternates = product.prices.slice(1);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">{t("price.estimate")}</Badge>
        <p className="text-xs tracking-wide text-[#3A4F66] uppercase">
          {phrase(primary.seller)}
        </p>
      </div>
      <p className={detailed ? "mt-2 text-3xl font-semibold text-[#192a3d]" : "mt-2 text-xl font-semibold text-[#192a3d]"}>
        {formatUsd(primary.usd)}
      </p>
      <p className="text-sm text-[#3A4F66]">
        {t("price.est", { amount: formatMnt(estimateMnt(primary.usd)) })}
      </p>
      {product.compareAt ? (
        <p className="mt-1 text-xs text-[#3A4F66]">
          {phrase(product.compareAt.label)}: {formatUsd(product.compareAt.usd)}
        </p>
      ) : null}
      {alternates.map((price) => (
        <p key={`${price.seller}-${price.usd}`} className="mt-1 text-sm text-[#3A4F66]">
          {t("price.also", {
            usd: formatUsd(price.usd),
            seller: phrase(price.seller),
            mnt: formatMnt(estimateMnt(price.usd)),
          })}
        </p>
      ))}
      {detailed && product.priceCaution ? (
        <p className="mt-2 text-xs leading-relaxed text-[#3A4F66]">{phrase(product.priceCaution)}</p>
      ) : null}
      {detailed ? (
        <div className="mt-3">
          <RateNote />
        </div>
      ) : (
        <p className="mt-2 text-xs text-[#3A4F66]">{t("price.notQuote")}</p>
      )}
    </div>
  );
}
