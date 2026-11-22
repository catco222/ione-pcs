import { Container } from "@/components/container";
import { Phrase } from "@/components/i18n-text";
import { PageHeader } from "@/components/page-header";
import { ServiceCloser } from "@/components/service-closer";
import { services } from "@/lib/company";

const service = services[0];

export const metadata = {
  title: service.title,
  description: "IT infrastructure setup and support, cloud solutions, AI and automation, and blockchain services.",
};

export default function ItServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={service.title}
        lede="These are the IT services published on ione.mn."
      />
      <Container className="py-8 sm:py-10">
        <ul className="max-w-xl space-y-3 rounded-lg border border-[#d5dee6] bg-white p-5 text-[#192a3d]">
          {service.items.map((item) => (
            <li key={item}>
              <Phrase text={item} />
            </li>
          ))}
        </ul>
        <ServiceCloser />
      </Container>
    </>
  );
}
