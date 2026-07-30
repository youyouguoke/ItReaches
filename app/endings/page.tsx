import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { Badge } from "@/components/ui/Badge";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Endings Guide - Speculative Framework (In Progress)",
  description:
    "A speculative framework for the endings in It Reaches: survival-focused, lore-heavy, and secret/optional outcomes. Official names and exact unlock conditions are being verified.",
  alternates: {
    canonical: "https://itreachesguide.com/endings",
  },
};

const article: Article = {
  title: "It Reaches Endings Guide",
  description:
    "A speculative framework for the endings in It Reaches based on the Steam narrative and common horror-game structure. Official names and exact unlock conditions will be added after verification.",
  href: "/endings",
  publishedDate: "2026-07-29",
  updatedDate: "2026-07-29",
  author: "It Reaches Guide Team",
  status: "inProgress",
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Endings Guide" },
];

const toc = [
  { id: "overview", title: "Overview", level: 1 },
  { id: "framework", title: "Speculative Ending Framework", level: 2 },
  { id: "table", title: "Ending Summary Table", level: 2 },
  { id: "type1", title: "Type 1: Survival-Focused", level: 2 },
  { id: "type2", title: "Type 2: Lore-Heavy / Revelation", level: 2 },
  { id: "type3", title: "Type 3: Secret / Optional", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

const related = [
  {
    title: "Story Explained",
    description: "Lore analysis of It Reaches.",
    image: "/images/story.webp",
    href: "/story",
    tag: "Lore",
  },
  {
    title: "Complete Walkthrough",
    description: "Step-by-step guide to every chapter.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "Achievements Guide",
    description: "Unlock every achievement.",
    image: "/images/achievements.webp",
    href: "/achievements",
    tag: "Achievements",
  },
];

const faq = [
  {
    question: "How many endings does It Reaches have?",
    answer:
      "The exact number is still being verified in the full release. The Steam description emphasizes escaping the hospital and uncovering a dark mystery, which suggests at least a standard escape ending and a deeper revelation ending.",
  },
  {
    question: "Are the ending names on this page official?",
    answer:
      "No. The names listed here are descriptive placeholders based on the Steam narrative and common horror-game structure. We will replace them with the official in-game names as soon as they are confirmed.",
  },
  {
    question: "Can I unlock all endings in one playthrough?",
    answer:
      "Most story-driven games require a manual save before the final choice or multiple playthroughs. We will confirm the exact checkpoint once we have tested the full release.",
  },
  {
    question: "What affects the ending in It Reaches?",
    answer:
      "Based on the Steam description, endings are likely influenced by whether you escape, how much of the hospital you explore, and whether you collect optional lore items or reach hidden areas.",
  },
  {
    question: "When will exact unlock conditions be added?",
    answer:
      "We are running multiple playthroughs of the full release. Specific triggers, named endings, and screenshots will be added as soon as they are verified.",
  },
];

function SpeculativeBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25 px-3 py-1.5 text-sm font-medium mb-4">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      Speculative — official names not yet verified
    </span>
  );
}

export default function EndingsPage() {
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
          It Reaches centers on escaping the abandoned hospital and uncovering the dark mystery behind it. Your ending likely depends on whether you escape, how much you discover, and whether you find optional collectibles or hidden areas. The framework below is speculative; official ending names and exact triggers are being verified.
        </QuickAnswer>
      </section>

      <section id="framework" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Speculative Ending Framework
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          Until the full release is verified, we group possible endings by structure rather than inventing official names. Each type below is a working hypothesis based on the Steam narrative and patterns from similar horror games.
        </p>
        <Notice variant="warning" title="No official names yet" titleAs="h3">
          This page does not claim to know the actual in-game ending titles. We use descriptive labels so readers can understand the likely shape of the endings without mistaking placeholders for confirmed facts.
        </Notice>
      </section>

      <section id="table" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Ending Summary Table
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 pr-4 font-headline-sm text-foreground">Working Type</th>
                <th className="py-3 pr-4 font-headline-sm text-foreground">Likely Requirements</th>
                <th className="py-3 pr-4 font-headline-sm text-foreground">Expected Outcome</th>
                <th className="py-3 font-headline-sm text-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-white/5">
                <td className="py-4 pr-4 align-top">Type 1: Survival-Focused</td>
                <td className="py-4 pr-4 align-top">Reach the exit and survive the final encounter.</td>
                <td className="py-4 pr-4 align-top">Resolves the immediate threat; may leave the larger mystery open.</td>
                <td className="py-4 align-top">
                  <Badge variant="warning">Speculative</Badge>
                </td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 pr-4 align-top">Type 2: Lore-Heavy / Revelation</td>
                <td className="py-4 pr-4 align-top">Explore thoroughly, read documents, solve optional puzzles.</td>
                <td className="py-4 pr-4 align-top">Reveals more about the force hunting Jason Thompson and the facility&apos;s history.</td>
                <td className="py-4 align-top">
                  <Badge variant="warning">Speculative</Badge>
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-4 align-top">Type 3: Secret / Optional</td>
                <td className="py-4 pr-4 align-top">Collect hidden items, reach hidden areas, or make a specific final choice.</td>
                <td className="py-4 pr-4 align-top">A hidden or alternate conclusion beyond the standard outcomes.</td>
                <td className="py-4 align-top">
                  <Badge variant="warning">Speculative</Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="type1" className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="font-headline-md text-foreground border-b border-white/5 pb-2 flex-1">
            Type 1: Survival-Focused
          </h2>
        </div>
        <SpeculativeBadge />
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The most straightforward outcome involves reaching the exit and surviving the final encounter. This ending would resolve the immediate threat but may leave the larger mystery unanswered. It is the expected default outcome for a first playthrough focused on survival.
        </p>
      </section>

      <section id="type2" className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="font-headline-md text-foreground border-b border-white/5 pb-2 flex-1">
            Type 2: Lore-Heavy / Revelation
          </h2>
        </div>
        <SpeculativeBadge />
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          A deeper ending is expected for players who thoroughly explore the hospital, read documents, and solve optional environmental puzzles. This outcome would reveal more about the force hunting officer Jason Thompson and the history of the abandoned facility.
        </p>
      </section>

      <section id="type3" className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="font-headline-md text-foreground border-b border-white/5 pb-2 flex-1">
            Type 3: Secret / Optional
          </h2>
        </div>
        <SpeculativeBadge />
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          Secret endings in horror games typically require collecting all hidden items, reaching a hidden area, or making a specific final choice. We are verifying whether It Reaches contains such an ending and what its exact conditions are.
        </p>
        <Notice variant="warning" title="Ending conditions being verified" titleAs="h3">
          We are running multiple playthroughs to confirm the exact triggers for each ending. The framework above is based on the official Steam narrative and common horror game structure. Specific unlock conditions and official names will be added as soon as they are verified.
        </Notice>
      </section>
    </ArticleTemplate>
  );
}
