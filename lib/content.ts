import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export function readContentFile<T>(...segments: string[]): { data: T; body: string } {
  const filePath = path.join(contentDir, ...segments);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data: data as T, body: content };
}

export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  game: {
    title: string;
    developer: string;
    publisher: string;
    platforms: string[];
    genres: string[];
    releaseDate: string;
    playtime: string;
    modes?: string;
    controllerSupport?: string;
    languages?: string;
    engine?: string;
    steamUrl?: string;
    price?: string;
    achievements?: string;
    heroBackground: string;
  };
  trust: {
    verifiedLabel: string;
    lastReviewed: string;
    version: string;
    coverage: string[];
  };
}

export function getSiteConfig(): SiteConfig {
  return readContentFile<SiteConfig>("config", "site.md").data;
}

export function siteConfig(): SiteConfig {
  return getSiteConfig();
}

export interface HomeOverview {
  quickAnswer: {
    title: string;
    answer: string;
    definition: string;
  };
  sections: {
    gameplay: string;
    story: string;
    objective: string;
    estimatedLength: string;
  };
}

export function getHomeOverview(): HomeOverview {
  return readContentFile<HomeOverview>("home", "overview.md").data;
}

export interface DocCategory {
  title: string;
  href: string;
  count: string;
  description: string;
}

export function getDocCategories(): DocCategory[] {
  const { data } = readContentFile<{ categories: DocCategory[] }>("home", "doc-categories.md");
  return data.categories;
}

export interface GuideCardData {
  title: string;
  description: string;
  image: string;
  href: string;
  iconName?: string;
  readingTime?: string;
  updated?: string;
  difficulty?: string;
  badge?: string;
  status?: "In Progress" | "Speculative" | "Pending";
}

export function getFeaturedGuides(): {
  latest: GuideCardData[];
  updated: GuideCardData[];
  popular: GuideCardData[];
} {
  const { data } = readContentFile<{
    latest: GuideCardData[];
    updated: GuideCardData[];
    popular: GuideCardData[];
  }>("home", "featured-guides.md");
  return data;
}

export interface UpdateItem {
  date: string;
  title: string;
  href: string;
}

export function getLatestUpdates(): UpdateItem[] {
  const { data } = readContentFile<{ updates: UpdateItem[] }>("home", "latest-updates.md");
  return data.updates;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function getHomeFAQ(): FAQItem[] {
  const { data } = readContentFile<{ items: FAQItem[] }>("home", "faq.md");
  return data.items;
}
