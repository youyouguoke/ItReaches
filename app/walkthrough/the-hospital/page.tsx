import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { ChapterSection } from "@/components/article/ChapterSection";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches The Hospital Walkthrough - Chapter 1 Guide",
  description: "The Hospital chapter walkthrough for It Reaches: objectives, key encounters, first puzzles, and collectible locations.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough/the-hospital",
  },
};

const article: Article = {
  title: "It Reaches The Hospital Walkthrough - Chapter 1 Guide",
  description: "The Hospital chapter walkthrough for It Reaches: objectives, key encounters, first puzzles, collectible locations, and DanQ8000 chapter timestamps.",
  href: "https://itreachesguide.com/walkthrough/the-hospital",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-31",
  author: "It Reaches Guide Team",
  readingTime: "5 min",
  difficulty: "Low",
  lastReviewed: "2026-07-31",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "DanQ8000 full gameplay walkthrough chapter timestamps",
    "Steam Community global achievement statistics",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Walkthrough", href: "/walkthrough" },
  { title: "The Hospital" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "chapter-section", title: "The Hospital", level: 2 },
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
    title: "The Basement",
    description: "Next chapter: prison escape and the pistol.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/the-basement",
    tag: "Walkthrough",
  },
  {
    title: "Beginner Tips",
    description: "Body camera and survival fundamentals.",
    image: "/images/tips.webp",
    href: "/tips",
    tag: "Tips",
  },
  {
    title: "Achievements",
    description: "All 20 Steam achievements and unlock conditions.",
    image: "/images/achievements.webp",
    href: "/achievements",
    tag: "Achievements",
  },
];

export default function TheHospitalPage() {
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
          The Hospital is the opening chapter of It Reaches. It introduces officer Jason Thompson, the body camera perspective, and the abandoned hospital setting. You will earn the Trespassing achievement by entering the hospital building and encounter the first environmental puzzles before descending to The Basement.
        </QuickAnswer>
      </section>

      <ChapterSection
        id="chapter-section"
        number={1}
        title="The Hospital"
        estimatedTime="15-25 min"
        difficulty="Low"
        overview={
          <>
            The Hospital chapter begins the game. You arrive at the abandoned hospital as officer Jason Thompson, learn the body camera controls, and explore the opening floors before the situation deteriorates.
            Based on DanQ8000&apos;s full-game walkthrough chapter markers, The Hospital runs from approximately 9:02 to 22:54.
          </>
        }
        objectives={[
          "Enter the hospital building and earn the Trespassing achievement.",
          "Learn the body camera controls, flashlight, and interaction systems.",
          "Explore the opening hospital area for documents and supplies.",
          "Reach the transition point to The Basement.",
        ]}
        puzzles={
          <>
            The Hospital contains introductory environmental puzzles: finding keys, restoring light sources, and opening locked doors.
            Exact room names and code solutions are being verified against walkthrough footage.
          </>
        }
        dangerAreas={[
          "Dark corridors without flashlight backup -- conserve battery.",
          "Areas where the entity makes its first scripted appearances.",
        ]}
        collectibles={[
          "Documents that introduce the hospital's history.",
          "Supplies and optional notes near the starting equipment.",
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
          <a href="/walkthrough/the-basement" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Next Chapter</div>
            <div className="text-foreground font-headline-sm mb-1">The Basement</div>
            <div className="text-sm text-on-surface-variant">Prison escape, pistol recovery, and first combat encounters.</div>
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
        We are verifying exact room names, item locations, and puzzle solutions against full-game walkthrough footage.
        The chapter structure above is based on official chapter markers from community walkthroughs.
      </Notice>
    </ArticleTemplate>
  );
}
