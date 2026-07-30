import { Notice } from "@/components/ui/Notice";
import { ReactNode } from "react";

interface ChapterSectionProps {
  id: string;
  number: number;
  title: string;
  overview: ReactNode;
  objectives: string[];
  puzzles?: ReactNode;
  dangerAreas?: string[];
  collectibles?: string[];
  boss?: string;
  tips?: string[];
  nextChapter?: { title: string; href: string };
  missable?: boolean;
  estimatedTime?: string;
  difficulty?: "Low" | "Medium" | "High" | "Very High";
}

export function ChapterSection({
  id,
  number,
  title,
  overview,
  objectives,
  puzzles,
  dangerAreas,
  collectibles,
  boss,
  tips,
  nextChapter,
  missable,
  estimatedTime,
  difficulty,
}: ChapterSectionProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-2">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-display text-lg font-bold">
          {number}
        </span>
        <h2 className="font-headline-md text-foreground">
          Chapter {number}: {title}
        </h2>
        {missable && <span className="ml-auto text-[10px] uppercase tracking-widest font-label text-warning bg-warning/10 border border-warning/30 px-2 py-1">Missable Content</span>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {estimatedTime && (
          <div className="p-4 bg-surface-container-low border border-white/5">
            <div className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/60 mb-1">Estimated Time</div>
            <div className="text-foreground font-body">{estimatedTime}</div>
          </div>
        )}
        {difficulty && (
          <div className="p-4 bg-surface-container-low border border-white/5">
            <div className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/60 mb-1">Difficulty</div>
            <div className="text-foreground font-body">{difficulty}</div>
          </div>
        )}
      </div>

      <h3 id={`${id}-overview`} className="font-headline-sm text-foreground mb-3">
        Overview
      </h3>
      <div className="text-on-surface-variant mb-6 leading-relaxed">{overview}</div>

      <h3 id={`${id}-objectives`} className="font-headline-sm text-foreground mb-3">
        Objectives
      </h3>
      <ol className="list-decimal list-inside space-y-2 mb-6 text-on-surface-variant leading-relaxed">
        {objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ol>

      {puzzles && (
        <>
          <h3 id={`${id}-puzzles`} className="font-headline-sm text-foreground mb-3">
            Key Puzzles
          </h3>
          <div className="text-on-surface-variant mb-6 leading-relaxed">{puzzles}</div>
        </>
      )}

      {dangerAreas && dangerAreas.length > 0 && (
        <>
          <h3 id={`${id}-danger`} className="font-headline-sm text-foreground mb-3">
            Danger Areas
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-on-surface-variant leading-relaxed">
            {dangerAreas.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </>
      )}

      {collectibles && collectibles.length > 0 && (
        <>
          <h3 id={`${id}-collectibles`} className="font-headline-sm text-foreground mb-3">
            Collectibles
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-on-surface-variant leading-relaxed">
            {collectibles.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {boss && (
        <>
          <h3 id={`${id}-boss`} className="font-headline-sm text-foreground mb-3">
            Boss / Set-Piece
          </h3>
          <p className="text-on-surface-variant mb-6 leading-relaxed">{boss}</p>
        </>
      )}

      {tips && tips.length > 0 && (
        <>
          <h3 id={`${id}-tips`} className="font-headline-sm text-foreground mb-3">
            Tips
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-on-surface-variant leading-relaxed">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </>
      )}

      <Notice variant="warning" title="Chapter Summary" titleAs="h3">
        <p className="mb-2">
          <strong>Chapter {number}: {title}</strong> -- estimated {estimatedTime || "varies"}, difficulty {difficulty || "varies"}.
        </p>
        <p>
          Focus on {objectives[0]}. Detailed room-by-room steps are being verified against the full release and will be added as soon as possible.
        </p>
      </Notice>

      {nextChapter && (
        <div className="text-sm text-on-surface-variant">
          Next: <a href={nextChapter.href} className="text-primary hover:underline">{nextChapter.title}</a>
        </div>
      )}
    </section>
  );
}
