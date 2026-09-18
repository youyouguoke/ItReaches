import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { Badge } from "@/components/ui/Badge";
import { Track } from "@/components/analytics/Track";
import {
  achievements,
  getAchievement,
  chapterName,
  getChapter,
  collectibles,
} from "@/lib/game-data";
import { Article } from "@/types/article";
import { Metadata } from "next";
import Link from "next/link";

interface AchievementPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return achievements.map((achievement) => ({ slug: achievement.slug }));
}

export function generateMetadata({ params }: AchievementPageProps): Metadata {
  const achievement = getAchievement(params.slug);
  if (!achievement) return {};
  return {
    title: `It Reaches ${achievement.name} Achievement - How to Unlock`,
    description: `How to unlock ${achievement.name} in It Reaches: ${achievement.howToUnlock} (${achievement.global} of players).`,
    alternates: {
      canonical: `https://itreachesguide.com/achievements/${achievement.slug}`,
    },
  };
}

export default function AchievementDetailPage({ params }: AchievementPageProps) {
  const achievement = getAchievement(params.slug);
  if (!achievement) notFound();

  const chapter = getChapter(achievement.chapter);
  const linkedCollectible = collectibles.find(
    (c) => c.achievement === achievement.slug
  );

  const article: Article = {
    title: `It Reaches ${achievement.name} Achievement`,
    description: `How to unlock the ${achievement.name} achievement in It Reaches.`,
    href: `https://itreachesguide.com/achievements/${achievement.slug}`,
    publishedDate: "2026-09-08",
    updatedDate: "2026-09-08",
    author: "It Reaches Guide Team",
    readingTime: "2 min",
    difficulty: "Easy",
    lastReviewed: "2026-09-08",
    sources: [achievement.verificationNote],
  };

  const breadcrumb = [
    { title: "Home", href: "/" },
    { title: "Achievements", href: "/achievements" },
    { title: achievement.name },
  ];

  const toc = [
    { id: "quick-answer", title: "Quick Answer", level: 1 },
    { id: "details", title: "Chapter & Missable", level: 1 },
    { id: "steps", title: "How to Unlock", level: 1 },
    { id: "verification", title: "Verification", level: 1 },
    { id: "related", title: "Related Pages", level: 1 },
  ];

  const related = [
    ...(chapter
      ? [
          {
            title: `${chapter.name} Walkthrough`,
            description: `Chapter ${chapter.order} guide with objectives and missables.`,
            image: "/images/walkthrough.webp",
            href: `/walkthrough/${chapter.slug}`,
            tag: "Walkthrough",
          },
        ]
      : []),
    ...(linkedCollectible
      ? [
          {
            title: linkedCollectible.name,
            description: `The collectible tied to ${achievement.name}.`,
            image: "/images/story.webp",
            href: `/collectibles/${linkedCollectible.slug}`,
            tag: "Collectible",
          },
        ]
      : []),
    {
      title: "All Achievements",
      description: "Back to the full list of 20.",
      image: "/images/achievements.webp",
      href: "/achievements",
      tag: "Achievements",
    },
  ];

  return (
    <ArticleTemplate
      article={article}
      breadcrumb={breadcrumb}
      toc={toc}
      faq={[]}
      related={related}
      verification={achievement.verification}
    >
      <Track event="problem_page_view" props={{ type: "achievement", slug: achievement.slug }} />
      <section id="quick-answer" className="mb-12 scroll-mt-24">
        <QuickAnswer title="Quick Answer" as="h2">
          <p className="mb-2">
            <strong>How to unlock:</strong> {achievement.howToUnlock}
          </p>
          <p className="text-on-surface-variant">
            {achievement.description} Unlocked by {achievement.global} of
            players.
          </p>
        </QuickAnswer>
      </section>

      <section id="details" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Chapter & Missable
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-surface-container-low border border-white/5">
            <div className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/60 mb-1">
              Chapter
            </div>
            <div className="text-foreground font-body">
              {chapterName(achievement.chapter)}
            </div>
          </div>
          <div className="p-4 bg-surface-container-low border border-white/5">
            <div className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/60 mb-1">
              Missable?
            </div>
            <div className="text-foreground font-body">
              {achievement.missable === true ? (
                <Badge variant="warning">Yes — save before leaving</Badge>
              ) : achievement.missable === "unknown" ? (
                <Badge variant="warning">Unknown</Badge>
              ) : (
                <Badge variant="new">No</Badge>
              )}
            </div>
          </div>
          <div className="p-4 bg-surface-container-low border border-white/5">
            <div className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/60 mb-1">
              Global unlock rate
            </div>
            <div className="text-foreground font-body">{achievement.global}</div>
          </div>
        </div>
      </section>

      <section id="steps" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          How to Unlock
        </h2>
        {achievement.hidden ? (
          <Notice
            variant="warning"
            title="Official description hidden by Steam"
            titleAs="h3"
          >
            Steam hides the description for this achievement, and its unlock
            condition is not verified. We do not guess. The moment the
            condition is confirmed against evidence, this page is updated.
          </Notice>
        ) : (
          <ol className="list-decimal list-inside space-y-3 text-on-surface-variant leading-relaxed">
            <li>
              Play to {chapterName(achievement.chapter).toLowerCase()} — this
              achievement {achievement.missable === true ? "can be missed, so" : ""}{" "}
              is tied to that part of the game.
            </li>
            <li>{achievement.howToUnlock}</li>
            <li>
              If it does not unlock, reload your last save before the chapter
              transition and check the related collectible or trigger above.
            </li>
          </ol>
        )}
      </section>

      <section id="verification" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Verification
        </h2>
        <p className="text-on-surface-variant leading-relaxed">
          {achievement.verificationNote}
        </p>
      </section>

      <section id="related" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Related Pages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapter && (
            <Link
              href={`/walkthrough/${chapter.slug}`}
              className="block p-5 bg-surface-container-low border border-white/5 hover:border-primary transition-colors"
            >
              <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">
                Walkthrough
              </div>
              <div className="text-foreground font-headline-sm">
                {chapter.name}
              </div>
            </Link>
          )}
          {linkedCollectible && (
            <Link
              href={`/collectibles/${linkedCollectible.slug}`}
              className="block p-5 bg-surface-container-low border border-white/5 hover:border-primary transition-colors"
            >
              <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">
                Collectible
              </div>
              <div className="text-foreground font-headline-sm">
                {linkedCollectible.name}
              </div>
            </Link>
          )}
          <Link
            href="/achievements"
            className="block p-5 bg-surface-container-low border border-white/5 hover:border-primary transition-colors"
          >
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">
              Back
            </div>
            <div className="text-foreground font-headline-sm">
              All 20 achievements
            </div>
          </Link>
        </div>
      </section>
    </ArticleTemplate>
  );
}
