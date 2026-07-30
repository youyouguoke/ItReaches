import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches FAQ - Frequently Asked Questions",
  description: "Frequently asked questions about It Reaches: gameplay, story, characters, chapters, achievements, puzzles, endings, and system requirements.",
  alternates: {
    canonical: "https://itreachesguide.com/faq",
  },
};

const article: Article = {
  title: "It Reaches FAQ - Frequently Asked Questions",
  description: "A consolidated FAQ for It Reaches covering gameplay, story, characters, chapters, achievements, puzzles, endings, and the Steam release.",
  href: "https://itreachesguide.com/faq",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-30",
  author: "It Reaches Guide Team",
  readingTime: "7 min",
  difficulty: "Easy",
  lastReviewed: "2026-07-30",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "Official Steam description of gameplay, perspective, and protagonist",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "FAQ" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "basics", title: "Basics", level: 2 },
  { id: "gameplay", title: "Gameplay", level: 2 },
  { id: "story-characters", title: "Story & Characters", level: 2 },
  { id: "walkthrough", title: "Walkthrough & Chapters", level: 2 },
  { id: "puzzles-endings", title: "Puzzles & Endings", level: 2 },
  { id: "achievements", title: "Achievements & Collectibles", level: 2 },
  { id: "sources", title: "Sources & Disclaimer", level: 1 },
];

const related = [
  {
    title: "Complete Walkthrough",
    description: "All six chapters from Awakening to Oblivion.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "Beginner Tips",
    description: "Essential survival advice for new players.",
    image: "/images/tips.webp",
    href: "/tips",
    tag: "Tips",
  },
  {
    title: "Story Explained",
    description: "Lore and character breakdown.",
    image: "/images/story.webp",
    href: "/story",
    tag: "Story",
  },
  {
    title: "Items & Collectibles",
    description: "How the collectible system works in It Reaches.",
    image: "/images/story.webp",
    href: "/items",
    tag: "Items",
  },
];

const faq = [
  {
    question: "What is It Reaches?",
    answer: "It Reaches is a first-person horror game developed by Emberflight Games, played through the lens of a police officer's body cam. You control officer Jason Thompson, trapped in an abandoned hospital and hunted by a relentless entity.",
  },
  {
    question: "When was It Reaches released?",
    answer: "It Reaches was released on Steam on May 17, 2026.",
  },
  {
    question: "How much does It Reaches cost?",
    answer: "The base game is priced at $14.99 on Steam. A Collector's Edition and DLC packs are also available.",
  },
  {
    question: "What perspective is It Reaches played in?",
    answer: "The game is played through a police body camera, giving it a realistic, found-footage style first-person perspective.",
  },
  {
    question: "How long is It Reaches?",
    answer: "A standard playthrough takes 4-6 hours. Completionists hunting all 20 achievements and secrets can expect 8-10 hours.",
  },
  {
    question: "Is It Reaches multiplayer?",
    answer: "No, It Reaches is a single-player experience. There are no co-op or multiplayer modes.",
  },
  {
    question: "Is It Reaches based on a true story?",
    answer: "No. It is a fictional horror game by Emberflight Games, though the abandoned hospital setting may draw on familiar horror tropes and urban legends.",
  },
  {
    question: "Who is the main character in It Reaches?",
    answer: "You play as officer Jason Thompson, a police officer whose routine operation turns into a nightmare inside the abandoned hospital.",
  },
  {
    question: "What is the entity that hunts you?",
    answer: "The official description calls it something that 'never stops' and 'feels no mercy.' The full game likely reveals more about its origin through documents and environmental storytelling. We will update this answer as we collect every piece of lore.",
  },
  {
    question: "Where does It Reaches take place?",
    answer: "The game takes place inside an abandoned hospital and its underground facilities. The official description does not name the hospital as Saint Jude Asylum.",
  },
  {
    question: "How many chapters are in It Reaches?",
    answer: "Based on the community-reported player hub structure, It Reaches appears to be divided into six main chapters: Awakening, Ventilation, The Reach, Comm Tower, Sub Level, and Oblivion. These names and order have not been officially confirmed by the developer and will be verified against the full release.",
  },
  {
    question: "How long does It Reaches take to complete?",
    answer: "A standard first playthrough is estimated at 4-6 hours depending on exploration and difficulty. Completionist runs for all endings and achievements may take 8-12 hours.",
  },
  {
    question: "Can you replay chapters in It Reaches?",
    answer: "Chapter select or replay options are not confirmed. We recommend making manual saves before major chapters if you want to return to specific sections without replaying the entire game.",
  },
  {
    question: "Can you miss collectibles or achievements?",
    answer: "Yes. Some documents, collectibles, and ending conditions are likely missable. Save before the final sequence of each chapter and use multiple save slots if you are hunting achievements.",
  },
  {
    question: "What is the best ending?",
    answer: "The best ending likely requires completing all chapters, collecting key documents, and making correct choices in the final chapter. See the Endings Guide for a full breakdown once confirmed.",
  },
  {
    question: "Does It Reaches have a hard mode?",
    answer: "Difficulty options have not been confirmed in the official Steam description. We will update this answer as soon as the release build is available.",
  },
  {
    question: "Where can I find puzzle solutions?",
    answer: "Visit our Puzzle Solutions page for general strategies and, once verified, exact codes and step-by-step solutions organized by chapter.",
  },
  {
    question: "Are the puzzles in It Reaches hard?",
    answer: "Most puzzles are environmental and require attention to documents, codes, and machinery. The difficulty is expected to be moderate, with a few multi-step puzzles in later chapters.",
  },
  {
    question: "How many achievements are in It Reaches?",
    answer: "The game includes 20 Steam Achievements. Several are tied to story progression, while others require finding secrets or completing specific actions.",
  },
  {
    question: "Is controller support available?",
    answer: "Yes, the game supports full controller functionality on PC.",
  },
  {
    question: "Where can I buy It Reaches?",
    answer: "It Reaches is available on Steam for PC. Check the Game Information panel for the official store link.",
  },
];

export default function FAQPage() {
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
          It Reaches is a single-player bodycam horror game starring officer Jason Thompson, set in an abandoned hospital and released on Steam in May 2026. This FAQ consolidates the most common questions about gameplay, story, chapters, puzzles, endings, achievements, and collectibles.
        </QuickAnswer>
      </section>

      <section id="basics" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Basics
        </h2>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          {faq.slice(0, 3).map((item, index) => (
            <div key={index}>
              <h3 className="font-headline-sm text-foreground mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gameplay" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Gameplay
        </h2>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          {faq.slice(3, 7).map((item, index) => (
            <div key={index}>
              <h3 className="font-headline-sm text-foreground mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="story-characters" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Story & Characters
        </h2>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          {faq.slice(7, 10).map((item, index) => (
            <div key={index}>
              <h3 className="font-headline-sm text-foreground mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="walkthrough" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Walkthrough & Chapters
        </h2>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          {faq.slice(10, 13).map((item, index) => (
            <div key={index}>
              <h3 className="font-headline-sm text-foreground mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="puzzles-endings" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Puzzles & Endings
        </h2>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          {faq.slice(13, 17).map((item, index) => (
            <div key={index}>
              <h3 className="font-headline-sm text-foreground mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="achievements" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Achievements & Collectibles
        </h2>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          {faq.slice(17, 21).map((item, index) => (
            <div key={index}>
              <h3 className="font-headline-sm text-foreground mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Answers based on verified sources" titleAs="h3">
        Questions about release date, price, protagonist, perspective, and platform are answered from the official Steam store page.
        Questions about chapter structure, endings, puzzle difficulty, and collectible locations are based on community-reported structure and genre conventions, and are marked as being verified where applicable.
      </Notice>
    </ArticleTemplate>
  );
}
