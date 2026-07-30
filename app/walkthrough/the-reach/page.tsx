import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { ChapterSection } from "@/components/article/ChapterSection";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches The Reach Walkthrough - Chapter 3 Guide",
  description: "Chapter 3 The Reach walkthrough for It Reaches: open hospital wings, multi-step puzzles, entity chases, and missable collectibles.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough/the-reach",
  },
};

const article: Article = {
  title: "It Reaches The Reach Walkthrough - Chapter 3",
  description: "A focused walkthrough for Chapter 3: The Reach in It Reaches. Covers the open hospital wings, multi-step environmental puzzles, entity evasion, and the first missable collectibles.",
  href: "https://itreachesguide.com/walkthrough/the-reach",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-30",
  author: "It Reaches Guide Team",
  readingTime: "6 min",
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
  { title: "The Reach" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "chapter-section", title: "Chapter 3: The Reach", level: 2 },
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
    title: "Ventilation Walkthrough",
    description: "Chapter 2: maintenance tunnels and stealth basics.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/ventilation",
    tag: "Walkthrough",
  },
  {
    title: "Puzzle Solutions",
    description: "General strategies for codes, fuses, and machinery.",
    image: "/images/puzzle.webp",
    href: "/puzzles",
    tag: "Puzzles",
  },
  {
    title: "Story Explained",
    description: "Characters, setting, and the dark mystery of the abandoned hospital.",
    image: "/images/story.webp",
    href: "/story",
    tag: "Story",
  },
];

export default function TheReachPage() {
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
          Chapter 3: The Reach is where the entity becomes a persistent threat. You explore wider hospital wings, solve multi-step environmental puzzles, and begin collecting documents that explain the facility&apos;s history. This chapter contains the first missable collectibles, so save often and read everything.
        </QuickAnswer>
      </section>

      <ChapterSection
        id="chapter-section"
        number={3}
        title="The Reach"
        estimatedTime="45-75 min"
        difficulty="High"
        missable
        overview={
          <>
            The Reach is where the entity becomes a persistent threat.
            You must balance exploration with evasion, solve larger environmental puzzles, and begin uncovering the dark mystery behind the facility.
          </>
        }
        objectives={[
          "Explore the main hospital wings and locate key documents.",
          "Solve multi-step environmental puzzles to unlock new areas.",
          "Evade the entity while progressing through the hospital.",
          "Reach the transition point to the Comm Tower area.",
        ]}
        puzzles={
          <>
            This chapter introduces the first major multi-step puzzles: code locks, fuse routing, and key item combinations.
            Document notes are usually required to find codes.
          </>
        }
        dangerAreas={[
          "Open wards with long sightlines and few hiding spots.",
          "Stairwells where the entity can cut off your escape.",
          "Puzzle rooms with noisy machinery that may draw attention.",
        ]}
        collectibles={[
          "Lore documents that explain the hospital history.",
          "Key items required for later chapters.",
          "First missable achievement collectibles.",
        ]}
        tips={[
          "Read every document before leaving an area; codes are often single-use hints.",
          "If detected, run toward the nearest door or safe room, not into dead ends.",
          "Backtrack only when the patrol route is clear.",
        ]}
      />

      <section id="whats-next" className="mb-16 scroll-mt-24">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What&apos;s Next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/walkthrough/comm-tower" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Next Chapter</div>
            <div className="text-foreground font-headline-sm mb-1">Chapter 4: Comm Tower</div>
            <div className="text-sm text-on-surface-variant">Power, signals, and patrols between tower sections.</div>
          </a>
          <a href="/items" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Collectibles</div>
            <div className="text-foreground font-headline-sm mb-1">Items & Collectibles</div>
            <div className="text-sm text-on-surface-variant">How the document and collectible system works in It Reaches.</div>
          </a>
        </div>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Detailed steps coming soon" titleAs="h3">
        We are playing through The Reach to verify exact room names, code locations, and collectible placements.
        The chapter structure above is based on the official Steam description and community-reported sources; it has not been officially confirmed by the developer.
      </Notice>
    </ArticleTemplate>
  );
}
