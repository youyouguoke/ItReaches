import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { Badge } from "@/components/ui/Badge";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Achievements Guide - Framework (In Progress)",
  description:
    "Achievement framework for It Reaches: 20 Steam achievements expected, with category breakdowns and missable warnings. Exact names and unlock conditions are being verified.",
  alternates: {
    canonical: "https://itreachesguide.com/achievements",
  },
};

const article: Article = {
  title: "It Reaches Achievements Guide",
  description:
    "A framework for the 20 Steam achievements in It Reaches, including expected categories and missable warnings. Exact achievement names and unlock conditions will be added after verification.",
  href: "/achievements",
  publishedDate: "2026-07-29",
  updatedDate: "2026-07-29",
  author: "It Reaches Guide Team",
  status: "inProgress",
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Achievements" },
];

const toc = [
  { id: "overview", title: "Overview", level: 1 },
  { id: "summary", title: "Completion Summary", level: 2 },
  { id: "categories", title: "Achievement Categories", level: 2 },
  { id: "missable", title: "Missable Achievements", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

const related = [
  {
    title: "Endings Guide",
    description: "How to unlock every ending.",
    image: "/images/endings.webp",
    href: "/endings",
    tag: "Endings",
  },
  {
    title: "Story Explained",
    description: "Lore analysis of It Reaches.",
    image: "/images/story.webp",
    href: "/story",
    tag: "Lore",
  },
  {
    title: "Walkthrough",
    description: "Step-by-step chapter guide.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
];

const faq = [
  {
    question: "How many achievements are in It Reaches?",
    answer: "The Steam store page lists 20 Steam Achievements. We are verifying each unlock condition and will update this page with the full list as soon as possible.",
  },
  {
    question: "Can I get all achievements in one playthrough?",
    answer: "It is unlikely. Most horror games have ending-specific or collectible achievements that require multiple playthroughs or chapter select. We will confirm the optimal route once we have tested every achievement.",
  },
];

export default function AchievementsPage() {
  return (
    <ArticleTemplate
      article={article}
      breadcrumb={breadcrumb}
      toc={toc}
      faq={faq}
      related={related}
    >
      <section id="overview" className="mb-12">
        <QuickAnswer title="Quick Answer" as="h2">
          It Reaches has 20 Steam Achievements. Expect to play through the game at least twice to unlock everything, especially if ending-specific or collectible achievements are included.
        </QuickAnswer>
      </section>

      <section id="summary" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Completion Summary
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          Expect to play through the game at least twice to unlock every achievement. Ending-specific trophies may require separate runs, while collectibles can often be gathered via chapter select once it is unlocked.
        </p>
      </section>

      <section id="categories" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Achievement List Framework
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The Steam store lists 20 achievements for It Reaches. We are unlocking every one to confirm exact names, descriptions, and conditions. Until then, the table below shows the expected structure and placeholders for each achievement.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 pr-4 font-headline-sm text-foreground">#</th>
                <th className="py-3 pr-4 font-headline-sm text-foreground">Name</th>
                <th className="py-3 pr-4 font-headline-sm text-foreground">Category</th>
                <th className="py-3 pr-4 font-headline-sm text-foreground">Description</th>
                <th className="py-3 font-headline-sm text-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              {Array.from({ length: 20 }).map((_, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-3 pr-4 align-top">{i + 1}</td>
                  <td className="py-3 pr-4 align-top italic">To be confirmed</td>
                  <td className="py-3 pr-4 align-top">
                    {i < 6 ? "Story" : i < 10 ? "Collectible" : i < 14 ? "Challenge" : "Ending / Misc"}
                  </td>
                  <td className="py-3 pr-4 align-top italic">Exact unlock condition being verified.</td>
                  <td className="py-3 align-top">
                    <Badge variant="warning">Pending</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="missable" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Missable Achievements
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          Collectible and chapter-specific achievements are usually missable. We recommend exploring thoroughly, saving before major progression points, and using chapter select if it becomes available. We will list the exact missable achievements once verified.
        </p>
        <Notice variant="warning" title="Full achievement list coming soon" titleAs="h3">
          We are unlocking every achievement in the full release to confirm exact names, descriptions, and conditions. This page currently provides the framework and safe assumptions based on the Steam store listing of 20 achievements.
        </Notice>
      </section>
    </ArticleTemplate>
  );
}
