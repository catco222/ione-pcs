import { Badge } from "@/components/ui/badge";
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
  const primary = primaryPrice(product);
  const alternates = product.prices.slice(1);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">Estimate</Badge>
        <p className="text-xs uppercase tracking-wide text-[#3A4F66]">
          {primary.seller}
        </p>
      </div>
      <p className={detailed ? "mt-2 text-3xl font-semibold text-[#192a3d]" : "mt-2 text-xl font-semibold text-[#192a3d]"}>
        {formatUsd(primary.usd)}
      </p>
      <p className="text-sm text-[#3A4F66]">
        Est. {formatMnt(estimateMnt(primary.usd))}
      </p>
      {product.compareAt ? (
        <p className="mt-1 text-xs text-[#3A4F66]">
          {product.compareAt.label}: {formatUsd(product.compareAt.usd)}
        </p>
      ) : null}
      {alternates.map((price) => (
        <p key={`${price.seller}-${price.usd}`} className="mt-1 text-sm text-[#3A4F66]">
          Also {formatUsd(price.usd)} at {price.seller} (est.{" "}
          {formatMnt(estimateMnt(price.usd))})
        </p>
      ))}
      {detailed && product.priceCaution ? (
        <p className="mt-2 text-xs leading-relaxed text-[#3A4F66]">{product.priceCaution}</p>
      ) : null}
      {detailed ? (
        <div className="mt-3">
          <RateNote />
        </div>
      ) : (
        <p className="mt-2 text-xs text-[#3A4F66]">Not an iOne quote</p>
      )}
    </div>
  );
}
