import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { RateNote } from "@/components/rate-note";
import { PRODUCTS } from "@/lib/catalog";
import { company } from "@/lib/company";

export const metadata = {
  title: "About",
  description: company.about,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="iOne" title="About" lede={company.about} />
      <Container className="grid gap-8 py-8 sm:py-10 lg:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold text-[#192a3d]">Where to find iOne</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#3A4F66]">
            {company.addressLines[0]}
            <br />
            {company.addressLines[1]}
          </p>
          <p className="mt-3 text-sm">
            <a className="text-[#2872fa] hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
          <p className="mt-6 text-sm leading-relaxed text-[#3A4F66]">
            {company.headline}. {company.subline}.
          </p>
          <p className="mt-4 text-sm">
            <Link href="/services" className="text-[#2872fa] hover:underline">
              Services
            </Link>
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#192a3d]">How a PC inquiry works</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#3A4F66]">
            The catalog lists {PRODUCTS.length} prebuilt gaming desktops. The US amounts are street
            prices read from public pages. The tugrik amounts are estimates at the rate below. iOne
            has not published stock, freight, or a selling price for these systems, and this site
            does not take payment or reserve a machine.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#3A4F66]">
            To ask, open a system and prepare an inquiry, then email it to {company.email}. The
            form does not leave this browser.
          </p>
          <div className="mt-4">
            <RateNote />
          </div>
          <p className="mt-4 text-sm">
            <Link href="/gaming-pcs" className="text-[#2872fa] hover:underline">
              Browse the catalog
            </Link>
          </p>
        </section>
      </Container>
    </>
  );
}
