import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline text-[1.35rem] font-semibold tracking-tight", className)}>
      <span aria-hidden="true" className="inline-flex items-baseline">
        <span className="relative inline-block">
          ı
          <span className="absolute top-[0.22em] left-1/2 size-[0.22em] -translate-x-1/2 bg-current" />
        </span>
        One
      </span>
      <span className="sr-only">iOne</span>
    </span>
  );
}
