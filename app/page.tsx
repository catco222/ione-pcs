import Link from "next/link";
import { Container } from "@/components/container";
import { ProductCard } from "@/components/product-card";
import { RateNote } from "@/components/rate-note";
import { Button } from "@/components/ui/button";
import {
  BUDGETS,
  GPU_TIERS,
  PRODUCTS,
  estimateMnt,
  primaryPrice,
  resolutionOf,
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
            Gaming desktops
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#d5dee6]">
            iOne offers the widest range for gamers, from the most powerful gaming PCs to
            budget-friendly ones.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="h-11 px-4" nativeButton={false} render={<Link href="/gaming-pcs" />}>
              Browse gaming PCs
            </Button>
            <Button
              variant="outline"
              className="h-11 border-white/30 bg-transparent px-4 text-white hover:bg-white/10 hover:text-white"
              nativeButton={false}
              render={<Link href="/compare" />}
            >
              Compare
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#d5dee6] bg-white">
        <Container className="grid gap-6 py-6 sm:grid-cols-3">
          <p className="text-sm leading-relaxed text-[#3A4F66]">
            Technology company. IT services, smart cards, and consulting stay on this site.
          </p>
          <p className="text-sm leading-relaxed text-[#3A4F66]">
            Official distributor of Kona-M, Korea’s leading card manufacturer.
          </p>
          <p className="text-sm leading-relaxed text-[#3A4F66]">
            {company.addressLines[0]}, {company.addressLines[1]}.{" "}
            <a className="text-[#2872fa] hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <h2 className="text-2xl font-semibold text-[#192a3d]">Start with a tier, a budget, or a brand</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <article className="rounded-lg border border-[#d5dee6] bg-white p-5">
            <h3 className="font-semibold text-[#192a3d]">GPU</h3>
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
            <h3 className="font-semibold text-[#192a3d]">Budget in MNT</h3>
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
                      <span>{band.label}</span>
                      <span>{count}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </article>
          <article className="rounded-lg border border-[#d5dee6] bg-white p-5">
            <h3 className="font-semibold text-[#192a3d]">Brand</h3>
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
          <h2 className="text-2xl font-semibold text-[#192a3d]">Across the catalog</h2>
          <Link href="/gaming-pcs" className="text-sm text-[#2872fa] hover:underline">
            All {PRODUCTS.length}
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <p className="mt-3 text-xs text-[#3A4F66]">
          Shop guide on the cards ({[...new Set(featured.map((product) => resolutionOf(product)))].join(", ")}{" "}
          and the rest of the range) is grouped from the GPU class. It is not a manufacturer rating.
        </p>
        <div className="mt-4">
          <RateNote />
        </div>
      </Container>

      <section className="border-t border-[#d5dee6] bg-white">
        <Container className="py-12 sm:py-16">
          <h2 className="text-2xl font-semibold text-[#192a3d]">Services</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#3A4F66]">{company.about}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="rounded-lg border border-[#d5dee6] p-5">
                <h3 className="font-semibold text-[#192a3d]">{service.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#3A4F66]">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={service.href} className="mt-4 inline-block text-sm text-[#2872fa] hover:underline">
                  {service.title}
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 max-w-3xl">
            <h3 className="font-semibold text-[#192a3d]">{company.konaTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#3A4F66]">{company.konaBody}</p>
            <Link href="/services/smart-cards" className="mt-3 inline-block text-sm text-[#2872fa] hover:underline">
              Smart card solutions
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
