import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { AchievementCard } from "@/components/cards/AchievementCard";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beginner Guide - Survival Tips for New Players",
  description: "Essential survival tips for new It Reaches players: exploration, evasion, puzzles and resources.",
  alternates: {
    canonical: "https://itreachesguide.com/tips",
  },
};

const article: Article = {
  title: "It Reaches Beginner Guide",
  description: "Everything new players need to survive the abandoned hospital as officer Jason Thompson, from body camera habits to resource management.",
  href: "/tips",
  publishedDate: "2026-07-29",
  updatedDate: "2026-07-29",
  author: "It Reaches Guide Team",
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Beginner Guide" },
];

const toc = [
  { id: "overview", title: "Overview", level: 1 },
  { id: "exploration", title: "Exploration", level: 2 },
  { id: "evasion", title: "Evasion", level: 2 },
  { id: "takeaways", title: "Key Takeaways", level: 2 },
  { id: "resources", title: "Resource Management", level: 2 },
  { id: "bodycam", title: "Body Camera Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

const related = [
  {
    title: "Monster Guide",
    description: "Survival strategies for the entity.",
    image: "/images/monster.webp",
    href: "/monsters",
    tag: "Monsters",
  },
  {
    title: "The Entity",
    description: "Focused survival guide for the only confirmed enemy.",
    image: "/images/monster-entity.webp",
    href: "/monsters/the-entity",
    tag: "Monsters",
  },
  {
    title: "Walkthrough",
    description: "Step-by-step guide to every chapter.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "Puzzle Guide",
    description: "Solving strategies and framework for puzzles.",
    image: "/images/puzzle.webp",
    href: "/puzzles",
    tag: "Puzzles",
  },
];

const faq = [
  {
    question: "What should I do first?",
    answer: "Get comfortable with the body camera movement and field of view. Check the surrounding area for supplies, documents, and environmental clues before moving deeper into the hospital.",
  },
  {
    question: "Should I fight enemies?",
    answer: "Based on the official description, the entity is relentless and feels no mercy. Avoidance, hiding, and running are almost always safer than direct confrontation.",
  },
  {
    question: "How do I solve puzzles safely?",
    answer: "Before touching a keypad or switch, search the surrounding rooms for notes, documents, or audio cues. Clear the area of threats first, and save before starting multi-step or timed sequences.",
  },
];

const tipCards = [
  { title: "Listen Before Moving", description: "The body camera narrows your vision. Stop moving periodically to listen for footsteps, distant noises, or audio cues that reveal nearby threats or puzzle hints.", missable: false, href: "#evasion" },
  { title: "Save Before Risk", description: "Use save points or manual saves before major puzzles, enemy encounters, and ending-branching choices. The body camera makes it easy to miss a threat until it is too late.", missable: false, href: "#resources" },
  { title: "Manage Your Light", description: "Your flashlight is essential, but light and noise can draw attention. Turn it off briefly when you are safe to observe patrol patterns and preserve battery life.", missable: false, href: "#bodycam" },
  { title: "Read Documents", description: "Documents unlock achievements and often reveal puzzle codes or story context. Some collectibles are missable, so check thoroughly before leaving an area.", missable: true, href: "/achievements" },
];

export default function TipsPage() {
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
          New players should focus on exploration, stealth, and resource conservation. The body camera perspective makes it harder to spot threats, so move slowly, listen carefully, and never sprint unless you are already detected.
        </QuickAnswer>
      </section>

      <section id="exploration" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Exploration
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The abandoned hospital rewards careful exploration. Drawers, lockers, and medical carts often contain supplies or documents that unlock achievements and story context. The body camera limits your peripheral vision, so sweep each room before interacting with objects.
        </p>
      </section>

      <section id="evasion" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Evasion
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          Weapons are rare and mostly ineffective. Crouch to move silently, hide behind cover or inside lockers, and watch patrol cycles before crossing open areas. If detected, run toward the nearest door or safe room to break line of sight.
        </p>
      </section>

      <section id="takeaways" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Key Takeaways
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {tipCards.map((tip) => (
            <AchievementCard key={tip.title} {...tip} />
          ))}
        </div>
      </section>

      <section id="resources" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Resource Management
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          Healing items and batteries are limited. Treat them as emergency reserves rather than consumables to use whenever convenient. Save before entering new areas, and do not waste resources on minor health loss if you can reach a save point safely.
        </p>
      </section>

      <section id="bodycam" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Body Camera Tips
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The body camera is the game&apos;s signature feature. It creates a narrow, realistic field of view. Use it deliberately: pan slowly around corners, avoid tunnel vision during chases, and remember that the camera perspective can hide objects that would be obvious in a normal first-person view.
        </p>
      </section>
    </ArticleTemplate>
  );
}
