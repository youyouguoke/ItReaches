import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { ChapterSection } from "@/components/article/ChapterSection";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Oblivion Walkthrough - Chapter 6 & Final Guide",
  description: "Chapter 6 Oblivion walkthrough for It Reaches: final puzzle, ending-determining choices, and how to see every conclusion.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough/oblivion",
  },
};

const article: Article = {
  title: "It Reaches Oblivion Walkthrough - Chapter 6",
  description: "A focused walkthrough for Chapter 6: Oblivion in It Reaches. Covers the final area, the final puzzle sequence, ending-determining choices, and how collectible progress shapes the conclusion.",
  href: "https://itreachesguide.com/walkthrough/oblivion",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-30",
  author: "It Reaches Guide Team",
  readingTime: "5 min",
  difficulty: "High",
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
  { title: "Oblivion" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "chapter-section", title: "Chapter 6: Oblivion", level: 2 },
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
    title: "Endings Guide",
    description: "How to unlock and interpret every ending.",
    image: "/images/endings.webp",
    href: "/endings",
    tag: "Endings",
  },
  {
    title: "Achievements Guide",
    description: "All 20 Steam achievements and how to unlock them.",
    image: "/images/achievements.webp",
    href: "/achievements",
    tag: "Achievements",
  },
  {
    title: "Story Explained",
    description: "Lore and character breakdown for It Reaches.",
    image: "/images/story.webp",
    href: "/story",
    tag: "Story",
  },
];

export default function OblivionPage() {
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
          Chapter 6: Oblivion is the final chapter of It Reaches. Your choices, exploration, and collectible progress converge here to determine which ending you receive. Save before the final sequence if you want to see multiple outcomes.
        </QuickAnswer>
      </section>

      <ChapterSection
        id="chapter-section"
        number={6}
        title="Oblivion"
        estimatedTime="30-50 min"
        difficulty="High"
        missable
        overview={
          <>
            Oblivion is the final chapter. Your choices, exploration, and collectible progress converge here to determine which ending you receive.
            Save before the final sequence if you want to see multiple outcomes.
          </>
        }
        objectives={[
          "Reach the final area of the underground facility.",
          "Complete the final puzzle sequence.",
          "Make the ending-determining choice or action.",
          "Watch the ending and return to the main menu.",
        ]}
        puzzles={
          <>
            The final puzzle usually ties together clues from all previous chapters.
            Missing a document or key item may lock you out of the best ending.
          </>
        }
        dangerAreas={[
          "The final encounter area where the entity is most aggressive.",
          "Any sequence where you must choose between escape and confrontation.",
        ]}
        collectibles={[
          "Ending-specific documents only available in this chapter.",
          "Final achievement triggers tied to choices.",
        ]}
        tips={[
          "Make a manual save before entering the final sequence.",
          "Check your document and item inventory before the final choice.",
          "See the Endings Guide for how to unlock each outcome.",
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
            <div className="text-sm text-on-surface-variant">Requirements for the normal, secret, and true endings.</div>
          </a>
          <a href="/achievements" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Achievements</div>
            <div className="text-foreground font-headline-sm mb-1">All 20 Achievements</div>
            <div className="text-sm text-on-surface-variant">Missable warnings and unlock conditions for every achievement.</div>
          </a>
        </div>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Detailed steps coming soon" titleAs="h3">
        We are playing through Oblivion to verify the final puzzle, choice points, and ending triggers.
        The chapter structure above is based on the official Steam description and community-reported sources; it has not been officially confirmed by the developer.
      </Notice>
    </ArticleTemplate>
  );
}
