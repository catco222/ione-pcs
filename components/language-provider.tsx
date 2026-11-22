"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import {
  LANG_KEY,
  isLang,
  phrase,
  titleForPath,
  translate,
  type Lang,
  type MessageKey,
} from "@/lib/i18n";

type LanguageValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: (key: MessageKey, vars?: Record<string, string | number>) => string;
  phrase: (text: string) => string;
};

const LanguageContext = createContext<LanguageValue | null>(null);

let memory: Lang | null = null;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function readStored(): Lang {
  try {
    const value = localStorage.getItem(LANG_KEY);
    return isLang(value) ? value : "en";
  } catch {
    return "en";
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Lang {
  if (memory === null) memory = readStored();
  return memory;
}

function writeLang(next: Lang) {
  memory = next;
  try {
    localStorage.setItem(LANG_KEY, next);
  } catch {
    /* private mode */
  }
  document.cookie = `${LANG_KEY}=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
  document.documentElement.lang = next === "mn" ? "mn" : "en";
  emit();
}

export function LanguageProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: React.ReactNode;
}) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, () => initialLang);
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = lang === "mn" ? "mn" : "en";
    document.cookie = `${LANG_KEY}=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`;
    const title = titleForPath(pathname, lang);
    if (title) document.title = title;
  }, [lang, pathname]);

  const value: LanguageValue = {
    lang,
    setLang: writeLang,
    t: (key, vars) => translate(lang, key, vars),
    phrase: (text) => phrase(lang, text),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n(): LanguageValue {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useI18n must be used inside LanguageProvider");
  return value;
}
