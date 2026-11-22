"use client";

import { useI18n } from "@/components/language-provider";
import { EXCHANGE } from "@/lib/catalog";

export function RateNote({ compact = false }: { compact?: boolean }) {
  const { t, phrase } = useI18n();
  const rate = EXCHANGE.mntPerUsd.toLocaleString("en-US");
  const date = phrase(EXCHANGE.asOf);
  const name = phrase(EXCHANGE.name);

  if (compact) {
    return (
      <p className="text-xs leading-relaxed text-[#3A4F66]">
        {t("rate.compact", { rate, date })}
      </p>
    );
  }

  return (
    <p className="text-sm leading-relaxed text-[#3A4F66]">
      {t("rate.full", {
        rate,
        date,
        name,
        detail: phrase(EXCHANGE.detail),
        formula: phrase(EXCHANGE.formula),
      })}
    </p>
  );
}
