/**
 * Canonical game data for It Reaches — single source of truth.
 *
 * Every page must render from this file. Do not hardcode chapters,
 * achievements, puzzles, or collectibles in page components.
 *
 * Evidence hierarchy (per Rescue Plan):
 *   verified   — official sources: Steam store page, Steam achievements,
 *                official descriptions, developer patch notes
 *   community  — multiple independent community sources (walkthrough
 *                footage + written guides) agree, but nothing official
 *   unverified — single source, inference, or unknown
 */

export type VerificationStatus = "verified" | "community" | "unverified";

export const videoSource = {
  url: "https://www.youtube.com/watch?v=fJWvImfm9yI",
  author: "DanQ8000",
  title: "IT REACHES Full Game Walkthrough",
  note: "Chapter markers visible in this full-game walkthrough were the original basis for chapter structure; independently matched by the Neoseeker written walkthrough.",
};

export const neoseekerSource = {
  url: "https://www.neoseeker.com/it-reaches/walkthrough",
  title: "Neoseeker It Reaches Walkthrough and Guide",
  author: "Berserker",
  note: "Written walkthrough with per-chapter collectible and achievement callouts; last edited Aug 17, 2026.",
};

/* ---------------------------------- chapters ---------------------------------- */

export interface Chapter {
  slug: string;
  name: string;
  order: number;
  playtime: string;
  difficulty: "Low" | "Medium" | "High" | "Very High";
  summary: string;
  keyEvents: string[];
  puzzles: string[];
  collectibles: string[];
  achievements: string[];
  boss: string | null;
  verification: VerificationStatus;
  verificationNote: string;
}

export const chapters: Chapter[] = [
  {
    slug: "the-hospital",
    name: "The Hospital",
    order: 1,
    playtime: "45-60 min",
    difficulty: "Low",
    summary:
      "Officer Thompson arrives at St. Mary's Hospital on a trespass report, enters the building, and reaches the upper examination wing before being taken.",
    keyEvents: [
      "Courtyard entry past the boarded main entrance (Trespassing achievement on entry)",
      "First-floor exploration: Search Warrant note, vaulting tutorial",
      "Second floor examination room: Internal Compliance note, leg-stuck QTE",
      "Ouija board room event and the room with the crying voice",
    ],
    puzzles: [],
    collectibles: [],
    achievements: ["trespassing"],
    boss: null,
    verification: "community",
    verificationNote:
      "Two independent community walkthroughs (DanQ8000 full-game footage; Neoseeker written guide) agree on this chapter structure. No official chapter list exists.",
  },
  {
    slug: "the-basement",
    name: "The Basement",
    order: 2,
    playtime: "1-1.5 hours",
    difficulty: "Medium",
    summary:
      "Thompson wakes in a cage in the basement prison. Solve the cage padlock, escape the prison area, evade the Mutant through the maintenance wing, and retrieve your pistol.",
    keyEvents: [
      "Cage padlock code puzzle (solution on the Cage Lock Code page)",
      "Escape the prison area (Escape Artist achievement)",
      "Retrieve your pistol (Happy Reunion achievement)",
      "First Mutant encounter: locker hiding, hold-breath mechanic, Electrical Room key",
      "Three-generator experiment area patrolled by William Blake",
    ],
    puzzles: ["cage-lock-code", "electrical-room-key"],
    collectibles: [],
    achievements: ["escape-artist", "happy-reunion", "sharp-senses", "what-is-he-made-of"],
    boss: "Mutant (first encounter) / William Blake (stalking)",
    verification: "community",
    verificationNote:
      "Two independent community walkthroughs agree. Puzzle solutions cross-checked between written guide and footage.",
  },
  {
    slug: "the-sewer",
    name: "The Sewer",
    order: 3,
    playtime: "1.5-2 hours",
    difficulty: "High",
    summary:
      "Deep underground tunnels patrolled by big hands and minions. Find the shotgun, open the 4-digit code door, align the half-pipes, and rescue Sam from the burning police car.",
    keyEvents: [
      "Big hand enemies introduced (Touchy Subject achievement if one kills you)",
      "Shotgun found in the maintenance area (Armed and Ready achievement)",
      "4-digit door code 5861; son's family drawing inside (In Good Hands + What's in the Hole? achievements)",
      "Half-pipe alignment puzzle in the lower service channel",
      "Worn football collectible in the half-pipe area (A Great Team! achievement)",
      "Sam rescue and CPR; reach William Blake's hideout (Science and History achievement)",
    ],
    puzzles: ["sewer-door-code", "half-pipe-puzzle"],
    collectibles: ["sons-family-drawing", "worn-football"],
    achievements: [
      "armed-and-ready",
      "touchy-subject",
      "whats-in-the-hole",
      "in-good-hands",
      "a-great-team",
      "science-and-history",
    ],
    boss: null,
    verification: "community",
    verificationNote:
      "Two independent community walkthroughs agree, including the exact door code halves and their locations.",
  },
  {
    slug: "the-sewer-hideout",
    name: "The Sewer Hideout",
    order: 4,
    playtime: "1-1.5 hours",
    difficulty: "Very High",
    summary:
      "William Blake's hideout. Drain the flooded areas with the valve puzzles, cross the hand-infested pools, collect three of the five family items, and escape Blake's chase.",
    keyEvents: [
      "Valve drainage puzzle: four valve-handle sets (exact rotations on the Valve Drainage page)",
      "Venus Hand Traps introduced (Handshot achievement)",
      "Family dog photograph behind a wall reach (Fetch! achievement)",
      "Toy police car in a fleshy wall (Bring Your Child to Work Day achievement)",
      "Toy carousel collectible (Round and Round We Go achievement)",
      "Cage Monster fight in the steam pipe area: kill it with gunfire (Early Grave achievement)",
      "Unlimited-stamina chase from William Blake at the end",
    ],
    puzzles: ["valve-drainage", "venus-hand-traps", "machine-room-code"],
    collectibles: ["family-dog-photograph", "toy-police-car", "toy-carousel"],
    achievements: ["handshot", "early-grave", "fetch", "round-and-round-we-go", "bring-your-child-to-work-day"],
    boss: "Cage Monster (Early Grave) / William Blake (chase)",
    verification: "community",
    verificationNote:
      "Two independent community walkthroughs agree, including valve rotations and collectible locations.",
  },
  {
    slug: "the-organism",
    name: "The Organism",
    order: 5,
    playtime: "45-60 min",
    difficulty: "Very High",
    summary:
      "The final chapter inside the organism itself. Open finger gates by shooting red blisters, defeat the Cage Monster with explosive barrels, and complete the game (Forgiveness).",
    keyEvents: [
      "Finger gates opened by shooting red blisters",
      "Cage Monster fight in the explosives area: final hit must be a red-barrel explosion (Rest in Pieces achievement)",
      "Completing the game unlocks Forgiveness (hidden)",
    ],
    puzzles: ["red-blister-gates"],
    collectibles: [],
    achievements: ["rest-in-pieces", "forgiveness"],
    boss: "Cage Monster (explosives area)",
    verification: "community",
    verificationNote:
      "Two independent community walkthroughs agree on the final chapter structure and boss fight.",
  },
];

export function getChapter(slug: string) {
  return chapters.find((c) => c.slug === slug);
}

export function chapterName(slug: string) {
  if (slug === "multiple") return "Multiple chapters";
  if (slug === "any") return "Any chapter (workbench)";
  return getChapter(slug)?.name ?? "Unknown chapter";
}

/* -------------------------------- achievements -------------------------------- */

export interface Achievement {
  slug: string;
  name: string;
  description: string;
  hidden: boolean;
  /** Steam global unlock percentage — community-reported snapshot */
  global: string;
  chapter: string;
  missable: boolean | "unknown";
  howToUnlock: string;
  verification: VerificationStatus;
  verificationNote: string;
}

export const achievements: Achievement[] = [
  {
    slug: "trespassing",
    name: "Trespassing",
    description: "Enter the hospital building.",
    hidden: false,
    global: "79.8%",
    chapter: "the-hospital",
    missable: false,
    howToUnlock: "Story — enter the hospital building in Chapter 1 (The Hospital). Unmissable.",
    verification: "verified",
    verificationNote: "Official achievement description; trigger confirmed in walkthrough footage.",
  },
  {
    slug: "escape-artist",
    name: "Escape Artist",
    description: "Escape the prison.",
    hidden: false,
    global: "52.3%",
    chapter: "the-basement",
    missable: false,
    howToUnlock: "Story — escape the basement prison area at the end of the Basement chapter. Unmissable.",
    verification: "verified",
    verificationNote: "Official description; trigger point confirmed by two community walkthroughs.",
  },
  {
    slug: "happy-reunion",
    name: "Happy Reunion",
    description: "Retrieve your pistol.",
    hidden: false,
    global: "48.7%",
    chapter: "the-basement",
    missable: false,
    howToUnlock: "Story — retrieve your pistol during the Basement chapter. Unmissable.",
    verification: "verified",
    verificationNote: "Official description; the pistol is recovered in the Basement per walkthroughs.",
  },
  {
    slug: "science-and-history",
    name: "Science and History",
    description: "Reach William Blake's Hideout.",
    hidden: false,
    global: "31.2%",
    chapter: "the-sewer",
    missable: false,
    howToUnlock: "Story — complete the Sewer chapter (rescue Sam from the burning police car). Unmissable.",
    verification: "verified",
    verificationNote: "Official description; triggers at the Sewer chapter transition per walkthroughs.",
  },
  {
    slug: "armed-and-ready",
    name: "Armed and Ready",
    description: "Find the shotgun.",
    hidden: false,
    global: "28.4%",
    chapter: "the-sewer",
    missable: false,
    howToUnlock: "Pick up the shotgun on the table in the Sewer maintenance area (the room with the Proof of Purchase note).",
    verification: "verified",
    verificationNote: "Official description; exact room confirmed by two community walkthroughs.",
  },
  {
    slug: "sharp-senses",
    name: "Sharp Senses",
    description: "Survive a minion attack by using your knife.",
    hidden: false,
    global: "34.1%",
    chapter: "the-basement",
    missable: true,
    howToUnlock:
      "Let a Minion grab you (first ones appear in the Basement), then press the prompted button to kill it with your knife. Saves ammo.",
    verification: "verified",
    verificationNote: "Official description; knife counter confirmed in walkthrough footage.",
  },
  {
    slug: "first-upgrade",
    name: "First Upgrade",
    description: "Unlock a weapon upgrade for the first time.",
    hidden: false,
    global: "26.7%",
    chapter: "any",
    missable: false,
    howToUnlock: "Spend an Upgrade Bolt at any workbench. Bolts are found on crates and dropped by glowing cysts.",
    verification: "verified",
    verificationNote: "Official description; workbench/upgrade-bolt system confirmed in walkthroughs.",
  },
  {
    slug: "handshot",
    name: "Handshot",
    description: "Shoot a Venus Hand Trap.",
    hidden: false,
    global: "41.2%",
    chapter: "the-sewer-hideout",
    missable: true,
    howToUnlock:
      "Shoot a Venus Hand Trap (the hands along the floor that grab and hold you). First ones appear in the Sewer Hideout drainage pool area.",
    verification: "verified",
    verificationNote: "Official description; first appearance confirmed in the Sewer Hideout per walkthroughs.",
  },
  {
    slug: "fully-upgraded",
    name: "Fully Upgraded",
    description: "Fully upgrade a weapon.",
    hidden: false,
    global: "3.7%",
    chapter: "any",
    missable: true,
    howToUnlock:
      "Fully upgrade one weapon at workbenches using Upgrade Bolts. Tip: only spend bolts on the handgun. Note: an early patch fixed this not triggering — if that happened to you, revisit a workbench and activate every upgrade (scroll the list).",
    verification: "verified",
    verificationNote: "Official description; trigger bug and fix confirmed in developer patch notes.",
  },
  {
    slug: "touchy-subject",
    name: "Touchy Subject",
    description: "Get grabbed and killed by a big hand.",
    hidden: false,
    global: "18.9%",
    chapter: "the-sewer",
    missable: true,
    howToUnlock:
      "Walk up to a big hand in the Sewer and let it kill you. It is happy to oblige. You restart at the area's checkpoint.",
    verification: "verified",
    verificationNote: "Official description; big hands first appear in the Sewer per walkthroughs.",
  },
  {
    slug: "whats-in-the-hole",
    name: "What's in the Hole?",
    description: "Reach inside a hole in the wall.",
    hidden: false,
    global: "44.5%",
    chapter: "the-sewer",
    missable: false,
    howToUnlock:
      "Reach inside a fleshy hole in a wall. The first one is in the Sewer's 5861 code-door room (it holds the son's family drawing), so this comes naturally while collecting.",
    verification: "verified",
    verificationNote: "Official description; first wall-reach confirmed in walkthrough footage.",
  },
  {
    slug: "bring-your-child-to-work-day",
    name: "\"Bring your child to work\" - Day",
    description: "Collect the Toy Police Car.",
    hidden: false,
    global: "22.7%",
    chapter: "the-sewer-hideout",
    missable: true,
    howToUnlock:
      "Reach inside the fleshy wall in the dark corridor right of the desk with the Guilt note (Sewer Hideout, after the disappearing-bridge section).",
    verification: "verified",
    verificationNote: "Official description; exact spot confirmed by two community walkthroughs.",
  },
  {
    slug: "fetch",
    name: "Fetch!",
    description: "Collect the photograph of the family dog.",
    hidden: false,
    global: "19.4%",
    chapter: "the-sewer-hideout",
    missable: true,
    howToUnlock:
      "In the Sewer Hideout flooded lower area, lure the hands in the water away with stones, cross to the far side, and reach inside the wall.",
    verification: "verified",
    verificationNote: "Official description; exact spot confirmed by two community walkthroughs.",
  },
  {
    slug: "round-and-round-we-go",
    name: "Round and round we go.",
    description: "Collect the Toy Carousel.",
    hidden: false,
    global: "17.6%",
    chapter: "the-sewer-hideout",
    missable: true,
    howToUnlock:
      "Found in the Sewer Hideout playground/sandbox area while working through the platform-switch sequence.",
    verification: "community",
    verificationNote: "Official description and chapter confirmed; exact pickup point not yet cross-checked between sources.",
  },
  {
    slug: "in-good-hands",
    name: "In good hands.",
    description: "Collect the son's family drawing.",
    hidden: false,
    global: "21.3%",
    chapter: "the-sewer",
    missable: true,
    howToUnlock:
      "Inside the Sewer's 5861 code-door room: interact with the fleshy wall to reach inside and pull it out.",
    verification: "verified",
    verificationNote: "Official description; exact room confirmed by two community walkthroughs.",
  },
  {
    slug: "a-great-team",
    name: "A great team!",
    description: "Collect the Worn Football.",
    hidden: false,
    global: "18.7%",
    chapter: "the-sewer",
    missable: true,
    howToUnlock:
      "In the Sewer half-pipe area, drop into the water, open the back-wall door, pull the switch to open the pipe cover, then reach inside the wall.",
    verification: "verified",
    verificationNote: "Official description; exact room confirmed by two community walkthroughs.",
  },
  {
    slug: "what-is-he-made-of",
    name: "What is he made of?!",
    description: "Try to shoot William Blake.",
    hidden: true,
    global: "15.2%",
    chapter: "the-basement",
    missable: true,
    howToUnlock:
      "Once you have the handgun in the Basement's experiment area, shoot William Blake. It does nothing — but you get the achievement.",
    verification: "verified",
    verificationNote: "Hidden achievement; unlock method confirmed by two community walkthroughs.",
  },
  {
    slug: "forgiveness",
    name: "Forgiveness",
    description: "Complete the game.",
    hidden: true,
    global: "24.8%",
    chapter: "the-organism",
    missable: false,
    howToUnlock: "Finish the final chapter (The Organism). Unmissable if you complete the story.",
    verification: "community",
    verificationNote: "Hidden achievement; unlock condition reported by community walkthroughs, not shown in official client text.",
  },
  {
    slug: "rest-in-pieces",
    name: "Rest in Pieces",
    description: "Kill the Cage Monster by blowing it up.",
    hidden: true,
    global: "8.3%",
    chapter: "the-organism",
    missable: true,
    howToUnlock:
      "In The Organism's explosives area, damage the Cage Monster with gunfire but make the FINAL hit a red explosive barrel. Shooting a barrel stuns it — with a strong shotgun you can burst it down between stuns.",
    verification: "verified",
    verificationNote: "Hidden achievement; exact method confirmed by two community walkthroughs.",
  },
  {
    slug: "early-grave",
    name: "Early Grave",
    description: "Kill the Cage Monster in the Valves section.",
    hidden: true,
    global: "5.8%",
    chapter: "the-sewer-hideout",
    missable: true,
    howToUnlock:
      "In the Sewer Hideout steam pipe area, when the Cage Monster busts through the door, kill it with gunfire. This fight happens before the chapter's end.",
    verification: "verified",
    verificationNote: "Hidden achievement; exact method confirmed by two community walkthroughs.",
  },
];

export function getAchievement(slug: string) {
  return achievements.find((a) => a.slug === slug);
}

/* ----------------------------------- puzzles ----------------------------------- */

export interface Puzzle {
  slug: string;
  name: string;
  chapter: string;
  location: string;
  quickAnswer: string;
  solution?: string;
  steps: string[];
  whatItUnlocks?: string;
  relatedAchievement?: string;
  relatedCollectible?: string;
  verification: VerificationStatus;
  verificationNote: string;
}

export const puzzles: Puzzle[] = [
  {
    slug: "cage-lock-code",
    name: "Cage Lock Code (Basement Prison)",
    chapter: "the-basement",
    location: "The cage you wake up in at the start of the Basement.",
    quickAnswer:
      "Read the three clues around your cage: the paper figure has eight arms (Triangle = 8), your cage is number five (Square = 5), and the paper in cage six shows a circle over the number 2 (O = 2). Enter O=2, Square=5, Triangle=8.",
    solution: "O = 2, Square = 5, Triangle = 8",
    steps: [
      "Examine the note on the floor below the padlock: it says Triangle = number of arms. Count the arms on the paper figure — eight.",
      "Look left and right: the cages are numbered 3-4 on your left and 6-7 on your right, so yours is cage five. The floor note says Square = My Cage Number → Square = 5.",
      "Look into cage six (to your right): a paper on the floor shows the number 2 with a circle (O) below it → O = 2.",
      "Enter the combination on the padlock: O=2, Square=5, Triangle=8. The lock opens.",
    ],
    whatItUnlocks: "The cage door — the escape from the prison area (Escape Artist achievement follows later in the chapter).",
    verification: "community",
    verificationNote:
      "Full clue chain and solution cross-checked between the Neoseeker written walkthrough and full-game footage (two independent sources).",
  },
  {
    slug: "electrical-room-key",
    name: "Electrical Room Door Key (Basement)",
    chapter: "the-basement",
    location: "Maintenance area of the Basement, near the first Mutant encounter.",
    quickAnswer:
      "The Electrical door is locked until you grab the Key from the workbench down the long corridor. A Mutant appears as soon as you take it — hide in the nearby locker, hold your breath when prompted, then unlock the door.",
    steps: [
      "From the locked Electrical door, explore the side rooms and learn the locker locations before grabbing anything.",
      "Pick up the Key from the workbench at the end of the long corridor (an autosave sits just before the corner).",
      "The Mutant enters immediately. Run back to the locker beside the workbench, hide, and hold your breath only when prompted.",
      "Once it leaves, sneak back, unlock the Electrical door, and pull the red switch inside.",
      "The red switch opens a door back in the corridor area — a chase follows; run, do not hide in the single-exit electrical room.",
    ],
    whatItUnlocks: "Access to the red switch, which opens the route out of the maintenance area.",
    verification: "community",
    verificationNote: "Key location, Mutant behavior, and switch sequence confirmed by two community walkthroughs.",
  },
  {
    slug: "sewer-door-code",
    name: "Sewer 4-Digit Door Code",
    chapter: "the-sewer",
    location: "Sewer maintenance area — a keycode door beside a wall map showing the two code halves.",
    quickAnswer:
      "The full code is 5861. The first half (58**) is written behind a shelf in the maintenance area; the second half (**61) is on the wall near the second red cyst.",
    solution: "5861",
    steps: [
      "Find the first half: facing the fleshy wall in the maintenance area, look behind the shelf to the left — the wall shows “58**”.",
      "Find the second half: in the corridor with the second hanging cyst, a 4-digit code on the wall reads “**61” (first two digits rubbed off).",
      "The map beside the keycode door confirms the two halves combine in order.",
      "Enter 5861 on the panel. Inside: two handgun bullets, a fleshy wall reach (son's family drawing), and the What's in the Hole? + In Good Hands achievements.",
    ],
    whatItUnlocks: "The code-door room with the son's family drawing collectible.",
    relatedAchievement: "whats-in-the-hole",
    relatedCollectible: "sons-family-drawing",
    verification: "community",
    verificationNote: "Both code halves, their locations, and the full code confirmed by two independent community walkthroughs.",
  },
  {
    slug: "half-pipe-puzzle",
    name: "Half-Pipe Alignment (Sewer Lower Service Channel)",
    chapter: "the-sewer",
    location: "The half-pipe area after the code door, where exploding balls must roll freely.",
    quickAnswer:
      "Connect every half-pipe so the exploding balls roll unimpeded to the fingers in the water area. Pull both railing switches first, then press the four buttons in this order: 1st, 4th, 1st, 3rd.",
    solution: "Switches (both) → buttons 1, 4, 1, 3",
    steps: [
      "Turn the catwalk valve handle to rearrange the rear half-pipe, then pull the switch to open the wall pipe cover.",
      "Upstairs: turn the first valve twice, push the middle button, turn the second valve twice.",
      "Break the boards with your knife, pull the switch to open the lower pipe cover.",
      "At the four-button panel: pull the left switch, then the right switch (opens both pipe covers).",
      "Press the buttons in sequence: 1st, 4th, 1st, 3rd. The half-pipes align across from the buttons.",
      "Let an exploding ball roll to the fingers blocking the water tunnel — they open. Enter the tunnel as they open.",
    ],
    whatItUnlocks: "The route onward through the fingers-guarded water tunnel.",
    verification: "community",
    verificationNote: "Button sequence and valve steps confirmed by written walkthrough; consistent with footage.",
  },
  {
    slug: "valve-drainage",
    name: "Valve Drainage (Sewer Hideout)",
    chapter: "the-sewer-hideout",
    location: "Four sets of valve handles across the Sewer Hideout drainage areas.",
    quickAnswer:
      "Rotate each valve set so the metal pipes face the directions shown: Set 1 (2 valves): left ×2 down, right ×1 left. Set 2 (3 valves): left ×1 up, middle untouched, right ×1 left. Set 3 (4 valves): ×1 up, ×2 down, ×1 down, ×2 left. Set 4 (2 valves, tunnel): left ×1 down, right ×1 left. A sound confirms each correct set.",
    solution: "Set1: L×2(down), R×1(left) · Set2: ×1(up), -, ×1(left) · Set3: ×1(up), ×2(down), ×1(down), ×2(left) · Set4: ×1(down), ×1(left)",
    steps: [
      "Set 1 (drainage pool, two handles): rotate the left valve twice so its pipe faces down; rotate the right valve once so its pipe faces left.",
      "Set 2 (beyond the crawlspace, three handles): left ×1 up; leave the middle (already up); right ×1 left.",
      "Set 3 (four handles): first ×1 up, second ×2 down, third ×1 down, fourth ×2 left.",
      "Set 4 (the tunnel door, two handles): left ×1 down, right ×1 left.",
      "With all sets correct you hear the water drain; the pool drops to wadable depth.",
    ],
    whatItUnlocks: "Drains the main pool, opening the lower flooded area and the route forward.",
    verification: "community",
    verificationNote: "Exact rotations for all four sets confirmed by the written walkthrough (single detailed source, consistent with footage).",
  },
  {
    slug: "machine-room-code",
    name: "Machine Room Door Code (Sewer Hideout)",
    chapter: "the-sewer-hideout",
    location: "The loud machine room in the Sewer Hideout — a door with a code panel, hinted by a number written on a piece of concrete.",
    quickAnswer:
      "The full door code is 3752. A concrete fragment beside the door shows one hinted digit with three blank spaces; the complete code opens the machine room, where the Toy Carousel waits inside a wall reach.",
    solution: "3752",
    steps: [
      "In the machine room, take the right catwalk toward the coded door.",
      "Inspect the piece of concrete near the door: it shows a hint number with three blank spaces beside it.",
      "Enter 3752 on the panel to open the machine room.",
      "Inside, reach into the hole in the wall to collect the Toy Carousel (Round and round we go. achievement).",
    ],
    whatItUnlocks: "The machine room containing the Toy Carousel collectible.",
    relatedAchievement: "round-and-round-we-go",
    relatedCollectible: "toy-carousel",
    verification: "community",
    verificationNote: "Code and location confirmed by the Neoseeker written walkthrough and a timestamped 100% walkthrough (two independent sources).",
  },
  {
    slug: "venus-hand-traps",
    name: "Venus Hand Traps",
    chapter: "the-sewer-hideout",
    location: "First appear in the Sewer Hideout drainage pool; also in the flooded lower area and later chapters.",
    quickAnswer:
      "Venus Hand Traps are the hands along floors and water that grab and hold you. Tap the prompted button to break free, toss a stone to make them retreat, or shoot one (before it grabs you) for the Handshot achievement.",
    steps: [
      "On land: avoid stepping on them, or deliberately step on one and tap the prompt to break free.",
      "In water: toss stones to lure hands away from your landing spots before jumping crate to crate.",
      "For Handshot: shoot a trap with the handgun or shotgun before it grabs you.",
      "Never rush a retreating hand — the quick slap as it retracts can still grab you.",
    ],
    relatedAchievement: "handshot",
    verification: "community",
    verificationNote: "Behavior and counter confirmed by two community walkthroughs.",
  },
  {
    slug: "red-blister-gates",
    name: "Red Blister Finger Gates (The Organism)",
    chapter: "the-organism",
    location: "The Organism — fingers blocking passages throughout the final chapter.",
    quickAnswer:
      "Finger clusters block the way. Shoot the glowing red blister on the nearby wall to make the fingers retract and open the path.",
    steps: [
      "Locate the red blister on a wall near the blocked passage.",
      "Shoot it — the fingers open and reveal the route.",
      "The workbench after Blake's first chase is reached by blasting the blister to the right of it.",
    ],
    verification: "community",
    verificationNote: "Gate mechanism confirmed by written walkthrough and footage.",
  },
];

export function getPuzzle(slug: string) {
  return puzzles.find((p) => p.slug === slug);
}

/* --------------------------------- collectibles -------------------------------- */

export interface Collectible {
  slug: string;
  name: string;
  chapter: string;
  location: string;
  howToReach: string;
  achievement: string;
  missable: boolean;
  verification: VerificationStatus;
  verificationNote: string;
}

export const collectibles: Collectible[] = [
  {
    slug: "toy-police-car",
    name: "Toy Police Car",
    chapter: "the-sewer-hideout",
    location: "Dark corridor to the right of the desk with the Guilt note, after the disappearing-bridge section.",
    howToReach:
      "After crossing the vanishing bridge, enter the next room and check the desk with the Guilt note. Step into the dark corridor beside it and reach inside the fleshy wall on the right.",
    achievement: "bring-your-child-to-work-day",
    missable: true,
    verification: "community",
    verificationNote: "Exact location confirmed by two community walkthroughs.",
  },
  {
    slug: "family-dog-photograph",
    name: "Photograph of the Family Dog",
    chapter: "the-sewer-hideout",
    location: "Flooded lower area — the far side below the catwalk you shimmy across.",
    howToReach:
      "In the waist-deep water area, toss stones to lure the hands away from each crate before jumping. Reach the far side below the catwalk, enter the small room (two stones sit left of its door), and reach inside the wall.",
    achievement: "fetch",
    missable: true,
    verification: "community",
    verificationNote: "Exact location and hand-luring approach confirmed by two community walkthroughs.",
  },
  {
    slug: "toy-carousel",
    name: "Toy Carousel",
    chapter: "the-sewer-hideout",
    location: "Sewer Hideout machine room — behind the 3752 code door.",
    howToReach:
      "In the loud machine room, take the right catwalk to the coded door. The hint on the concrete fragment gives you 3752. Open the door and reach inside the hole in the wall.",
    achievement: "round-and-round-we-go",
    missable: true,
    verification: "community",
    verificationNote: "Exact room, door code, and pickup confirmed by the Neoseeker written walkthrough and a timestamped 100% walkthrough (two independent sources).",
  },
  {
    slug: "sons-family-drawing",
    name: "Son's Family Drawing",
    chapter: "the-sewer",
    location: "Inside the 5861 code-door room in the Sewer maintenance area.",
    howToReach:
      "Find both code halves (58** behind the shelf, **61 by the second cyst), enter 5861 on the keycode door, then interact with the fleshy wall inside and reach in.",
    achievement: "in-good-hands",
    missable: true,
    verification: "community",
    verificationNote: "Exact room confirmed by two community walkthroughs.",
  },
  {
    slug: "worn-football",
    name: "Worn Football",
    chapter: "the-sewer",
    location: "Half-pipe area — the room behind the back-wall door in the water below.",
    howToReach:
      "Drop into the water in the half-pipe area, open the door along the back wall, grab the Upgrade Bolt, pull the switch to open the pipe cover, then reach inside the wall.",
    achievement: "a-great-team",
    missable: true,
    verification: "community",
    verificationNote: "Exact room confirmed by two community walkthroughs.",
  },
];

export function getCollectible(slug: string) {
  return collectibles.find((c) => c.slug === slug);
}

/* --------------------------------- misc helpers -------------------------------- */

export const steamGame = {
  appId: "4119360",
  url: "https://store.steampowered.com/app/4119360/It_Reaches/",
  developer: "Emberflight Games",
  publisher: "Emberflight Games",
  releaseDate: "May 17, 2026",
  platforms: "Windows PC (Steam)",
  achievementCount: achievements.length,
  chapterCount: chapters.length,
};
