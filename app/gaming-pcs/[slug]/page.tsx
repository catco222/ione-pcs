import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductView } from "@/components/product-view";
import {
  PRODUCTS,
  estimateMnt,
  getProduct,
  gpuLine,
  primaryPrice,
  similarProducts,
} from "@/lib/catalog";
import { formatMnt } from "@/lib/format";

export const instant = false;

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
    description: `${gpuLine(product)}. ${formatMnt(estimateMnt(price.usd))}.`,
  };
}

export default async function ProductPage(props: PageProps<"/gaming-pcs/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = similarProducts(product);

  return <ProductView product={product} related={related} />;
}
