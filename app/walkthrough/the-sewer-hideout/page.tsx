import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { ChapterSection } from "@/components/article/ChapterSection";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches The Sewer Hideout Walkthrough - Chapter 4 Guide",
  description: "The Sewer Hideout chapter walkthrough for It Reaches: William Blake's Hideout, multi-step puzzles, collectibles, and progression to The Organism.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough/the-sewer-hideout",
  },
};

const article: Article = {
  title: "It Reaches The Sewer Hideout Walkthrough - Chapter 4 Guide",
  description: "The Sewer Hideout chapter walkthrough for It Reaches: William Blake's Hideout, multi-step puzzles, remaining family collectibles, DanQ8000 timestamps, and progression to The Organism.",
  href: "https://itreachesguide.com/walkthrough/the-sewer-hideout",
  publishedDate: "2026-07-30",
  updatedDate: "2026-09-08",
  author: "It Reaches Guide Team",
  readingTime: "5 min",
  difficulty: "High",
  lastReviewed: "2026-09-08",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "DanQ8000 full gameplay walkthrough chapter timestamps",
    "wolker4 100% walkthrough collectible timestamps",
    "Steam Community global achievement statistics",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Walkthrough", href: "/walkthrough" },
  { title: "The Sewer Hideout" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "chapter-section", title: "The Sewer Hideout", level: 2 },
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
    title: "The Sewer",
    description: "Previous chapter: flooded tunnels and first collectibles.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/the-sewer",
    tag: "Walkthrough",
  },
  {
    title: "The Organism",
    description: "Final chapter: the game's conclusion.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/the-organism",
    tag: "Walkthrough",
  },
  {
    title: "Collectibles",
    description: "Which chapter each of the five family collectibles is in.",
    image: "/images/story.webp",
    href: "/collectibles",
    tag: "Collectibles",
  },
];

export default function TheSewerHideoutPage() {
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
          The Sewer Hideout chapter leads to William Blake&apos;s Hideout and earns the Science and History achievement. It contains the final family collectibles, harder puzzles, and the transition to the final chapter, The Organism.
        </QuickAnswer>
      </section>

      <ChapterSection
        id="chapter-section"
        number={4}
        title="The Sewer Hideout"
        estimatedTime="70-90 min"
        difficulty="High"
        missable
        overview={
          <>
            The Sewer Hideout is the late-game chapter where the story converges.
            Based on DanQ8000&apos;s chapter markers, this chapter runs from approximately 2:52:55 to 4:09:41.
            You reach William Blake&apos;s Hideout, collect the final family items, and unlock the path to The Organism.
          </>
        }
        objectives={[
          "Reach William Blake&apos;s Hideout and earn the Science and History achievement.",
          "Collect the remaining family collectibles tied to achievements.",
          "Solve the chapter's hardest environmental puzzles.",
          "Reach the transition point to The Organism.",
        ]}
        puzzles={
          <>
            Expect the game&apos;s most complex environmental puzzles in this chapter, possibly including the cage lock and code door referenced by players.
            Exact solutions are published on the puzzle pages once verified against footage.
          </>
        }
        dangerAreas={[
          "William Blake's Hideout and surrounding areas with concentrated enemy threats.",
          "Tight spaces where the entity and Venus Hand Traps are active.",
          "Backtracking paths needed to collect missable items.",
        ]}
        collectibles={[
          "Toy Carousel tied to Round and round we go.",
          "Son&apos;s family drawing tied to In good hands.",
          "Worn Football tied to A great team!",
          "Last documents and lore items before the ending.",
        ]}
        tips={[
          "Save before entering The Organism; this is the point of no return for chapter-specific cleanup.",
          "Check every room in the hideout before progressing -- several achievements depend on it.",
          "If you are missing collectibles, backtrack before the final transition.",
        ]}
      />

      <section id="whats-next" className="mb-16 scroll-mt-24">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What&apos;s Next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/walkthrough/the-organism" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Next Chapter</div>
            <div className="text-foreground font-headline-sm mb-1">The Organism</div>
            <div className="text-sm text-on-surface-variant">The final chapter and conclusion of It Reaches.</div>
          </a>
          <a href="/collectibles" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Collectibles</div>
            <div className="text-foreground font-headline-sm mb-1">Collectibles</div>
            <div className="text-sm text-on-surface-variant">All five family collectibles and which chapter each is in.</div>
          </a>
        </div>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Evidence note" titleAs="h3">
        Chapter boundaries follow chapter markers in DanQ8000&apos;s full-game walkthrough (community source, not officially confirmed). Collectible routes and puzzle solutions are published only after verification.
      </Notice>
    </ArticleTemplate>
  );
}
