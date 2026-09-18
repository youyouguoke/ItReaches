import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { GuideCard } from "@/components/cards/GuideCard";
import { Notice } from "@/components/ui/Notice";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Story Explained - Lore Analysis",
  description: "Deep lore analysis of It Reaches: story, characters, family tragedy, and the origin of the hand creatures.",
  alternates: {
    canonical: "https://itreachesguide.com/story",
  },
};

const article: Article = {
  title: "It Reaches Story Explained",
  description: "A breakdown of the story and characters of It Reaches based on the official Steam description and verified gameplay footage.",
  href: "/story",
  publishedDate: "2026-07-29",
  updatedDate: "2026-07-31",
  author: "It Reaches Guide Team",
  lastReviewed: "2026-07-31",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "Full-game walkthrough footage with player transcription",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Story Explained" },
];

const toc = [
  { id: "overview", title: "Overview", level: 1 },
  { id: "premise", title: "Narrative Premise", level: 2 },
  { id: "blake", title: "William Blake's Experiment", level: 2 },
  { id: "family", title: "The Family Tragedy", level: 2 },
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
    answer: "The official description calls it something that 'never stops' and 'feels no mercy.' The full game reveals more about its origin through documents, environmental storytelling, and the final confrontation.",
  },
  {
    question: "Who is Sam?",
    answer: "Sam appears to be the protagonist's son. Audio and visions throughout the game show Sam pleading with his father to come home, suggesting the protagonist neglected his family before the events of the game.",
  },
  {
    question: "What are the hand creatures?",
    answer: "According to a recorded log found in the game, a researcher applied an unnamed substance to a severed hand. The tissue broke down and two stronger hands formed from the mass. This experiment appears to be the origin of the Venus Hand Trap and big-hand enemies.",
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
    title: "Sam",
    description: "The protagonist's son, who appears in visions and audio recordings. His dialogue ('You were never there') points to a fractured father-son relationship.",
    image: "/images/story.webp",
    href: "/characters/sam",
    linkLabel: "Read Character Guide",
  },
  {
    title: "William Blake",
    description: "A researcher whose experiments on severed hands created the hand-based creatures. His hideout is a key story location.",
    image: "/images/monster.webp",
    href: "/characters/william-blake",
    linkLabel: "Read Character Guide",
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
          It Reaches follows a police officer through a body camera as he enters an abandoned hospital. Beneath the hospital lies a failed experiment that can regrow severed flesh into new hands, and the officer&apos;s own fractured family history may be tied to the horror he is escaping.
        </QuickAnswer>
      </section>

      <section id="premise" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Narrative Premise
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          According to the official Steam description, what should have been a routine police operation quickly escalates into a nightmare. The body camera perspective makes the player feel like they are watching actual police footage, grounding the horror in a realistic and claustrophobic experience.
        </p>
      </section>

      <section id="blake" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          William Blake&apos;s Experiment
        </h2>
        <p className="text-on-surface-variant mb-4 leading-relaxed">
          A recorded log found in the facility describes a researcher who applied an unnamed substance to a severed hand. He expected the tissue to fail. Instead, it broke down completely and two new hands began to form from the mass -- stronger, more precise, and more powerful than before.
        </p>
        <p className="text-on-surface-variant mb-4 leading-relaxed">
          The researcher was told his work was finished and that he had failed. He hid the specimen until he could understand it, promising to show the world what they had tried to shut down. This experiment appears to be the origin of the Venus Hand Trap and the big-hand enemies encountered later.
        </p>
      </section>

      <section id="family" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          The Family Tragedy
        </h2>
        <p className="text-on-surface-variant mb-4 leading-relaxed">
          Throughout the game the protagonist experiences visions and audio of a child named Sam. Sam asks his father to play, complains about being cold, and begs him not to leave. In one vision the protagonist promises Sam&apos;s mother he will bring Sam home, but the scene ends in panic.
        </p>
        <p className="text-on-surface-variant mb-4 leading-relaxed">
          In the later part of the game Sam accuses the protagonist directly: &quot;You failed me. You were never there.&quot; The protagonist denies that Sam is his son, suggesting the guilt has either manifested as a hostile entity or that the entity is using Sam&apos;s image against him.
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
          The hospital is not just a setting; it is the hiding place for something that has been waiting. The game&apos;s story ties together a failed biological experiment, a missing or dead family, and a protagonist whose own guilt may be the real monster he is running from.
        </p>
      </section>

      <Notice variant="info" title="Lore based on verified footage" titleAs="h3">
        The family tragedy and William Blake experiment details are derived from transcribed gameplay footage (community-reported, single source). The full ending context is not verified.
      </Notice>
    </ArticleTemplate>
  );
}
