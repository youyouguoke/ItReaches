import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { ChapterSection } from "@/components/article/ChapterSection";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches The Sewer Walkthrough - Chapter 3 Guide",
  description: "The Sewer chapter walkthrough for It Reaches: objectives, multi-step puzzles, collectibles, and how to survive the deeper underground.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough/the-sewer",
  },
};

const article: Article = {
  title: "It Reaches The Sewer Walkthrough - Chapter 3 Guide",
  description: "The Sewer chapter walkthrough for It Reaches: objectives, multi-step puzzles, the first family collectibles, DanQ8000 timestamps, and tips.",
  href: "https://itreachesguide.com/walkthrough/the-sewer",
  publishedDate: "2026-07-30",
  updatedDate: "2026-09-08",
  author: "It Reaches Guide Team",
  readingTime: "6 min",
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
  { title: "The Sewer" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "chapter-section", title: "The Sewer", level: 2 },
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
    description: "Previous chapter: prison escape and pistol recovery.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/the-basement",
    tag: "Walkthrough",
  },
  {
    title: "Collectibles",
    description: "Which chapter each of the five family collectibles is in.",
    image: "/images/story.webp",
    href: "/collectibles",
    tag: "Collectibles",
  },
  {
    title: "Achievements",
    description: "All 20 Steam achievements and unlock conditions.",
    image: "/images/achievements.webp",
    href: "/achievements",
    tag: "Achievements",
  },
];

export default function TheSewerPage() {
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
          The Sewer is where It Reaches descends deeper underground. This chapter contains multi-step environmental puzzles, the first family collectibles tied to achievements, and more aggressive enemy patrols. Based on full-game walkthrough timestamps, several collectibles appear here and in the following Sewer Hideout.
        </QuickAnswer>
      </section>

      <ChapterSection
        id="chapter-section"
        number={3}
        title="The Sewer"
        estimatedTime="60-80 min"
        difficulty="High"
        missable
        overview={
          <>
            The Sewer takes you beneath the prison and hospital into flooded tunnels and maintenance areas.
            Based on DanQ8000&apos;s chapter markers, this chapter runs from approximately 1:45:26 to 2:52:55.
            Puzzles become more complex, the entity threat increases, and several missable collectibles are hidden in side areas.
          </>
        }
        objectives={[
          "Navigate the flooded sewer tunnels and maintenance areas.",
          "Solve multi-step environmental puzzles to unlock deeper sections.",
          "Find the first family collectibles (some tied to achievements).",
          "Reach The Sewer Hideout.",
        ]}
        puzzles={
          <>
            The Sewer introduces harder environmental puzzles: valve routing, power restoration, and possibly the first code locks.
            Exact solutions are published on the puzzle pages once verified against footage.
          </>
        }
        dangerAreas={[
          "Flooded corridors that slow movement and limit escape routes.",
          "Tight tunnels with few hiding spots.",
          "Enemy patrols that become more aggressive in deeper sections.",
        ]}
        collectibles={[
          "Toy Police Car tied to the \"Bring your child to work\" - Day achievement.",
          "Photograph of the family dog tied to the Fetch! achievement.",
          "Documents explaining the facility&apos;s underground history.",
        ]}
        tips={[
          "Explore every side passage before moving to the next main area -- collectibles are missable.",
          "Save before major puzzle sequences and before entering the Sewer Hideout.",
          "Use sound cues to detect nearby enemies in flooded sections.",
        ]}
      />

      <section id="whats-next" className="mb-16 scroll-mt-24">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What&apos;s Next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/walkthrough/the-sewer-hideout" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Next Chapter</div>
            <div className="text-foreground font-headline-sm mb-1">The Sewer Hideout</div>
            <div className="text-sm text-on-surface-variant">William Blake&apos;s Hideout and the Science and History achievement.</div>
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
