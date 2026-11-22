import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ServiceCards } from "@/components/service-cards";
import { company } from "@/lib/company";

export const metadata = {
  title: "Services",
  description: company.about,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="iOne" title="Services" lede={company.about} navy />
      <Container className="grid gap-4 py-8 sm:py-10 md:grid-cols-3">
        <ServiceCards />
      </Container>
    </>
  );
}
