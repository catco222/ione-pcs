import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
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
            <h2 className="text-lg font-semibold text-[#192a3d]">{service.title}</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#3A4F66]">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href={service.href} className="mt-4 inline-block text-sm text-[#2872fa] hover:underline">
              Open {service.title}
            </Link>
          </article>
        ))}
      </Container>
      <Container className="pb-12">
        <div className="max-w-3xl rounded-lg border border-[#d5dee6] bg-white p-5">
          <h2 className="text-lg font-semibold text-[#192a3d]">{company.konaTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#3A4F66]">{company.konaBody}</p>
          <Link href="/services/smart-cards" className="mt-3 inline-block text-sm text-[#2872fa] hover:underline">
            Smart card solutions
          </Link>
        </div>
      </Container>
    </>
  );
}
