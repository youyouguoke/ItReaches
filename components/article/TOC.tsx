"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TOCProps {
  items: TOCItem[];
}

export function TOC({ items }: TOCProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const topLevelItems = items.filter((item) => item.level <= 2);

  return (
    <nav className="sticky top-24" aria-label="Table of contents">
      {/* Mobile: collapsible */}
      <div className="md:hidden bg-surface-container border border-white/5 mb-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between p-4 text-left"
          aria-expanded={expanded}
        >
          <span className="font-label text-label-caps text-primary uppercase tracking-widest flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h12" />
            </svg>
            Contents
          </span>
          {expanded ? <ChevronUp size={18} className="text-on-surface-variant" /> : <ChevronDown size={18} className="text-on-surface-variant" />}
        </button>
        {expanded && (
          <ul className="flex flex-col gap-3 px-4 pb-4">
            {topLevelItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  onClick={() => setExpanded(false)}
                  className={cn(
                    "block text-sm hover:text-on-surface transition-colors",
                    activeId === item.id ? "text-primary" : "text-on-surface-variant"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop: sticky sidebar */}
      <div className="hidden md:block bg-surface-container border border-white/5 p-6">
        <h2 className="font-label text-label-caps text-primary mb-6 flex items-center gap-2 uppercase">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h12" />
          </svg>
          Contents
        </h2>
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li
              key={item.id}
              className={cn(
                "text-sm transition-all",
                item.level === 2 ? "pl-2" : "",
                item.level > 2 ? "pl-4 opacity-70" : ""
              )}
            >
              <Link
                href={`#${item.id}`}
                className={cn(
                  "block hover:text-on-surface transition-colors",
                  activeId === item.id
                    ? "text-primary border-l-2 border-primary pl-3 -ml-3"
                    : "text-on-surface-variant pl-3 -ml-3 border-l-2 border-transparent"
                )}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
