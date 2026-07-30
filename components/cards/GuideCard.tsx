import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Clock, Calendar, BarChart, ArrowRight, Layers } from "lucide-react";

interface GuideCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
  icon?: React.ReactNode;
  readingTime?: string;
  updated?: string;
  difficulty?: string;
  status?: string;
  coverage?: string[];
  linkLabel?: string;
}

export function GuideCard({
  title,
  description,
  image,
  href,
  badge,
  icon,
  readingTime,
  updated,
  difficulty,
  status,
  coverage,
  linkLabel,
}: GuideCardProps) {
  const isIncomplete = status === "In Progress" || status === "Speculative" || status === "Pending";

  return (
    <Link
      href={href}
      className="group block bg-surface-container-low glass-edge overflow-hidden hover:-translate-y-1 transition-all h-full flex flex-col"
    >
      <div className="h-48 relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-background/40" />
        {(badge || isIncomplete) && (
          <div className="absolute top-4 left-4">
            <Badge variant={isIncomplete ? "warning" : "new"}>{isIncomplete ? status : badge}</Badge>
          </div>
        )}
      </div>
      <div className="p-6 space-y-4 flex flex-col flex-grow">
        <div className="flex items-center gap-2">
          {icon && <span className="text-primary">{icon}</span>}
          <h3 className="font-headline-sm text-foreground">{title}</h3>
        </div>
        <p className="text-on-surface-variant text-sm line-clamp-2 flex-grow">{description}</p>
        
        {coverage && coverage.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {coverage.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-label text-on-surface-variant bg-surface-container border border-white/5 px-2 py-1"
              >
                <Layers size={10} />
                {item}
              </span>
            ))}
          </div>
        )}

        {!isIncomplete && (
          <div className="flex flex-wrap gap-3 pt-2 border-t border-white/5 text-xs text-on-surface-variant">
            {readingTime && (
              <span className="inline-flex items-center gap-1">
                <Clock size={12} />
                {readingTime}
              </span>
            )}
            {updated && (
              <span className="inline-flex items-center gap-1">
                <Calendar size={12} />
                {updated}
              </span>
            )}
            {difficulty && (
              <span className="inline-flex items-center gap-1">
                <BarChart size={12} />
                {difficulty}
              </span>
            )}
          </div>
        )}

        <div className="pt-2">
          <span className="inline-flex items-center gap-2 text-primary font-label text-[11px] uppercase tracking-widest group-hover:underline">
            {linkLabel || "Read Guide"}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
