import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Puzzle Guide - Known Codes & Solutions",
  description: "Puzzle-solving guide for It Reaches: known puzzle types, confirmed code locations, and strategies for finding solutions while exact codes are being verified.",
  alternates: {
    canonical: "https://itreachesguide.com/puzzles",
  },
};

const article: Article = {
  title: "It Reaches Puzzle Guide - Known Codes & Solutions",
  description: "A practical guide to puzzles in It Reaches. Covers confirmed puzzle types, known code locations from community walkthroughs, and safe strategies for finding solutions while exact codes are verified.",
  href: "https://itreachesguide.com/puzzles",
  publishedDate: "2026-07-30",
  updatedDate: "2026-07-31",
  author: "It Reaches Guide Team",
  readingTime: "7 min",
  difficulty: "Mixed",
  lastReviewed: "2026-07-31",
  status: "inProgress",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "Steam Community discussions mentioning code doors",
    "Transcribed full-game walkthrough footage",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Puzzle Guide" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "types", title: "Confirmed Puzzle Types", level: 1 },
  { id: "known", title: "Known Puzzle Locations", level: 1 },
  { id: "strategies", title: "Solving Strategies", level: 1 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

const related = [
  {
    title: "Complete Walkthrough",
    description: "Chapter-by-chapter guide through The Hospital to The Organism.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "The Hospital",
    description: "Opening chapter with introductory puzzles.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/the-hospital",
    tag: "Walkthrough",
  },
  {
    title: "The Sewer",
    description: "Chapter with harder environmental puzzles.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough/the-sewer",
    tag: "Walkthrough",
  },
  {
    title: "Items & Collectibles",
    description: "How collectibles relate to puzzles and achievements.",
    image: "/images/story.webp",
    href: "/items",
    tag: "Items",
  },
];

const faq = [
  {
    question: "What puzzle types are in It Reaches?",
    answer: "Based on community reports and achievement data, It Reaches uses environmental puzzles: key locks, door codes, valve/power routing, cage locks, and interactive objects such as holes in walls. Specific codes are still being verified.",
  },
  {
    question: "Where can I find door codes?",
    answer: "Codes are usually hinted at through nearby documents, notes, whiteboards, or environmental details. One Steam discussion mentions a code door in a room with a table and light to the left, suggesting codes are found in the surrounding area.",
  },
  {
    question: "Are exact puzzle solutions available?",
    answer: "Not yet. We are reviewing full-game walkthrough footage to confirm exact codes, combinations, and solutions. This page lists known puzzle types and safe strategies in the meantime.",
  },
  {
    question: "Should I fight enemies while solving puzzles?",
    answer: "Usually no. The entity and minions patrol nearby. Try to learn patrol routes first, then solve the puzzle during safe windows or after creating distance.",
  },
  {
    question: "What should I do if a puzzle seems to have no clues?",
    answer: "Backtrack to nearby rooms, check documents in your inventory, and look for audio or light cues. Some clues are hidden behind furniture or on objects that only become readable at the correct camera angle.",
  },
];

const knownPuzzles = [
  {
    name: "Key Retrieval",
    location: "Mid-game facility area (~42:54 in transcribed footage)",
    status: "Confirmed; exact steps unknown",
    notes: "Player spots a key and asks, 'How do I get it?' Likely requires finding a path around a blocked area or using an object to reach it.",
  },
  {
    name: "Locked Door / Gate",
    location: "Area near old home vision (~56:20 in transcribed footage)",
    status: "Confirmed; exact mechanism unknown",
    notes: "Player says, 'Got to get this open somehow.' Could require a key, lever, or code found nearby.",
  },
  {
    name: "Cage Lock Code",
    location: "Referenced in a dedicated YouTube short",
    status: "Confirmed to exist; exact code unknown",
    notes: "A YouTube short titled 'Cage Lock Code - It Reaches' confirms this puzzle exists. We are verifying the exact combination.",
  },
  {
    name: "Code Door",
    location: "Room with a table and light to the left",
    status: "Confirmed by Steam Discussion; code unknown",
    notes: "A player asked about a code door in this room. The solution likely requires finding a note or number sequence nearby.",
  },
  {
    name: "Rising Liquid Escape",
    location: "Final facility area (~2:06:42 in transcribed footage)",
    status: "Confirmed; exact route unknown",
    notes: "Player shouts, 'the liquid is rising,' during what appears to be an environmental escape sequence near the end.",
  },
  {
    name: "Hole in the Wall",
    location: "Unknown chapter",
    status: "Achievement confirms existence",
    notes: "The 'What's in the hole?' achievement requires reaching inside a hole in the wall, likely an interactive puzzle or risk/reward moment.",
  },
];

export default function PuzzlesPage() {
  return (
    <>
      <ArticleTemplate
        article={article}
        breadcrumb={breadcrumb}
        toc={toc}
        faq={faq}
        related={related}
      >
        <section id="quick-answer" className="mb-12 scroll-mt-24">
          <QuickAnswer title="Quick Answer" as="h2">
            It Reaches uses environmental puzzles including door codes, cage locks, valve/power routing, and interactive objects like holes in walls. Clues are usually found in nearby documents or environmental details. Exact codes for some puzzles are still being verified from full-game walkthrough footage.
          </QuickAnswer>
        </section>

        <section id="types" className="mb-12">
          <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
            Confirmed Puzzle Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Door Codes", desc: "Keypad or combination locks on security doors and storage rooms." },
              { title: "Cage Locks", desc: "Physical cage or gate locks requiring a specific code or key." },
              { title: "Valve / Power Routing", desc: "Restore power, drain water, or route systems to progress." },
              { title: "Interactive Objects", desc: "Holes in walls, traps, and objects that trigger achievements." },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-surface-container-low border border-white/5">
                <h3 className="font-headline-sm text-foreground mb-2">{item.title}</h3>
                <p className="text-on-surface-variant text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="known" className="mb-12">
          <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
            Known Puzzle Locations
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 pr-4 font-headline-sm text-foreground">Puzzle</th>
                  <th className="py-3 pr-4 font-headline-sm text-foreground">Location</th>
                  <th className="py-3 pr-4 font-headline-sm text-foreground">Status</th>
                  <th className="py-3 font-headline-sm text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="text-on-surface-variant">
                {knownPuzzles.map((puzzle) => (
                  <tr key={puzzle.name} className="border-b border-white/5">
                    <td className="py-4 pr-4 align-top font-headline-sm text-foreground">{puzzle.name}</td>
                    <td className="py-4 pr-4 align-top">{puzzle.location}</td>
                    <td className="py-4 pr-4 align-top">{puzzle.status}</td>
                    <td className="py-4 align-top">{puzzle.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Notice variant="warning" title="Exact codes coming soon" titleAs="h3">
            We are reviewing full-game walkthrough footage to confirm exact codes and step-by-step solutions.
            The table above only includes puzzles that have been referenced in public sources.
          </Notice>
        </section>

        <section id="strategies" className="mb-12">
          <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
            Solving Strategies
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-on-surface-variant leading-relaxed">
            <li><strong>Search before interacting.</strong> Walk around the room and check every surface before touching a keypad or switch.</li>
            <li><strong>Read nearby documents.</strong> Codes are almost always written on something close to the puzzle, even if it is in another room.</li>
            <li><strong>Listen and watch.</strong> Some mechanisms give audio cues or visual feedback when you are close to the correct input.</li>
            <li><strong>Manage threat windows.</strong> The entity may patrol nearby. Solve in short, safe bursts rather than standing still for long periods.</li>
            <li><strong>Save first.</strong> If manual saving is available, save before starting multi-step or timed sequences.</li>
          </ol>
        </section>
      </ArticleTemplate>
    </>
  );
}
