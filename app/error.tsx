"use client";

import { Container } from "@/components/container";
import { useI18n } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useI18n();
  return (
    <Container className="py-16 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-[#192a3d]">{t("error.title")}</h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-[#3A4F66]">
        {t("error.body", { email: company.email })}
      </p>
      <Button className="mt-6 h-10 px-4" onClick={() => reset()}>
        {t("error.retry")}
      </Button>
    </Container>
  );
}
