"use client";

import { COMPARE_LIMIT, useCompare } from "@/components/compare-provider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CompareToggle({ slug }: { slug: string }) {
  const { has, toggle, full, ready } = useCompare();
  const selected = ready && has(slug);
  const blocked = ready && full && !selected;

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={`compare-${slug}`}
        checked={selected}
        disabled={blocked}
        onCheckedChange={() => toggle(slug)}
        aria-label={blocked ? `Compare list is full at ${COMPARE_LIMIT}` : "Compare"}
      />
      <Label htmlFor={`compare-${slug}`} className="text-sm font-normal text-[#3A4F66]">
        {blocked ? `Compare list is full (${COMPARE_LIMIT})` : "Compare"}
      </Label>
    </div>
  );
}
