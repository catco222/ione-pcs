"use client";

import Link from "next/link";
import { useI18n } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

function LanguageSwitch() {
  const { lang, setLang, t } = useI18n();
  const next = lang === "en" ? "mn" : "en";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={next === "mn" ? t("lang.mn") : t("lang.en")}
      className="inline-flex h-8 items-center px-1 text-sm font-medium tracking-wide text-white hover:text-[#d5dee6]"
    >
      {lang === "en" ? "МОН" : "ENG"}
    </button>
  );
}

export function SiteHeader() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#111827] text-white">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-[#192a3d]"
      >
        {t("nav.skip")}
      </a>
      <div className="mx-auto flex h-16 w-full max-w-[1290px] items-center justify-end gap-2 px-4 sm:px-6">
        <LanguageSwitch />
        <Button nativeButton={false} render={<Link href="/contact" />} className="h-9 px-3">
          {t("nav.contact")}
        </Button>
      </div>
    </header>
  );
}
