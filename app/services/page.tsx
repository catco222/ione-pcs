import { Container } from "@/components/container";
import { Phrase } from "@/components/i18n-text";
import { PageHeader } from "@/components/page-header";
import { company, services } from "@/lib/company";

export const metadata = {
  title: "Services",
  description: company.about,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="iOne" title="Services" lede={company.about} navy />
      <Container className="grid gap-4 py-8 sm:py-10 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="overflow-hidden rounded-lg border border-[#d5dee6] bg-white">
            {/* Local files, not a remote optimizer fetch. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/services/${service.slug}.webp`}
              alt={service.title}
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-[#192a3d]">
                <Phrase text={service.title} />
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[#3A4F66]">
                {service.items.map((item) => (
                  <li key={item}>
                    <Phrase text={item} />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </Container>
    </>
  );
}
