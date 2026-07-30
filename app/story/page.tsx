import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { GuideCard } from "@/components/cards/GuideCard";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Story Explained - Lore Analysis",
  description: "Deep lore analysis of It Reaches: story, characters, timeline and hidden meaning.",
  alternates: {
    canonical: "https://itreachesguide.com/story",
  },
};

const article: Article = {
  title: "It Reaches Story Explained",
  description: "A breakdown of the story and characters of It Reaches based on the official Steam description.",
  href: "/story",
  publishedDate: "2026-07-29",
  updatedDate: "2026-07-29",
  author: "It Reaches Guide Team",
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Story Explained" },
];

const toc = [
  { id: "overview", title: "Overview", level: 1 },
  { id: "premise", title: "Narrative Premise", level: 2 },
  { id: "characters", title: "Key Characters", level: 2 },
  { id: "mystery", title: "The Dark Mystery", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

const related = [
  {
    title: "Endings Guide",
    description: "How to unlock and interpret every ending.",
    image: "/images/endings.webp",
    href: "/endings",
    tag: "Endings",
  },
  {
    title: "Monster Guide",
    description: "Lore and survival strategies for the entity.",
    image: "/images/monster.webp",
    href: "/monsters",
    tag: "Monsters",
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
    question: "Is It Reaches based on a true story?",
    answer: "No. It is a fictional horror game by Emberflight Games, though the abandoned hospital setting may draw on familiar horror tropes and urban legends.",
  },
  {
    question: "What is the entity that hunts you?",
    answer: "The official description calls it something that 'never stops' and 'feels no mercy.' The full game likely reveals more about its origin through documents and environmental storytelling. We will update this section as we collect every piece of lore.",
  },
];

const characters = [
  {
    title: "Officer Jason Thompson",
    description: "The playable character. A police officer whose routine operation becomes a nightmare inside the abandoned hospital.",
    image: "/images/lore.webp",
    href: "/characters/jason-thompson",
    linkLabel: "Read Character Guide",
  },
  {
    title: "The Entity",
    description: "The relentless force that hunts Jason through the hospital and its underground facilities. Its origin and motives are central to the dark mystery.",
    image: "/images/monster.webp",
    href: "/characters/the-entity",
    linkLabel: "Read Character Guide",
  },
  {
    title: "The Abandoned Hospital",
    description: "The setting itself is a character: decaying walls, claustrophobic corridors, and underground facilities that hide the truth behind the horror.",
    image: "/images/story.webp",
    href: "/characters/abandoned-hospital",
    linkLabel: "Read Setting Guide",
  },
];

export default function StoryPage() {
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
          It Reaches follows officer Jason Thompson through a police body camera as he enters an abandoned hospital. What begins as a routine operation escalates into a nightmare, and he must uncover the dark mystery behind the horror that follows him.
        </QuickAnswer>
      </section>

      <section id="premise" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Narrative Premise
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          According to the official Steam description, what should have been a routine police operation quickly escalates into a nightmare for officer Jason Thompson. The body camera perspective makes the player feel like they are watching actual police footage, grounding the horror in a realistic and claustrophobic experience.
        </p>
      </section>

      <section id="characters" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Key Characters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {characters.map((character) => (
            <GuideCard key={character.title} {...character} />
          ))}
        </div>
      </section>

      <section id="mystery" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          The Dark Mystery
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The hospital is not just a setting; it is the hiding place for something that has been waiting. The game&apos;s marketing emphasizes uncovering a dark mystery left behind and escaping the horrors lurking underground. The full story is delivered through documents, environmental details, and the final confrontation.
        </p>
      </section>
    </ArticleTemplate>
  );
}
