import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface UpdateItem {
  date: string;
  title: string;
  href: string;
}

interface LatestUpdatesProps {
  updates: UpdateItem[];
}

export function LatestUpdates({ updates }: LatestUpdatesProps) {
  return (
    <section className="py-24 bg-surface border-y border-white/5">
      <div className="max-w-container-max mx-auto px-edge-mobile md:px-gutter">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <h2 className="font-label text-label-caps text-on-surface-variant uppercase tracking-widest">
              Latest Updates
            </h2>
          </div>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-primary text-sm font-label uppercase tracking-wider hover:underline"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {updates.map((item) => (
            <Link
              key={item.href + item.date}
              href={item.href}
              className="group bg-card p-5 border border-white/5 hover:border-primary transition-all"
            >
              <div className="flex items-center gap-2 text-on-surface-variant text-xs font-mono mb-3">
                <Calendar size={12} />
                {item.date}
              </div>
              <h3 className="font-headline-sm text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
