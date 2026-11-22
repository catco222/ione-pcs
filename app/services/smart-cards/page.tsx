import { Container } from "@/components/container";
import { Phrase } from "@/components/i18n-text";
import { PageHeader } from "@/components/page-header";
import { ServiceCloser } from "@/components/service-closer";
import { company, services } from "@/lib/company";

const service = services[1];

export const metadata = {
  title: service.title,
  description: company.konaBody,
};

export default function SmartCardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={service.title}
        lede="These are the smart-card lines published on ione.mn."
      />
      <Container className="py-8 sm:py-10">
        <ul className="max-w-xl space-y-3 rounded-lg border border-[#d5dee6] bg-white p-5 text-[#192a3d]">
          {service.items.map((item) => (
            <li key={item}>
              <Phrase text={item} />
            </li>
          ))}
        </ul>
        <div className="mt-6 max-w-xl rounded-lg border border-[#d5dee6] bg-[#111827] p-5 text-white">
          <h2 className="text-lg font-semibold">
            <Phrase text={company.konaTitle} />
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#d5dee6]">
            <Phrase text={company.konaBody} />
          </p>
        </div>
        <ServiceCloser cards />
      </Container>
    </>
  );
}
