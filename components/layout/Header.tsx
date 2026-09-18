import Link from "next/link";
import { Container } from "./Container";

const navItems = [
  { label: "Puzzles", href: "/puzzles" },
  { label: "Achievements", href: "/achievements" },
  { label: "Collectibles", href: "/collectibles" },
  { label: "Walkthrough", href: "/walkthrough" },
  { label: "Endings", href: "/endings" },
  { label: "FAQ", href: "/faq" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-white/10">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-display text-headline-sm font-extrabold text-primary tracking-tighter"
          >
            It Reaches Guide
          </Link>

          <nav className="hidden md:flex items-center gap-gutter">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-body-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/search"
              className="text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </Link>
            <button className="md:hidden text-on-surface-variant" aria-label="Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
