import { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | It Reaches Guide",
  description: "Privacy policy for It Reaches Guide, an unofficial fan site for the It Reaches horror game.",
  alternates: {
    canonical: "https://itreachesguide.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mt-8 pb-section-gap">
      <Container>
        <article className="max-w-3xl mx-auto">
          <h1 className="font-display text-headline-md text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-on-surface-variant mb-6">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}.
          </p>

          <section className="mb-8">
            <h2 className="font-headline-sm text-foreground mb-3">Information We Collect</h2>
            <p className="text-on-surface-variant mb-4">
              It Reaches Guide does not actively collect personal information. We are a static informational fan site. No accounts, logins, or user-submitted data are required to browse the site.
            </p>
            <p className="text-on-surface-variant mb-4">
              Like most websites, our hosting provider (Cloudflare) may collect limited technical data such as IP addresses, browser type, requested pages, and timestamps for security, performance, and analytics purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-headline-sm text-foreground mb-3">Cookies & Tracking</h2>
            <p className="text-on-surface-variant mb-4">
              We do not use first-party cookies or tracking scripts. Third-party services integrated by our hosting provider may use cookies for security or performance monitoring. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-headline-sm text-foreground mb-3">Third-Party Links</h2>
            <p className="text-on-surface-variant mb-4">
              This site may link to external resources such as the official Steam store page or publisher websites. We are not responsible for the privacy practices of third-party sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-headline-sm text-foreground mb-3">Affiliation Disclaimer</h2>
            <p className="text-on-surface-variant mb-4">
              It Reaches Guide is an unofficial fan site and is not affiliated with, endorsed by, or sponsored by Emberflight Games or Perp Games.
            </p>
          </section>

          <section>
            <h2 className="font-headline-sm text-foreground mb-3">Contact</h2>
            <p className="text-on-surface-variant">
              For privacy-related questions, please contact us through the contact information listed on this site.
            </p>
          </section>
        </article>
      </Container>
    </main>
  );
}
