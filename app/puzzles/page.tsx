import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { puzzles, chapterName } from "@/lib/game-data";
import { Article } from "@/types/article";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "It Reaches Puzzles & Codes - One Page Per Puzzle",
  description:
    "Every confirmed puzzle in It Reaches on its own page: where it is, what to do, and the exact solution once verified. Unverified codes are never published.",
  alternates: {
    canonical: "https://itreachesguide.com/puzzles",
  },
};

const article: Article = {
  title: "It Reaches Puzzles & Codes",
  description:
    "A hub page for every confirmed puzzle in It Reaches. Each puzzle has its own page with location, steps, and the exact solution once verified against evidence.",
  href: "https://itreachesguide.com/puzzles",
  publishedDate: "2026-07-30",
  updatedDate: "2026-09-08",
  author: "It Reaches Guide Team",
  readingTime: "4 min",
  difficulty: "Mixed",
  lastReviewed: "2026-09-08",
  sources: [
    "Steam Community discussions mentioning code doors",
    "Full-game walkthrough footage (DanQ8000)",
    "YouTube shorts referencing specific puzzles",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Puzzles & Codes" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "all-puzzles", title: "All Puzzles", level: 1 },
  { id: "how-verification-works", title: "How Verification Works", level: 1 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

const related = [
  {
    title: "Walkthrough",
    description: "Chapter-by-chapter progression and objectives.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "Achievements",
    description: "All 20 achievements, including puzzle-related ones.",
    image: "/images/achievements.webp",
    href: "/achievements",
    tag: "Achievements",
  },
  {
    title: "Collectibles",
    description: "Missable items and which chapter each is in.",
    image: "/images/story.webp",
    href: "/collectibles",
    tag: "Collectibles",
  },
  {
    title: "Endings",
    description: "What is known — and not known — about endings.",
    image: "/images/endings.webp",
    href: "/endings",
    tag: "Endings",
  },
];

const faq = [
  {
    question: "Why is there no exact code on some puzzle pages?",
    answer:
      "We only publish codes verified against evidence. A page without a verified code tells you where to look instead of guessing.",
  },
  {
    question: "What puzzle types are in It Reaches?",
    answer:
      "Confirmed types: key retrieval, locked gates, cage locks, code doors, valve/power routing, and interactive objects like the hole in the wall.",
  },
  {
    question: "Where are codes usually hidden?",
    answer:
      "In nearby documents, notes, whiteboards, or environmental details within one or two rooms of the lock.",
  },
  {
    question: "A puzzle page says Unverified — should I trust it?",
    answer:
      "Unverified pages list what is confirmed (existence, general location) and describe a safe approach. The exact answer is withheld until verified.",
  },
];

export default function PuzzlesPage() {
  return (
    <ArticleTemplate
      article={article}
      breadcrumb={breadcrumb}
      toc={toc}
      faq={faq}
      related={related}
      verification="community"
      heroImage={{
        src: "/images/heroes/puzzles.jpg",
        alt: "It Reaches gameplay: the Basement Cage Lock padlock puzzle",
      }}
    >
      <section id="quick-answer" className="mb-12 scroll-mt-24">
        <QuickAnswer title="Quick Answer" as="h2">
          Six puzzles in It Reaches are confirmed by footage or player reports.
          Each has its own page below with its location, what to do, and the
          exact solution once verified. If a solution is not yet verified, the
          page says so — we never publish guessed codes.
        </QuickAnswer>
      </section>

      <section id="all-puzzles" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          All Puzzles
        </h2>
        <div className="space-y-3">
          {puzzles.map((puzzle) => (
            <Link
              key={puzzle.slug}
              href={`/puzzles/${puzzle.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 bg-surface-container-low border border-white/5 hover:border-primary transition-all"
            >
              <div className="flex-grow">
                <div className="font-headline-sm text-foreground mb-1">
                  {puzzle.name}
                </div>
                <div className="text-sm text-on-surface-variant">
                  {chapterName(puzzle.chapter)} — {puzzle.location}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <VerificationBadge status={puzzle.verification} />
                <ArrowRight
                  size={16}
                  className="text-primary group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="how-verification-works" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          How Verification Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-surface-container-low border border-white/5">
            <VerificationBadge status="verified" className="mb-3" />
            <p className="text-sm text-on-surface-variant leading-relaxed">
              The exact code or solution has been confirmed against official
              data or reproducible footage.
            </p>
          </div>
          <div className="p-5 bg-surface-container-low border border-white/5">
            <VerificationBadge status="community" className="mb-3" />
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Existence and general approach are supported by player footage,
              but the exact answer awaits independent confirmation.
            </p>
          </div>
          <div className="p-5 bg-surface-container-low border border-white/5">
            <VerificationBadge status="unverified" className="mb-3" />
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Only the puzzle&apos;s existence is confirmed. The page tells you
              where to look instead of inventing an answer.
            </p>
          </div>
        </div>
        <Notice variant="warning" title="No guessed codes" titleAs="h3">
          A wrong code costs you time and breaks trust. Until a solution is
          verified, you get the location, the clue-hunting strategy, and an
          honest status label.
        </Notice>
      </section>
    </ArticleTemplate>
  );
}
