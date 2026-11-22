import { Container } from "@/components/container";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHeader } from "@/components/page-header";
import { company } from "@/lib/company";

export const metadata = {
  title: "Contact",
  description: `Email ${company.email}. ${company.addressLines.join(", ")}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="iOne"
        title="Contact"
        lede="Write to iOne about IT services, smart cards, consulting, or a system in the catalog. The form prepares a message in this browser. It does not place an order."
      />
      <Container className="grid gap-10 py-8 sm:py-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
        <address className="text-sm leading-relaxed text-[#3A4F66] not-italic">
          <span className="block font-semibold text-[#192a3d]">iOne</span>
          {company.addressLines[0]}
          <br />
          {company.addressLines[1]}
          <a className="mt-3 block text-[#2872fa] hover:underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </address>
        <div className="max-w-xl">
          <InquiryForm />
        </div>
      </Container>
    </>
  );
}
