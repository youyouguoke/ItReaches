import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { Badge } from "@/components/ui/Badge";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { collectibles, chapterName, getAchievement } from "@/lib/game-data";
import { Article } from "@/types/article";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "It Reaches Collectibles - All 5 Family Items",
  description:
    "All five missable family collectibles in It Reaches: which chapter each is in, how to reach it, and which achievement it unlocks.",
  alternates: {
    canonical: "https://itreachesguide.com/collectibles",
  },
};

const article: Article = {
  title: "It Reaches Collectibles - All 5 Family Items",
  description:
    "The five family collectibles in It Reaches are all missable. This page shows which chapter each is in, how to reach it, and which achievement it unlocks.",
  href: "https://itreachesguide.com/collectibles",
  publishedDate: "2026-09-08",
  updatedDate: "2026-09-08",
  author: "It Reaches Guide Team",
  readingTime: "3 min",
  difficulty: "Easy",
  lastReviewed: "2026-09-08",
  sources: [
    "Steam Community global achievements for It Reaches (App ID 4119360)",
    "DanQ8000 full gameplay walkthrough (chapter assignment)",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Collectibles" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "all-items", title: "All Collectibles", level: 1 },
  { id: "routing", title: "Recommended Route", level: 1 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

const related = [
  {
    title: "Achievements",
    description: "Each collectible unlocks an achievement — see all 20.",
    image: "/images/achievements.webp",
    href: "/achievements",
    tag: "Achievements",
  },
  {
    title: "The Sewer",
    description: "Chapter 3 — two collectibles here.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/the-sewer",
    tag: "Walkthrough",
  },
  {
    title: "The Sewer Hideout",
    description: "Chapter 4 — three collectibles here.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/the-sewer-hideout",
    tag: "Walkthrough",
  },
  {
    title: "Walkthrough",
    description: "Full chapter-by-chapter progression.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
];

const faq = [
  {
    question: "How many collectibles are in It Reaches?",
    answer:
      "Five family items are tied to achievements: Toy Police Car, photograph of the family dog, Toy Carousel, son's family drawing, and Worn Football.",
  },
  {
    question: "Are all collectibles missable?",
    answer:
      "Yes. Two are in The Sewer and three in The Sewer Hideout. Save before leaving each chapter.",
  },
  {
    question: "Do collectibles affect the ending?",
    answer:
      "Unverified. No official source confirms collectible effects on endings.",
  },
  {
    question: "Why don't pages show exact pickup points?",
    answer:
      "Exact pickup coordinates are published after frame-by-frame footage verification. Until then you get the chapter and the safe approach.",
  },
];

export default function CollectiblesPage() {
  return (
    <ArticleTemplate
      article={article}
      breadcrumb={breadcrumb}
      toc={toc}
      faq={faq}
      related={related}
      verification="community"
      heroImage={{
        src: "/images/heroes/collectibles.jpg",
        alt: "It Reaches gameplay: Toy Police Car collectible in the Memory Area",
      }}
    >
      <section id="quick-answer" className="mb-12 scroll-mt-24">
        <QuickAnswer title="Quick Answer" as="h2">
          Five family collectibles exist in It Reaches, all missable: two in
          The Sewer, three in The Sewer Hideout. Each unlocks its own
          achievement. Grab them before opening major gates or transitioning
          chapters.
        </QuickAnswer>
      </section>

      <section id="all-items" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          All Collectibles
        </h2>
        <div className="space-y-3">
          {collectibles.map((collectible) => {
            const achievement = getAchievement(collectible.achievement);
            return (
              <Link
                key={collectible.slug}
                href={`/collectibles/${collectible.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 bg-surface-container-low border border-white/5 hover:border-primary transition-all"
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-headline-sm text-foreground">
                      {collectible.name}
                    </span>
                    {collectible.missable && (
                      <Badge variant="warning">Missable</Badge>
                    )}
                  </div>
                  <div className="text-sm text-on-surface-variant">
                    {chapterName(collectible.chapter)}
                    {achievement ? ` — unlocks "${achievement.name}"` : ""}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <VerificationBadge status={collectible.verification} />
                  <ArrowRight
                    size={16}
                    className="text-primary group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="routing" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Recommended Route
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-on-surface-variant leading-relaxed">
          <li>
            <strong>In The Sewer:</strong> explore every side passage before
            opening major gates — the Toy Police Car and the dog photograph are
            here.
          </li>
          <li>
            <strong>Before entering The Sewer Hideout:</strong> make a separate
            save slot.
          </li>
          <li>
            <strong>In The Sewer Hideout:</strong> check every side room before
            the final transition — Toy Carousel, drawing, and Worn Football.
          </li>
          <li>
            <strong>Before The Organism:</strong> verify all five collectible
            achievements popped; if any are missing, reload the chapter save.
          </li>
        </ol>
        <Notice variant="warning" title="All five are missable" titleAs="h3">
          Once you transition out of a chapter, uncollected items are gone for
          the rest of the playthrough. Keep separate save slots.
        </Notice>
      </section>
    </ArticleTemplate>
  );
}
