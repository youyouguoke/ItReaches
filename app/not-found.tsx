import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <main className="py-24">
      <Container className="text-center">
        <h1 className="font-display text-display-lg-mobile md:text-display-lg text-foreground mb-6">
          404
        </h1>
        <p className="text-on-surface-variant mb-8">
          This page has been consumed by the Reach.
        </p>
        <Link
          href="/"
          className="bg-accent text-foreground px-8 py-4 font-label text-label-caps uppercase tracking-widest font-bold hover:brightness-110 transition-all"
        >
          Return Home
        </Link>
      </Container>
    </main>
  );
}
