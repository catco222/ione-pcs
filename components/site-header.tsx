"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { useCompare } from "@/components/compare-provider";
import { Wordmark } from "@/components/wordmark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/gaming-pcs", label: "Gaming PCs" },
  { href: "/compare", label: "Compare" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const { slugs, ready } = useCompare();
  const compareLabel = ready && slugs.length > 0 ? `Compare (${slugs.length})` : "Compare";

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#111827] text-white">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-[#192a3d]"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 w-full max-w-[1290px] items-center gap-6 px-4 sm:px-6">
        <Link href="/" className="shrink-0 text-white" aria-label="iOne home">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-[#d5dee6] hover:text-white",
                isActive(pathname, item.href) && "font-medium text-white",
              )}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.href === "/compare" ? compareLabel : item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="h-9 px-3"
          >
            Contact
          </Button>
          <Sheet key={pathname}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white lg:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)] bg-white">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-4 pb-6" aria-label="Mobile">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "border-b border-[#e1e8ed] py-3 text-base text-[#192a3d]",
                      isActive(pathname, item.href) && "font-semibold",
                    )}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  >
                    {item.href === "/compare" ? compareLabel : item.label}
                  </Link>
                ))}
                <Link href="/contact" className="py-3 text-base font-medium text-[#2872fa]">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
