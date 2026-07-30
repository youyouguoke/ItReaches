interface ChapterProgress {
  chapter: string;
  playtime: string;
  puzzle: string;
  boss: string;
  collectibles: string;
  difficulty: "Low" | "Medium" | "High" | "Very High";
}

interface ProgressTableProps {
  chapters: ChapterProgress[];
}

export function ProgressTable({ chapters }: ProgressTableProps) {
  return (
    <section id="chapter-overview" className="mb-12 scroll-mt-24">
      <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
        Chapter Overview
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-on-surface-variant/60 font-label text-[10px] uppercase tracking-widest">
              <th className="py-3 pr-4">Chapter</th>
              <th className="py-3 pr-4">Playtime</th>
              <th className="py-3 pr-4">Puzzle</th>
              <th className="py-3 pr-4">Boss / Set-Piece</th>
              <th className="py-3 pr-4">Collectibles</th>
              <th className="py-3">Difficulty</th>
            </tr>
          </thead>
          <tbody className="text-sm text-on-surface-variant">
            {chapters.map((chapter, index) => (
              <tr key={index} className="border-b border-white/5 hover:bg-white/[0.02]">
                <td className="py-4 pr-4 font-medium text-foreground">{chapter.chapter}</td>
                <td className="py-4 pr-4">{chapter.playtime}</td>
                <td className="py-4 pr-4">{chapter.puzzle}</td>
                <td className="py-4 pr-4">{chapter.boss}</td>
                <td className="py-4 pr-4">{chapter.collectibles}</td>
                <td className="py-4">{chapter.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
