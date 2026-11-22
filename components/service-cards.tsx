"use client";

import { useI18n } from "@/components/language-provider";
import { services } from "@/lib/company";

const hiddenInMongolian = "Contact & contactless EMV card supply";

export function ServiceCards() {
  const { lang, phrase } = useI18n();

  return (
    <>
      {services.map((service) => (
        <article key={service.slug} className="overflow-hidden rounded-lg border border-[#d5dee6] bg-white">
          {/* Local files, not a remote optimizer fetch. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/services/${service.slug}.webp`}
            alt={phrase(service.title)}
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="p-5">
            <h2 className="text-lg font-semibold text-[#192a3d]">{phrase(service.title)}</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#3A4F66]">
              {service.items
                .filter((item) => !(lang === "mn" && item === hiddenInMongolian))
                .map((item) => (
                  <li key={item}>{phrase(item)}</li>
                ))}
            </ul>
          </div>
        </article>
      ))}
    </>
  );
}
