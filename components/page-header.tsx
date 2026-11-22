"use client";

import { Container } from "@/components/container";
import { useI18n } from "@/components/language-provider";

export function PageHeader({
  eyebrow,
  title,
  lede,
  navy = false,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  navy?: boolean;
}) {
  const { phrase } = useI18n();

  return (
    <div className={navy ? "border-b border-white/10 bg-[#111827]" : "border-b border-[#d5dee6] bg-white"}>
      <Container className="py-8 sm:py-12">
        {eyebrow ? (
          <p className={navy ? "text-sm text-[#d5dee6]" : "text-sm text-[#3A4F66]"}>{phrase(eyebrow)}</p>
        ) : null}
        <h1
          className={
            navy
              ? "mt-1 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              : "mt-1 text-3xl font-semibold tracking-tight text-[#192a3d] sm:text-4xl"
          }
        >
          {phrase(title)}
        </h1>
        <p className={navy ? "mt-3 max-w-3xl text-base leading-relaxed text-[#d5dee6]" : "mt-3 max-w-3xl text-base leading-relaxed text-[#3A4F66]"}>
          {phrase(lede)}
        </p>
      </Container>
    </div>
  );
}
