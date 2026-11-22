import { Suspense } from "react";
import Link from "next/link";
import { CatalogBrowser } from "@/components/catalog-browser";
import { Container } from "@/components/container";
import { SystemCount, Tx } from "@/components/i18n-text";
import { PageHeader } from "@/components/page-header";
import { CatalogSkeleton } from "@/components/skeletons";
import { PRODUCTS, RESOLUTIONS, resolutionOf } from "@/lib/catalog";
import { catalogHref, emptyQuery, filterProducts, parseCatalogQuery } from "@/lib/query";

export const metadata = {
  title: "Gaming PCs",
  description:
    "Filter fifteen prebuilt gaming desktops by GPU, processor, memory, storage, resolution band, tugrik budget, and brand. Prices are estimates.",
};

const brands = [...new Set(PRODUCTS.map((product) => product.brand))];

export default function GamingPcsPage(props: PageProps<"/gaming-pcs">) {
  return (
    <>
      <PageHeader
        eyebrow="Catalog"
        title="Gaming PCs"
        lede="Prebuilt towers from public listings. Filter by GPU, processor, memory, storage, a resolution band, a tugrik budget, or brand. Prices are estimates, and several sources disagreed or were out of stock on the day they were read."
      />
      <Container className="py-8 sm:py-10">
        <h2 className="text-sm font-semibold tracking-wide text-[#3A4F66] uppercase">
          <Tx k="catalog.resolution" />
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {RESOLUTIONS.map((resolution) => {
            const count = PRODUCTS.filter((product) => resolutionOf(product) === resolution).length;
            return (
              <Link
                key={resolution}
                href={catalogHref({ ...emptyQuery(), resolution: [resolution] })}
                className="rounded-lg border border-[#d5dee6] bg-white px-4 py-4 hover:border-[#2872fa]"
              >
                <span className="block text-lg font-semibold text-[#192a3d]">{resolution}</span>
                <span className="mt-1 block text-sm text-[#3A4F66]">
                  <SystemCount count={count} />
                </span>
              </Link>
            );
          })}
        </div>
        <h2 className="mt-8 text-sm font-semibold tracking-wide text-[#3A4F66] uppercase">
          <Tx k="catalog.brand" />
        </h2>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {brands.map((brand) => (
            <Link
              key={brand}
              href={catalogHref({ ...emptyQuery(), brand: [brand] })}
              className="shrink-0 rounded-full border border-[#d5dee6] bg-white px-3 py-1.5 text-sm text-[#192a3d] hover:border-[#2872fa]"
            >
              {brand}
            </Link>
          ))}
        </div>
        <Suspense fallback={<CatalogSkeleton />}>
          <CatalogResults searchParams={props.searchParams} />
        </Suspense>
      </Container>
    </>
  );
}

async function CatalogResults({
  searchParams,
}: {
  searchParams: PageProps<"/gaming-pcs">["searchParams"];
}) {
  const query = parseCatalogQuery(await searchParams);
  const products = filterProducts(PRODUCTS, query);
  return (
    <div className="mt-8">
      <CatalogBrowser query={query} products={products} />
    </div>
  );
}
