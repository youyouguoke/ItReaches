import { MetadataRoute } from "next";
import { chapters, achievements, puzzles, collectibles } from "@/lib/game-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://itreachesguide.com";
  const today = new Date();

  const staticRoutes = [
    "",
    "/puzzles",
    "/achievements",
    "/collectibles",
    "/walkthrough",
    "/endings",
    "/faq",
    "/guides",
    "/privacy",
    "/terms",
    "/disclaimer",
  ];

  const chapterRoutes = chapters.map((c) => `/walkthrough/${c.slug}`);
  const puzzleRoutes = puzzles.map((p) => `/puzzles/${p.slug}`);
  const achievementRoutes = achievements.map((a) => `/achievements/${a.slug}`);
  const collectibleRoutes = collectibles.map((c) => `/collectibles/${c.slug}`);

  const all = [
    ...staticRoutes,
    ...chapterRoutes,
    ...puzzleRoutes,
    ...achievementRoutes,
    ...collectibleRoutes,
  ];

  return all.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: today,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
