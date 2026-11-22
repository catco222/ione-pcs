"use client";

import Link from "next/link";
import { CompareSkeleton } from "@/components/skeletons";
import { useCompare } from "@/components/compare-provider";
import { Button } from "@/components/ui/button";
import { getProduct, specRows } from "@/lib/catalog";

export function CompareTable() {
  const { slugs, ready, remove, clear } = useCompare();

  if (!ready) return <CompareSkeleton />;

  const products = slugs
    .map((slug) => getProduct(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-[#d5dee6] bg-white px-6 py-14 text-center">
        <h2 className="text-xl font-semibold text-[#192a3d]">Nothing to compare yet</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#3A4F66]">
          Pick up to three systems from the catalog. The same rows stay in place: price, GPU, memory, storage, and the tugrik estimate.
        </p>
        <Button className="mt-5 h-10 px-4" nativeButton={false} render={<Link href="/gaming-pcs" />}>
          Browse gaming PCs
        </Button>
      </div>
    );
  }

  const rows = specRows(products[0]).map((row) => row.label);

  return (
    <div>
      {products.length < 3 ? (
        <p className="mb-4 text-sm text-[#3A4F66]">
          {products.length === 1
            ? "One system selected. Add up to two more."
            : "Two systems selected. You can add one more."}{" "}
          <Link href="/gaming-pcs" className="text-[#2872fa] hover:underline">
            Back to the catalog
          </Link>
        </p>
      ) : (
        <p className="mb-4 text-sm text-[#3A4F66]">Three systems. Remove one to swap it.</p>
      )}
      <div className="overflow-x-auto rounded-lg border border-[#d5dee6] bg-white">
        <table className="w-full min-w-[44rem] border-collapse text-sm">
          <caption className="sr-only">Comparison of selected gaming desktops</caption>
          <thead>
            <tr className="border-b border-[#e1e8ed]">
              <th scope="col" className="sticky left-0 z-10 bg-white p-3 text-left font-medium text-[#3A4F66]">
                <Button variant="outline" className="h-9 bg-white" onClick={clear}>
                  Clear all
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
                    Remove
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
                  const value = specRows(product).find((row) => row.label === label)?.value ?? "Not stated";
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
