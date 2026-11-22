import { EXCHANGE } from "@/lib/catalog";

export function RateNote({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs leading-relaxed text-[#3A4F66]">
        Estimate at ₮{EXCHANGE.mntPerUsd.toLocaleString("en-US")} per USD on{" "}
        {EXCHANGE.asOf}. Not an iOne quote. The price and the rate both move.
      </p>
    );
  }

  return (
    <p className="text-sm leading-relaxed text-[#3A4F66]">
      MNT figures use {EXCHANGE.mntPerUsd.toLocaleString("en-US")} tugrik per 1 USD,
      the {EXCHANGE.name} for {EXCHANGE.asOf}. {EXCHANGE.detail} {EXCHANGE.formula}{" "}
      A shop price will differ. These are not quotes from iOne.
    </p>
  );
}
