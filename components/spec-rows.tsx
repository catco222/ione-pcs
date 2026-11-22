"use client";

import { useI18n } from "@/components/language-provider";
import { estimateMnt, specRows, type Product } from "@/lib/catalog";
import { formatMnt, formatUsd } from "@/lib/format";
import type { MessageKey } from "@/lib/i18n";

type Translator = (key: MessageKey, vars?: Record<string, string | number>) => string;

export function localizeSpecs(
  product: Product,
  t: Translator,
  phrase: (text: string) => string,
) {
  return specRows(product).map((row) => {
    if (row.label === "Street price (USD)") {
      return {
        label: phrase(row.label),
        value: product.prices
          .map(
            (price) =>
              `${formatUsd(price.usd)} · ${t("price.estInline")} ${formatMnt(estimateMnt(price.usd))} · ${phrase(price.seller)}`,
          )
          .join("\n"),
      };
    }
    if (row.label === "Estimated MNT") {
      return {
        label: phrase(row.label),
        value: product.prices
          .map(
            (price) =>
              `${formatMnt(estimateMnt(price.usd))} ${t("price.at")} ${formatUsd(price.usd)}`,
          )
          .join("\n"),
      };
    }
    return { label: phrase(row.label), value: phrase(row.value) };
  });
}

export function useLocalizedSpecs(product: Product) {
  const { t, phrase } = useI18n();
  return localizeSpecs(product, t, phrase);
}
