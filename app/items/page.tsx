import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Items & Collectibles (Moved)",
  description: "This page has moved to the Collectibles hub.",
  alternates: {
    canonical: "https://itreachesguide.com/collectibles",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ItemsPage() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="font-display text-display-lg-mobile md:text-display-lg text-foreground mb-4">
          Page moved
        </h1>
        <p className="text-on-surface-variant mb-8">
          The Items &amp; Collectibles page has moved to the new{" "}
          <a href="/collectibles" className="text-primary hover:underline">
            Collectibles hub
          </a>
          .
        </p>
        <meta httpEquiv="refresh" content="0; url=/collectibles" />
      </Container>
    </main>
  );
}
