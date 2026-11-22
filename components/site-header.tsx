"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { useI18n } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/gaming-pcs", key: "nav.gaming" },
  { href: "/services", key: "nav.services" },
  { href: "/about", key: "nav.about" },
] as const;

function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

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
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#111827] text-white">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-[#192a3d]"
      >
        {t("nav.skip")}
      </a>
      <div className="mx-auto flex h-16 w-full max-w-[1290px] items-center gap-4 px-4 sm:gap-6 sm:px-6">
        <nav className="hidden items-center gap-6 lg:flex" aria-label={t("nav.primary")}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-[#d5dee6] hover:text-white",
                isActive(pathname, item.href) && "font-medium text-white",
              )}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitch />
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="h-9 px-3"
          >
            {t("nav.contact")}
          </Button>
          <Sheet key={pathname}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white lg:hidden"
                  aria-label={t("nav.open")}
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)] bg-white">
              <SheetHeader>
                <SheetTitle>{t("nav.menu")}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-4 pb-6" aria-label={t("nav.mobile")}>
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "border-b border-[#e1e8ed] py-3 text-base text-[#192a3d]",
                      isActive(pathname, item.href) && "font-semibold",
                    )}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  >
                    {t(item.key)}
                  </Link>
                ))}
                <Link href="/contact" className="py-3 text-base font-medium text-[#2872fa]">
                  {t("nav.contact")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
