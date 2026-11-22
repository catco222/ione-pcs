import { Container } from "@/components/container";
import { Phrase } from "@/components/i18n-text";
import { PageHeader } from "@/components/page-header";
import { ServiceCloser } from "@/components/service-closer";
import { services } from "@/lib/company";

const service = services[2];

export const metadata = {
  title: service.title,
  description:
    "IT security consulting, system design and architecture, API integration guidance, and project planning and support.",
};

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={service.title}
        lede="These are the consulting lines published on ione.mn."
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
