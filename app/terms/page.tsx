import { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms of Use | It Reaches Guide",
  description: "Terms of use for It Reaches Guide, an unofficial fan site for the It Reaches horror game.",
  alternates: {
    canonical: "https://itreachesguide.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="mt-8 pb-section-gap">
      <Container>
        <article className="max-w-3xl mx-auto">
          <h1 className="font-display text-headline-md text-foreground mb-6">
            Terms of Use
          </h1>
          <p className="text-on-surface-variant mb-6">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}.
          </p>

          <section className="mb-8">
            <h2 className="font-headline-sm text-foreground mb-3">Acceptance of Terms</h2>
            <p className="text-on-surface-variant mb-4">
              By accessing or using It Reaches Guide, you agree to be bound by these Terms of Use. If you do not agree, please do not use the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-headline-sm text-foreground mb-3">Unofficial Fan Content</h2>
            <p className="text-on-surface-variant mb-4">
              It Reaches Guide is an unofficial fan site. We are not affiliated with, endorsed by, or sponsored by Emberflight Games, Perp Games, or any other rights holder. All game names, characters, screenshots, and trademarks are property of their respective owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-headline-sm text-foreground mb-3">Use of Content</h2>
            <p className="text-on-surface-variant mb-4">
              The guides, walkthroughs, and articles on this site are provided for informational and entertainment purposes only. You may share links to our content, but you may not republish, scrape, or redistribute substantial portions of the site without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-headline-sm text-foreground mb-3">Accuracy & Updates</h2>
            <p className="text-on-surface-variant mb-4">
              Game details may change as new information becomes available. Some guides are marked as speculative or in progress. We do not guarantee completeness or accuracy for unreleased content.
            </p>
          </section>

          <section>
            <h2 className="font-headline-sm text-foreground mb-3">Limitation of Liability</h2>
            <p className="text-on-surface-variant">
              It Reaches Guide is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any damages arising from your use of the site or reliance on its content.
            </p>
          </section>
        </article>
      </Container>
    </main>
  );
}
