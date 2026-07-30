import { Notice } from "@/components/ui/Notice";

interface BeforeYouStartProps {
  estimatedTime?: string;
  difficulty?: string;
  missables?: string[];
  endings?: string;
  achievements?: string;
}

export function BeforeYouStart({
  estimatedTime,
  difficulty,
  missables,
  endings,
  achievements,
}: BeforeYouStartProps) {
  return (
    <section id="before-you-start" className="mb-12 scroll-mt-24">
      <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
        Before You Start
      </h2>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {missables && missables.length > 0 && (
          <div className="p-4 bg-surface-container-low border border-white/5">
            <div className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/60 mb-2">Missables</div>
            <ul className="list-disc list-inside text-sm text-on-surface-variant space-y-1">
              {missables.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        )}
        {endings && (
          <div className="p-4 bg-surface-container-low border border-white/5">
            <div className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/60 mb-1">Endings</div>
            <div className="text-sm text-on-surface-variant">{endings}</div>
          </div>
        )}
        {achievements && (
          <div className="p-4 bg-surface-container-low border border-white/5">
            <div className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/60 mb-1">Achievements</div>
            <div className="text-sm text-on-surface-variant">{achievements}</div>
          </div>
        )}
      </div>

      <Notice variant="warning" title="Spoiler Warning" titleAs="h3">
        This walkthrough contains story and progression spoilers. Read only as far as you need, and check the <a href="/puzzles" className="text-primary hover:underline">Puzzle Solutions</a> page if you want to solve specific sections yourself.
      </Notice>
    </section>
  );
}
