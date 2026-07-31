import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { Badge } from "@/components/ui/Badge";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Achievements Guide - All 20 Steam Achievements",
  description:
    "Complete list of all 20 Steam achievements in It Reaches: names, unlock conditions, missable warnings, and completion tips.",
  alternates: {
    canonical: "https://itreachesguide.com/achievements",
  },
};

const article: Article = {
  title: "It Reaches Achievements Guide - All 20 Steam Achievements",
  description:
    "A complete list of all 20 Steam achievements in It Reaches, including official descriptions, unlock conditions, missable warnings, and completion tips.",
  href: "https://itreachesguide.com/achievements",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-30",
  author: "It Reaches Guide Team",
  readingTime: "8 min",
  difficulty: "Normal",
  lastReviewed: "2026-07-30",
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
  { id: "overview", title: "Overview", level: 1 },
  { id: "list", title: "All 20 Achievements", level: 1 },
  { id: "story", title: "Story Achievements", level: 2 },
  { id: "combat", title: "Combat & Ability Achievements", level: 2 },
  { id: "collectible", title: "Collectible Achievements", level: 2 },
  { id: "hidden", title: "Hidden Achievements", level: 2 },
  { id: "completion", title: "Completion Tips", level: 1 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

const related = [
  {
    title: "Items & Collectibles",
    description: "Where and how to find every collectible tied to achievements.",
    image: "/images/story.webp",
    href: "/items",
    tag: "Items",
  },
  {
    title: "Endings Guide",
    description: "How to unlock and interpret every ending.",
    image: "/images/endings.webp",
    href: "/endings",
    tag: "Endings",
  },
  {
    title: "Walkthrough",
    description: "Step-by-step guide through every chapter.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "The Entity",
    description: "Survival guide for the game's only confirmed enemy.",
    image: "/images/monster-entity.webp",
    href: "/monsters/the-entity",
    tag: "Monsters",
  },
];

const achievements = {
  story: [
    { name: "Trespassing", description: "Enter the hospital building.", global: "95.8%", missable: false, condition: "Story progression -- enter the abandoned hospital." },
    { name: "Escape Artist", description: "Escape the prison.", global: "74.2%", missable: false, condition: "Story progression -- escape the prison area." },
    { name: "Happy Reunion", description: "Retrieve your pistol.", global: "69.1%", missable: false, condition: "Story progression -- recover your pistol." },
    { name: "Armed and Ready", description: "Find the shotgun.", global: "52.6%", missable: false, condition: "Story progression -- locate the shotgun." },
    { name: "Science and History", description: "Reach William Blake's Hideout.", global: "47.9%", missable: false, condition: "Story progression -- reach William Blake's hideout." },
  ],
  combat: [
    { name: "Sharp Senses", description: "Survive a minion attack by using your knife.", global: "63.9%", missable: false, condition: "Use your knife to survive a minion attack." },
    { name: "First Upgrade", description: "Unlock a weapon upgrade for the first time.", global: "61.1%", missable: false, condition: "Unlock any weapon upgrade." },
    { name: "Handshot", description: "Shoot a Venus Hand Trap.", global: "40.8%", missable: false, condition: "Shoot a Venus Hand Trap enemy." },
    { name: "Fully Upgraded", description: "Fully upgrade a weapon.", global: "3.7%", missable: true, condition: "Max out one weapon upgrade track. Easy to miss if upgrades are limited." },
  ],
  death: [
    { name: "Touchy Subject", description: "Get grabbed and killed by a big hand.", global: "53.1%", missable: false, condition: "Die to a big hand enemy." },
  ],
  collectible: [
    { name: "\"Bring your child to work\" - Day", description: "Collect the Toy Police Car.", global: "29.5%", missable: true, condition: "Find the Toy Police Car collectible." },
    { name: "Fetch!", description: "Collect the photograph of the family dog.", global: "20.0%", missable: true, condition: "Find the family dog photograph collectible." },
    { name: "Round and round we go.", description: "Collect the Toy Carousel.", global: "19.6%", missable: true, condition: "Find the Toy Carousel collectible." },
    { name: "In good hands.", description: "Collect the son's family drawing.", global: "15.9%", missable: true, condition: "Find the son's family drawing collectible." },
    { name: "A great team!", description: "Collect the Worn Football.", global: "13.0%", missable: true, condition: "Find the Worn Football collectible." },
  ],
  interactive: [
    { name: "What's in the hole?", description: "Reach inside a hole in the wall.", global: "39.9%", missable: false, condition: "Interact with a hole in the wall." },
  ],
  hidden: [
    { name: "What is he made of?!", description: "Hidden achievement description.", global: "42.5%", missable: "unknown" as const, condition: "Unknown -- description hidden by Steam." },
    { name: "Forgiveness", description: "Hidden achievement description.", global: "40.5%", missable: "unknown" as const, condition: "Unknown -- description hidden by Steam." },
    { name: "Rest in Pieces", description: "Hidden achievement description.", global: "39.4%", missable: "unknown" as const, condition: "Unknown -- description hidden by Steam." },
    { name: "Early Grave", description: "Hidden achievement description.", global: "5.8%", missable: "unknown" as const, condition: "Unknown -- description hidden by Steam. Rare (5.8%), likely tied to a specific ending or hidden challenge." },
  ],
};

type Achievement = {
  name: string;
  description: string;
  global: string;
  missable: boolean | "unknown";
  condition: string;
};

const faq = [
  {
    question: "How many achievements are in It Reaches?",
    answer: "It Reaches has 20 Steam Achievements. This page lists every one with official descriptions, unlock conditions, and missable warnings.",
  },
  {
    question: "Can I get all achievements in one playthrough?",
    answer: "Probably not. Several achievements are tied to collectibles, and fully upgrading a weapon may require resources spread across the game. Hidden achievements and Early Grave (5.8% unlock rate) suggest there may be ending-specific or challenge-based requirements.",
  },
  {
    question: "Which achievements are missable?",
    answer: "The five collectible achievements (Toy Police Car, dog photograph, Toy Carousel, son's drawing, Worn Football) and Fully Upgraded are likely missable. Save before major chapter transitions if you are hunting collectibles.",
  },
  {
    question: "What are the hidden achievements?",
    answer: "Steam hides the descriptions for What is he made of?!, Forgiveness, Rest in Pieces, and Early Grave. We are testing these in-game and will update exact unlock conditions once verified.",
  },
  {
    question: "What is the rarest achievement?",
    answer: "Fully Upgraded is the rarest visible achievement at 3.7% global unlock rate. Early Grave is also rare at 5.8% but is hidden.",
  },
];

function AchievementRow({ ach }: { ach: Achievement }) {
  return (
    <tr className="border-b border-white/5">
      <td className="py-4 pr-4 align-top font-headline-sm text-foreground">{ach.name}</td>
      <td className="py-4 pr-4 align-top text-on-surface-variant">{ach.description}</td>
      <td className="py-4 pr-4 align-top text-on-surface-variant">{ach.condition}</td>
      <td className="py-4 pr-4 align-top text-on-surface-variant whitespace-nowrap">{ach.global}</td>
      <td className="py-4 align-top">
        {ach.missable === true ? (
          <Badge variant="warning">Missable</Badge>
        ) : ach.missable === "unknown" ? (
          <Badge variant="warning">Unknown</Badge>
        ) : (
          <Badge variant="new">No</Badge>
        )}
      </td>
    </tr>
  );
}

function AchievementTable({ items, id, title }: { items: Achievement[]; id: string; title: string }) {
  return (
    <section id={id} className="mb-12">
      <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-3 pr-4 font-headline-sm text-foreground">Achievement</th>
              <th className="py-3 pr-4 font-headline-sm text-foreground">Description</th>
              <th className="py-3 pr-4 font-headline-sm text-foreground">How to Unlock</th>
              <th className="py-3 pr-4 font-headline-sm text-foreground">Global %</th>
              <th className="py-3 font-headline-sm text-foreground">Missable</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <AchievementRow key={item.name} ach={item} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function AchievementsPage() {
  return (
    <ArticleTemplate
      article={article}
      breadcrumb={breadcrumb}
      toc={toc}
      faq={faq}
      related={related}
    >
      <section id="quick-answer" className="mb-12 scroll-mt-24">
        <QuickAnswer title="Quick Answer" as="h2">
          It Reaches has 20 Steam Achievements. Most story and combat achievements unlock naturally, but five collectibles and the Fully Upgraded achievement are likely missable. Four achievements have hidden descriptions on Steam and require further in-game testing to confirm exact unlock conditions.
        </QuickAnswer>
      </section>

      <section id="overview" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Overview
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The list below is based on the official Steam Community global achievements page for It Reaches.
          Official names, descriptions, and global unlock percentages are confirmed.
          Unlock conditions for visible achievements are inferred from their descriptions; hidden achievements are marked as unknown until verified through direct playthrough.
        </p>
      </section>

      <AchievementTable id="story" title="Story Achievements" items={achievements.story} />
      <AchievementTable id="combat" title="Combat & Ability Achievements" items={[...achievements.combat, ...achievements.death]} />
      <AchievementTable id="collectible" title="Collectible Achievements" items={achievements.collectible} />
      <AchievementTable id="interactive" title="Interactive Achievements" items={achievements.interactive} />
      <AchievementTable id="hidden" title="Hidden Achievements" items={achievements.hidden} />

      <section id="completion" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Completion Tips
        </h2>
        <ul className="space-y-4 text-on-surface-variant leading-relaxed list-disc list-inside">
          <li><strong>Save often:</strong> Use multiple save slots before major chapter transitions and before points of no return.</li>
          <li><strong>Explore thoroughly:</strong> The five collectible achievements require finding family items hidden in the environment.</li>
          <li><strong>Upgrade wisely:</strong> Resources for Fully Upgraded may be limited; prioritize one weapon if you want this achievement.</li>
          <li><strong>Test deaths and interactions:</strong> Some achievements require dying to specific enemies or interacting with specific objects.</li>
          <li><strong>Watch for hidden achievements:</strong> Four achievements hide their descriptions. We will update this page once their exact conditions are confirmed.</li>
        </ul>
      </section>

      <Notice variant="warning" title="Hidden achievement conditions pending verification" titleAs="h3">
        The official Steam Community page hides descriptions for What is he made of?!, Forgiveness, Rest in Pieces, and Early Grave.
        We are playing through It Reaches to confirm their exact unlock conditions and will update this page as soon as they are verified.
      </Notice>
    </ArticleTemplate>
  );
}
