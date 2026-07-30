import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Items & Collectibles System Guide",
  description: "How items, documents, and collectibles work in It Reaches: what we know from the official description, how to approach collectibles safely, and what will be added after verification.",
  alternates: {
    canonical: "https://itreachesguide.com/items",
  },
};

const article: Article = {
  title: "It Reaches Items & Collectibles System",
  description: "A system-level guide to items, documents, and collectibles in It Reaches. Explains the collectible framework, why some items are missable, and how to hunt them safely without relying on unverified specifics.",
  href: "https://itreachesguide.com/items",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-30",
  author: "It Reaches Guide Team",
  readingTime: "5 min",
  difficulty: "Easy",
  lastReviewed: "2026-07-30",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "Official Steam description of exploration and mystery elements",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Items & Collectibles" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "system", title: "How the Collectible System Works", level: 2 },
  { id: "types", title: "Expected Collectible Types", level: 2 },
  { id: "missable", title: "Missable Items", level: 2 },
  { id: "hunting", title: "Collectible Hunting Tips", level: 2 },
  { id: "verified", title: "What We Will Verify", level: 2 },
  { id: "sources", title: "Sources & Disclaimer", level: 1 },
];

const related = [
  {
    title: "Walkthrough",
    description: "Chapter-by-chapter guide with collectible notes per section.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "Achievements Guide",
    description: "How collectibles tie into the 20 Steam achievements.",
    image: "/images/achievements.webp",
    href: "/achievements",
    tag: "Achievements",
  },
  {
    title: "Story Explained",
    description: "How documents reveal the hospital's dark mystery.",
    image: "/images/story.webp",
    href: "/story",
    tag: "Story",
  },
  {
    title: "Beginner Tips",
    description: "Survival basics before hunting collectibles.",
    image: "/images/tips.webp",
    href: "/tips",
    tag: "Tips",
  },
];

export default function ItemsPage() {
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
          It Reaches uses a collectible system built around documents, lore items, and supplies. Based on the Steam description and genre conventions, collecting these items expands the story, unlocks achievements, and may influence which ending you receive. This page explains the system and safe hunting strategies; exact item names and locations will be added after verified playthrough.
        </QuickAnswer>
      </section>

      <section id="system" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          How the Collectible System Works
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The official Steam description emphasizes uncovering a dark mystery inside the abandoned hospital. In practice, this means the game likely scatters documents, notes, and key items throughout the environment. Collecting them fills in the backstory and may be required for the best ending or specific achievements.
        </p>
      </section>

      <section id="types" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Expected Collectible Types
        </h2>
        <ul className="space-y-4 text-on-surface-variant leading-relaxed list-disc list-inside">
          <li><strong>Lore documents:</strong> Notes, logs, and records that explain what happened in the hospital and underground facilities.</li>
          <li><strong>Key items:</strong> Objects required to unlock doors, solve puzzles, or progress the story.</li>
          <li><strong>Supplies:</strong> Batteries, healing items, or other consumables that help survival.</li>
          <li><strong>Achievement triggers:</strong> Special actions, hidden objects, or optional rooms tied to Steam achievements.</li>
        </ul>
        <Notice variant="warning" title="No verified item list yet" titleAs="h3">
          We are not listing specific item names or exact locations until we can verify them through direct playthrough. Generic categories above are based on the official description and common survival horror design.
        </Notice>
      </section>

      <section id="missable" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Missable Items
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          Some collectibles are likely missable. Story events can lock areas, and ending-determining choices may prevent backtracking. The safest approach is to explore each chapter thoroughly before moving to a point of no return, and to keep multiple manual save files.
        </p>
      </section>

      <section id="hunting" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Collectible Hunting Tips
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-on-surface-variant leading-relaxed">
          <li><strong>Read everything:</strong> Documents often contain puzzle hints as well as lore.</li>
          <li><strong>Check side rooms:</strong> Main paths rarely hold every collectible.</li>
          <li><strong>Use the body camera deliberately:</strong> Small notes can be easy to miss at the wrong angle.</li>
          <li><strong>Save before point-of-no-return moments:</strong> This protects achievement and ending hunting.</li>
          <li><strong>Backtrack when safe:</strong> New tools or restored power may open previously locked areas.</li>
        </ol>
      </section>

      <section id="verified" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What We Will Verify
        </h2>
        <ul className="space-y-3 text-on-surface-variant leading-relaxed list-disc list-inside">
          <li>Exact collectible names and categories.</li>
          <li>Chapter-by-chapter locations and screenshots.</li>
          <li>Which items are missable or tied to achievements.</li>
          <li>Whether collectibles affect the ending or are required for 100% completion.</li>
        </ul>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Specifics coming after verification" titleAs="h3">
        This page covers the collectible system at a high level. We will add a per-item, per-location checklist once we have verified the full release ourselves and can cite exact in-game evidence.
      </Notice>
    </ArticleTemplate>
  );
}
