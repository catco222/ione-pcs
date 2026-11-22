"use client";

import { useI18n } from "@/components/language-provider";
import type { MessageKey } from "@/lib/i18n";

export function Tx({
  k,
  vars,
}: {
  k: MessageKey;
  vars?: Record<string, string | number>;
}) {
  const { t } = useI18n();
  return <>{t(k, vars)}</>;
}

export function Phrase({ text }: { text: string }) {
  const { phrase } = useI18n();
  return <>{phrase(text)}</>;
}

export function SystemCount({ count }: { count: number }) {
  const { t } = useI18n();
  return <>{count === 1 ? t("catalog.oneSystem", { count }) : t("catalog.manySystems", { count })}</>;
}
