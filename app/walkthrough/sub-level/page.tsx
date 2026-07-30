import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { ChapterSection } from "@/components/article/ChapterSection";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Sub Level Walkthrough - Chapter 5 Guide",
  description: "Chapter 5 Sub Level walkthrough for It Reaches: underground machinery puzzles, backtracking, missable collectibles, and the final elevator to Oblivion.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough/sub-level",
  },
};

const article: Article = {
  title: "It Reaches Sub Level Walkthrough - Chapter 5",
  description: "A focused walkthrough for Chapter 5: Sub Level in It Reaches. Covers underground machinery puzzles, dangerous backtracking, missable key items, and the transition to the final chapter.",
  href: "https://itreachesguide.com/walkthrough/sub-level",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-30",
  author: "It Reaches Guide Team",
  readingTime: "7 min",
  difficulty: "Very High",
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
  { title: "Sub Level" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "chapter-section", title: "Chapter 5: Sub Level", level: 2 },
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
    title: "Comm Tower Walkthrough",
    description: "Chapter 4: power, signals, and patrols between tower sections.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/comm-tower",
    tag: "Walkthrough",
  },
  {
    title: "Endings Guide",
    description: "How collectible progress affects the final chapter and endings.",
    image: "/images/endings.webp",
    href: "/endings",
    tag: "Endings",
  },
  {
    title: "Items & Collectibles",
    description: "How the document and collectible system works in It Reaches.",
    image: "/images/story.webp",
    href: "/items",
    tag: "Items",
  },
];

export default function SubLevelPage() {
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
          Chapter 5: Sub Level is the largest and most dangerous chapter of It Reaches. You descend into underground facilities, solve multi-step machinery puzzles, backtrack with new tools, and face the most aggressive entity behavior before entering the final chapter. Save before every major sequence.
        </QuickAnswer>
      </section>

      <ChapterSection
        id="chapter-section"
        number={5}
        title="Sub Level"
        estimatedTime="60-90 min"
        difficulty="Very High"
        missable
        overview={
          <>
            Sub Level takes you deeper into the underground facilities.
            This is typically the largest chapter, with multi-step machinery puzzles, backtracking, and the most aggressive entity behavior.
          </>
        }
        objectives={[
          "Descend into the underground facility levels.",
          "Solve multi-step machinery and power puzzles.",
          "Backtrack across previously opened areas with new tools.",
          "Reach the final elevator or transition to Oblivion.",
        ]}
        puzzles={
          <>
            The hardest puzzles in the game appear here: machinery activation, timed sequences, and key item combinations across multiple rooms.
            Take notes or use the in-game journal if available.
          </>
        }
        dangerAreas={[
          "Large machinery rooms with limited hiding spots.",
          "Timed puzzle sections where the entity may interrupt.",
          "Backtracking paths that become more dangerous after story events.",
        ]}
        collectibles={[
          "Underground facility documents and experiment notes.",
          "Final missable key items for the true ending.",
          "Supplies hidden behind optional side puzzles.",
        ]}
        tips={[
          "Open shortcuts as early as possible to reduce future backtracking risk.",
          "Save before every major puzzle sequence.",
          "If an area is too dangerous, look for an alternate route or wait for the patrol to pass.",
        ]}
      />

      <section id="whats-next" className="mb-16 scroll-mt-24">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What&apos;s Next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/walkthrough/oblivion" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Next Chapter</div>
            <div className="text-foreground font-headline-sm mb-1">Chapter 6: Oblivion</div>
            <div className="text-sm text-on-surface-variant">The final chapter, ending choices, and conclusion.</div>
          </a>
          <a href="/endings" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Endings</div>
            <div className="text-foreground font-headline-sm mb-1">Endings Guide</div>
            <div className="text-sm text-on-surface-variant">How your choices and collectibles determine the ending.</div>
          </a>
        </div>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Detailed steps coming soon" titleAs="h3">
        We are playing through Sub Level to verify exact machinery sequences, safe routes, and missable item locations.
        The chapter structure above is based on the official Steam description and community-reported sources; it has not been officially confirmed by the developer.
      </Notice>
    </ArticleTemplate>
  );
}
