import { CompareTable } from "@/components/compare-table";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "Compare PCs",
  description: "Compare up to three gaming desktops on the same spec rows, including the estimated tugrik price.",
};

export default function ComparePage() {
  return (
    <>
      <PageHeader
        eyebrow="Catalog"
        title="Compare PCs"
        lede="Choose up to three systems."
      />
      <Container className="py-8 sm:py-10">
        <CompareTable />
      </Container>
    </>
  );
}
