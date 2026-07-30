import { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Disclaimer | It Reaches Guide",
  description: "Disclaimer for It Reaches Guide, an unofficial fan site for the It Reaches horror game.",
  alternates: {
    canonical: "https://itreachesguide.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="mt-8 pb-section-gap">
      <Container>
        <article className="max-w-3xl mx-auto">
          <h1 className="font-display text-headline-md text-foreground mb-6">
            Disclaimer
          </h1>

          <section className="mb-8">
            <h2 className="font-headline-sm text-foreground mb-3">Unofficial Fan Guide</h2>
            <p className="text-on-surface-variant mb-4">
              It Reaches Guide is an unofficial fan site created by players for players. We are not affiliated with, endorsed by, or sponsored by Emberflight Games, Perp Games, or any other rights holder associated with the game <em>It Reaches</em>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-headline-sm text-foreground mb-3">Trademarks & Intellectual Property</h2>
            <p className="text-on-surface-variant mb-4">
              All game names, characters, screenshots, logos, and trademarks referenced on this site are the property of their respective owners. Any use of these materials is for informational and identification purposes only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-headline-sm text-foreground mb-3">Accuracy of Information</h2>
            <p className="text-on-surface-variant mb-4">
              We make every effort to keep our guides accurate and up to date. However, game details may change over time or differ between platforms and versions. Some content may be speculative, especially for unreleased or recently released features, and is clearly marked as such.
            </p>
          </section>

          <section>
            <h2 className="font-headline-sm text-foreground mb-3">Contact</h2>
            <p className="text-on-surface-variant">
              For questions or concerns about this disclaimer, please contact us at{" "}
              <a className="text-primary hover:underline" href="mailto:hello@itreachesguide.com">
                hello@itreachesguide.com
              </a>
              .
            </p>
          </section>
        </article>
      </Container>
    </main>
  );
}
