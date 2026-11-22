import Link from "next/link";
import { Container } from "@/components/container";
import { Wordmark } from "@/components/wordmark";
import { company } from "@/lib/company";

const LINKS = [
  { href: "/gaming-pcs", label: "Gaming PCs" },
  { href: "/compare", label: "Compare" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#111827] text-[#d5dee6]">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Wordmark />
          <p className="mt-3 text-sm leading-relaxed">
            {company.addressLines[0]}
            <br />
            {company.addressLines[1]}
          </p>
          <a className="mt-2 inline-block text-sm text-white hover:underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          {LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm leading-relaxed">
          Street prices on the gaming desktop pages are estimates from public listings
          on 22 November 2026. They are not quotes from iOne. This site does not take
          payment.
        </p>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-4 text-xs">© 2026 iOne</Container>
      </div>
    </footer>
  );
}
