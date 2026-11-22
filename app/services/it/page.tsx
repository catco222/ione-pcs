import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
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
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-[#3A4F66]">
          <Link href="/contact" className="text-[#2872fa] hover:underline">
            Contact iOne
          </Link>{" "}
          about this work, or return to{" "}
          <Link href="/services" className="text-[#2872fa] hover:underline">
            all services
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
