import Link from "next/link";
import { Container } from "@/components/container";
import { Phrase, Tx } from "@/components/i18n-text";
import { PageHeader } from "@/components/page-header";
import { OpenService } from "@/components/service-closer";
import { company, services } from "@/lib/company";

export const metadata = {
  title: "Services",
  description: company.about,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="iOne" title="Services" lede={company.about} />
      <Container className="grid gap-4 py-8 sm:py-10 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="rounded-lg border border-[#d5dee6] bg-white p-5">
            <h2 className="text-lg font-semibold text-[#192a3d]">
              <Phrase text={service.title} />
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-[#3A4F66]">
              {service.items.map((item) => (
                <li key={item}>
                  <Phrase text={item} />
                </li>
              ))}
            </ul>
            <OpenService href={service.href} title={service.title} />
          </article>
        ))}
      </Container>
      <Container className="pb-12">
        <div className="max-w-3xl rounded-lg border border-[#d5dee6] bg-white p-5">
          <h2 className="text-lg font-semibold text-[#192a3d]">
            <Phrase text={company.konaTitle} />
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#3A4F66]">
            <Phrase text={company.konaBody} />
          </p>
          <Link href="/services/smart-cards" className="mt-3 inline-block text-sm text-[#2872fa] hover:underline">
            <Tx k="home.smartCards" />
          </Link>
        </div>
      </Container>
    </>
  );
}
