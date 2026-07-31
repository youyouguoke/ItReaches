import * as fs from "fs";
import * as path from "path";
import { getGuideCategories } from "../lib/guides";

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

  // Add extra top-level pages that might not be in guide categories
  const extraPages: SearchIndexItem[] = [
    {
      title: "It Reaches Guide Home",
      description: "Complete walkthrough, puzzle solutions, endings, monster survival tips, and lore for It Reaches.",
      href: "/",
      tag: "Home",
      keywords: ["home", "index", "overview"],
    },
    {
      title: "FAQ",
      description: "Frequently asked questions about It Reaches gameplay, story, characters, chapters, achievements, puzzles, and endings.",
      href: "/faq",
      tag: "Reference",
      keywords: ["faq", "questions", "help"],
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
  for (const item of extraPages) {
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
