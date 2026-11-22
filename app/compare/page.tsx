import { CompareTable } from "@/components/compare-table";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { RateNote } from "@/components/rate-note";

export const metadata = {
  title: "Compare",
  description: "Compare up to three gaming desktops on the same spec rows, including the estimated tugrik price.",
};

export default function ComparePage() {
  return (
    <>
      <PageHeader
        eyebrow="Catalog"
        title="Compare"
        lede="Choose up to three systems. The rows are the ones a buyer scans: availability, processor, graphics, memory, storage, warranty, the US street price, and the tugrik estimate."
      />
      <Container className="py-8 sm:py-10">
        <CompareTable />
        <div className="mt-6">
          <RateNote />
        </div>
      </Container>
    </>
  );
}
