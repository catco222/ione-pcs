import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { InquiryForm } from "@/components/inquiry-form";
import { PriceBlock } from "@/components/price-block";
import { ProductCard } from "@/components/product-card";
import { ProductPhoto } from "@/components/product-photo";
import {
  PRODUCTS,
  estimateMnt,
  getProduct,
  gpuLine,
  primaryPrice,
  resolutionOf,
  similarProducts,
  specRows,
} from "@/lib/catalog";
import { company } from "@/lib/company";
import { formatMnt, formatUsd } from "@/lib/format";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata(
  props: PageProps<"/gaming-pcs/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) return { title: "Not in the catalog" };
  const price = primaryPrice(product);
  return {
    title: `${product.brand} ${product.model}`,
    description: `${gpuLine(product)}. Street estimate ${formatUsd(price.usd)}, about ${formatMnt(estimateMnt(price.usd))}. Not an iOne quote.`,
  };
}

export default async function ProductPage(props: PageProps<"/gaming-pcs/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();

  const price = primaryPrice(product);
  const presetMessage = `I would like to ask about the ${product.brand} ${product.model}${product.part ? ` (${product.part})` : ""}. The catalog lists ${formatUsd(price.usd)} (est. ${formatMnt(estimateMnt(price.usd))}) as of 22 November 2026.`;
  const related = similarProducts(product);
  const rows = specRows(product);

  return (
    <Container className="py-6 sm:py-10">
      <p className="text-sm text-[#3A4F66]">
        <Link href="/gaming-pcs" className="hover:text-[#2872fa]">
          Gaming PCs
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-[#192a3d]">{product.model}</span>
      </p>

      <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <div className="overflow-hidden rounded-lg border border-[#d5dee6] bg-white">
          <ProductPhoto product={product} priority showCredit />
        </div>

        <div>
          <p className="text-sm font-medium tracking-wide text-[#3A4F66] uppercase">{product.brand}</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#192a3d] sm:text-4xl">
            {product.model}
          </h1>
          {product.part ? <p className="mt-1 text-sm text-[#3A4F66]">{product.part}</p> : null}
          <p className="mt-3 text-base text-[#192a3d]">Shop guide: {resolutionOf(product)}</p>
          <p className="mt-1 text-sm text-[#3A4F66]">
            Resolution bands are grouped here from the GPU class. They are not a manufacturer rating.
          </p>

          <div className="mt-6">
            <PriceBlock product={product} detailed />
          </div>
          <p className="mt-4 text-sm text-[#192a3d]">{product.availability.detail}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            {[
              ["CPU", product.cpu],
              ["GPU", gpuLine(product)],
              ["RAM", product.ram],
              ["Storage", product.extraStorage ? `${product.storage} + ${product.extraStorage}` : product.storage],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-[#d5dee6] bg-white p-3">
                <dt className="text-xs tracking-wide text-[#3A4F66] uppercase">{label}</dt>
                <dd className="mt-1 text-sm font-medium text-[#192a3d]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="mt-10 max-w-xl">
        <h2 className="text-xl font-semibold text-[#192a3d]">Ask about this system</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#3A4F66]">
          There is no checkout and no reserve. Prepare an inquiry and send it to {company.email}. iOne has not published stock, freight, or a local selling price for this tower.
        </p>
        <div className="mt-4">
          <InquiryForm defaultSlug={product.slug} presetMessage={presetMessage} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#192a3d]">Specifications</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-[#d5dee6] bg-white">
          <table className="w-full min-w-[36rem] text-sm">
            <caption className="sr-only">Specifications for {product.brand} {product.model}</caption>
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

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-[#192a3d]">Warranty and what is included</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#3A4F66]">
            Warranty: {product.warranty ?? "Not stated on the source used."}
          </p>
          {product.included.length > 0 ? (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#3A4F66]">
              {product.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-[#3A4F66]">
              The source did not list a bundle beyond the desktop itself.
            </p>
          )}
          {product.notes.length > 0 ? (
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#3A4F66]">
              {product.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          ) : null}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#192a3d]">Sources</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {product.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  className="text-[#2872fa] hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-[#3A4F66]">
            Read on 22 November 2026. Recheck the source before treating a price as current.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#192a3d]">Similar systems</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>

      <p className="mt-12 max-w-3xl text-sm leading-relaxed text-[#3A4F66]">
        {company.about} The address is {company.addressLines[0]}, {company.addressLines[1]}.
      </p>
    </Container>
  );
}
