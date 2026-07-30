import { Badge } from "@/components/ui/Badge";

interface ArticleHeaderProps {
  title: string;
  description: string;
  publishedDate: string;
  updatedDate?: string;
  lastReviewed?: string;
  readingTime?: string;
  difficulty?: string;
  author?: string;
  verified?: boolean;
  status?: "inProgress" | "complete" | "stub";
}

export function ArticleHeader({
  title,
  description,
  publishedDate,
  updatedDate,
  lastReviewed,
  readingTime,
  difficulty,
  author = "It Reaches Guide Team",
  verified = true,
  status = "complete",
}: ArticleHeaderProps) {
  return (
    <header className="mb-12">
      <div className="mb-4">
        {status === "inProgress" && (
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25 px-3 py-1.5 text-sm font-medium">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            In Progress — specific codes & locations being verified
          </span>
        )}
      </div>
      <h1 className="font-display text-display-lg-mobile md:text-display-lg text-foreground leading-none mb-6">
        {title}
      </h1>
      <p className="font-body text-body-lg text-on-surface-variant max-w-3xl mb-6">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-6 py-4 border-y border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center text-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <p className="font-label text-label-caps text-on-surface uppercase">{author}</p>
            <p className="text-xs text-on-surface-variant">Chief Archivist</p>
          </div>
        </div>

        <div className="h-8 w-px bg-white/10 hidden sm:block" />

        <div className="flex items-center gap-2 text-on-surface-variant">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="font-label text-[11px] uppercase">
            {publishedDate}
            {updatedDate && ` (updated ${updatedDate})`}
          </span>
        </div>

        {readingTime && (
          <div className="flex items-center gap-2 text-on-surface-variant">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="font-label text-[11px] uppercase">{readingTime} read</span>
          </div>
        )}

        {difficulty && (
          <div className="flex items-center gap-2 text-on-surface-variant">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="font-label text-[11px] uppercase">Difficulty: {difficulty}</span>
          </div>
        )}

        {verified && <Badge variant="verified">Verified Guide</Badge>}
      </div>

      {lastReviewed && (
        <div className="mt-4 text-xs text-on-surface-variant">
          Last reviewed: {lastReviewed}
        </div>
      )}
    </header>
  );
}
