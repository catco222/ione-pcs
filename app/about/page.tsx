import { Container } from "@/components/container";
import { Tx } from "@/components/i18n-text";
import { PageHeader } from "@/components/page-header";
import { company } from "@/lib/company";

export const metadata = {
  title: "About",
  description: company.about,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="iOne" title="About" lede={company.about} navy />
      <Container className="py-8 sm:py-10">
        <p className="max-w-3xl text-base leading-relaxed text-[#3A4F66]">
          <Tx k="about.history" />
        </p>
      </Container>
    </>
  );
}
