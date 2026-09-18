import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { Badge } from "@/components/ui/Badge";
import { Track } from "@/components/analytics/Track";
import {
  puzzles,
  getPuzzle,
  chapterName,
  getAchievement,
  getChapter,
} from "@/lib/game-data";
import { Article } from "@/types/article";
import { Metadata } from "next";
import Link from "next/link";

interface PuzzlePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return puzzles.map((puzzle) => ({ slug: puzzle.slug }));
}

export function generateMetadata({ params }: PuzzlePageProps): Metadata {
  const puzzle = getPuzzle(params.slug);
  if (!puzzle) return {};
  return {
    title: `It Reaches ${puzzle.name} - Solution & Location`,
    description: puzzle.quickAnswer,
    alternates: {
      canonical: `https://itreachesguide.com/puzzles/${puzzle.slug}`,
    },
  };
}

export default function PuzzleDetailPage({ params }: PuzzlePageProps) {
  const puzzle = getPuzzle(params.slug);
  if (!puzzle) notFound();

  const chapter = getChapter(puzzle.chapter);
  const achievement = puzzle.relatedAchievement
    ? getAchievement(puzzle.relatedAchievement)
    : undefined;
  const relatedChapter = chapter
    ? {
        title: `${chapter.name} Walkthrough`,
        description: `Chapter ${chapter.order} objectives, danger areas, and missables.`,
        image: "/images/walkthrough.webp",
        href: `/walkthrough/${chapter.slug}`,
        tag: "Walkthrough",
      }
    : {
        title: "Walkthrough",
        description: "Chapter-by-chapter progression.",
        image: "/images/walkthrough.webp",
        href: "/walkthrough",
        tag: "Walkthrough",
      };
  const relatedAchievement = achievement
    ? {
        title: achievement.name,
        description: `How to unlock: ${achievement.howToUnlock}`,
        image: "/images/achievements.webp",
        href: `/achievements/${achievement.slug}`,
        tag: "Achievement",
      }
    : undefined;

  const article: Article = {
    title: `It Reaches ${puzzle.name} - Solution & Location`,
    description: puzzle.quickAnswer,
    href: `https://itreachesguide.com/puzzles/${puzzle.slug}`,
    publishedDate: "2026-09-08",
    updatedDate: "2026-09-08",
    author: "It Reaches Guide Team",
    readingTime: "2 min",
    difficulty: chapter?.difficulty ?? "Mixed",
    lastReviewed: "2026-09-08",
    sources: [puzzle.verificationNote],
  };

  const breadcrumb = [
    { title: "Home", href: "/" },
    { title: "Puzzles & Codes", href: "/puzzles" },
    { title: puzzle.name },
  ];

  const toc = [
    { id: "quick-answer", title: "Quick Answer", level: 1 },
    ...(puzzle.solution ? [{ id: "solution", title: "Exact Solution", level: 1 }] : []),
    { id: "where-to-find", title: "Where to Find It", level: 1 },
    { id: "steps", title: "Step-by-Step", level: 1 },
    ...(puzzle.whatItUnlocks ? [{ id: "unlocks", title: "What It Unlocks", level: 1 }] : []),
    ...(achievement ? [{ id: "related-achievement", title: "Related Achievement", level: 1 }] : []),
    { id: "next-step", title: "Next Step", level: 1 },
  ];

  const related = [
    relatedChapter,
    {
      title: "Puzzles & Codes",
      description: "All confirmed puzzles, one page each.",
      image: "/images/puzzle.webp",
      href: "/puzzles",
      tag: "Puzzles",
    },
    ...(relatedAchievement ? [relatedAchievement] : []),
  ];

  return (
    <ArticleTemplate
      article={article}
      breadcrumb={breadcrumb}
      toc={toc}
      faq={[]}
      related={related}
      verification={puzzle.verification}
    >
      <Track event="problem_page_view" props={{ type: "puzzle", slug: puzzle.slug }} />
      <Track event="answer_reveal" props={{ type: "puzzle", slug: puzzle.slug }} />
      <section id="quick-answer" className="mb-12 scroll-mt-24">
        <QuickAnswer title="Quick Answer" as="h2">
          {puzzle.quickAnswer}
        </QuickAnswer>
      </section>

      {puzzle.solution ? (
        <section id="solution" className="mb-12">
          <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
            Exact Solution
          </h2>
          <div className="p-6 bg-primary/5 border border-primary/20">
            <div className="font-label text-[10px] uppercase tracking-widest text-primary mb-2">
              Code / Solution
            </div>
            <div className="font-display text-2xl text-foreground font-bold">
              {puzzle.solution}
            </div>
          </div>
        </section>
      ) : (
        <Notice variant="warning" title="Solution not yet independently verified" titleAs="h3">
          {puzzle.verificationNote} We do not publish guessed codes. The
          sections below tell you exactly where to look.
        </Notice>
      )}

      <section id="where-to-find" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Where to Find It
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-surface-container-low border border-white/5">
            <div className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/60 mb-1">
              Chapter
            </div>
            <div className="text-foreground font-body">
              {chapterName(puzzle.chapter)}
            </div>
          </div>
          <div className="p-4 bg-surface-container-low border border-white/5">
            <div className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/60 mb-1">
              Location
            </div>
            <div className="text-foreground font-body">{puzzle.location}</div>
          </div>
        </div>
      </section>

      <section id="steps" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Step-by-Step
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-on-surface-variant leading-relaxed">
          {puzzle.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
          {!puzzle.solution && (
            <li>
              Found the code or mechanism?{" "}
              <Link href="/search" className="text-primary hover:underline">
                Tell us via search feedback
              </Link>{" "}
              — verification protects other players.
            </li>
          )}
        </ol>
      </section>

      {puzzle.whatItUnlocks && (
        <section id="unlocks" className="mb-12">
          <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
            What It Unlocks
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            {puzzle.whatItUnlocks}
          </p>
        </section>
      )}

      {achievement && (
        <section id="related-achievement" className="mb-12">
          <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
            Related Achievement
          </h2>
          <Link
            href={`/achievements/${achievement.slug}`}
            className="group flex items-center justify-between gap-4 p-5 bg-surface-container-low border border-white/5 hover:border-primary transition-all"
          >
            <div>
              <div className="font-headline-sm text-foreground mb-1">
                {achievement.name}
              </div>
              <div className="text-sm text-on-surface-variant">
                {achievement.description}
              </div>
            </div>
            <Badge variant="new">View</Badge>
          </Link>
        </section>
      )}

      <section id="next-step" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Next Step
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href={chapter ? `/walkthrough/${chapter.slug}` : "/walkthrough"}
            className="block p-5 bg-surface-container-low border border-white/5 hover:border-primary transition-colors"
          >
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">
              Continue the story
            </div>
            <div className="text-foreground font-headline-sm">
              {chapter ? `${chapter.name} walkthrough` : "Full walkthrough"}
            </div>
          </Link>
          <Link
            href="/puzzles"
            className="block p-5 bg-surface-container-low border border-white/5 hover:border-primary transition-colors"
          >
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">
              More problems
            </div>
            <div className="text-foreground font-headline-sm">
              All puzzles & codes
            </div>
          </Link>
        </div>
      </section>
    </ArticleTemplate>
  );
}
