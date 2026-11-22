"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Container className="py-16 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-[#192a3d]">This page did not load</h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-[#3A4F66]">
        Try again. If it keeps failing, write to {company.email}.
      </p>
      <Button className="mt-6 h-10 px-4" onClick={() => reset()}>
        Try again
      </Button>
    </Container>
  );
}
