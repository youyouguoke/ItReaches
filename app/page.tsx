import { HomeTemplate } from "@/components/templates/HomeTemplate";
import {
  getSiteConfig,
  getHomeOverview,
  getDocCategories,
  getFeaturedGuides,
  getLatestUpdates,
  getHomeFAQ,
} from "@/lib/content";

export const metadata = {
  title: "It Reaches Guide - Complete Walkthrough & Wiki",
  description:
    "Complete walkthrough, puzzle solutions, endings, monster survival tips, and lore for It Reaches. Updated for the Steam launch version.",
  alternates: {
    canonical: "https://itreachesguide.com/",
  },
};

export default async function HomePage() {
  const [siteConfig, overview, docCategories, featuredGuides, latestUpdates, faqItems] =
    await Promise.all([
      getSiteConfig(),
      getHomeOverview(),
      getDocCategories(),
      getFeaturedGuides(),
      getLatestUpdates(),
      getHomeFAQ(),
    ]);

  return (
    <HomeTemplate
      siteConfig={siteConfig}
      overview={overview}
      docCategories={docCategories}
      featuredGuides={featuredGuides}
      latestUpdates={latestUpdates}
      faqItems={faqItems}
    />
  );
}
