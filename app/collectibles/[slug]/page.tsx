import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { Badge } from "@/components/ui/Badge";
import { Track } from "@/components/analytics/Track";
import {
  collectibles,
  getCollectible,
  chapterName,
  getChapter,
  getAchievement,
} from "@/lib/game-data";
import { Article } from "@/types/article";
import { Metadata } from "next";
import Link from "next/link";

interface CollectiblePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return collectibles.map((collectible) => ({ slug: collectible.slug }));
}

export function generateMetadata({ params }: CollectiblePageProps): Metadata {
  const collectible = getCollectible(params.slug);
  if (!collectible) return {};
  return {
    title: `It Reaches ${collectible.name} - Location & How to Get`,
    description: `Where to find the ${collectible.name} in It Reaches: ${chapterName(collectible.chapter)}. ${collectible.howToReach}`,
    alternates: {
      canonical: `https://itreachesguide.com/collectibles/${collectible.slug}`,
    },
  };
}

export default function CollectibleDetailPage({ params }: CollectiblePageProps) {
  const collectible = getCollectible(params.slug);
  if (!collectible) notFound();

  const chapter = getChapter(collectible.chapter);
  const achievement = getAchievement(collectible.achievement);

  const article: Article = {
    title: `It Reaches ${collectible.name} - Location & How to Get`,
    description: `Where to find the ${collectible.name} collectible in It Reaches and which achievement it unlocks.`,
    href: `https://itreachesguide.com/collectibles/${collectible.slug}`,
    publishedDate: "2026-09-08",
    updatedDate: "2026-09-08",
    author: "It Reaches Guide Team",
    readingTime: "2 min",
    difficulty: "Easy",
    lastReviewed: "2026-09-08",
    sources: [collectible.verificationNote],
  };

  const breadcrumb = [
    { title: "Home", href: "/" },
    { title: "Collectibles", href: "/collectibles" },
    { title: collectible.name },
  ];

  const toc = [
    { id: "quick-answer", title: "Quick Answer", level: 1 },
    { id: "location", title: "Location", level: 1 },
    { id: "how-to-reach", title: "How to Reach It", level: 1 },
    { id: "achievement", title: "Achievement Linked", level: 1 },
    { id: "verification", title: "Verification", level: 1 },
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
    ...(achievement
      ? [
          {
            title: achievement.name,
            description: `The achievement unlocked by ${collectible.name}.`,
            image: "/images/achievements.webp",
            href: `/achievements/${achievement.slug}`,
            tag: "Achievement",
          },
        ]
      : []),
    {
      title: "All Collectibles",
      description: "Back to the full list of five.",
      image: "/images/story.webp",
      href: "/collectibles",
      tag: "Collectibles",
    },
  ];

  return (
    <ArticleTemplate
      article={article}
      breadcrumb={breadcrumb}
      toc={toc}
      faq={[]}
      related={related}
      verification={collectible.verification}
    >
      <Track event="problem_page_view" props={{ type: "collectible", slug: collectible.slug }} />
      <section id="quick-answer" className="mb-12 scroll-mt-24">
        <QuickAnswer title="Quick Answer" as="h2">
          The {collectible.name} is in{" "}
          <strong>{chapterName(collectible.chapter)}</strong>. It is missable.
          {achievement
            ? ` Collecting it unlocks the "${achievement.name}" achievement.`
            : ""}
        </QuickAnswer>
      </section>

      <section id="location" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Location
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-surface-container-low border border-white/5">
            <div className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/60 mb-1">
              Chapter
            </div>
            <div className="text-foreground font-body">
              {chapterName(collectible.chapter)}
            </div>
          </div>
          <div className="p-4 bg-surface-container-low border border-white/5 md:col-span-2">
            <div className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/60 mb-1">
              Area
            </div>
            <div className="text-foreground font-body">{collectible.location}</div>
          </div>
        </div>
      </section>

      <section id="how-to-reach" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          How to Reach It
        </h2>
        <p className="text-on-surface-variant leading-relaxed mb-4">
          {collectible.howToReach}
        </p>
        <Notice variant="warning" title="Exact pickup point pending verification" titleAs="h3">
          The precise room and pickup point are published after frame-by-frame
          footage verification. Until then: explore side paths before opening
          major gates, and keep a save slot before leaving the chapter.
        </Notice>
      </section>

      <section id="achievement" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Achievement Linked
        </h2>
        {achievement ? (
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
        ) : (
          <p className="text-on-surface-variant">No linked achievement found.</p>
        )}
      </section>

      <section id="verification" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Verification
        </h2>
        <p className="text-on-surface-variant leading-relaxed">
          {collectible.verificationNote}
        </p>
      </section>
    </ArticleTemplate>
  );
}
