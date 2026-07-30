import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Entity - It Reaches Antagonist & Lore Guide",
  description: "What is the entity in It Reaches? Official description, behavior, lore speculation, and survival implications based on the Steam page.",
  alternates: {
    canonical: "https://itreachesguide.com/characters/the-entity",
  },
};

const article: Article = {
  title: "The Entity - It Reaches Antagonist",
  description: "A character guide for the entity in It Reaches: what the official Steam description reveals, how it behaves, and what its role means for the story and survival.",
  href: "https://itreachesguide.com/characters/the-entity",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-30",
  author: "It Reaches Guide Team",
  readingTime: "4 min",
  difficulty: "Easy",
  lastReviewed: "2026-07-30",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "Official Steam description of the entity as a relentless hunter",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Characters", href: "/story#characters" },
  { title: "The Entity" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "official", title: "What the Official Description Says", level: 2 },
  { id: "behavior", title: "Behavior & Threat", level: 2 },
  { id: "lore", title: "Lore Speculation", level: 2 },
  { id: "survival", title: "Survival Implications", level: 2 },
  { id: "sources", title: "Sources & Disclaimer", level: 1 },
];

const related = [
  {
    title: "Monster Guide",
    description: "Tactics for evading the entity in gameplay.",
    image: "/images/monster.webp",
    href: "/monsters",
    tag: "Monsters",
  },
  {
    title: "Jason Thompson",
    description: "The playable protagonist hunted by the entity.",
    image: "/images/lore.webp",
    href: "/characters/jason-thompson",
    tag: "Characters",
  },
  {
    title: "Story Explained",
    description: "Lore and narrative breakdown of It Reaches.",
    image: "/images/story.webp",
    href: "/story",
    tag: "Story",
  },
  {
    title: "Complete Walkthrough",
    description: "Step-by-step guide through all six chapters.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
];

export default function TheEntityCharacterPage() {
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
          The entity is the antagonist of It Reaches. The official Steam description describes it as something that &quot;never stops&quot; and &quot;feels no mercy.&quot; It hunts officer Jason Thompson through the abandoned hospital and its underground facilities. Its exact origin, appearance, and mechanics are being verified in the full release.
        </QuickAnswer>
      </section>

      <section id="official" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What the Official Description Says
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The Steam store page for It Reaches frames the horror as an unrelenting force. It emphasizes exhaustion and lack of mercy, implying the entity is not a standard human threat. The description does not confirm a name, origin, or physical form beyond this relentless nature.
        </p>
      </section>

      <section id="behavior" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Behavior & Threat
        </h2>
        <ul className="space-y-4 text-on-surface-variant leading-relaxed list-disc list-inside">
          <li><strong>Relentless pursuit:</strong> The entity does not appear to tire, forcing the player to keep moving and avoid predictable hiding patterns.</li>
          <li><strong>Reactive hunter:</strong> Based on the body camera horror genre, it likely responds to sound, light, and player movement.</li>
          <li><strong>Persistent presence:</strong> Rather than scripted jump scares alone, the entity may patrol set routes and create long tension sequences.</li>
        </ul>
      </section>

      <section id="lore" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Lore Speculation
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The hospital and its underground facilities hide a dark mystery, and the entity is connected to it. Whether it is a supernatural force, an experiment, or something else will depend on documents and environmental storytelling found during playthrough. We will update this section with verified in-game evidence.
        </p>
      </section>

      <section id="survival" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Survival Implications
        </h2>
        <ul className="space-y-4 text-on-surface-variant leading-relaxed list-disc list-inside">
          <li>Direct confrontation is unlikely to be the intended solution.</li>
          <li>Stealth, line-of-sight breaking, and noise management are the safest approaches.</li>
          <li>Understanding patrol timing and safe rooms is more valuable than running blindly.</li>
        </ul>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Entity details being verified" titleAs="h3">
        This page is based on the official Steam description and confirmed protagonist encounter setup.
        In-game model details, patrol behavior, audio cues, and exact origin will be added once verified through direct playthrough.
      </Notice>
    </ArticleTemplate>
  );
}
