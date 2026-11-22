import Link from "next/link";
import { Suspense, type ReactNode } from "react";
import { Container } from "@/components/container";
import { Phrase, Tx } from "@/components/i18n-text";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import {
  BUDGETS,
  GPU_TIERS,
  PRODUCTS,
  estimateMnt,
  primaryPrice,
  type BudgetId,
} from "@/lib/catalog";
import { catalogHref, filterProducts, parseCatalogQuery } from "@/lib/query";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function toggleValue<T>(values: readonly T[], value: T): T[] {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

export default function HomePage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#111827] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/hero-corsair-vengeance.webp')] bg-cover bg-center bg-no-repeat sm:bg-[position:right_center]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#111827] from-20% via-[#111827]/88 to-[#111827]/72"
        />
        <Container className="relative py-16 sm:py-24">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            <Tx k="hero.title" />
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#d5dee6]">
            <Tx k="hero.lede" />
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="h-11 px-4" nativeButton={false} render={<Link href="/" />}>
              <Tx k="hero.browse" />
            </Button>
            <Button
              variant="outline"
              className="h-11 border-white/30 bg-transparent px-4 text-white hover:bg-white/10 hover:text-white"
              nativeButton={false}
              render={<Link href="/compare" />}
            >
              <Tx k="hero.compare" />
            </Button>
          </div>
        </Container>
      </section>

      <Suspense fallback={<CatalogFallback />}>
        <HomeCatalog searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function HomeCatalog({ searchParams }: { searchParams: SearchParams }) {
  const query = parseCatalogQuery(await searchParams);
  const brands = [...new Set(PRODUCTS.map((product) => product.brand))];
  const products = filterProducts(PRODUCTS, query);

  return (
    <Container className="py-12 sm:py-16">
      <div className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-lg border border-[#d5dee6] bg-white p-5">
          <h3 className="font-semibold text-[#192a3d]">
            <Tx k="home.gpu" />
          </h3>
          <ul className="mt-3 space-y-1">
            {GPU_TIERS.map((gpu) => {
              const count = PRODUCTS.filter((product) => product.gpuTier === gpu).length;
              if (count === 0) return null;
              return (
                <li key={gpu}>
                  <FilterLink
                    href={catalogHref({ ...query, gpu: toggleValue(query.gpu, gpu) })}
                    active={query.gpu.includes(gpu)}
                    label={gpu}
                    count={count}
                  />
                </li>
              );
            })}
          </ul>
        </article>
        <article className="rounded-lg border border-[#d5dee6] bg-white p-5">
          <h3 className="font-semibold text-[#192a3d]">
            <Tx k="home.budget" />
          </h3>
          <ul className="mt-3 space-y-1">
            {BUDGETS.map((band) => {
              const count = PRODUCTS.filter((product) => {
                const mnt = estimateMnt(primaryPrice(product).usd);
                return mnt >= band.min && mnt < band.max;
              }).length;
              if (count === 0) return null;
              return (
                <li key={band.id}>
                  <FilterLink
                    href={catalogHref({
                      ...query,
                      budget: toggleValue<BudgetId>(query.budget, band.id),
                    })}
                    active={query.budget.includes(band.id)}
                    label={<Phrase text={band.label} />}
                    count={count}
                  />
                </li>
              );
            })}
          </ul>
        </article>
        <article className="rounded-lg border border-[#d5dee6] bg-white p-5">
          <h3 className="font-semibold text-[#192a3d]">
            <Tx k="home.brand" />
          </h3>
          <ul className="mt-3 space-y-1">
            {brands.map((brand) => {
              const count = PRODUCTS.filter((product) => product.brand === brand).length;
              return (
                <li key={brand}>
                  <FilterLink
                    href={catalogHref({ ...query, brand: toggleValue(query.brand, brand) })}
                    active={query.brand.includes(brand)}
                    label={brand}
                    count={count}
                  />
                </li>
              );
            })}
          </ul>
        </article>
      </div>

      <h2 className="mt-14 text-2xl font-semibold text-[#192a3d]">
        <Tx k="home.across" />
      </h2>
      {products.length === 0 ? (
        <div className="mt-6 rounded-lg border border-[#d5dee6] bg-white p-5">
          <h3 className="font-semibold text-[#192a3d]">
            <Tx k="catalog.emptyTitle" />
          </h3>
          <Link href="/" scroll={false} className="mt-3 inline-block text-sm text-[#2872fa] hover:underline">
            <Tx k="catalog.clearFilters" />
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </Container>
  );
}

function FilterLink({
  href,
  active,
  label,
  count,
}: {
  href: string;
  active: boolean;
  label: ReactNode;
  count: number;
}) {
  return (
    <Link
      href={href}
      scroll={false}
      aria-current={active ? "true" : undefined}
      className={
        active
          ? "flex items-baseline justify-between gap-3 rounded-md bg-[#111827] px-2 py-1 text-sm font-medium text-white"
          : "flex items-baseline justify-between gap-3 rounded-md px-2 py-1 text-sm text-[#3A4F66] hover:text-[#2872fa]"
      }
    >
      <span>{label}</span>
      <span>{count}</span>
    </Link>
  );
}

function CatalogFallback() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="grid gap-4 lg:grid-cols-3">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className="h-56 animate-pulse rounded-lg border border-[#d5dee6] bg-white" />
        ))}
      </div>
      <div className="mt-14 h-8 w-48 animate-pulse rounded bg-[#e1e8ed]" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="h-80 animate-pulse rounded-lg border border-[#d5dee6] bg-white" />
        ))}
      </div>
    </Container>
  );
}
