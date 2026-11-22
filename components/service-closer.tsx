"use client";

import Link from "next/link";
import { useI18n } from "@/components/language-provider";

export function ServiceCloser({ cards = false }: { cards?: boolean }) {
  const { t } = useI18n();

  return (
    <p className="mt-6 text-sm text-[#3A4F66]">
      <Link href="/contact" className="text-[#2872fa] hover:underline">
        {t("services.contact")}
      </Link>{" "}
      {cards ? t("services.aboutCards") : t("services.aboutWork")}{" "}
      <Link href="/services" className="text-[#2872fa] hover:underline">
        {t("services.all")}
      </Link>
      .
    </p>
  );
}
