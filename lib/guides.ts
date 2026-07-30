import * as fs from "fs";
import * as path from "path";

export interface GuideCategory {
  slug: string;
  title: string;
  description: string;
  image: string;
  href: string;
  iconName?: string;
  readingTime?: string;
  updated?: string;
  difficulty?: string;
  coverage?: string[];
  badge?: string;
  order?: number;
  category?: string;
}

export interface GuideStat {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProgressionStep {
  label: string;
  href: string;
  description: string;
}

export interface GuidePageData {
  updated: string;
  stats: GuideStat[];
  categories: GuideCategory[];
  progression: ProgressionStep[];
  faq: FAQItem[];
}

const contentDir = path.join(process.cwd(), "content");

export function getGuidePageData(): GuidePageData {
  const filePath = path.join(contentDir, "guides", "guide-categories.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as GuidePageData;
}

export function getGuideCategories(): GuideCategory[] {
  const data = getGuidePageData();
  return data.categories.map((category) => ({
    ...category,
    category: category.category || "Guides",
  }));
}

export function getGuideStats(): GuideStat[] {
  return getGuidePageData().stats;
}

export function getGuideProgression(): ProgressionStep[] {
  return getGuidePageData().progression;
}

export function getGuideFAQ(): FAQItem[] {
  return getGuidePageData().faq;
}

export function getGuideUpdatedDate(): string {
  return getGuidePageData().updated;
}
