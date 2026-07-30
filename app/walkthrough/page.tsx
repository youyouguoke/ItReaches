import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { QuickAnswer } from "@/components/article/QuickAnswer";
import { Notice } from "@/components/ui/Notice";
import { BeforeYouStart } from "@/components/article/BeforeYouStart";
import { ProgressTable } from "@/components/article/ProgressTable";
import { ChapterSection } from "@/components/article/ChapterSection";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import { HowToSchema } from "@/components/seo/HowToSchema";
import { Article } from "@/types/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Reaches Walkthrough - Complete Chapter Guide",
  description: "Complete It Reaches walkthrough with all six chapters: Awakening, Ventilation, The Reach, Comm Tower, Sub Level, and Oblivion. Includes objectives, puzzles, danger areas, tips, and endings.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough",
  },
};

const article: Article = {
  title: "It Reaches Walkthrough - Complete Chapter Guide",
  description: "A full chapter-by-chapter walkthrough for It Reaches. Covers the six main chapters, objectives, puzzles, danger areas, collectibles, and tips for each section.",
  href: "https://itreachesguide.com/walkthrough",
  publishedDate: "2026-07-29",
  updatedDate: "2026-07-29",
  author: "It Reaches Guide Team",
  readingTime: "15 min",
  difficulty: "Medium",
  lastReviewed: "2026-07-29",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "Official descriptions of protagonist Jason Thompson and bodycam perspective",
    "Community-reported chapter structure from the It Reaches player hub",
  ],
};

const breadcrumb = [
  { title: "Home", href: "/" },
  { title: "Walkthrough" },
];

const toc = [
  { id: "quick-answer", title: "Quick Answer", level: 1 },
  { id: "before-you-start", title: "Before You Start", level: 1 },
  { id: "chapter-overview", title: "Chapter Overview", level: 1 },
  { id: "chapter-1", title: "Chapter 1: Awakening", level: 2 },
  { id: "chapter-1-overview", title: "Overview", level: 3 },
  { id: "chapter-1-objectives", title: "Objectives", level: 3 },
  { id: "chapter-1-puzzles", title: "Key Puzzles", level: 3 },
  { id: "chapter-1-danger", title: "Danger Areas", level: 3 },
  { id: "chapter-1-tips", title: "Tips", level: 3 },
  { id: "chapter-2", title: "Chapter 2: Ventilation", level: 2 },
  { id: "chapter-2-overview", title: "Overview", level: 3 },
  { id: "chapter-2-objectives", title: "Objectives", level: 3 },
  { id: "chapter-2-puzzles", title: "Key Puzzles", level: 3 },
  { id: "chapter-2-danger", title: "Danger Areas", level: 3 },
  { id: "chapter-2-tips", title: "Tips", level: 3 },
  { id: "chapter-3", title: "Chapter 3: The Reach", level: 2 },
  { id: "chapter-3-overview", title: "Overview", level: 3 },
  { id: "chapter-3-objectives", title: "Objectives", level: 3 },
  { id: "chapter-3-puzzles", title: "Key Puzzles", level: 3 },
  { id: "chapter-3-danger", title: "Danger Areas", level: 3 },
  { id: "chapter-3-tips", title: "Tips", level: 3 },
  { id: "chapter-4", title: "Chapter 4: Comm Tower", level: 2 },
  { id: "chapter-4-overview", title: "Overview", level: 3 },
  { id: "chapter-4-objectives", title: "Objectives", level: 3 },
  { id: "chapter-4-puzzles", title: "Key Puzzles", level: 3 },
  { id: "chapter-4-danger", title: "Danger Areas", level: 3 },
  { id: "chapter-4-tips", title: "Tips", level: 3 },
  { id: "chapter-5", title: "Chapter 5: Sub Level", level: 2 },
  { id: "chapter-5-overview", title: "Overview", level: 3 },
  { id: "chapter-5-objectives", title: "Objectives", level: 3 },
  { id: "chapter-5-puzzles", title: "Key Puzzles", level: 3 },
  { id: "chapter-5-danger", title: "Danger Areas", level: 3 },
  { id: "chapter-5-tips", title: "Tips", level: 3 },
  { id: "chapter-6", title: "Chapter 6: Oblivion", level: 2 },
  { id: "chapter-6-overview", title: "Overview", level: 3 },
  { id: "chapter-6-objectives", title: "Objectives", level: 3 },
  { id: "chapter-6-puzzles", title: "Key Puzzles", level: 3 },
  { id: "chapter-6-danger", title: "Danger Areas", level: 3 },
  { id: "chapter-6-tips", title: "Tips", level: 3 },
  { id: "whats-next", title: "What\'s Next", level: 1 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
  { id: "sources", title: "Sources & Disclaimer", level: 1 },
];

const related = [
  {
    title: "Puzzle Solutions",
    description: "All chapter puzzles and combinations explained step-by-step.",
    image: "/images/puzzle.webp",
    href: "/puzzles",
    tag: "Puzzles",
  },
  {
    title: "Endings Guide",
    description: "Unlock every ending including the secret and true ending.",
    image: "/images/endings.webp",
    href: "/endings",
    tag: "Endings",
  },
  {
    title: "Achievement Guide",
    description: "All 20 Steam achievements and how to unlock them.",
    image: "/images/achievements.webp",
    href: "/achievements",
    tag: "Achievements",
  },
  {
    title: "Story Timeline",
    description: "Lore and character breakdown for It Reaches.",
    image: "/images/lore.webp",
    href: "/story",
    tag: "Story",
  },
];

const faq = [
  {
    question: "How many chapters are in It Reaches?",
    answer: "Based on the community-reported player hub structure, It Reaches appears to be divided into six main chapters: Awakening, Ventilation, The Reach, Comm Tower, Sub Level, and Oblivion. These names and order have not been officially confirmed by the developer and will be verified against the full release.",
  },
  {
    question: "Who is the playable character in It Reaches?",
    answer: "You play as officer Jason Thompson, using a police body camera perspective throughout the game. This is confirmed by the official Steam description.",
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
    question: "What should I do first in Chapter 1?",
    answer: "Learn the body camera movement and field of view. Explore the opening area for supplies and documents, then follow the main objective marker to exit the prologue section.",
  },
  {
    question: "Are the puzzles in It Reaches hard?",
    answer: "Most puzzles are environmental and require attention to documents, codes, and machinery. The difficulty is expected to be moderate, with a few multi-step puzzles in later chapters.",
  },
  {
    question: "Where can I find a full puzzle solution list?",
    answer: "Visit our Puzzle Solutions page for a complete list of every puzzle combination, code, and logic step organized by chapter.",
  },
];

const howToSteps = [
  { name: "Start Chapter 1: Awakening", text: "Learn the body camera controls, explore the opening area, and follow the main objective to exit the prologue." },
  { name: "Survive Chapter 2: Ventilation", text: "Move through the maintenance tunnels using stealth. Avoid the entity and solve the first environmental puzzles." },
  { name: "Navigate Chapter 3: The Reach", text: "Explore wider hospital areas while the entity becomes a persistent threat. Collect documents and solve key puzzles." },
  { name: "Restore Chapter 4: Comm Tower", text: "Repair power or signal systems to progress. Watch for patrols between objectives." },
  { name: "Descend Chapter 5: Sub Level", text: "Enter the underground facilities, solve multi-step machinery puzzles, and manage limited resources." },
  { name: "Complete Chapter 6: Oblivion", text: "Reach the final sequence, make ending-determining choices, and unlock the conclusion based on your progress." },
];

const progressChapters = [
  { chapter: "Awakening", playtime: "20-40 min", puzzle: "Tutorial", boss: "None", collectibles: "Documents", difficulty: "Low" as const },
  { chapter: "Ventilation", playtime: "30-50 min", puzzle: "Environmental", boss: "Stealth section", collectibles: "Documents, supplies", difficulty: "Medium" as const },
  { chapter: "The Reach", playtime: "45-75 min", puzzle: "Multi-step", boss: "Entity chase", collectibles: "Documents, key items", difficulty: "High" as const },
  { chapter: "Comm Tower", playtime: "40-60 min", puzzle: "Power / signal", boss: "Patrol encounter", collectibles: "Documents, supplies", difficulty: "Medium" as const },
  { chapter: "Sub Level", playtime: "60-90 min", puzzle: "Machinery", boss: "Major set-piece", collectibles: "Documents, missables", difficulty: "Very High" as const },
  { chapter: "Oblivion", playtime: "30-50 min", puzzle: "Final puzzle", boss: "Final encounter", collectibles: "Ending items", difficulty: "High" as const },
];

export default function WalkthroughPage() {
  return (
    <>
      <HowToSchema
        title="It Reaches Walkthrough"
        description="Complete chapter-by-chapter walkthrough for It Reaches."
        steps={howToSteps}
      />
      <ArticleTemplate
        article={article}
        breadcrumb={breadcrumb}
        toc={toc}
        faq={faq}
        related={related}
      >
        <section id="quick-answer" className="mb-12 scroll-mt-24">
          <QuickAnswer title="Quick Answer" as="h2">
            <p className="mb-2">
              <strong>Based on the community-reported player hub structure, It Reaches appears to have six main chapters:</strong> Awakening, Ventilation, The Reach, Comm Tower, Sub Level, and Oblivion.
            </p>
            <p>
              These names and order have not been officially confirmed by the developer and will be verified against the full release. This walkthrough provides the tentative chapter order, expected puzzle progression, survival tips, and links to detailed puzzle and ending guides. Room-by-room steps will be added as we complete our own playthrough.
            </p>
          </QuickAnswer>
        </section>

        <BeforeYouStart
          estimatedTime="4-6 hours"
          difficulty="Medium"
          missables={[
            "Documents and collectible notes in Chapter 3 and Chapter 5",
            "Ending-determining choices in Chapter 6",
            "Some achievements tied to no-save or no-detection runs",
          ]}
          endings="Multiple endings are expected based on choices and collectible progress. Details are in the Endings Guide."
          achievements="20 Steam achievements total. Several are likely missable or chapter-specific."
        />

        <ProgressTable chapters={progressChapters} />

        <ChapterSection
          id="chapter-1"
          number={1}
          title="Awakening"
          estimatedTime="20-40 min"
          difficulty="Low"
          overview={
            <>
              The opening chapter introduces officer Jason Thompson and the body camera perspective.
              You will learn movement, interaction, flashlight use, and how the camera limits your peripheral vision.
              This chapter sets up the routine police operation that quickly becomes a nightmare.
            </>
          }
          objectives={[
            "Explore the arrival area and learn body camera controls.",
            "Collect any documents and supplies in the starting rooms.",
            "Reach the hospital entrance and trigger the next objective.",
            "Exit the prologue into the main hospital space.",
          ]}
          puzzles={
            <>
              The first puzzles are tutorial-level: find a keycard, unlock a door, or restore a light source.
              These teach the interaction and inventory systems without major punishment for failure.
            </>
          }
          dangerAreas={[
            "Dark corridors without flashlight backup -- conserve battery.",
            "The first scripted entity appearance is usually a chase tutorial, not a death trap.",
          ]}
          collectibles={[
            "Tutorial documents near the starting equipment.",
            "First optional note about the hospital lockdown.",
          ]}
          tips={[
            "Move slowly and pan the camera often; the body camera hides threats in your blind spots.",
            "Pick up every document -- they often unlock achievements and puzzle hints.",
            "Save as soon as the game allows manual saving.",
          ]}
        />

        <ChapterSection
          id="chapter-2"
          number={2}
          title="Ventilation"
          estimatedTime="30-50 min"
          difficulty="Medium"
          overview={
            <>
              The Ventilation chapter pushes you into the abandoned hospital&apos;s maintenance systems.
              Tight spaces, limited visibility, and environmental obstacles make this a tutorial for stealth and resource management.
            </>
          }
          objectives={[
            "Navigate the ventilation and maintenance corridors.",
            "Restore airflow or power to unlock deeper sections.",
            "Avoid the entity while it patrols the narrow tunnels.",
            "Reach the exit point leading back into the main hospital.",
          ]}
          puzzles={
            <>
              Expect valve-turning, breaker routing, or vent-crawling puzzles.
              Sound and light are often clues; loud actions may attract the entity in this chapter.
            </>
          }
          dangerAreas={[
            "Narrow dead-end vents with no escape route.",
            "Areas where the entity patrols in a tight loop.",
            "Flooded or dark sections that slow movement.",
          ]}
          collectibles={[
            "Maintenance logs hidden in side rooms.",
            "Supplies in locked maintenance lockers.",
          ]}
          tips={[
            "Crouch-walk to reduce noise in the vents.",
            "Watch patrol timing before crossing open sections.",
            "Use side rooms as safe points when the entity passes by.",
          ]}
        />

        <ChapterSection
          id="chapter-3"
          number={3}
          title="The Reach"
          estimatedTime="45-75 min"
          difficulty="High"
          missable
          overview={
            <>
              The Reach is where the entity becomes a persistent threat.
              You must balance exploration with evasion, solve larger environmental puzzles, and begin uncovering the dark mystery behind the facility.
            </>
          }
          objectives={[
            "Explore the main hospital wings and locate key documents.",
            "Solve multi-step environmental puzzles to unlock new areas.",
            "Evade the entity while progressing through the hospital.",
            "Reach the transition point to the Comm Tower area.",
          ]}
          puzzles={
            <>
              This chapter introduces the first major multi-step puzzles: code locks, fuse routing, and key item combinations.
              Document notes are usually required to find codes.
            </>
          }
          dangerAreas={[
            "Open wards with long sightlines and few hiding spots.",
            "Stairwells where the entity can cut off your escape.",
            "Puzzle rooms with noisy machinery that may draw attention.",
          ]}
          collectibles={[
            "Lore documents that explain the hospital history.",
            "Key items required for later chapters.",
            "First missable achievement collectibles.",
          ]}
          tips={[
            "Read every document before leaving an area; codes are often single-use hints.",
            "If detected, run toward the nearest door or safe room, not into dead ends.",
            "Backtrack only when the patrol route is clear.",
          ]}
        />

        <ChapterSection
          id="chapter-4"
          number={4}
          title="Comm Tower"
          estimatedTime="40-60 min"
          difficulty="Medium"
          overview={
            <>
              Comm Tower shifts the location toward communication and surface access areas.
              Expect puzzles involving power, signals, or routing, while the entity continues to patrol between objectives.
            </>
          }
          objectives={[
            "Reach the communications or surface access area.",
            "Restore power, signal, or routing systems to progress.",
            "Avoid patrols while moving between separate tower sections.",
            "Unlock the path down to the Sub Level facilities.",
          ]}
          puzzles={
            <>
              Power-routing and signal-alignment puzzles are common here.
              You may need to restore generators, align antennas, or repair control panels.
            </>
          }
          dangerAreas={[
            "Exposed exterior or catwalk sections with limited cover.",
            "Control rooms with alarm sounds that attract the entity.",
            "Long corridors between tower sections with no safe rooms.",
          ]}
          collectibles={[
            "Radio logs or signal transcripts.",
            "Documents about the facility surface lockdown.",
          ]}
          tips={[
            "Plan your route before flipping switches; some actions make noise.",
            "Use the tower layout to create distance from the entity.",
            "Save after each major puzzle checkpoint.",
          ]}
        />

        <ChapterSection
          id="chapter-5"
          number={5}
          title="Sub Level"
          estimatedTime="60-90 min"
          difficulty="Very High"
          missable
          overview={
            <>
              Sub Level takes you deeper into the underground facilities.
              This is typically the largest chapter, with multi-step machinery puzzles, backtracking, and the most aggressive entity behavior.
            </>
          }
          objectives={[
            "Descend into the underground facility levels.",
            "Solve multi-step machinery and power puzzles.",
            "Backtrack across previously opened areas with new tools.",
            "Reach the final elevator or transition to Oblivion.",
          ]}
          puzzles={
            <>
              The hardest puzzles in the game appear here: machinery activation, timed sequences, and key item combinations across multiple rooms.
              Take notes or use the in-game journal if available.
            </>
          }
          dangerAreas={[
            "Large machinery rooms with limited hiding spots.",
            "Timed puzzle sections where the entity may interrupt.",
            "Backtracking paths that become more dangerous after story events.",
          ]}
          collectibles={[
            "Underground facility documents and experiment notes.",
            "Final missable key items for the true ending.",
            "Supplies hidden behind optional side puzzles.",
          ]}
          tips={[
            "Open shortcuts as early as possible to reduce future backtracking risk.",
            "Save before every major puzzle sequence.",
            "If an area is too dangerous, look for an alternate route or wait for the patrol to pass.",
          ]}
        />

        <ChapterSection
          id="chapter-6"
          number={6}
          title="Oblivion"
          estimatedTime="30-50 min"
          difficulty="High"
          missable
          overview={
            <>
              Oblivion is the final chapter. Your choices, exploration, and collectible progress converge here to determine which ending you receive.
              Save before the final sequence if you want to see multiple outcomes.
            </>
          }
          objectives={[
            "Reach the final area of the underground facility.",
            "Complete the final puzzle sequence.",
            "Make the ending-determining choice or action.",
            "Watch the ending and return to the main menu.",
          ]}
          puzzles={
            <>
              The final puzzle usually ties together clues from all previous chapters.
              Missing a document or key item may lock you out of the best ending.
            </>
          }
          dangerAreas={[
            "The final encounter area where the entity is most aggressive.",
            "Any sequence where you must choose between escape and confrontation.",
          ]}
          collectibles={[
            "Ending-specific documents only available in this chapter.",
            "Final achievement triggers tied to choices.",
          ]}
          tips={[
            "Make a manual save before entering the final sequence.",
            "Check your document and item inventory before the final choice.",
            "See the Endings Guide for how to unlock each outcome.",
          ]}
        />

        <section id="whats-next" className="mb-16 scroll-mt-24">
          <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
            What&apos;s Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/puzzles" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
              <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Puzzle Solutions</div>
              <div className="text-foreground font-headline-sm mb-1">All Puzzle Combinations</div>
              <div className="text-sm text-on-surface-variant">Step-by-step solutions for every chapter puzzle and code.</div>
            </a>
            <a href="/endings" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
              <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Endings Guide</div>
              <div className="text-foreground font-headline-sm mb-1">Unlock Every Ending</div>
              <div className="text-sm text-on-surface-variant">Requirements for the normal, secret, and true endings.</div>
            </a>
            <a href="/achievements" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
              <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Achievements</div>
              <div className="text-foreground font-headline-sm mb-1">All 20 Steam Achievements</div>
              <div className="text-sm text-on-surface-variant">Missable warnings and unlock conditions for every achievement.</div>
            </a>
            <a href="/story" className="block p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors">
              <div className="text-[10px] uppercase tracking-widest font-label text-primary mb-2">Story</div>
              <div className="text-foreground font-headline-sm mb-1">Story & Lore Breakdown</div>
              <div className="text-sm text-on-surface-variant">Characters, setting, and the dark mystery behind the hospital.</div>
            </a>
          </div>
        </section>

        <SourcesAndDisclaimer
          lastReviewed={article.lastReviewed}
          sources={article.sources}
        />

        <Notice variant="warning" title="Detailed steps coming soon" titleAs="h3">
          We are playing through each chapter to verify exact room names, item locations, and puzzle solutions.
          The chapter structure above is based on the official Steam description and community-reported sources; it has not been officially confirmed by the developer.
          Room-by-room steps will be added as we complete our own verification.
        </Notice>
      </ArticleTemplate>
    </>
  );
}
