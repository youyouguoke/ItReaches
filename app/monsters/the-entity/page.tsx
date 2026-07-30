import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Entity - It Reaches Monster Survival Guide",
  description: "Survival guide for the entity in It Reaches: official behavior, evasion tactics, body camera tips, and what is still being verified.",
  alternates: {
    canonical: "https://itreachesguide.com/monsters/the-entity",
  },
};

const article: Article = {
  title: "The Entity - It Reaches Monster Survival Guide",
  description: "A focused survival guide for the entity in It Reaches. Covers what the official Steam description confirms, safe general tactics, and what will be added after direct playthrough verification.",
  href: "https://itreachesguide.com/monsters/the-entity",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-30",
  author: "It Reaches Guide Team",
  readingTime: "5 min",
  difficulty: "Medium",
  lastReviewed: "2026-07-30",
  status: "inProgress",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "Official Steam description of the entity as a relentless hunter",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Monsters", href: "/monsters" },
  { title: "The Entity" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "behavior", title: "What the Official Description Confirms", level: 2 },
  { id: "tactics", title: "Survival Tactics", level: 2 },
  { id: "bodycam", title: "Body Camera Considerations", level: 2 },
  { id: "myths", title: "Common Questions", level: 2 },
  { id: "sources", title: "Sources & Disclaimer", level: 1 },
];

const related = [
  {
    title: "Monster Guide",
    description: "General survival strategies for the entity.",
    image: "/images/monster.webp",
    href: "/monsters",
    tag: "Monsters",
  },
  {
    title: "The Entity (Character)",
    description: "Lore and role of the entity in the story.",
    image: "/images/monster-entity.webp",
    href: "/characters/the-entity",
    tag: "Characters",
  },
  {
    title: "Beginner Tips",
    description: "Essential survival advice for new players.",
    image: "/images/tips.webp",
    href: "/tips",
    tag: "Tips",
  },
  {
    title: "Complete Walkthrough",
    description: "Chapter-by-chapter guide through the hospital.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
];

export default function TheEntityMonsterPage() {
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
          The entity is the only confirmed enemy in It Reaches. The official Steam description says it never stops and feels no mercy. Your best defense is stealth, environmental awareness, and using the body camera deliberately to maintain sightlines.
        </QuickAnswer>
      </section>

      <section id="behavior" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What the Official Description Confirms
        </h2>
        <ul className="space-y-4 text-on-surface-variant leading-relaxed list-disc list-inside">
          <li><strong>Relentless:</strong> The entity is described as something that never stops pursuing you.</li>
          <li><strong>Merciless:</strong> It feels no mercy, implying direct confrontation is not the intended solution.</li>
          <li><strong>Singular threat:</strong> Only one enemy type has been confirmed from official sources. Additional monsters, if any, will be added after verification.</li>
        </ul>
      </section>

      <section id="tactics" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Survival Tactics
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-on-surface-variant leading-relaxed">
          <li><strong>Move slowly and crouch-walk</strong> in areas where the entity is active to reduce noise.</li>
          <li><strong>Watch patrol patterns</strong> for at least one full cycle before crossing open areas.</li>
          <li><strong>Use doors, lockers, and furniture</strong> to break line of sight if detected.</li>
          <li><strong>Save often</strong> before entering new rooms or starting noisy interactions.</li>
          <li><strong>Plan escape routes</strong> before engaging with puzzles that require standing still.</li>
        </ol>
      </section>

      <section id="bodycam" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Body Camera Considerations
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The body camera limits your field of view and can make it harder to spot the entity in peripheral areas. Use the camera angle deliberately: sweep rooms before entering, and avoid tunnel vision during chase sequences. Remember that the entity may be outside the camera frame even when it is close.
        </p>
      </section>

      <section id="myths" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Common Questions
        </h2>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <div>
            <h3 className="font-headline-sm text-foreground mb-2">Can the entity be killed?</h3>
            <p>There is no official indication that the entity can be killed. Stealth and evasion appear to be the intended mechanics.</p>
          </div>
          <div>
            <h3 className="font-headline-sm text-foreground mb-2">Does light attract it?</h3>
            <p>Specific sensitivity to light or sound has not been confirmed. We are testing these triggers and will update this page with verified behavior.</p>
          </div>
          <div>
            <h3 className="font-headline-sm text-foreground mb-2">Are there multiple enemy types?</h3>
            <p>Only one enemy has been confirmed from the official Steam description. We will not add additional monster pages until they are verified in the full release.</p>
          </div>
        </div>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Entity details being verified" titleAs="h3">
        We are actively playing through It Reaches to confirm patrol routes, audio cues, hiding spots, and visual triggers for the entity.
        This page provides safe, general survival guidance based on the official Steam description. Specific mechanics will be added as they are verified.
      </Notice>
    </ArticleTemplate>
  );
}
