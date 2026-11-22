"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getProduct } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "ione-compare";
export const COMPARE_LIMIT = 3;
const SERVER_SNAPSHOT = "server";

let memory = "[]";
let loaded = false;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function readStored(): string {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return "[]";
    const slugs = parsed
      .filter((value): value is string => typeof value === "string" && Boolean(getProduct(value)))
      .slice(0, COMPARE_LIMIT);
    return JSON.stringify(slugs);
  } catch {
    return "[]";
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    memory = event.newValue ?? "[]";
    loaded = true;
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  if (!loaded) {
    loaded = true;
    memory = readStored();
  }
  return memory;
}

function getServerSnapshot() {
  return SERVER_SNAPSHOT;
}

function writeSlugs(slugs: string[]) {
  memory = JSON.stringify(slugs);
  loaded = true;
  localStorage.setItem(STORAGE_KEY, memory);
  emit();
}

function parseSlugs(raw: string): string[] {
  if (raw === SERVER_SNAPSHOT) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((value): value is string => typeof value === "string");
  } catch {
    return [];
  }
}

type CompareContextValue = {
  slugs: string[];
  ready: boolean;
  has: (slug: string) => boolean;
  toggle: (slug: string) => void;
  remove: (slug: string) => void;
  clear: () => void;
  full: boolean;
};

const CompareContext = createContext<CompareContextValue | null>(null);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const slugs = parseSlugs(raw);
  const ready = raw !== SERVER_SNAPSHOT;

  const value = useMemo<CompareContextValue>(
    () => ({
      slugs,
      ready,
      has: (slug) => slugs.includes(slug),
      toggle: (slug) => {
        if (slugs.includes(slug)) {
          writeSlugs(slugs.filter((item) => item !== slug));
          return;
        }
        if (slugs.length >= COMPARE_LIMIT) return;
        writeSlugs([...slugs, slug]);
      },
      remove: (slug) => writeSlugs(slugs.filter((item) => item !== slug)),
      clear: () => writeSlugs([]),
      full: slugs.length >= COMPARE_LIMIT,
    }),
    [ready, slugs],
  );

  const showBar = ready && slugs.length > 0 && pathname !== "/compare";

  return (
    <CompareContext.Provider value={value}>
      {children}
      {showBar ? <div className="h-24" /> : null}
      {showBar ? (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#d5dee6] bg-white">
          <div className="mx-auto flex w-full max-w-[1290px] flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
            <p className="text-sm font-medium text-[#192a3d]">
              {slugs.length} of {COMPARE_LIMIT} selected
            </p>
            <p className="text-sm text-[#3A4F66]">
              {value.full ? "Remove one to add another." : "Add up to three systems."}
            </p>
            <div className="ml-auto flex gap-2">
              <Button variant="outline" className="h-10 bg-white" onClick={() => value.clear()}>
                Clear
              </Button>
              <Button className="h-10 px-4" nativeButton={false} render={<Link href="/compare" />}>
                Compare
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </CompareContext.Provider>
  );
}

export function useCompare(): CompareContextValue {
  const value = useContext(CompareContext);
  if (!value) {
    throw new Error("useCompare must be used inside CompareProvider");
  }
  return value;
}
