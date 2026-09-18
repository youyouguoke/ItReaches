import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abandoned Hospital - It Reaches Setting & Lore Guide",
  description: "The abandoned hospital setting in It Reaches: layout, atmosphere, official description, and how the location shapes the horror and gameplay.",
  alternates: {
    canonical: "https://itreachesguide.com/characters/abandoned-hospital",
  },
};

const article: Article = {
  title: "Abandoned Hospital - It Reaches Setting",
  description: "A setting guide for the abandoned hospital in It Reaches. Covers what the official Steam description reveals about the location, its atmosphere, and how it shapes gameplay.",
  href: "https://itreachesguide.com/characters/abandoned-hospital",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-30",
  author: "It Reaches Guide Team",
  readingTime: "4 min",
  difficulty: "Easy",
  lastReviewed: "2026-07-30",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "Official Steam description of the abandoned hospital and underground facilities",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Characters", href: "/story#characters" },
  { title: "Abandoned Hospital" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "official", title: "What the Official Description Says", level: 2 },
  { id: "atmosphere", title: "Atmosphere & Design", level: 2 },
  { id: "gameplay", title: "Gameplay Role", level: 2 },
  { id: "underground", title: "Underground Facilities", level: 2 },
  { id: "sources", title: "Sources & Disclaimer", level: 1 },
];

const related = [
  {
    title: "Story Explained",
    description: "Full lore and narrative breakdown of It Reaches.",
    image: "/images/story.webp",
    href: "/story",
    tag: "Story",
  },
  {
    title: "Jason Thompson",
    description: "The playable protagonist entering the hospital.",
    image: "/images/lore.webp",
    href: "/characters/jason-thompson",
    tag: "Characters",
  },
  {
    title: "The Entity",
    description: "The force that haunts the hospital and its depths.",
    image: "/images/monster.webp",
    href: "/characters/the-entity",
    tag: "Characters",
  },
  {
    title: "Complete Walkthrough",
    description: "Chapter-by-chapter guide through the hospital and underground.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
];

export default function AbandonedHospitalPage() {
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
          It Reaches takes place in an abandoned hospital and its underground facilities. The official Steam description presents the location as a claustrophobic, decaying space where officer Jason Thompson must uncover a dark mystery while something hunts him. Exact room names, map layout, and facility history are not officially documented.
        </QuickAnswer>
      </section>

      <section id="official" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          What the Official Description Says
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The Steam store page describes the setting as an abandoned hospital with underground facilities. It is the location of a dark mystery that Jason Thompson must uncover, and it houses the horrors that follow him. The description does not name a specific city, institution, or real-world inspiration.
        </p>
      </section>

      <section id="atmosphere" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Atmosphere & Design
        </h2>
        <ul className="space-y-4 text-on-surface-variant leading-relaxed list-disc list-inside">
          <li><strong>Decay and abandonment:</strong> The environment emphasizes neglect, with damaged walls, scattered debris, and failing lights.</li>
          <li><strong>Claustrophobic corridors:</strong> Tight hallways and limited sightlines reinforce the body camera perspective.</li>
          <li><strong>Environmental storytelling:</strong> Documents, signs, and object placement reveal what happened in the facility.</li>
        </ul>
      </section>

      <section id="gameplay" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Gameplay Role
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The hospital is not just a backdrop. Its layout dictates exploration routes, hiding spots, puzzle placement, and chase sequences. Players must learn which areas are open, which are dead ends, and where the entity is most likely to appear.
        </p>
      </section>

      <section id="underground" className="mb-12">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Underground Facilities
        </h2>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          The official description explicitly mentions underground facilities beneath the hospital. Walkthrough footage shows the later chapters taking place in these deeper areas. Specific rooms and lore details beyond the footage are unverified.
        </p>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={article.lastReviewed}
        sources={article.sources}
      />

      <Notice variant="warning" title="Setting details unverified" titleAs="h3">
        This page reflects the official Steam description of the setting. Specific map details, room names, and facility history beyond walkthrough footage are unverified.
      </Notice>
    </ArticleTemplate>
  );
}
