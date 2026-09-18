import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { ChapterSection } from "@/components/article/ChapterSection";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches The Organism Walkthrough - Final Chapter Guide",
  description: "The Organism final chapter walkthrough for It Reaches: conclusion, final encounter, and ending sequence.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough/the-organism",
  },
};

const article: Article = {
  title: "It Reaches The Organism Walkthrough - Final Chapter Guide",
  description: "The Organism final chapter walkthrough for It Reaches: conclusion, final encounter, ending sequence, and DanQ8000 timestamps.",
  href: "https://itreachesguide.com/walkthrough/the-organism",
  publishedDate: "2026-07-30",
  updatedDate: "2026-09-08",
  author: "It Reaches Guide Team",
  readingTime: "4 min",
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
  { title: "The Organism" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "chapter-section", title: "The Organism", level: 2 },
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
    title: "Endings Guide",
    description: "What to expect from the It Reaches ending.",
    image: "/images/endings.webp",
    href: "/endings",
    tag: "Endings",
  },
  {
    title: "Achievements",
    description: "All 20 Steam achievements and unlock conditions.",
    image: "/images/achievements.webp",
    href: "/achievements",
    tag: "Achievements",
  },
  {
    title: "Story Explained",
    description: "Lore and character breakdown.",
    image: "/images/story.webp",
    href: "/story",
    tag: "Story",
  },
];

export default function TheOrganismPage() {
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
          The Organism is the final chapter of It Reaches. It contains the game&apos;s conclusion, final encounter, and ending sequence. Based on full-game walkthrough timestamps, this is where the last collectible and any remaining achievements are unlocked before the credits.
        </QuickAnswer>
      </section>

      <ChapterSection
        id="chapter-section"
        number={5}
        title="The Organism"
        estimatedTime="15-25 min"
        difficulty="High"
        missable
        overview={
          <>
            The Organism is the final chapter. The story converges here, and the remaining hidden achievements or ending-specific conditions are resolved.
            Based on DanQ8000&apos;s chapter markers, this chapter runs from approximately 4:09:41 to 4:28:54.
            Save before entering this chapter if you want to return for cleanup.
          </>
        }
        objectives={[
          "Complete the final environmental puzzles and encounters.",
          "Unlock any remaining hidden achievements.",
          "Reach the ending sequence and credits.",
        ]}
        puzzles={
          <>
            The final chapter contains an environmental escape sequence (the rising
            liquid segment visible in walkthrough footage). The rare Early Grave
            achievement and other hidden triggers are associated with this part of
            the game, but their exact conditions are unverified.
          </>
        }
        dangerAreas={[
          "The final encounter area with the entity.",
          "Any sequence where failure means replaying the chapter.",
        ]}
        collectibles={[
          "Final achievement-triggering items.",
          "Any remaining family collectibles or lore documents.",
        ]}
        tips={[
          "Make a manual save before entering The Organism.",
          "Check your achievement progress; this is the last chance for collectibles and upgrades.",
          "See the Endings Guide for details on the conclusion.",
        ]}
      />

      <section id="whats-next" className="mb-16 scroll-mt-24">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What&apos;s Next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/endings" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Endings</div>
            <div className="text-foreground font-headline-sm mb-1">Endings Guide</div>
            <div className="text-sm text-on-surface-variant">What to expect from the It Reaches ending.</div>
          </a>
          <a href="/achievements" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Achievements</div>
            <div className="text-foreground font-headline-sm mb-1">All 20 Achievements</div>
            <div className="text-sm text-on-surface-variant">Checklist for 100% completion.</div>
          </a>
        </div>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Evidence note" titleAs="h3">
        Chapter boundaries follow chapter markers in DanQ8000&apos;s full-game walkthrough (community source, not officially confirmed). Hidden achievement conditions and ending triggers are not verified and are not guessed.
      </Notice>
    </ArticleTemplate>
  );
}
