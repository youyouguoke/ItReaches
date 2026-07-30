import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { ChapterSection } from "@/components/article/ChapterSection";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Ventilation Walkthrough - Chapter 2 Guide",
  description: "Chapter 2 Ventilation walkthrough for It Reaches: maintenance tunnels, stealth, environmental puzzles, and the first entity encounters.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough/ventilation",
  },
};

const article: Article = {
  title: "It Reaches Ventilation Walkthrough - Chapter 2",
  description: "A focused walkthrough for Chapter 2: Ventilation in It Reaches. Covers the maintenance tunnel section, stealth basics, environmental puzzles, and how to evade the entity in tight spaces.",
  href: "https://itreachesguide.com/walkthrough/ventilation",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-30",
  author: "It Reaches Guide Team",
  readingTime: "5 min",
  difficulty: "Medium",
  lastReviewed: "2026-07-30",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "Official description of officer Jason Thompson and bodycam perspective",
    "Community-reported chapter structure from the It Reaches player hub",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Walkthrough", href: "/walkthrough" },
  { title: "Ventilation" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "chapter-section", title: "Chapter 2: Ventilation", level: 2 },
  { id: "chapter-section-overview", title: "Overview", level: 3 },
  { id: "chapter-section-objectives", title: "Objectives", level: 3 },
  { id: "chapter-section-puzzles", title: "Key Puzzles", level: 3 },
  { id: "chapter-section-danger", title: "Danger Areas", level: 3 },
  { id: "chapter-section-tips", title: "Tips", level: 3 },
  { id: "whats-next", title: "What's Next", level: 1 },
  { id: "sources", title: "Sources & Disclaimer", level: 1 },
];

const related = [
  {
    title: "Complete Walkthrough",
    description: "All six chapters from Awakening to Oblivion in one guide.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "Awakening Walkthrough",
    description: "Chapter 1: tutorial, body camera basics, and opening area.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/awakening",
    tag: "Walkthrough",
  },
  {
    title: "Monster Guide",
    description: "Survival strategies for the entity.",
    image: "/images/monster.webp",
    href: "/monsters",
    tag: "Monsters",
  },
  {
    title: "Beginner Tips",
    description: "Essential survival advice before you start It Reaches.",
    image: "/images/tips.webp",
    href: "/tips",
    tag: "Tips",
  },
];

export default function VentilationPage() {
  return (
    <ArticleTemplate
      article={article}
      breadcrumb={breadcrumb}
      toc={toc}
      faq={[]}
      related={related}
    >
      <section id="quick-answer" className="mb-12 scroll-mt-24">
        <QuickAnswer title="Quick Answer" as="h2">
          Chapter 2: Ventilation sends officer Jason Thompson through the abandoned hospital&apos;s maintenance systems. Tight corridors and limited visibility make this the game&apos;s stealth tutorial, with environmental puzzles that teach how sound and light affect the entity. Exact patrol routes and puzzle solutions are being verified.
        </QuickAnswer>
      </section>

      <ChapterSection
        id="chapter-section"
        number={2}
        title="Ventilation"
        estimatedTime="30-50 min"
        difficulty="Medium"
        overview={
          <>
            The Ventilation chapter pushes you into the abandoned hospital&apos;s maintenance systems.
            Tight spaces, limited visibility, and environmental obstacles make this a tutorial for stealth and resource management.
          </>
        }
        objectives={[
          "Navigate the ventilation and maintenance corridors.",
          "Restore airflow or power to unlock deeper sections.",
          "Avoid the entity while it patrols the narrow tunnels.",
          "Reach the exit point leading back into the main hospital.",
        ]}
        puzzles={
          <>
            Expect valve-turning, breaker routing, or vent-crawling puzzles.
            Sound and light are often clues; loud actions may attract the entity in this chapter.
          </>
        }
        dangerAreas={[
          "Narrow dead-end vents with no escape route.",
          "Areas where the entity patrols in a tight loop.",
          "Flooded or dark sections that slow movement.",
        ]}
        collectibles={[
          "Maintenance logs hidden in side rooms.",
          "Supplies in locked maintenance lockers.",
        ]}
        tips={[
          "Crouch-walk to reduce noise in the vents.",
          "Watch patrol timing before crossing open sections.",
          "Use side rooms as safe points when the entity passes by.",
        ]}
      />

      <section id="whats-next" className="mb-16 scroll-mt-24">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What&apos;s Next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/walkthrough/the-reach" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Next Chapter</div>
            <div className="text-foreground font-headline-sm mb-1">Chapter 3: The Reach</div>
            <div className="text-sm text-on-surface-variant">The entity becomes a persistent threat in the open hospital wings.</div>
          </a>
          <a href="/monsters" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Survival</div>
            <div className="text-foreground font-headline-sm mb-1">Monster Guide</div>
            <div className="text-sm text-on-surface-variant">Entity behavior and evasion tactics.</div>
          </a>
        </div>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Detailed steps coming soon" titleAs="h3">
        We are playing through Ventilation to verify exact patrol routes, puzzle sequences, and item locations.
        The chapter structure above is based on the official Steam description and community-reported sources; it has not been officially confirmed by the developer.
      </Notice>
    </ArticleTemplate>
  );
}
