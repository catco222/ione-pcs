"use client";

import { COMPARE_LIMIT, useCompare } from "@/components/compare-provider";
import { useI18n } from "@/components/language-provider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CompareToggle({ slug }: { slug: string }) {
  const { has, toggle, full, ready } = useCompare();
  const { t } = useI18n();
  const selected = ready && has(slug);
  const blocked = ready && full && !selected;

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={`compare-${slug}`}
        checked={selected}
        disabled={blocked}
        onCheckedChange={() => toggle(slug)}
        aria-label={
          blocked ? t("card.compareFullAria", { count: COMPARE_LIMIT }) : t("card.compare")
        }
      />
      <Label htmlFor={`compare-${slug}`} className="text-sm font-normal text-[#3A4F66]">
        {blocked ? t("card.compareFull", { count: COMPARE_LIMIT }) : t("card.compare")}
      </Label>
    </div>
  );
}
