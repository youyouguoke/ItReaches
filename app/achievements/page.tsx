import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { getHeroImage } from "@/lib/hero-images";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { Badge } from "@/components/ui/Badge";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { achievements, chapterName } from "@/lib/game-data";
import { Article } from "@/types/article";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "It Reaches Achievements - All 20 Steam Achievements",
  description:
    "All 20 It Reaches Steam achievements: official names, descriptions, global unlock rates, missable warnings, and a detail page per achievement.",
  alternates: {
    canonical: "https://itreachesguide.com/achievements",
  },
};

const article: Article = {
  title: "It Reaches Achievements - All 20 Steam Achievements",
  description:
    "Every Steam achievement for It Reaches with official descriptions, global unlock rates, missable warnings, and links to per-achievement detail pages.",
  href: "https://itreachesguide.com/achievements",
  publishedDate: "2026-07-30",
  updatedDate: "2026-09-08",
  author: "It Reaches Guide Team",
  readingTime: "6 min",
  difficulty: "Normal",
  lastReviewed: "2026-09-08",
  sources: [
    "Steam Community global achievements for It Reaches (App ID 4119360)",
    "Official achievement names and descriptions from Steam",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Achievements" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "list", title: "All 20 Achievements", level: 1 },
  { id: "missable", title: "Missable Warnings", level: 1 },
  { id: "completion", title: "Completion Tips", level: 1 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

const related = [
  {
    title: "Collectibles",
    description: "The five family items tied to achievements.",
    image: "/images/story.webp",
    href: "/collectibles",
    tag: "Collectibles",
  },
  {
    title: "Walkthrough",
    description: "Chapter-by-chapter progression.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "Endings",
    description: "Ending status and hidden triggers.",
    image: "/images/endings.webp",
    href: "/endings",
    tag: "Endings",
  },
  {
    title: "FAQ",
    description: "Chapters, saves, and completion questions.",
    image: "/images/tips.webp",
    href: "/faq",
    tag: "FAQ",
  },
];

const faq = [
  {
    question: "How many achievements are in It Reaches?",
    answer:
      "20. Names, descriptions, and global unlock rates are official Steam Community data.",
  },
  {
    question: "Which achievements are missable?",
    answer:
      "The five collectible achievements (Toy Police Car, dog photograph, Toy Carousel, son's drawing, Worn Football) and Fully Upgraded. Save before leaving The Sewer and The Sewer Hideout.",
  },
  {
    question: "What about the hidden achievements?",
    answer:
      "What is he made of?!, Forgiveness, Rest in Pieces, and Early Grave have hidden descriptions. Their conditions are unverified and are not guessed.",
  },
  {
    question: "What is the rarest achievement?",
    answer:
      "Fully Upgraded at 3.7% global unlock. Among hidden ones, Early Grave is rarest at 5.8%.",
  },
];

export default function AchievementsPage() {
  const missables = achievements.filter((a) => a.missable === true);
  const hidden = achievements.filter((a) => a.hidden);

  return (
    <ArticleTemplate
      article={article}
      breadcrumb={breadcrumb}
      toc={toc}
      faq={faq}
      related={related}
      verification="verified"
      heroImage={getHeroImage("achievements")}
    >
      <section id="quick-answer" className="mb-12 scroll-mt-24">
        <QuickAnswer title="Quick Answer" as="h2">
          It Reaches has 20 Steam achievements. Most story and combat
          achievements unlock naturally; six are missable (five collectibles +
          Fully Upgraded). Four have hidden descriptions — their conditions are
          unverified. Every achievement has its own detail page.
        </QuickAnswer>
      </section>

      <section id="list" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          All 20 Achievements
        </h2>
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <Link
              key={achievement.slug}
              href={`/achievements/${achievement.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 bg-surface-container-low border border-white/5 hover:border-primary transition-all"
            >
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-headline-sm text-foreground">
                    {achievement.name}
                  </span>
                  {achievement.hidden && <Badge variant="warning">Hidden</Badge>}
                  {achievement.missable === true && (
                    <Badge variant="warning">Missable</Badge>
                  )}
                </div>
                <div className="text-sm text-on-surface-variant">
                  {achievement.description} — {chapterName(achievement.chapter)} —{" "}
                  {achievement.global} of players
                </div>
              </div>
              <div className="flex items-center gap-4">
                <VerificationBadge status={achievement.verification} />
                <ArrowRight
                  size={16}
                  className="text-primary group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="missable" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Missable Warnings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {missables.map((achievement) => (
            <Link
              key={achievement.slug}
              href={`/achievements/${achievement.slug}`}
              className="p-5 bg-surface-container-low border border-warning/20 hover:border-warning transition-colors"
            >
              <div className="font-headline-sm text-foreground mb-1">
                {achievement.name}
              </div>
              <div className="text-sm text-on-surface-variant">
                {achievement.howToUnlock}
              </div>
            </Link>
          ))}
        </div>
        <Notice variant="warning" title="Save before chapter transitions" titleAs="h3">
          The Sewer and The Sewer Hideout contain all five family collectibles.
          Once you leave a chapter, uncollected items may be gone for the rest
          of the playthrough.
        </Notice>
      </section>

      <section id="completion" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Completion Tips
        </h2>
        <ul className="space-y-4 text-on-surface-variant leading-relaxed list-disc list-inside">
          <li>
            <strong>Save often:</strong> use separate slots before each chapter
            transition.
          </li>
          <li>
            <strong>Route the collectibles:</strong> two in The Sewer, three in
            The Sewer Hideout — see the Collectibles page.
          </li>
          <li>
            <strong>Prioritize one weapon</strong> if you want Fully Upgraded;
            resources are limited.
          </li>
          <li>
            <strong>Planned deaths:</strong> Touchy Subject requires dying to a
            big hand enemy.
          </li>
          <li>
            <strong>Hidden achievements:</strong> {hidden.length} descriptions
            are hidden on Steam; conditions are tracked on their pages as
            verification progresses.
          </li>
        </ul>
      </section>
    </ArticleTemplate>
  );
}
