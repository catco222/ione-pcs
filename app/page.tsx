import Link from "next/link";
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
} from "@/lib/catalog";
import { company, services } from "@/lib/company";
import { emptyQuery, catalogHref } from "@/lib/query";

const FEATURED = [
  "cyberpowerpc-gamer-xtreme-gxi2000cstv3",
  "corsair-vengeance-a7500",
  "lenovo-legion-tower-7i-gen-10",
  "maingear-mg-1-ultimate",
];

export default function HomePage() {
  const featured = FEATURED.map((slug) => PRODUCTS.find((product) => product.slug === slug)).filter(
    (product): product is (typeof PRODUCTS)[number] => Boolean(product),
  );
  const brands = [...new Set(PRODUCTS.map((product) => product.brand))];

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
            <Button className="h-11 px-4" nativeButton={false} render={<Link href="/gaming-pcs" />}>
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

      <Container className="py-12 sm:py-16">
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-lg border border-[#d5dee6] bg-white p-5">
            <h3 className="font-semibold text-[#192a3d]">
              <Tx k="home.gpu" />
            </h3>
            <ul className="mt-3 space-y-2">
              {GPU_TIERS.map((gpu) => {
                const count = PRODUCTS.filter((product) => product.gpuTier === gpu).length;
                return (
                  <li key={gpu}>
                    <Link
                      href={catalogHref({ ...emptyQuery(), gpu: [gpu] })}
                      className="flex items-baseline justify-between gap-3 text-sm text-[#3A4F66] hover:text-[#2872fa]"
                    >
                      <span>{gpu}</span>
                      <span>{count}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </article>
          <article className="rounded-lg border border-[#d5dee6] bg-white p-5">
            <h3 className="font-semibold text-[#192a3d]">
              <Tx k="home.budget" />
            </h3>
            <ul className="mt-3 space-y-2">
              {BUDGETS.map((band) => {
                const count = PRODUCTS.filter((product) => {
                  const mnt = estimateMnt(primaryPrice(product).usd);
                  return mnt >= band.min && mnt < band.max;
                }).length;
                return (
                  <li key={band.id}>
                    <Link
                      href={catalogHref({ ...emptyQuery(), budget: [band.id] })}
                      className="flex items-baseline justify-between gap-3 text-sm text-[#3A4F66] hover:text-[#2872fa]"
                    >
                      <span>
                        <Phrase text={band.label} />
                      </span>
                      <span>{count}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </article>
          <article className="rounded-lg border border-[#d5dee6] bg-white p-5">
            <h3 className="font-semibold text-[#192a3d]">
              <Tx k="home.brand" />
            </h3>
            <ul className="mt-3 space-y-2">
              {brands.map((brand) => {
                const count = PRODUCTS.filter((product) => product.brand === brand).length;
                return (
                  <li key={brand}>
                    <Link
                      href={catalogHref({ ...emptyQuery(), brand: [brand] })}
                      className="flex items-baseline justify-between gap-3 text-sm text-[#3A4F66] hover:text-[#2872fa]"
                    >
                      <span>{brand}</span>
                      <span>{count}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>

        <div className="mt-14 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-[#192a3d]">
            <Tx k="home.across" />
          </h2>
          <Link href="/gaming-pcs" className="text-sm text-[#2872fa] hover:underline">
            <Tx k="home.all" vars={{ count: PRODUCTS.length }} />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>

      <section className="border-t border-[#d5dee6] bg-white">
        <Container className="py-12 sm:py-16">
          <h2 className="text-2xl font-semibold text-[#192a3d]">
            <Tx k="home.services" />
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#3A4F66]">
            <Phrase text={company.about} />
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="rounded-lg border border-[#d5dee6] p-5">
                <h3 className="font-semibold text-[#192a3d]">
                  <Phrase text={service.title} />
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-[#3A4F66]">
                  {service.items.map((item) => (
                    <li key={item}>
                      <Phrase text={item} />
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="mt-4 inline-block text-sm text-[#2872fa] hover:underline">
                  <Phrase text={service.title} />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 max-w-3xl">
            <h3 className="font-semibold text-[#192a3d]">
              <Phrase text={company.konaTitle} />
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#3A4F66]">
              <Phrase text={company.konaBody} />
            </p>
            <Link href="/services/smart-cards" className="mt-3 inline-block text-sm text-[#2872fa] hover:underline">
              <Tx k="home.smartCards" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
