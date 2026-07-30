import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Search It Reaches Guide for walkthroughs, puzzle solutions, and lore.",
};

export default function SearchPage() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="font-display text-display-lg-mobile md:text-display-lg text-foreground mb-6">
          Search
        </h1>
        <p className="text-on-surface-variant mb-8">
          Search functionality is coming soon. Browse the guides below or use the navigation menu.
        </p>
        <input
          type="text"
          placeholder="Search guides..."
          className="w-full max-w-xl bg-surface border border-white/10 p-4 text-foreground focus:border-primary focus:outline-none"
          disabled
        />
      </Container>
    </main>
  );
}
