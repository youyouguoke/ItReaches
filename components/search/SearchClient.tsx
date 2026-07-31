"use client";

import { useState, useEffect, useMemo } from "react";
import { GuideIcon } from "@/components/ui/GuideIcon";
import { Search as SearchIcon, X } from "lucide-react";

interface SearchResult {
  title: string;
  description: string;
  href: string;
  tag: string;
  keywords: string[];
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/gi, " ");
}

function matchesQuery(item: SearchResult, query: string): boolean {
  const q = normalize(query);
  if (!q) return true;
  const haystack = normalize(
    [item.title, item.description, item.tag, ...item.keywords].join(" ")
  );
  return q.split(/\s+/).every((word) => haystack.includes(word));
}

export function SearchClient() {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data) => {
        setIndex(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return index.filter((item) => matchesQuery(item, query)).slice(0, 20);
  }, [query, index]);

  return (
    <div className="space-y-8">
      <div className="relative max-w-2xl">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
          <SearchIcon size={20} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search walkthroughs, characters, puzzles, items..."
          className="w-full bg-surface border border-white/10 pl-12 pr-12 py-4 text-foreground placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none"
          autoFocus
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-foreground"
            aria-label="Clear search"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {loading && <p className="text-on-surface-variant">Loading search index...</p>}

      {!loading && query && results.length === 0 && (
        <div className="p-6 bg-surface-container-low border border-white/5">
          <p className="text-foreground font-headline-sm mb-2">No results found for &quot;{query}&quot;.</p>
          <p className="text-on-surface-variant">
            Try searching for: walkthrough, puzzle, ending, achievement, Jason Thompson, entity, items, or a chapter name like Awakening.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          <p className="text-on-surface-variant text-sm">
            {results.length} result{results.length === 1 ? "" : "s"} for &quot;{query}&quot;
          </p>
          <div className="grid grid-cols-1 gap-4">
            {results.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <GuideIcon name={iconForTag(item.tag)} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] uppercase tracking-widest font-label text-primary">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-foreground group-hover:text-primary transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {!query && !loading && (
        <div className="p-6 bg-surface-container-low border border-white/5">
          <h3 className="font-headline-sm text-foreground mb-3">Popular searches</h3>
          <div className="flex flex-wrap gap-2">
            {["walkthrough", "Jason Thompson", "entity", "puzzle", "ending", "achievement", "items"].map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-3 py-1.5 text-sm bg-surface border border-white/10 text-on-surface-variant hover:text-foreground hover:border-primary/30 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function iconForTag(tag: string): string {
  const map: Record<string, string> = {
    "Walkthrough Guides": "map",
    "Puzzle Guides": "puzzle",
    "Story Guides": "book",
    "Survival Guides": "skull",
    "Completion Guides": "trophy",
    "Tips": "brain",
    "Reference": "book",
    "Home": "book",
    "Legal": "book",
  };
  return map[tag] || "book";
}
