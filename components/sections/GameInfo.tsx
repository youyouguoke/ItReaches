import { Check } from "lucide-react";

interface GameInfoData {
  game: string;
  developer: string;
  publisher: string;
  platforms: string[];
  genres: string[];
  releaseDate: string;
  playtime: string;
  modes?: string;
  controllerSupport?: string;
  languages?: string;
  engine?: string;
  steamUrl?: string;
}

interface GameInfoProps {
  info: GameInfoData;
}

export function GameInfo({ info }: GameInfoProps) {
  const rows = [
    { label: "Game", value: info.game },
    { label: "Developer", value: info.developer },
    { label: "Publisher", value: info.publisher },
    { label: "Platform", value: info.platforms.join(", ") },
    { label: "Genre", value: info.genres.join(", ") },
    { label: "Release Date", value: info.releaseDate },
    { label: "Playtime", value: info.playtime },
    ...(info.modes ? [{ label: "Game Modes", value: info.modes }] : []),
    ...(info.controllerSupport ? [{ label: "Controller", value: info.controllerSupport }] : []),
    ...(info.languages ? [{ label: "Languages", value: info.languages }] : []),
    ...(info.engine ? [{ label: "Engine", value: info.engine }] : []),
  ];

  return (
    <div className="bg-card border-l-4 border-accent p-8 flex flex-col justify-between h-full">
      <h2 className="font-label text-label-caps text-on-surface-variant uppercase mb-8">
        Game Information
      </h2>
      <div className="space-y-6">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0"
          >
            <span className="text-on-surface-variant">{row.label}</span>
            <span className="font-bold text-foreground text-right max-w-[60%]">{row.value}</span>
          </div>
        ))}
      </div>
      {info.steamUrl && (
        <a
          href={info.steamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 bg-[#1b2838] hover:bg-[#2a475e] text-white px-4 py-3 font-label text-label-caps uppercase tracking-widest transition-colors"
        >
          <Check size={14} />
          Official Steam Page
        </a>
      )}
    </div>
  );
}
