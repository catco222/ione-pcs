"use client";

import { useI18n } from "@/components/language-provider";
import { specRows, type Product } from "@/lib/catalog";

export function localizeSpecs(product: Product, phrase: (text: string) => string) {
  return specRows(product).map((row) => ({
    label: phrase(row.label),
    value: phrase(row.value),
  }));
}

export function useLocalizedSpecs(product: Product) {
  const { phrase } = useI18n();
  return localizeSpecs(product, phrase);
}
