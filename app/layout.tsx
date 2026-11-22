import type { Metadata } from "next";
import { CompareProvider } from "@/components/compare-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.site),
  title: {
    default: "iOne",
    template: "%s · iOne",
  },
  description:
    "iOne, in Khan-Uul, Ulaanbaatar: IT services, EMV smart cards, and consulting, plus a catalog of gaming desktops with estimated US and tugrik prices.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-[#f2f5f7] text-[#192a3d]">
        <CompareProvider>
          <SiteHeader />
          <main id="content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </CompareProvider>
      </body>
    </html>
  );
}
