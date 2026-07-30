"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  return (
    <nav className="sticky top-24" aria-label="Table of contents">
      <div className="bg-surface-container border border-white/5 p-6">
        <h2 className="font-label text-label-caps text-primary mb-6 flex items-center gap-2 uppercase">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
