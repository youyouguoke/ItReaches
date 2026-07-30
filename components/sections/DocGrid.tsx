import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DocCategory {
  title: string;
  href: string;
  count: string;
  description: string;
}

interface DocGridProps {
  categories: DocCategory[];
}

export function DocGrid({ categories }: DocGridProps) {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-container-max mx-auto px-edge-mobile md:px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-foreground uppercase tracking-tighter mb-4">
            Documentation
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            The complete knowledge base for It Reaches, organized by topic and kept current with the latest game version.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group bg-card p-6 border border-white/5 hover:border-primary transition-all flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-sm text-foreground">{cat.title}</h3>
                <span className="text-xs font-mono text-primary border border-primary/20 px-2 py-1">
                  {cat.count}
                </span>
              </div>
              <p className="text-on-surface-variant text-sm flex-grow">{cat.description}</p>
              <span className="inline-flex items-center gap-2 text-primary text-sm font-label uppercase tracking-wider mt-4">
                Browse <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
