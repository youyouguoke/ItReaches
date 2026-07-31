import { Container } from "@/components/layout/Container";
import { SearchClient } from "@/components/search/SearchClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search - It Reaches Guide",
  description: "Search walkthroughs, puzzle solutions, endings, characters, monster strategies, and lore for It Reaches.",
  alternates: {
    canonical: "https://itreachesguide.com/search",
  },
};

export default function SearchPage() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="font-display text-display-lg-mobile md:text-display-lg text-foreground mb-4">
          Search
        </h1>
        <p className="text-on-surface-variant mb-8 max-w-2xl">
          Find walkthroughs, characters, puzzle guides, monster tactics, items, and FAQ answers across the entire It Reaches Guide.
        </p>

        <SearchClient />
      </Container>
    </main>
  );
}
