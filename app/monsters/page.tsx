import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import Image from "next/image";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Monster Guide - Entity Survival Strategies (In Progress)",
  description:
    "Survival strategies for the entity in It Reaches. Patrol behavior, evasion tactics, and body camera tips based on the official Steam description, with detailed enemy mapping in progress.",
  alternates: {
    canonical: "https://itreachesguide.com/monsters",
  },
};

const article: Article = {
  title: "It Reaches Monster Guide",
  description:
    "Survival strategies for the entity hunting officer Jason Thompson. Additional enemies, patrol routes, and detailed behaviors are being mapped in the full release.",
  href: "/monsters",
  publishedDate: "2026-07-29",
  updatedDate: "2026-07-29",
  author: "It Reaches Guide Team",
  status: "inProgress",
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Monster Guide" },
];

const toc = [
  { id: "overview", title: "Overview", level: 1 },
  { id: "behavior", title: "Entity Behavior", level: 2 },
  { id: "tactics", title: "Survival Tactics", level: 2 },
  { id: "bodycam", title: "Body Camera Considerations", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

const related = [
  {
    title: "Beginner Guide",
    description: "Essential survival tips for new players.",
    image: "/images/tips.webp",
    href: "/tips",
    tag: "Tips",
  },
  {
    title: "Walkthrough",
    description: "Step-by-step chapter guide.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "Endings Guide",
    description: "How to unlock every ending.",
    image: "/images/endings.webp",
    href: "/endings",
    tag: "Endings",
  },
];

const faq = [
  {
    question: "Can the entity be killed?",
    answer: "Based on the official description, the horror is something that hunts you relentlessly. Direct confrontation is unlikely to be the intended solution. Stealth, evasion, and environmental advantages are the safer approach.",
  },
  {
    question: "Does the entity react to light?",
    answer: "The body camera flashlight is essential for visibility, but light and sound can attract attention in horror games. We are testing exactly what triggers the entity and will update this page with confirmed behavior.",
  },
  {
    question: "How many enemies are in It Reaches?",
    answer: "Only one enemy — the entity hunting officer Jason Thompson — has been confirmed from the official Steam description. Additional enemy types, if any, will be added after we play through the full release.",
  },
  {
    question: "What is the safest way to escape the entity?",
    answer: "Based on common horror-game patterns and the Steam description, the safest approach is to break line of sight using doors, lockers, or furniture, then wait for the patrol route to reset before moving.",
  },
];

export default function MonstersPage() {
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
          The entity in It Reaches is relentless: it knows no exhaustion and feels no mercy. Your best defense is understanding its behavior, managing noise and light, and using the environment to break line of sight.
        </QuickAnswer>
      </section>

      <section id="behavior" className="mb-12">
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden border border-white/5">
          <Image
            src="/images/monster-entity.webp"
            alt="The entity silhouetted in a dark hospital corridor — an ominous figure watching from the shadows."
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 66vw"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
            <p className="text-xs text-on-surface-variant/80">
              Artist interpretation based on the official Steam description. In-game screenshots and model details will be added after verification.
            </p>
          </div>
        </div>
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Entity Behavior
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The official Steam description states the entity never stops and feels no mercy. It likely patrols set routes, reacts to sound and light, and can pursue you across multiple rooms. We are mapping patrol routes and trigger zones in the full release.
        </p>
      </section>

      <section id="tactics" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Survival Tactics
        </h2>
        <ul className="space-y-4 text-on-surface-variant">
          <li className="flex gap-3 items-start">
            <span className="bg-primary text-background font-bold text-xs px-2 py-0.5 mt-1">1</span>
            <span>Move slowly and crouch-walk in areas where the entity is active.</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="bg-primary text-background font-bold text-xs px-2 py-0.5 mt-1">2</span>
            <span>Watch patrol patterns for at least one full cycle before crossing open areas.</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="bg-primary text-background font-bold text-xs px-2 py-0.5 mt-1">3</span>
            <span>Use doors, lockers, and furniture to break line of sight if detected.</span>
          </li>
        </ul>
      </section>

      <section id="bodycam" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Body Camera Considerations
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The body camera limits your field of view and can make it harder to spot the entity in peripheral areas. Use the camera angle deliberately: sweep rooms before entering, and avoid tunnel vision during chase sequences.
        </p>
        <Notice variant="warning" title="Entity details being verified" titleAs="h3">
          We are actively playing the full release to confirm patrol routes, audio cues, and safe hiding spots. This page provides safe, general survival guidance based on the official Steam description and the body camera mechanics.
        </Notice>
      </section>
    </ArticleTemplate>
  );
}
