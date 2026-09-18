import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { ChapterSection } from "@/components/article/ChapterSection";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches The Basement Walkthrough - Chapter 2 Guide",
  description: "The Basement chapter walkthrough for It Reaches: prison escape, pistol recovery, first enemy encounters, and how to survive the basement.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough/the-basement",
  },
};

const article: Article = {
  title: "It Reaches The Basement Walkthrough - Chapter 2 Guide",
  description: "The Basement chapter walkthrough for It Reaches: prison escape, pistol recovery, first enemy encounters, DanQ8000 timestamps, and tips.",
  href: "https://itreachesguide.com/walkthrough/the-basement",
  publishedDate: "2026-07-30",
  updatedDate: "2026-09-08",
  author: "It Reaches Guide Team",
  readingTime: "5 min",
  difficulty: "Medium",
  lastReviewed: "2026-09-08",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "DanQ8000 full gameplay walkthrough chapter timestamps",
    "Steam Community global achievement statistics",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Walkthrough", href: "/walkthrough" },
  { title: "The Basement" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "chapter-section", title: "The Basement", level: 2 },
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
    description: "All chapters from The Hospital to The Organism.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "The Hospital",
    description: "Previous chapter: the opening hospital area.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/the-hospital",
    tag: "Walkthrough",
  },
  {
    title: "The Sewer",
    description: "Next chapter: deeper underground.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/the-sewer",
    tag: "Walkthrough",
  },
  {
    title: "The Entity",
    description: "Survival guide for the game's enemy.",
    image: "/images/monster-entity.webp",
    href: "/monsters/the-entity",
    tag: "Monsters",
  },
];

export default function TheBasementPage() {
  return (
    <ArticleTemplate
      article={article}
      breadcrumb={breadcrumb}
      toc={toc}
      faq={[]}
      related={related}
      verification="community"
    >
      <section id="quick-answer" className="mb-12 scroll-mt-24">
        <QuickAnswer title="Quick Answer" as="h2">
          The Basement chapter sends officer Jason Thompson through a prison-like area beneath the hospital. You will earn the Escape Artist and Happy Reunion achievements, recover your pistol, and face the first enemy encounters before moving into The Sewer.
        </QuickAnswer>
      </section>

      <ChapterSection
        id="chapter-section"
        number={2}
        title="The Basement"
        estimatedTime="70-90 min"
        difficulty="Medium"
        overview={
          <>
            The Basement moves the action underground into a prison environment.
            Based on DanQ8000&apos;s full-game walkthrough chapter markers, this chapter runs from approximately 22:54 to 1:45:26, making it the longest individual chapter.
            It introduces the first real threats and combat sequences.
          </>
        }
        objectives={[
          "Escape the prison area and earn the Escape Artist achievement.",
          "Retrieve your pistol and earn the Happy Reunion achievement.",
          "Survive the first minion attacks and learn knife/weapon use.",
          "Reach the transition point to The Sewer.",
        ]}
        puzzles={
          <>
            The Basement focuses more on combat and evasion than puzzles. Expect door locks, key searches, and environmental traversal rather than complex code puzzles.
          </>
        }
        dangerAreas={[
          "Prison cells and narrow corridors with limited escape routes.",
          "Areas where minions first appear in numbers.",
          "Dark sections where the big hand enemy can grab you.",
        ]}
        collectibles={[
          "Documents about the facility's history.",
          "First weapon upgrades and supplies.",
        ]}
        tips={[
          "Use your knife when a minion grabs you to earn Sharp Senses.",
          "Conserve ammo early; the pistol is limited until you find more supplies.",
          "Watch for the big hand enemy that triggers the Touchy Subject death achievement if it kills you.",
        ]}
      />

      <section id="whats-next" className="mb-16 scroll-mt-24">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What&apos;s Next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/walkthrough/the-sewer" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Next Chapter</div>
            <div className="text-foreground font-headline-sm mb-1">The Sewer</div>
            <div className="text-sm text-on-surface-variant">Deeper underground with harder puzzles and collectibles.</div>
          </a>
          <a href="/achievements" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Achievements</div>
            <div className="text-foreground font-headline-sm mb-1">All 20 Achievements</div>
            <div className="text-sm text-on-surface-variant">Earn Escape Artist, Happy Reunion, and Sharp Senses here.</div>
          </a>
        </div>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Evidence note" titleAs="h3">
        Chapter boundaries follow chapter markers in DanQ8000&apos;s full-game walkthrough (community source, not officially confirmed). Exact room names and enemy placements are published only after verification.
      </Notice>
    </ArticleTemplate>
  );
}
