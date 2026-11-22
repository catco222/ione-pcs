"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { useI18n } from "@/components/language-provider";
import { company } from "@/lib/company";

const LINKS = [
  { href: "/gaming-pcs", key: "nav.gaming" },
  { href: "/compare", key: "nav.compare" },
  { href: "/services", key: "nav.services" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
] as const;

export function SiteFooter() {
  const { t, phrase } = useI18n();

  return (
    <footer className="mt-auto bg-[#111827] text-[#d5dee6]">
      <Container className="grid gap-8 py-10 sm:grid-cols-2">
        <div>
          <p className="text-sm leading-relaxed">
            {phrase(company.addressLines[0])}
            <br />
            {phrase(company.addressLines[1])}
          </p>
          <a className="mt-2 inline-block text-sm text-white hover:underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </div>
        <nav aria-label={t("nav.footer")} className="flex flex-col gap-2 text-sm">
          {LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {t(item.key)}
            </Link>
          ))}
        </nav>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-4 text-xs">{t("footer.copy")}</Container>
      </div>
    </footer>
  );
}
