import * as fs from "fs";
import * as path from "path";
import { getGuideCategories } from "../lib/guides";
import { puzzles, achievements, collectibles, chapterName } from "../lib/game-data";

interface SearchIndexItem {
  title: string;
  description: string;
  href: string;
  tag: string;
  keywords: string[];
}

export async function buildSearchIndex(): Promise<SearchIndexItem[]> {
  const categories = getGuideCategories();

  // Base pages from guide categories
  const index: SearchIndexItem[] = categories.map((guide) => ({
    title: guide.title,
    description: guide.description,
    href: guide.href,
    tag: guide.category || "Guides",
    keywords: [
      guide.slug,
      guide.category || "",
      guide.iconName || "",
      ...(guide.coverage || []),
    ].filter(Boolean),
  }));

  // Detail pages from the canonical game data source
  const puzzlePages: SearchIndexItem[] = puzzles.map((puzzle) => ({
    title: `${puzzle.name} - Puzzle Solution`,
    description: puzzle.quickAnswer,
    href: `/puzzles/${puzzle.slug}`,
    tag: "Puzzle",
    keywords: [
      puzzle.slug,
      puzzle.name,
      "puzzle",
      "code",
      "solution",
      chapterName(puzzle.chapter),
    ].filter(Boolean),
  }));

  const achievementPages: SearchIndexItem[] = achievements.map((achievement) => ({
    title: `${achievement.name} Achievement`,
    description: `How to unlock: ${achievement.howToUnlock} (${achievement.global} of players)`,
    href: `/achievements/${achievement.slug}`,
    tag: "Achievement",
    keywords: [
      achievement.slug,
      achievement.name,
      "achievement",
      "unlock",
      "trophy",
      chapterName(achievement.chapter),
    ].filter(Boolean),
  }));

  const collectiblePages: SearchIndexItem[] = collectibles.map((collectible) => ({
    title: `${collectible.name} - Collectible Location`,
    description: `Where to find the ${collectible.name}: ${chapterName(collectible.chapter)}. ${collectible.howToReach}`,
    href: `/collectibles/${collectible.slug}`,
    tag: "Collectible",
    keywords: [
      collectible.slug,
      collectible.name,
      "collectible",
      "item",
      "location",
      chapterName(collectible.chapter),
    ].filter(Boolean),
  }));

  // Add extra top-level pages that might not be in guide categories
  const extraPages: SearchIndexItem[] = [
    {
      title: "It Reaches Guide Home",
      description: "Stuck in It Reaches? Find the exact puzzle solution, achievement unlock condition, or collectible location.",
      href: "/",
      tag: "Home",
      keywords: ["home", "index", "overview", "stuck", "get unstuck"],
    },
    {
      title: "Search",
      description: "Search every puzzle, achievement, collectible, and walkthrough page.",
      href: "/search",
      tag: "Reference",
      keywords: ["search", "find"],
    },
    {
      title: "FAQ",
      description: "Short answers to the questions players actually search: chapters, achievements, missables, saves.",
      href: "/faq",
      tag: "Reference",
      keywords: ["faq", "questions", "help", "chapters", "save"],
    },
    {
      title: "Beginner Tips",
      description: "Essential survival tips for new It Reaches players: exploration, evasion, puzzles and resources.",
      href: "/tips",
      tag: "Tips",
      keywords: ["tips", "beginner", "new player", "survival"],
    },
    {
      title: "Privacy Policy",
      description: "Privacy policy for It Reaches Guide.",
      href: "/privacy",
      tag: "Legal",
      keywords: ["privacy", "legal"],
    },
    {
      title: "Terms of Use",
      description: "Terms of use for It Reaches Guide.",
      href: "/terms",
      tag: "Legal",
      keywords: ["terms", "legal"],
    },
    {
      title: "Disclaimer",
      description: "Disclaimer for It Reaches Guide.",
      href: "/disclaimer",
      tag: "Legal",
      keywords: ["disclaimer", "legal"],
    },
  ];

  // Deduplicate by href
  const seen = new Set(index.map((item) => item.href));
  for (const item of [
    ...puzzlePages,
    ...achievementPages,
    ...collectiblePages,
    ...extraPages,
  ]) {
    if (!seen.has(item.href)) {
      index.push(item);
      seen.add(item.href);
    }
  }

  return index;
}

export async function generateSearchIndexFile() {
  const index = await buildSearchIndex();
  const outPath = path.join(process.cwd(), "public", "search-index.json");
  fs.writeFileSync(outPath, JSON.stringify(index, null, 2), "utf-8");
  console.log(`Generated search index with ${index.length} items at ${outPath}`);
}

if (require.main === module) {
  generateSearchIndexFile();
}
