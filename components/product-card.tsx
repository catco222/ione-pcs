"use client";

import Link from "next/link";
import { CompareToggle } from "@/components/compare-toggle";
import { useI18n } from "@/components/language-provider";
import { PriceBlock } from "@/components/price-block";
import { ProductPhoto } from "@/components/product-photo";
import { gpuLine, type Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  const { t } = useI18n();
  const href = `/gaming-pcs/${product.slug}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-[#d5dee6] bg-white">
      <Link href={href} className="block focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#2872fa]/40">
        <ProductPhoto product={product} />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="text-xs font-medium tracking-wide text-[#3A4F66] uppercase">
            {product.brand}
          </p>
          <h2 className="mt-1 text-lg leading-snug font-semibold text-[#192a3d]">
            <Link href={href} className="hover:text-[#2872fa]">
              {product.model}
            </Link>
          </h2>
        </div>
        <p className="text-base font-semibold text-[#192a3d]">{gpuLine(product)}</p>
        <dl className="space-y-1 text-sm text-[#3A4F66]">
          <div className="flex justify-between gap-4">
            <dt>{t("card.cpu")}</dt>
            <dd className="text-right">{product.cpu}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>{t("card.ram")}</dt>
            <dd className="text-right">{product.ram}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>{t("card.storage")}</dt>
            <dd className="text-right">
              {product.storage}
              {product.extraStorage ? ` + ${product.extraStorage}` : ""}
            </dd>
          </div>
        </dl>
        <PriceBlock product={product} />
        <div className="mt-auto border-t border-[#e1e8ed] pt-3">
          <CompareToggle slug={product.slug} />
        </div>
      </div>
    </article>
  );
}
