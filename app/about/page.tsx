import Link from "next/link";
import { Container } from "@/components/container";
import { Phrase, Tx } from "@/components/i18n-text";
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
          <h2 className="text-xl font-semibold text-[#192a3d]">
            <Tx k="about.where" />
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#3A4F66]">
            <Phrase text={company.addressLines[0]} />
            <br />
            <Phrase text={company.addressLines[1]} />
          </p>
          <p className="mt-3 text-sm">
            <a className="text-[#2872fa] hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
          <p className="mt-6 text-sm leading-relaxed text-[#3A4F66]">
            <Phrase text={company.headline} />. <Phrase text={company.subline} />.
          </p>
          <p className="mt-4 text-sm">
            <Link href="/services" className="text-[#2872fa] hover:underline">
              <Tx k="nav.services" />
            </Link>
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#192a3d]">
            <Tx k="about.how" />
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#3A4F66]">
            <Tx k="about.howBody" vars={{ count: PRODUCTS.length }} />
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#3A4F66]">
            <Tx k="about.howBody2" vars={{ email: company.email }} />
          </p>
          <div className="mt-4">
            <RateNote />
          </div>
          <p className="mt-4 text-sm">
            <Link href="/" className="text-[#2872fa] hover:underline">
              <Tx k="about.browse" />
            </Link>
          </p>
        </section>
      </Container>
    </>
  );
}
