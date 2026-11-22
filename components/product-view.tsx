"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { InquiryForm } from "@/components/inquiry-form";
import { useI18n } from "@/components/language-provider";
import { PriceBlock } from "@/components/price-block";
import { ProductCard } from "@/components/product-card";
import { ProductPhoto } from "@/components/product-photo";
import { gpuLine, specRows, type Product } from "@/lib/catalog";

export function ProductView({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { t } = useI18n();
  const rows = specRows(product);
  const highlights: [string, string][] = [
    [t("card.cpu"), product.cpu],
    ["GPU", gpuLine(product)],
    [t("card.ram"), product.ram],
    [
      t("card.storage"),
      product.extraStorage ? `${product.storage} + ${product.extraStorage}` : product.storage,
    ],
  ];

  return (
    <Container className="py-6 sm:py-10">
      <p className="text-sm text-[#3A4F66]">
        <Link href="/" className="hover:text-[#2872fa]">
          {t("nav.gaming")}
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-[#192a3d]">{product.model}</span>
      </p>

      <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <div className="overflow-hidden rounded-lg border border-[#d5dee6] bg-white">
          <ProductPhoto product={product} priority />
        </div>

        <div>
          <p className="text-sm font-medium tracking-wide text-[#3A4F66] uppercase">{product.brand}</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#192a3d] sm:text-4xl">
            {product.model}
          </h1>
          {product.part ? <p className="mt-1 text-sm text-[#3A4F66]">{product.part}</p> : null}

          <div className="mt-6">
            <PriceBlock product={product} detailed />
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            {highlights.map(([label, value]) => (
              <div key={label} className="rounded-lg border border-[#d5dee6] bg-white p-3">
                <dt className="text-xs tracking-wide text-[#3A4F66] uppercase">{label}</dt>
                <dd className="mt-1 text-sm font-medium text-[#192a3d]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#192a3d]">Specifications</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-[#d5dee6] bg-white">
          <table className="w-full min-w-[36rem] text-sm">
            <caption className="sr-only">
              Specifications for {product.brand} {product.model}
            </caption>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-[#e1e8ed] last:border-0">
                  <th scope="row" className="w-48 p-3 text-left align-top font-medium text-[#3A4F66]">
                    {row.label}
                  </th>
                  <td className="p-3 whitespace-pre-line text-[#192a3d]">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 max-w-xl">
        <h2 className="text-xl font-semibold text-[#192a3d]">{t("product.ask")}</h2>
        <div className="mt-4">
          <InquiryForm defaultSlug={product.slug} order />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#192a3d]">{t("product.similar")}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </Container>
  );
}
