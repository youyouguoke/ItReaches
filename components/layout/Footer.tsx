import { Container } from "./Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 bg-surface-container-lowest border-t border-white/5">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-display text-body-md font-bold text-primary">
              It Reaches Guide
            </span>
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {[
                { label: "Home", href: "/" },
                { label: "Guides", href: "/guides" },
                { label: "Walkthrough", href: "/walkthrough" },
                { label: "Characters", href: "/characters/jason-thompson" },
                { label: "Items", href: "/items" },
                { label: "FAQ", href: "/faq" },
                { label: "Disclaimer", href: "/disclaimer" },
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "Contact", href: "mailto:hello@itreachesguide.com" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-on-surface-variant/80 hover:text-primary transition-colors font-body text-body-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <p className="font-body text-body-sm text-on-surface-variant/60">
            (C) {new Date().getFullYear()} It Reaches Guide.
          </p>
        </div>
        <div className="pb-6">
          <p className="font-body text-body-sm text-on-surface-variant/50 max-w-4xl leading-relaxed">
            <strong className="text-on-surface-variant/70">Unofficial fan guide.</strong>{" "}
            Not affiliated with, endorsed by, or sponsored by Emberflight Games or Perp Games.
            All trademarks are property of their respective owners.
          </p>
        </div>
      </Container>
    </footer>
  );
}
