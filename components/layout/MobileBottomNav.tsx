"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Puzzle, Trophy, Menu, X } from "lucide-react";
import { useState } from "react";

const bottomNavItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Guides", href: "/guides", icon: BookOpen },
  { label: "Puzzles", href: "/puzzles", icon: Puzzle },
  { label: "Endings", href: "/endings", icon: Trophy },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest border-t border-white/10 md:hidden">
        <div className="flex items-center justify-around h-16">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 flex-1 h-full ${
                  active ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                <Icon size={20} />
                <span className="text-[10px] uppercase tracking-wider font-label">{item.label}</span>
              </Link>
            );
          })}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-center justify-center gap-1 flex-1 h-full text-on-surface-variant"
            aria-label="Open menu"
          >
            <Menu size={20} />
            <span className="text-[10px] uppercase tracking-wider font-label">Menu</span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-headline-sm font-extrabold text-primary tracking-tighter">
                It Reaches Guide
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-on-surface-variant"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { label: "Home", href: "/" },
                { label: "Walkthrough", href: "/walkthrough" },
                { label: "Guides", href: "/guides" },
                { label: "Puzzles", href: "/puzzles" },
                { label: "Endings", href: "/endings" },
                { label: "Monsters", href: "/monsters" },
                { label: "Story", href: "/story" },
                { label: "Achievements", href: "/achievements" },
                { label: "Tips", href: "/tips" },
                { label: "FAQ", href: "/faq" },
                { label: "Search", href: "/search" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-body text-body-lg uppercase tracking-wider ${
                    pathname === item.href ? "text-primary" : "text-on-surface-variant"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
