import { Container } from "@/components/container";
import { Phrase } from "@/components/i18n-text";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHeader } from "@/components/page-header";
import { company } from "@/lib/company";

const aboutLede =
  "iOne is a technology company with a 10+ year history serving the Mongolian market. We specialize in cloud services, AI integration, blockchain consulting, and professional EMV smart card supply as the official distributor of Kona-M, Korea's leading card manufacturer.";

export const metadata = {
  title: "About",
  description: aboutLede,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="iOne" title="About" lede={aboutLede} navy />
      <Container className="grid gap-10 py-8 sm:py-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
        <address className="text-sm leading-relaxed text-[#3A4F66] not-italic">
          <span className="block font-semibold text-[#192a3d]">iOne</span>
          <Phrase text={company.addressLines[0]} />
          <br />
          <Phrase text={company.addressLines[1]} />
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
