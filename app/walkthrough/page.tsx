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
  description: "Complete It Reaches walkthrough with official chapters: The Hospital, The Basement, The Sewer, The Sewer Hideout, and The Organism. Includes chapter timestamps, objectives, puzzles, and tips.",
  alternates: {
    canonical: "https://itreachesguide.com/walkthrough",
  },
};

const article: Article = {
  title: "It Reaches Walkthrough - Complete Chapter Guide",
  description: "A full chapter-by-chapter walkthrough for It Reaches. Covers the five main chapters with official timestamps from a full-game walkthrough, plus objectives, puzzles, danger areas, collectibles, and tips.",
  href: "https://itreachesguide.com/walkthrough",
  publishedDate: "2026-07-29",
  updatedDate: "2026-07-31",
  author: "It Reaches Guide Team",
  readingTime: "12 min",
  difficulty: "Medium",
  lastReviewed: "2026-07-31",
  sources: [
    "Steam store page for It Reaches (App ID 4119360)",
    "DanQ8000 full gameplay walkthrough chapter timestamps",
    "Steam Community global achievement statistics",
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
  { id: "chapter-1", title: "Chapter 1: The Hospital", level: 2 },
  { id: "chapter-1-overview", title: "Overview", level: 3 },
  { id: "chapter-1-objectives", title: "Objectives", level: 3 },
  { id: "chapter-1-puzzles", title: "Key Puzzles", level: 3 },
  { id: "chapter-1-danger", title: "Danger Areas", level: 3 },
  { id: "chapter-1-tips", title: "Tips", level: 3 },
  { id: "chapter-2", title: "Chapter 2: The Basement", level: 2 },
  { id: "chapter-2-overview", title: "Overview", level: 3 },
  { id: "chapter-2-objectives", title: "Objectives", level: 3 },
  { id: "chapter-2-puzzles", title: "Key Puzzles", level: 3 },
  { id: "chapter-2-danger", title: "Danger Areas", level: 3 },
  { id: "chapter-2-tips", title: "Tips", level: 3 },
  { id: "chapter-3", title: "Chapter 3: The Sewer", level: 2 },
  { id: "chapter-3-overview", title: "Overview", level: 3 },
  { id: "chapter-3-objectives", title: "Objectives", level: 3 },
  { id: "chapter-3-puzzles", title: "Key Puzzles", level: 3 },
  { id: "chapter-3-danger", title: "Danger Areas", level: 3 },
  { id: "chapter-3-tips", title: "Tips", level: 3 },
  { id: "chapter-4", title: "Chapter 4: The Sewer Hideout", level: 2 },
  { id: "chapter-4-overview", title: "Overview", level: 3 },
  { id: "chapter-4-objectives", title: "Objectives", level: 3 },
  { id: "chapter-4-puzzles", title: "Key Puzzles", level: 3 },
  { id: "chapter-4-danger", title: "Danger Areas", level: 3 },
  { id: "chapter-4-tips", title: "Tips", level: 3 },
  { id: "chapter-5", title: "Chapter 5: The Organism", level: 2 },
  { id: "chapter-5-overview", title: "Overview", level: 3 },
  { id: "chapter-5-objectives", title: "Objectives", level: 3 },
  { id: "chapter-5-puzzles", title: "Key Puzzles", level: 3 },
  { id: "chapter-5-danger", title: "Danger Areas", level: 3 },
  { id: "chapter-5-tips", title: "Tips", level: 3 },
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
    answer: "It Reaches has five main gameplay chapters: The Hospital, The Basement, The Sewer, The Sewer Hideout, and The Organism. These names and timestamps are based on the chapter markers visible in DanQ8000&apos;s full-game walkthrough.",
  },
  {
    question: "Who is the playable character in It Reaches?",
    answer: "You play as officer Jason Thompson, using a police body camera perspective throughout the game. This is confirmed by the official Steam description.",
  },
  {
    question: "How long does It Reaches take to complete?",
    answer: "A standard first playthrough is estimated at 3-5 hours depending on exploration. Completionist runs for all achievements may take 4-6 hours.",
  },
  {
    question: "Can you replay chapters in It Reaches?",
    answer: "Chapter select or replay options are not confirmed. We recommend making manual saves before major chapters if you want to return to specific sections without replaying the entire game.",
  },
  {
    question: "Can you miss collectibles or achievements?",
    answer: "Yes. Some documents, collectibles, and achievement conditions are likely missable. Save before the final sequence of each chapter and use multiple save slots if you are hunting achievements.",
  },
  {
    question: "What is the best ending?",
    answer: "The best ending likely requires completing all chapters and collecting key documents. See the Endings Guide for a full breakdown once confirmed.",
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
  { name: "Chapter 1: The Hospital", text: "Learn the body camera controls, explore the abandoned hospital, and earn the Trespassing achievement." },
  { name: "Chapter 2: The Basement", text: "Escape the prison area, recover your pistol, and survive the first enemy encounters." },
  { name: "Chapter 3: The Sewer", text: "Navigate the flooded sewer tunnels, solve environmental puzzles, and find the shotgun." },
  { name: "Chapter 4: The Sewer Hideout", text: "Reach William Blake&apos;s Hideout, collect family items, and prepare for the final chapter." },
  { name: "Chapter 5: The Organism", text: "Survive the final encounter, make ending-determining choices, and unlock the conclusion." },
];

const progressChapters = [
  { chapter: "The Hospital", playtime: "10-20 min", puzzle: "Tutorial", boss: "None", collectibles: "Documents", difficulty: "Low" as const },
  { chapter: "The Basement", playtime: "70-90 min", puzzle: "Environmental", boss: "Minions / big hand", collectibles: "Documents, supplies", difficulty: "Medium" as const },
  { chapter: "The Sewer", playtime: "60-80 min", puzzle: "Valve / power", boss: "Entity chase", collectibles: "Toy Police Car, dog photo", difficulty: "High" as const },
  { chapter: "The Sewer Hideout", playtime: "70-90 min", puzzle: "Multi-step", boss: "Major set-piece", collectibles: "Toy Carousel, drawing, football", difficulty: "Very High" as const },
  { chapter: "The Organism", playtime: "15-25 min", puzzle: "Final puzzle", boss: "Final encounter", collectibles: "Ending items / last achievement", difficulty: "High" as const },
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
              <strong>It Reaches has five main chapters:</strong> The Hospital, The Basement, The Sewer, The Sewer Hideout, and The Organism.
            </p>
            <p>
              These names and timestamps are based on the chapter markers visible in DanQ8000&apos;s full-game walkthrough. This guide provides the chapter order, expected puzzle progression, survival tips, and links to detailed puzzle and achievement guides. Room-by-room steps will be added as we verify more footage.
            </p>
          </QuickAnswer>
        </section>

        <BeforeYouStart
          estimatedTime="3-5 hours"
          difficulty="Medium"
          missables={[
            "Documents and collectible notes in The Sewer and The Sewer Hideout",
            "Ending-determining choices in The Organism",
            "Some achievements tied to collectibles and specific deaths",
          ]}
          endings="Multiple endings may exist based on choices and collectible progress. Details are in the Endings Guide."
          achievements="20 Steam achievements total. Several are missable or chapter-specific."
        />

        <ProgressTable chapters={progressChapters} />

        <ChapterSection
          id="chapter-1"
          number={1}
          title="The Hospital"
          estimatedTime="10-20 min"
          difficulty="Low"
          overview={
            <>
              The Hospital is the opening chapter of It Reaches. It introduces officer Jason Thompson, the body camera perspective, and the abandoned hospital setting.
              Based on DanQ8000&apos;s chapter markers, this chapter runs from approximately 9:02 to 22:54 in a full playthrough.
              It sets up the routine police operation that quickly becomes a nightmare.
            </>
          }
          objectives={[
            "Enter the hospital building and earn the Trespassing achievement.",
            "Learn the body camera controls, flashlight, and interaction systems.",
            "Explore the opening hospital area for documents and supplies.",
            "Reach the transition point to The Basement.",
          ]}
          puzzles={
            <>
              The Hospital contains introductory environmental puzzles: finding keys, restoring light sources, and opening locked doors.
              Exact room names and code solutions are being verified against walkthrough footage.
            </>
          }
          dangerAreas={[
            "Dark corridors without flashlight backup -- conserve battery.",
            "Areas where the entity makes its first scripted appearances.",
          ]}
          collectibles={[
            "Documents that introduce the hospital&apos;s history.",
            "Supplies and optional notes near the starting equipment.",
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
          title="The Basement"
          estimatedTime="70-90 min"
          difficulty="Medium"
          overview={
            <>
              The Basement is the longest individual chapter, running from approximately 22:54 to 1:45:26 in DanQ8000&apos;s playthrough.
              It moves the action into a prison-like underground area where you earn Escape Artist, Happy Reunion, and encounter the first enemies.
            </>
          }
          objectives={[
            "Escape the prison area and earn the Escape Artist achievement.",
            "Retrieve your pistol and earn the Happy Reunion achievement.",
            "Survive the first minion attacks and learn knife/weapon use.",
            "Reach the transition point to The Sewer.",
          ]}
          puzzles={
            <>
              The Basement focuses more on combat and evasion than puzzles. Expect door locks, key searches, and environmental traversal.
            </>
          }
          dangerAreas={[
            "Prison cells and narrow corridors with limited escape routes.",
            "Areas where minions first appear in numbers.",
            "Dark sections where the big hand enemy can grab you.",
          ]}
          collectibles={[
            "Documents about the facility&apos;s history.",
            "First weapon upgrades and supplies.",
          ]}
          tips={[
            "Use your knife when a minion grabs you to earn Sharp Senses.",
            "Conserve ammo early; the pistol is limited until you find more supplies.",
            "Watch for the big hand enemy that triggers the Touchy Subject death achievement if it kills you.",
          ]}
        />

        <ChapterSection
          id="chapter-3"
          number={3}
          title="The Sewer"
          estimatedTime="60-80 min"
          difficulty="High"
          missable
          overview={
            <>
              The Sewer runs from approximately 1:45:26 to 2:52:55 in DanQ8000&apos;s playthrough.
              This chapter moves into flooded underground tunnels, introduces harder environmental puzzles, and contains the first family collectibles.
            </>
          }
          objectives={[
            "Navigate the flooded sewer tunnels and reach the next section.",
            "Solve valve and power-routing puzzles to open gates.",
            "Find the shotgun and earn the Armed and Ready achievement.",
            "Collect the first family items tied to achievements.",
          ]}
          puzzles={
            <>
              Expect valve-turning, breaker routing, and gate-opening puzzles.
              The sewer setting often requires draining water or restoring power to progress.
            </>
          }
          dangerAreas={[
            "Flooded sections that slow movement and limit escape options.",
            "Open tunnel sections with few hiding spots.",
            "Puzzle rooms where water levels or enemy patrols create pressure.",
          ]}
          collectibles={[
            "Toy Police Car tied to the \"Bring your child to work\" - Day achievement.",
            "Photograph of the family dog tied to the Fetch! achievement.",
            "Documents about the facility&apos;s underground history.",
          ]}
          tips={[
            "Explore side paths before opening major gates; some collectibles are missable.",
            "The shotgun makes combat easier but ammo remains limited.",
            "Save before long puzzle sequences or before leaving large areas.",
          ]}
        />

        <ChapterSection
          id="chapter-4"
          number={4}
          title="The Sewer Hideout"
          estimatedTime="70-90 min"
          difficulty="Very High"
          missable
          overview={
            <>
              The Sewer Hideout runs from approximately 2:52:55 to 4:09:41 in DanQ8000&apos;s playthrough.
              It is the late-game chapter where the story converges: you reach William Blake&apos;s Hideout, collect the remaining family items, and unlock the path to The Organism.
            </>
          }
          objectives={[
            "Reach William Blake&apos;s Hideout and earn the Science and History achievement.",
            "Collect the remaining family collectibles tied to achievements.",
            "Solve the chapter&apos;s hardest environmental puzzles.",
            "Reach the transition point to The Organism.",
          ]}
          puzzles={
            <>
              Expect the game&apos;s most complex environmental puzzles in this chapter, possibly including the cage lock and code door referenced by players.
              Exact solutions are being verified against walkthrough footage.
            </>
          }
          dangerAreas={[
            "William Blake&apos;s Hideout and the surrounding experiment rooms.",
            "Areas with the Venus Hand Trap and big-hand enemies.",
            "Timed or multi-step puzzles that leave you exposed.",
          ]}
          collectibles={[
            "Toy Carousel tied to Round and round we go.",
            "Son&apos;s family drawing tied to In good hands.",
            "Worn Football tied to A great team!",
          ]}
          tips={[
            "Check every side room before entering The Organism; several collectibles are missable.",
            "Use the shotgun against groups of minions but watch ammo.",
            "Save before the final transition point.",
          ]}
        />

        <ChapterSection
          id="chapter-5"
          number={5}
          title="The Organism"
          estimatedTime="15-25 min"
          difficulty="High"
          missable
          overview={
            <>
              The Organism is the final chapter, running from approximately 4:09:41 to 4:28:54 in DanQ8000&apos;s playthrough.
              It contains the game&apos;s conclusion, final encounter, and ending sequence. Any remaining achievements are usually unlocked here or just before the credits.
            </>
          }
          objectives={[
            "Reach the final area of the underground facility.",
            "Complete the final puzzle or environmental sequence.",
            "Survive the final encounter and make ending-determining choices.",
            "Watch the ending and return to the main menu.",
          ]}
          puzzles={
            <>
              The final sequence may include an environmental escape, such as the rising liquid segment seen in walkthrough footage.
              Exact steps are being verified.
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
              <div className="text-foreground font-headline-sm mb-1">Story &amp; Lore Breakdown</div>
              <div className="text-sm text-on-surface-variant">Characters, setting, and the dark mystery behind the hospital.</div>
            </a>
          </div>
        </section>

        <SourcesAndDisclaimer
          lastReviewed={article.lastReviewed}
          sources={article.sources}
        />

        <Notice variant="warning" title="Detailed steps coming soon" titleAs="h3">
          We are verifying exact room names, item locations, and puzzle solutions against full-game walkthrough footage.
          The chapter structure above is based on chapter markers from DanQ8000&apos;s community walkthrough.
        </Notice>
      </ArticleTemplate>
    </>
  );
}
