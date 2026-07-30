import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { ChapterSection } from "@/components/article/ChapterSection";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Comm Tower Walkthrough - Chapter 4 Guide",
  description: "Chapter 4 Comm Tower walkthrough for It Reaches: power and signal puzzles, patrol avoidance between tower sections, and progression to Sub Level.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough/comm-tower",
  },
};

const article: Article = {
  title: "It Reaches Comm Tower Walkthrough - Chapter 4",
  description: "A focused walkthrough for Chapter 4: Comm Tower in It Reaches. Covers power and signal puzzles, patrol routes between tower sections, and how to unlock the path to Sub Level.",
  href: "https://itreachesguide.com/walkthrough/comm-tower",
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
  { title: "Comm Tower" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "chapter-section", title: "Chapter 4: Comm Tower", level: 2 },
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
    title: "The Reach Walkthrough",
    description: "Chapter 3: open hospital wings and the first missables.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/the-reach",
    tag: "Walkthrough",
  },
  {
    title: "Puzzle Solutions",
    description: "Strategies for codes, fuses, and machinery.",
    image: "/images/puzzle.webp",
    href: "/puzzles",
    tag: "Puzzles",
  },
  {
    title: "Endings Guide",
    description: "How puzzle progress and choices affect each ending.",
    image: "/images/endings.webp",
    href: "/endings",
    tag: "Endings",
  },
];

export default function CommTowerPage() {
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
          Chapter 4: Comm Tower shifts the action toward communication and surface access areas. You restore power or signal systems, avoid patrols between separate tower sections, and unlock the descent into Sub Level. Exact switch sequences and safe windows are being verified.
        </QuickAnswer>
      </section>

      <ChapterSection
        id="chapter-section"
        number={4}
        title="Comm Tower"
        estimatedTime="40-60 min"
        difficulty="Medium"
        overview={
          <>
            Comm Tower shifts the location toward communication and surface access areas.
            Expect puzzles involving power, signals, or routing, while the entity continues to patrol between objectives.
          </>
        }
        objectives={[
          "Reach the communications or surface access area.",
          "Restore power, signal, or routing systems to progress.",
          "Avoid patrols while moving between separate tower sections.",
          "Unlock the path down to the Sub Level facilities.",
        ]}
        puzzles={
          <>
            Power-routing and signal-alignment puzzles are common here.
            You may need to restore generators, align antennas, or repair control panels.
          </>
        }
        dangerAreas={[
          "Exposed exterior or catwalk sections with limited cover.",
          "Control rooms with alarm sounds that attract the entity.",
          "Long corridors between tower sections with no safe rooms.",
        ]}
        collectibles={[
          "Radio logs or signal transcripts.",
          "Documents about the facility surface lockdown.",
        ]}
        tips={[
          "Plan your route before flipping switches; some actions make noise.",
          "Use the tower layout to create distance from the entity.",
          "Save after each major puzzle checkpoint.",
        ]}
      />

      <section id="whats-next" className="mb-16 scroll-mt-24">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What&apos;s Next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/walkthrough/sub-level" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Next Chapter</div>
            <div className="text-foreground font-headline-sm mb-1">Chapter 5: Sub Level</div>
            <div className="text-sm text-on-surface-variant">Underground machinery puzzles and the most aggressive entity behavior.</div>
          </a>
          <a href="/puzzles" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Puzzles</div>
            <div className="text-foreground font-headline-sm mb-1">Puzzle Solutions</div>
            <div className="text-sm text-on-surface-variant">General strategies for every puzzle type in It Reaches.</div>
          </a>
        </div>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Detailed steps coming soon" titleAs="h3">
        We are playing through Comm Tower to verify exact switch sequences, patrol routes, and collectible locations.
        The chapter structure above is based on the official Steam description and community-reported sources; it has not been officially confirmed by the developer.
      </Notice>
    </ArticleTemplate>
  );
}
