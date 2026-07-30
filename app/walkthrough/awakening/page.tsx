import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { ChapterSection } from "@/components/article/ChapterSection";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Awakening Walkthrough - Chapter 1 Guide",
  description: "Chapter 1 Awakening walkthrough for It Reaches: body camera tutorial, opening objectives, first puzzles, danger areas, and collectibles.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough/awakening",
  },
};

const article: Article = {
  title: "It Reaches Awakening Walkthrough - Chapter 1",
  description: "A focused walkthrough for Chapter 1: Awakening in It Reaches. Covers the tutorial section, opening objectives, beginner puzzles, and what to collect before moving on.",
  href: "https://itreachesguide.com/walkthrough/awakening",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-30",
  author: "It Reaches Guide Team",
  readingTime: "4 min",
  difficulty: "Low",
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
  { title: "Awakening" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "chapter-section", title: "Chapter 1: Awakening", level: 2 },
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
    description: "Chapter 2: maintenance tunnels, stealth, and environmental puzzles.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/ventilation",
    tag: "Walkthrough",
  },
  {
    title: "Beginner Tips",
    description: "Essential survival advice before you start It Reaches.",
    image: "/images/tips.webp",
    href: "/tips",
    tag: "Tips",
  },
  {
    title: "Story Explained",
    description: "Characters, setting, and the dark mystery of the abandoned hospital.",
    image: "/images/story.webp",
    href: "/story",
    tag: "Story",
  },
];

export default function AwakeningPage() {
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
          Chapter 1: Awakening is the tutorial opening of It Reaches. You play as officer Jason Thompson, learn the body camera controls, explore the arrival area, and complete simple introductory puzzles before the main hospital opens up. Exact item locations and room names are being verified against the full release.
        </QuickAnswer>
      </section>

      <ChapterSection
        id="chapter-section"
        number={1}
        title="Awakening"
        estimatedTime="20-40 min"
        difficulty="Low"
        overview={
          <>
            The opening chapter introduces officer Jason Thompson and the body camera perspective.
            You will learn movement, interaction, flashlight use, and how the camera limits your peripheral vision.
            This chapter sets up the routine police operation that quickly becomes a nightmare.
          </>
        }
        objectives={[
          "Explore the arrival area and learn body camera controls.",
          "Collect any documents and supplies in the starting rooms.",
          "Reach the hospital entrance and trigger the next objective.",
          "Exit the prologue into the main hospital space.",
        ]}
        puzzles={
          <>
            The first puzzles are tutorial-level: find a keycard, unlock a door, or restore a light source.
            These teach the interaction and inventory systems without major punishment for failure.
          </>
        }
        dangerAreas={[
          "Dark corridors without flashlight backup -- conserve battery.",
          "The first scripted entity appearance is usually a chase tutorial, not a death trap.",
        ]}
        collectibles={[
          "Tutorial documents near the starting equipment.",
          "First optional note about the hospital lockdown.",
        ]}
        tips={[
          "Move slowly and pan the camera often; the body camera hides threats in your blind spots.",
          "Pick up every document -- they often unlock achievements and puzzle hints.",
          "Save as soon as the game allows manual saving.",
        ]}
      />

      <section id="whats-next" className="mb-16 scroll-mt-24">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What&apos;s Next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/walkthrough/ventilation" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Next Chapter</div>
            <div className="text-foreground font-headline-sm mb-1">Chapter 2: Ventilation</div>
            <div className="text-sm text-on-surface-variant">Maintenance tunnels, stealth, and the first real entity encounters.</div>
          </a>
          <a href="/tips" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Survival</div>
            <div className="text-foreground font-headline-sm mb-1">Beginner Tips</div>
            <div className="text-sm text-on-surface-variant">Body camera, saving, and stealth fundamentals.</div>
          </a>
        </div>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Detailed steps coming soon" titleAs="h3">
        We are playing through Awakening to verify exact room names, item locations, and puzzle solutions.
        The chapter structure above is based on the official Steam description and community-reported sources; it has not been officially confirmed by the developer.
      </Notice>
    </ArticleTemplate>
  );
}
