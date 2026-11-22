"use client";

import { Container } from "@/components/container";
import { useI18n } from "@/components/language-provider";

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
}) {
  const { phrase } = useI18n();

  return (
    <div className="border-b border-[#d5dee6] bg-white">
      <Container className="py-8 sm:py-12">
        {eyebrow ? <p className="text-sm text-[#3A4F66]">{phrase(eyebrow)}</p> : null}
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#192a3d] sm:text-4xl">
          {phrase(title)}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#3A4F66]">{phrase(lede)}</p>
      </Container>
    </div>
  );
}
