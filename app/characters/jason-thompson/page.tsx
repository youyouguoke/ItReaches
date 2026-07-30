import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jason Thompson - It Reaches Main Character Guide",
  description: "Who is Jason Thompson in It Reaches? Background, role, body camera perspective, and gameplay implications based on the official Steam description.",
  alternates: {
    canonical: "https://itreachesguide.com/characters/jason-thompson",
  },
};

const article: Article = {
  title: "Jason Thompson - It Reaches Main Character",
  description: "A character guide for officer Jason Thompson, the playable protagonist of It Reaches. Based on the official Steam store description.",
  href: "https://itreachesguide.com/characters/jason-thompson",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-30",
  author: "It Reaches Guide Team",
  readingTime: "4 min",
  difficulty: "Easy",
  lastReviewed: "2026-07-30",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "Official Steam description of protagonist Jason Thompson",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Characters", href: "/story#characters" },
  { title: "Jason Thompson" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "role", title: "Role in It Reaches", level: 2 },
  { id: "background", title: "Background", level: 2 },
  { id: "gameplay", title: "Gameplay Implications", level: 2 },
  { id: "related", title: "Related Characters", level: 2 },
  { id: "sources", title: "Sources & Disclaimer", level: 1 },
];

const related = [
  {
    title: "Story Explained",
    description: "Lore and narrative breakdown of It Reaches.",
    image: "/images/story.webp",
    href: "/story",
    tag: "Story",
  },
  {
    title: "The Entity",
    description: "The force that hunts Jason through the hospital.",
    image: "/images/monster.webp",
    href: "/characters/the-entity",
    tag: "Characters",
  },
  {
    title: "Complete Walkthrough",
    description: "Step-by-step guide through all six chapters.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "Beginner Tips",
    description: "Survival basics for new players.",
    image: "/images/tips.webp",
    href: "/tips",
    tag: "Tips",
  },
];

export default function JasonThompsonPage() {
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
          Jason Thompson is the playable protagonist of It Reaches. He is a police officer whose routine operation turns into a nightmare inside an abandoned hospital. The entire game is viewed through his body camera, giving the player a found-footage style first-person perspective.
        </QuickAnswer>
      </section>

      <section id="role" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Role in It Reaches
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          Jason Thompson is the central character of It Reaches. As a police officer, he enters what should be a routine call and quickly finds himself trapped in a decaying hospital while something hunts him. The player experiences every moment through his body camera, making his reactions, movement, and survival the core of the game.
        </p>
      </section>

      <section id="background" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Background
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The official Steam store page identifies Jason Thompson as a police officer. It does not confirm his rank, department, or backstory beyond the setup of the game: a routine operation that escalates into a nightmare. Additional background details may appear in documents or audio logs inside the game and will be added to this page once verified.
        </p>
      </section>

      <section id="gameplay" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Gameplay Implications
        </h2>
        <ul className="space-y-4 text-on-surface-variant leading-relaxed list-disc list-inside">
          <li><strong>Body camera perspective:</strong> The camera is attached to Jason, limiting peripheral vision and creating a realistic, claustrophobic view of the hospital.</li>
          <li><strong>Realistic movement:</strong> As an officer rather than a soldier, Jason is unlikely to have heavy weapons or advanced gear. Avoidance, hiding, and resource management are more important than direct confrontation.</li>
          <li><strong>Professional instincts:</strong> His role suggests he would investigate rooms methodically, collect evidence, and read documents -- behaviors that align with the game&apos;s exploration and collectible systems.</li>
        </ul>
      </section>

      <section id="related" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Related Characters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/characters/the-entity" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Antagonist</div>
            <div className="text-foreground font-headline-sm mb-1">The Entity</div>
            <div className="text-sm text-on-surface-variant">The relentless force hunting Jason through the hospital.</div>
          </a>
          <a href="/characters/abandoned-hospital" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
            <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Setting</div>
            <div className="text-foreground font-headline-sm mb-1">The Abandoned Hospital</div>
            <div className="text-sm text-on-surface-variant">The decaying location that hides the dark mystery.</div>
          </a>
        </div>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Character details being verified" titleAs="h3">
        This page is based on the official Steam description and confirmed protagonist name. Additional dialogue, backstory, and in-game documents will be added once we complete our own playthrough and can verify them against the source.
      </Notice>
    </ArticleTemplate>
  );
}
