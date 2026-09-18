import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Endings - What Is Actually Known",
  description:
    "What is verified and what is not known about the endings of It Reaches. No invented ending names, no guessed unlock conditions.",
  alternates: {
    canonical: "https://itreachesguide.com/endings",
  },
};

const article: Article = {
  title: "It Reaches Endings - What Is Actually Known",
  description:
    "The number of endings in It Reaches and their conditions are not officially confirmed. This page separates verified facts from unverified claims — and does not guess.",
  href: "https://itreachesguide.com/endings",
  publishedDate: "2026-07-29",
  updatedDate: "2026-09-08",
  author: "It Reaches Guide Team",
  lastReviewed: "2026-09-08",
  status: "inProgress",
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Endings" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "known", title: "What Is Known", level: 1 },
  { id: "unknown", title: "What Is Not Known", level: 1 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

const related = [
  {
    title: "The Organism",
    description: "The final chapter where the ending sequence plays out.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/the-organism",
    tag: "Walkthrough",
  },
  {
    title: "Achievements",
    description: "Hidden achievements may relate to endings — conditions unverified.",
    image: "/images/achievements.webp",
    href: "/achievements",
    tag: "Achievements",
  },
  {
    title: "Story",
    description: "What the documents reveal about the facility.",
    image: "/images/story.webp",
    href: "/story",
    tag: "Story",
  },
  {
    title: "FAQ",
    description: "More questions with honest answers.",
    image: "/images/tips.webp",
    href: "/faq",
    tag: "FAQ",
  },
];

const faq = [
  {
    question: "How many endings does It Reaches have?",
    answer:
      "Unknown. The official Steam description does not state a number, and no official source confirms multiple endings.",
  },
  {
    question: "What affects the ending?",
    answer:
      "Unverified. Common horror-game patterns (collectibles, final choices) may apply, but we do not present patterns as facts for this game.",
  },
  {
    question: "Are the ending names on other sites official?",
    answer:
      "We cannot confirm any ending names. We list none until one is verified against evidence.",
  },
  {
    question: "When will this page have real answers?",
    answer:
      "When the conditions are verified against reproducible evidence — in-game footage or multiple independent player confirmations. Until then, this page will keep saying Unknown.",
  },
];

export default function EndingsPage() {
  return (
    <ArticleTemplate
      article={article}
      breadcrumb={breadcrumb}
      toc={toc}
      faq={faq}
      related={related}
      verification="unverified"
      heroImage={{
        src: "/images/heroes/endings.jpg",
        alt: "It Reaches gameplay: police car escape finale at the end of The Sewer",
      }}
    >
      <section id="quick-answer" className="mb-12 scroll-mt-24">
        <QuickAnswer title="Quick Answer" as="h2">
          The number of endings in It Reaches is{" "}
          <strong>not officially confirmed</strong>. The game concludes with an
          ending sequence in the final chapter (visible in walkthrough
          footage). Everything beyond that — alternate endings, unlock
          conditions, collectible effects — is unverified.
        </QuickAnswer>
      </section>

      <section id="known" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What Is Known
        </h2>
        <ul className="space-y-4 text-on-surface-variant leading-relaxed list-disc list-inside">
          <li>
            <strong>The game has a concluding sequence.</strong> The final
            chapter (The Organism) ends with an ending sequence and credits,
            visible in full-game walkthrough footage.
          </li>
          <li>
            <strong>Hidden achievements exist.</strong> Four achievements have
            hidden Steam descriptions (What is he made of?!, Forgiveness, Rest
            in Pieces, Early Grave). They may relate to the story&apos;s
            conclusion — that is unverified.
          </li>
        </ul>
      </section>

      <section id="unknown" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What Is Not Known
        </h2>
        <ul className="space-y-4 text-on-surface-variant leading-relaxed list-disc list-inside">
          <li>How many endings the game has.</li>
          <li>Whether choices or collectibles affect the outcome.</li>
          <li>Whether a secret or true ending exists.</li>
          <li>The exact triggers of the four hidden achievements.</li>
        </ul>
        <Notice variant="warning" title="We do not guess" titleAs="h3">
          Many guide sites publish plausible-sounding ending frameworks. We
          would rather under-promise. This page updates the moment a claim is
          verified against evidence.
        </Notice>
      </section>
    </ArticleTemplate>
  );
}
