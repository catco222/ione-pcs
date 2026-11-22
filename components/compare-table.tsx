"use client";

import Link from "next/link";
import { CompareSkeleton } from "@/components/skeletons";
import { useCompare } from "@/components/compare-provider";
import { useI18n } from "@/components/language-provider";
import { localizeSpecs } from "@/components/spec-rows";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/lib/catalog";

export function CompareTable() {
  const { slugs, ready, remove, clear } = useCompare();
  const { t, phrase } = useI18n();

  if (!ready) return <CompareSkeleton />;

  const products = slugs
    .map((slug) => getProduct(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-[#d5dee6] bg-white px-6 py-14 text-center">
        <h2 className="text-xl font-semibold text-[#192a3d]">{t("compare.emptyTitle")}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#3A4F66]">
          {t("compare.emptyBody")}
        </p>
        <Button className="mt-5 h-10 px-4" nativeButton={false} render={<Link href="/gaming-pcs" />}>
          {t("hero.browse")}
        </Button>
      </div>
    );
  }

  const rows = localizeSpecs(products[0], t, phrase).map((row) => row.label);

  return (
    <div>
      {products.length < 3 ? (
        <p className="mb-4 text-sm text-[#3A4F66]">
          {products.length === 1 ? t("compare.one") : t("compare.two")}{" "}
          <Link href="/gaming-pcs" className="text-[#2872fa] hover:underline">
            {t("compare.back")}
          </Link>
        </p>
      ) : (
        <p className="mb-4 text-sm text-[#3A4F66]">{t("compare.three")}</p>
      )}
      <div className="overflow-x-auto rounded-lg border border-[#d5dee6] bg-white">
        <table className="w-full min-w-[44rem] border-collapse text-sm">
          <caption className="sr-only">{t("compare.caption")}</caption>
          <thead>
            <tr className="border-b border-[#e1e8ed]">
              <th scope="col" className="sticky left-0 z-10 bg-white p-3 text-left font-medium text-[#3A4F66]">
                <Button variant="outline" className="h-9 bg-white" onClick={clear}>
                  {t("compare.clearAll")}
                </Button>
              </th>
              {products.map((product) => (
                <th key={product.slug} scope="col" className="min-w-52 p-3 text-left align-top">
                  <p className="text-xs font-medium tracking-wide text-[#3A4F66] uppercase">
                    {product.brand}
                  </p>
                  <Link
                    href={`/gaming-pcs/${product.slug}`}
                    className="mt-1 block text-base font-semibold text-[#192a3d] hover:text-[#2872fa]"
                  >
                    {product.model}
                  </Link>
                  <Button
                    variant="ghost"
                    className="mt-2 h-8 px-2"
                    onClick={() => remove(product.slug)}
                  >
                    {t("compare.remove")}
                  </Button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((label) => (
              <tr key={label} className="border-b border-[#e1e8ed] last:border-0">
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-white p-3 text-left font-medium text-[#3A4F66]"
                >
                  {label}
                </th>
                {products.map((product) => {
                  const value =
                    localizeSpecs(product, t, phrase).find((row) => row.label === label)?.value ??
                    phrase("Not stated");
                  return (
                    <td key={product.slug} className="p-3 align-top whitespace-pre-line text-[#192a3d]">
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
