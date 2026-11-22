import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/catalog";

export default function NotFound() {
  return (
    <Container className="py-16 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-[#192a3d]">That page is not on this site</h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-[#3A4F66]">
        The catalog lists {PRODUCTS.length} gaming desktops. This address is not one of them.
      </p>
      <Button className="mt-6 h-10 px-4" nativeButton={false} render={<Link href="/gaming-pcs" />}>
        Browse gaming PCs
      </Button>
    </Container>
  );
}
