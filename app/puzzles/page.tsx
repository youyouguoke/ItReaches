import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { HowToSchema } from "@/components/seo/HowToSchema";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Puzzle Guide - Solving Tips & Strategies (In Progress)",
  description:
    "General puzzle-solving strategies for It Reaches: how to find clues, approach keypad codes, environmental logic, and underground machinery. Specific codes will be added as they are verified.",
  alternates: {
    canonical: "https://itreachesguide.com/puzzles",
  },
};

const article: Article = {
  title: "It Reaches Puzzle Guide - Solving Tips & Strategies",
  description:
    "A practical guide to solving puzzles in It Reaches while the exact codes and locations are being verified. Covers how to read clues, approach keypads, environmental mechanisms, and underground machinery safely.",
  href: "/puzzles",
  publishedDate: "2026-07-29",
  updatedDate: "2026-07-29",
  author: "It Reaches Guide Team",
  readingTime: "6 min",
  difficulty: "Mixed",
  lastReviewed: "2026-07-29",
  status: "inProgress",
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Puzzle Guide" },
];

const toc = [
  { id: "overview", title: "Overview", level: 1 },
  { id: "how-to-solve", title: "How to Solve Any Puzzle", level: 2 },
  { id: "keypad", title: "Keypad Codes", level: 2 },
  { id: "environmental", title: "Environmental Logic", level: 2 },
  { id: "underground", title: "Underground Mechanisms", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

const related = [
  {
    title: "Complete Walkthrough",
    description: "Step-by-step guidance through every chapter.",
    image: "/images/walkthrough.webp",
    href: "/walkthrough",
    tag: "Walkthrough",
  },
  {
    title: "Endings Guide",
    description: "How puzzle progress and choices affect each ending.",
    image: "/images/endings.webp",
    href: "/endings",
    tag: "Endings",
  },
  {
    title: "Beginner Tips",
    description: "Survival basics for new players before tackling puzzles.",
    image: "/images/tips.webp",
    href: "/tips",
    tag: "Tips",
  },
];

const faq = [
  {
    question: "Where can I find puzzle codes in It Reaches?",
    answer:
      "Codes are usually hinted at through documents, whiteboards, ID cards, portraits, and environmental details placed near the puzzle itself. The body camera perspective makes small clues harder to spot, so crouch, pan slowly, and check every surface.",
  },
  {
    question: "Does It Reaches have different puzzle types?",
    answer:
      "Yes. Based on the setting and official description, expect three main puzzle types: keypad codes on locked doors, environmental logic such as valves and breaker routing, and larger underground machinery mechanisms.",
  },
  {
    question: "Are exact puzzle solutions available yet?",
    answer:
      "Not yet. We are playing through the full release to verify every puzzle location, exact code, and screenshot. This page currently provides safe general strategies to help you progress without guessing.",
  },
  {
    question: "Should I fight enemies while solving puzzles?",
    answer:
      "Usually no. The entity is relentless and most puzzles require concentration. Try to learn patrol routes first, then solve the puzzle during safe windows or after creating distance.",
  },
  {
    question: "What should I do if a puzzle seems to have no clues?",
    answer:
      "Backtrack to nearby rooms, check documents in your inventory, and look for audio or light cues. Some clues are hidden behind furniture, inside lockers, or on objects that only become readable at the correct camera angle.",
  },
  {
    question: "Will higher difficulty change puzzle solutions?",
    answer:
      "Puzzle logic typically stays the same across difficulty settings. Higher difficulty may remove visual hints, shorten timed windows, or make the entity more aggressive while you solve.",
  },
];

const howToSteps = [
  {
    name: "Search the surrounding area",
    text: "Before interacting with a puzzle, explore nearby rooms for documents, codes, symbols, or audio cues that hint at the solution.",
  },
  {
    name: "Identify the puzzle type",
    text: "Determine whether you are looking at a keypad, an environmental mechanism, or a multi-step underground machinery sequence.",
  },
  {
    name: "Clear the area of threats",
    text: "Watch patrol routes and wait for a safe window before starting any noisy or time-consuming puzzle sequence.",
  },
  {
    name: "Apply the clue to the puzzle",
    text: "Enter the code, align the mechanism, or route power according to the clue you found. If stuck, double-check nearby documents for hidden digits or symbols.",
  },
  {
    name: "Save and move on",
    text: "After solving a puzzle, save if possible before entering the next area. Some puzzles trigger story events that can make backtracking harder.",
  },
];

export default function PuzzlesPage() {
  return (
    <>
      <HowToSchema
        title="How to Solve Puzzles in It Reaches"
        description="A practical guide to approaching puzzles in It Reaches while exact codes are being verified."
        steps={howToSteps}
      />
      <ArticleTemplate
        article={article}
        breadcrumb={breadcrumb}
        toc={toc}
        faq={faq}
        related={related}
      >
        <section id="overview" className="mb-12">
          <QuickAnswer title="Quick Answer" as="h2">
            It Reaches uses environmental puzzles tied to the abandoned hospital setting. Keypad codes, fuse panels, valve routing, and underground machinery are common. Specific codes are being verified against the full release; this page provides safe general strategies for finding clues and solving each puzzle type.
          </QuickAnswer>
        </section>

        <section id="how-to-solve" className="mb-12">
          <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
            How to Solve Any Puzzle
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-on-surface-variant leading-relaxed">
            <li>
              <strong>Look before you interact.</strong> Walk around the room and check every surface before touching a keypad or switch.
            </li>
            <li>
              <strong>Read nearby documents.</strong> Codes are almost always written on something close to the puzzle, even if it is in another room.
            </li>
            <li>
              <strong>Listen and watch.</strong> Some mechanisms give audio cues or visual feedback when you are close to the correct input.
            </li>
            <li>
              <strong>Manage threat windows.</strong> The entity may patrol nearby. Solve in short, safe bursts rather than standing still for long periods.
            </li>
            <li>
              <strong>Save first.</strong> If manual saving is available, save before starting multi-step or timed sequences.
            </li>
          </ol>
        </section>

        <section id="keypad" className="mb-12">
          <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
            Keypad Codes
          </h2>
          <p className="text-on-surface-variant mb-6 leading-relaxed">
            Keypad locks appear on security doors and storage rooms. The codes are typically found on nearby notes, whiteboards, or ID cards. Because the body camera limits your viewing angle, crouch and look at keypads from the correct height to interact with them.
          </p>
          <h3 className="font-headline-sm text-foreground mb-3">
            Common Code Locations
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-on-surface-variant leading-relaxed">
            <li>Sticky notes on monitors or whiteboards near the door.</li>
            <li>ID cards or badges carried by defeated or scripted NPCs.</li>
            <li>Documents labeled &quot;Maintenance,&quot; &quot;Security,&quot; or &quot;Access Log.&quot;</li>
            <li>Audio recordings or radio chatter that speak a number out loud.</li>
          </ul>
          <Notice variant="warning" title="Exact codes coming soon" titleAs="h3">
            We are mapping every keypad location and its verified code through the full release. Generic guidance is provided above to help you find and solve them safely.
          </Notice>
        </section>

        <section id="environmental" className="mb-12">
          <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
            Environmental Logic
          </h2>
          <p className="text-on-surface-variant mb-6 leading-relaxed">
            Many puzzles require reading the environment: aligning valves, restoring power by rerouting breakers, or matching symbols found on walls and documents. If a room seems empty, check behind furniture, under desks, and in lockers for the missing piece.
          </p>
          <h3 className="font-headline-sm text-foreground mb-3">
            What to Check
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-on-surface-variant leading-relaxed">
            <li>Breaker panels and fuse boxes that restore lights or unlock doors.</li>
            <li>Valves, pumps, or ventilation controls that change the level layout.</li>
            <li>Wall symbols or floor markings that correspond to a nearby lock.</li>
            <li>Movable objects such as carts, shelves, or beds that may hide passages.</li>
          </ul>
        </section>

        <section id="underground" className="mb-12">
          <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
            Underground Mechanisms
          </h2>
          <p className="text-on-surface-variant mb-6 leading-relaxed">
            The underground facilities introduce larger machinery puzzles: generators, pump stations, and access lifts. These often span multiple rooms and require you to backtrack while the entity patrols the corridors. Plan your route before starting a multi-step puzzle.
          </p>
          <h3 className="font-headline-sm text-foreground mb-3">
            Safety Tips
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-on-surface-variant leading-relaxed">
            <li>Open shortcuts first so you have quick escape routes.</li>
            <li>Note which switches affect which doors before flipping anything.</li>
            <li>Noisy machinery can attract attention; clear the area when possible.</li>
            <li>Large rooms often have one or two hiding spots mapped out in advance.</li>
          </ul>
          <Notice variant="warning" title="Detailed mechanisms being verified" titleAs="h3">
            We are running through the full release to confirm every machinery puzzle sequence, exact switch order, and safe route. Step-by-step solutions will be added as soon as they are verified.
          </Notice>
        </section>
      </ArticleTemplate>
    </>
  );
}
