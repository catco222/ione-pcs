import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
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
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-6 max-w-xl rounded-lg border border-[#d5dee6] bg-[#111827] p-5 text-white">
          <h2 className="text-lg font-semibold">{company.konaTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#d5dee6]">{company.konaBody}</p>
        </div>
        <p className="mt-6 text-sm text-[#3A4F66]">
          <Link href="/contact" className="text-[#2872fa] hover:underline">
            Contact iOne
          </Link>{" "}
          about card supply, or return to{" "}
          <Link href="/services" className="text-[#2872fa] hover:underline">
            all services
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
