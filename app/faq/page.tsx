import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { getHeroImage } from "@/lib/hero-images";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches FAQ",
  description:
    "Short answers to the questions players actually search: how many chapters, how many achievements, what is missable, how saves work.",
  alternates: {
    canonical: "https://itreachesguide.com/faq",
  },
};

const article: Article = {
  title: "It Reaches FAQ",
  description:
    "Frequently asked questions about It Reaches, answered only from verified or community-reported sources. Unknown means unknown — we do not guess.",
  href: "https://itreachesguide.com/faq",
  publishedDate: "2026-07-30",
  updatedDate: "2026-09-08",
  author: "It Reaches Guide Team",
  readingTime: "4 min",
  difficulty: "Easy",
  lastReviewed: "2026-09-08",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "DanQ8000 full gameplay walkthrough (community footage)",
    "Steam Community global achievement statistics",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "FAQ" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "game", title: "The Game", level: 2 },
  { id: "progression", title: "Chapters & Progression", level: 2 },
  { id: "completion", title: "Achievements & Collectibles", level: 2 },
  { id: "sources", title: "Sources & Disclaimer", level: 1 },
];

const related = [
  {
    title: "Walkthrough",
    description: "Chapter-by-chapter objectives and missables.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "Puzzles & Codes",
    description: "One page per puzzle, solutions once verified.",
    image: "/images/puzzle.webp",
    href: "/puzzles",
    tag: "Puzzles",
  },
  {
    title: "Achievements",
    description: "All 20 achievements with missable warnings.",
    image: "/images/achievements.webp",
    href: "/achievements",
    tag: "Achievements",
  },
  {
    title: "Collectibles",
    description: "The five family items and their chapters.",
    image: "/images/story.webp",
    href: "/collectibles",
    tag: "Collectibles",
  },
];

const gameFaq = [
  {
    question: "What is It Reaches?",
    answer:
      "A single-player first-person horror game played through a police body camera. You control officer Jason Thompson inside an abandoned hospital and its underground facilities. Developed by Emberflight Games.",
  },
  {
    question: "When was It Reaches released?",
    answer: "May 17, 2026, on Steam.",
  },
  {
    question: "Is It Reaches multiplayer?",
    answer: "No. It is a single-player game.",
  },
  {
    question: "How long is It Reaches?",
    answer:
      "Full-game walkthrough footage runs roughly 4.5 hours. Your time will vary with exploration and deaths.",
  },
];

const progressionFaq = [
  {
    question: "How many chapters are in It Reaches?",
    answer:
      "Five chapters are visible in full-game walkthrough footage: The Hospital, The Basement, The Sewer, The Sewer Hideout, and The Organism. Community-reported, not officially confirmed.",
  },
  {
    question: "Is there chapter select?",
    answer:
      "Unknown. Not confirmed in official sources. Use multiple manual save slots before chapter transitions.",
  },
  {
    question: "How do I save?",
    answer:
      "Manual saves are available in-game. The exact save-point rules are not officially documented — save often and keep separate slots.",
  },
  {
    question: "How many endings does It Reaches have?",
    answer:
      "Unknown. The number of endings and their conditions are not officially confirmed. See the Endings page for what is actually known.",
  },
];

const completionFaq = [
  {
    question: "How many achievements are in It Reaches?",
    answer:
      "20 Steam achievements. Names, descriptions, and global unlock rates are official data.",
  },
  {
    question: "Can achievements be missed?",
    answer:
      "Yes. The five family collectibles and Fully Upgraded are missable. Save before leaving The Sewer and The Sewer Hideout.",
  },
  {
    question: "Which achievements are hidden?",
    answer:
      "What is he made of?!, Forgiveness, Rest in Pieces, and Early Grave have hidden descriptions on Steam. Their unlock conditions are unverified — we do not guess.",
  },
  {
    question: "Where do I find a specific collectible?",
    answer:
      "The Collectibles page lists which chapter each of the five family items is in. Exact pickup points are added after footage verification.",
  },
];

const faq = [...gameFaq, ...progressionFaq, ...completionFaq];

export default function FAQPage() {
  return (
    <ArticleTemplate
      article={article}
      breadcrumb={breadcrumb}
      toc={toc}
      faq={faq}
      related={related}
      verification="verified"
      heroImage={getHeroImage("faq")}
    >
      <section id="quick-answer" className="mb-12 scroll-mt-24">
        <QuickAnswer title="Quick Answer" as="h2">
          It Reaches is a single-player bodycam horror game by Emberflight Games,
          released on Steam May 17, 2026. Five chapters are visible in walkthrough
          footage, with 20 Steam achievements. Answers below cite their evidence
          level; anything unconfirmed is marked Unknown.
        </QuickAnswer>
      </section>

      <section id="game" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          The Game
        </h2>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          {gameFaq.map((item, index) => (
            <div key={index}>
              <h3 className="font-headline-sm text-foreground mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="progression" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Chapters & Progression
        </h2>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          {progressionFaq.map((item, index) => (
            <div key={index}>
              <h3 className="font-headline-sm text-foreground mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="completion" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Achievements & Collectibles
        </h2>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          {completionFaq.map((item, index) => (
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

      <Notice variant="warning" title="Unknown means unknown" titleAs="h3">
        If a question has no confirmed answer, we say so instead of guessing.
        Answers about release date, developer, protagonist, perspective, and
        achievement list are official Steam data. Chapter structure is
        community-reported from walkthrough footage.
      </Notice>
    </ArticleTemplate>
  );
}
