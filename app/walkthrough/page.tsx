import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { ProgressTable } from "@/components/article/ProgressTable";
import { BeforeYouStart } from "@/components/article/BeforeYouStart";
import { ChapterSection } from "@/components/article/ChapterSection";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { HowToSchema } from "@/components/seo/HowToSchema";
import {
  chapters,
  getAchievement,
  getCollectible,
  getPuzzle,
} from "@/lib/game-data";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Walkthrough - Chapter by Chapter",
  description:
    "It Reaches walkthrough covering the five chapters confirmed by two independent community walkthroughs: The Hospital, The Basement, The Sewer, The Sewer Hideout, and The Organism. Objectives, missables, and next steps.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough",
  },
};

const article: Article = {
  title: "It Reaches Walkthrough: All Five Chapters",
  description:
    "A chapter-by-chapter walkthrough of It Reaches with objectives, missables, puzzle links, and achievement checkpoints. Chapter structure confirmed by two independent community walkthroughs.",
  href: "/walkthrough",
  publishedDate: "2026-05-20",
  updatedDate: "2026-09-08",
  author: "It Reaches Guide Team",
  readingTime: "12 min",
  difficulty: "Medium",
  lastReviewed: "2026-09-08",
  status: "complete",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "DanQ8000, 'IT REACHES Full Game Walkthrough' (YouTube, chapter markers)",
    "Neoseeker It Reaches Walkthrough and Guide (Berserker, last edited Aug 17, 2026)",
    "Steam Community global achievement statistics",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Walkthrough" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 2 },
  { id: "before-you-start", title: "Before You Start", level: 2 },
  { id: "chapter-overview", title: "Chapter Overview", level: 2 },
  ...chapters.map((c) => ({ id: `chapter-${c.order}`, title: c.name, level: 2 })),
  { id: "completion-checklist", title: "Completion Checklist", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
];

const related = [
  {
    title: "Puzzles & Codes",
    description: "Exact solutions for every confirmed puzzle.",
    image: "/images/puzzle.webp",
    href: "/puzzles",
    tag: "Puzzles",
  },
  {
    title: "Achievements",
    description: "All 20 achievements with unlock conditions and missables.",
    image: "/images/monster.webp",
    href: "/achievements",
    tag: "Achievements",
  },
  {
    title: "Collectibles",
    description: "The five missable family items, chapter by chapter.",
    image: "/images/story.webp",
    href: "/collectibles",
    tag: "Collectibles",
  },
];

const faq = [
  {
    question: "How many chapters are in It Reaches?",
    answer:
      "Five: The Hospital, The Basement, The Sewer, The Sewer Hideout, and The Organism. Two independent community walkthroughs agree on this structure; there is no official chapter list.",
  },
  {
    question: "How long is It Reaches?",
    answer:
      "About 4-6 hours for a first playthrough, and 8-10 hours for completionists hunting all 20 achievements and five collectibles.",
  },
  {
    question: "How many achievements does It Reaches have?",
    answer:
      "20 Steam achievements. Four are hidden: What is he made of?!, Forgiveness, Rest in Pieces, and Early Grave.",
  },
  {
    question: "Are there missable achievements or collectibles?",
    answer:
      "Yes. The five family collectibles (Toy Police Car, dog photograph, Toy Carousel, son's drawing, Worn Football) are missable, and the achievements tied to them too. Handshot, Touchy Subject, Sharp Senses, What is he made of?!, Early Grave, and Rest in Pieces are also easy to miss. Save before each chapter transition.",
  },
  {
    question: "Is there a point of no return?",
    answer:
      "Chapter transitions are the practical points of no return — you cannot return to earlier chapters. Clean up collectibles, upgrades, and combat achievements before moving on, especially before The Organism.",
  },
  {
    question: "Is It Reaches on consoles?",
    answer:
      "PC (Steam) and PS5 per player reports; the official Steam page confirms Windows. Treat any other platform as unconfirmed.",
  },
];

const missableSlugs = [
  "bring-your-child-to-work-day",
  "fetch",
  "round-and-round-we-go",
  "in-good-hands",
  "a-great-team",
  "handshot",
  "touchy-subject",
  "sharp-senses",
  "what-is-he-made-of",
  "early-grave",
  "rest-in-pieces",
  "fully-upgraded",
];

export default function WalkthroughPage() {
  return (
    <ArticleTemplate
      article={article}
      breadcrumb={breadcrumb}
      toc={toc}
      faq={faq}
      related={related}
      verification="community"
      heroImage={{
        src: "/images/heroes/walkthrough.jpg",
        alt: "It Reaches gameplay: hospital hallway on the first floor",
      }}
    >
      <HowToSchema
        title="It Reaches Walkthrough"
        description="Complete the five chapters of It Reaches: The Hospital, The Basement, The Sewer, The Sewer Hideout, and The Organism."
        steps={chapters.map((c) => ({
          name: c.name,
          text: c.summary,
        }))}
        totalTime="300"
      />

      <section id="quick-answer" className="mb-12 scroll-mt-24">
        <QuickAnswer title="Quick Answer" as="h2">
          <p className="mb-2">
            <strong>Five chapters are confirmed by two independent community walkthroughs:</strong>{" "}
            {chapters.map((c) => c.name).join(", ")}.
          </p>
          <p>
            DanQ8000&apos;s full-game footage shows chapter-select markers for exactly these five
            chapters, and the Neoseeker written guide independently matches the same structure.
            It is not officially confirmed by Emberflight Games. This page gives objectives,
            missables, and next steps per chapter, and links to dedicated puzzle, achievement,
            and collectible pages.
          </p>
        </QuickAnswer>
      </section>

      <BeforeYouStart
        estimatedTime="4-6 hours (8-10 for completionists)"
        difficulty="Medium-High"
        missables={[
          "Five family collectibles across The Sewer and The Sewer Hideout — all missable after chapter transitions.",
          "Handshot, Touchy Subject, Sharp Senses, What is he made of?!, Early Grave, Rest in Pieces.",
          "Fully Upgraded — only spend Upgrade Bolts on one weapon (the handgun).",
        ]}
        achievements="20 Steam achievements; 4 hidden (What is he made of?!, Forgiveness, Rest in Pieces, Early Grave)."
      />

      <div className="my-12">
        <ProgressTable
          chapters={chapters.map((c) => ({
            chapter: `${c.order}. ${c.name}`,
            playtime: c.playtime,
            puzzle:
              c.puzzles.length > 0
                ? c.puzzles
                    .map((s) => getPuzzle(s)?.name.split(" (")[0] ?? s)
                    .join(", ")
                : "—",
            boss: c.boss ?? "—",
            collectibles:
              c.collectibles.length > 0
                ? c.collectibles
                    .map((s) => getCollectible(s)?.name ?? s)
                    .join(", ")
                : "—",
            difficulty: c.difficulty,
          }))}
        />
      </div>

      {chapters.map((chapter) => (
        <ChapterSection
          key={chapter.slug}
          id={`chapter-${chapter.order}`}
          number={chapter.order}
          title={chapter.name}
          estimatedTime={chapter.playtime}
          difficulty={chapter.difficulty}
          missable={chapter.collectibles.length > 0}
          overview={<>{chapter.summary}</>}
          objectives={chapter.keyEvents}
          puzzles={
            <>
              {chapter.puzzles.length > 0 ? (
                <ul className="list-disc list-inside space-y-2">
                  {chapter.puzzles.map((slug) => {
                    const puzzle = getPuzzle(slug);
                    if (!puzzle) return null;
                    return (
                      <li key={slug}>
                        <a href={`/puzzles/${slug}`} className="text-primary hover:underline">
                          {puzzle.name}
                        </a>{" "}
                        {puzzle.solution ? (
                          <>— solution: <strong>{puzzle.solution}</strong></>
                        ) : (
                          "— mechanic guide"
                        )}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No named puzzles in this chapter — exploration and pursuit sequences."
              )}
            </>
          }
          dangerAreas={[chapter.boss ?? "Environmental hazards and pursuit sequences."]}
          collectibles={chapter.collectibles.map((slug) => {
            const collectible = getCollectible(slug);
            const achievement = collectible
              ? getAchievement(collectible.achievement)
              : null;
            return collectible
              ? `${collectible.name} — unlocks "${achievement?.name ?? "an achievement"}". Location: ${collectible.location}`
              : slug;
          })}
          tips={[
            chapter.collectibles.length > 0
              ? `Collect all ${chapter.collectibles.length} item${chapter.collectibles.length > 1 ? "s" : ""} before leaving — chapter transitions are points of no return.`
              : "No missable collectibles in this chapter.",
            ...chapter.achievements
              .map((s) => getAchievement(s))
              .filter((a) => a && a.missable === true)
              .map((a) => `Missable here: ${a!.name} — ${a!.howToUnlock}`),
          ]}
        />
      ))}

      <section id="completion-checklist" className="mb-12 scroll-mt-24">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Completion Checklist
        </h2>
        <p className="text-on-surface-variant leading-relaxed mb-4">
          Before finishing The Organism, make sure you have:
        </p>
        <ul className="space-y-3 text-on-surface-variant leading-relaxed list-disc list-inside">
          <li>
            All five family collectibles (see the{" "}
            <a href="/collectibles" className="text-primary hover:underline">
              Collectibles hub
            </a>
            ).
          </li>
          <li>
            The missable achievements:{" "}
            {missableSlugs.map((slug, i) => {
              const a = getAchievement(slug);
              return a ? (
                <span key={slug}>
                  <a href={`/achievements/${slug}`} className="text-primary hover:underline">
                    {a.name}
                  </a>
                  {i < missableSlugs.length - 1 ? ", " : ""}
                </span>
              ) : null;
            })}
            .
          </li>
          <li>One fully upgraded weapon for Fully Upgraded.</li>
        </ul>
      </section>

      <Notice variant="info" title="Spoiler policy" titleAs="h3">
        This walkthrough contains story and progression spoilers. For puzzle solutions without
        story context, use the{" "}
        <a href="/puzzles" className="text-primary hover:underline">
          Puzzles hub
        </a>
        .
      </Notice>

      <SourcesAndDisclaimer
        lastReviewed="2026-09-08"
        sources={article.sources ?? []}
      />
    </ArticleTemplate>
  );
}
