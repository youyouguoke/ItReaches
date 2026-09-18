import { HomeTemplate } from "@/components/templates/HomeTemplate";
import { getSiteConfig, getDocCategories, getLatestUpdates, getHomeFAQ } from "@/lib/content";

export const metadata = {
  title: "It Reaches Guide - Stuck? Find the Exact Solution",
  description:
    "Stuck in It Reaches? Find the exact puzzle solution, achievement unlock condition, or collectible location. One page per problem, every claim labeled by evidence level.",
  alternates: {
    canonical: "https://itreachesguide.com/",
  },
};

export default async function HomePage() {
  const [siteConfig, docCategories, latestUpdates, faqItems] = await Promise.all([
    getSiteConfig(),
    getDocCategories(),
    getLatestUpdates(),
    getHomeFAQ(),
  ]);

  return (
    <HomeTemplate
      siteConfig={siteConfig}
      docCategories={docCategories}
      latestUpdates={latestUpdates}
      faqItems={faqItems}
    />
  );
}
