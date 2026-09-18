import { CollectionPageSchema } from "@/components/seo/CollectionPageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { GuideStats } from "@/components/sections/GuideStats";
import { GameProgression } from "@/components/sections/GameProgression";
import { GuideCard } from "@/components/cards/GuideCard";
import { FAQ } from "@/components/article/FAQ";
import { SourcesAndDisclaimer } from "@/components/article/SourcesAndDisclaimer";
import {
  getGuideCategories,
  getGuideStats,
  getGuideProgression,
  getGuideFAQ,
  getGuideUpdatedDate,
  type GuideCategory,
} from "@/lib/guides";
import { Map, Puzzle, Trophy, Skull, BookOpen, Award } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Guides | It Reaches Guide",
  description:
    "Every It Reaches guide in one place: puzzles, achievements, collectibles, walkthrough, and endings — each claim labeled by evidence level.",
  alternates: {
    canonical: "https://itreachesguide.com/guides",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  map: <Map size={20} />,
  puzzle: <Puzzle size={20} />,
  trophy: <Trophy size={20} />,
  skull: <Skull size={20} />,
  book: <BookOpen size={20} />,
  award: <Award size={20} />,
};

export default async function GuidesPage() {
  const categories = await Promise.resolve(getGuideCategories());
  const stats = await Promise.resolve(getGuideStats());
  const progression = await Promise.resolve(getGuideProgression());
  const faq = await Promise.resolve(getGuideFAQ());
  const updated = await Promise.resolve(getGuideUpdatedDate());

  const grouped = categories.reduce<Record<string, GuideCategory[]>>((acc, category) => {
    const group = category.category || "Guides";
    if (!acc[group]) acc[group] = [];
    acc[group].push(category);
    return acc;
  }, {});

  const collectionItems = categories.map((category) => ({
    title: category.title,
    description: category.description,
    href: category.href,
    image: category.image,
  }));

  return (
    <>
      <CollectionPageSchema
        name="It Reaches Guides"
        description="Complete guide directory for It Reaches: walkthroughs, puzzles, endings, monster strategies, story lore, and achievements."
        url="/guides"
        itemList={collectionItems}
      />
      <BreadcrumbSchema
        items={[
          { title: "Home", href: "/" },
          { title: "Guides" },
        ]}
      />
      <FAQSchema items={faq} />
      <Breadcrumb items={[{ title: "Home", href: "/" }, { title: "Guides" }]} />

      <Hero
        title="Guides"
        subtitle="Every guide for It Reaches in one place: puzzles, achievements, collectibles, the chapter walkthrough, and endings. Each claim is labeled Verified, Community reported, or Unverified."
        background="/images/hero.webp"
        features={[
          "Puzzles",
          "Achievements",
          "Collectibles",
          "Walkthrough",
          "Endings",
          "FAQ",
        ]}
        primaryCta={{ label: "Browse Puzzles", href: "/puzzles" }}
        secondaryCta={{ label: "Chapter Walkthrough", href: "/walkthrough" }}
        trust={{
          coverage: [
            "Puzzles & codes",
            "All 20 achievements",
            "5 collectibles",
            "5-chapter walkthrough",
            "Ending status",
            "Evidence-labeled claims",
          ],
          lastReviewed: updated,
          version: "Steam Launch Version",
        }}
      />

      <section className="bg-surface py-16 border-y border-white/5">
        <Container>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6 text-primary">
              <span className="font-label text-label-caps uppercase tracking-widest">
                Quick Answer
              </span>
            </div>
            <h2 className="font-headline-md text-foreground mb-4">
              What will you find here?
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Stuck somewhere? Start with the <Link href="/puzzles" className="text-primary hover:underline">Puzzles & Codes</Link> hub if you need a specific solution, check <Link href="/achievements" className="text-primary hover:underline">Achievements</Link> for unlock conditions and missable warnings, or use the <Link href="/walkthrough" className="text-primary hover:underline">Walkthrough</Link> to figure out where you are and what to do next.
            </p>
          </div>
        </Container>
      </section>

      <GuideStats stats={stats} />

      <section className="mt-section-gap mb-section-gap">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-headline-md text-foreground mb-2">Complete Guides</h2>
              <p className="text-on-surface-variant">
                Organized by topic so you can find the exact help you need.
              </p>
            </div>
            <div className="text-sm text-on-surface-variant font-mono">
              Updated: {updated}
            </div>
          </div>

          <div className="space-y-16">
            {Object.entries(grouped).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-headline-sm text-foreground mb-4 pb-2 border-b border-white/5">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items
                    .sort((a, b) => (a.order || 0) - (b.order || 0))
                    .map((guide) => (
                      <GuideCard
                        key={guide.slug}
                        title={guide.title}
                        description={guide.description}
                        image={guide.image}
                        href={guide.href}
                        icon={iconMap[guide.iconName || "map"]}
                        readingTime={guide.readingTime}
                        updated={guide.updated}
                        difficulty={guide.difficulty}
                        coverage={guide.coverage}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <GameProgression steps={progression} />

      <section className="mb-16">
        <Container>
          <div className="max-w-3xl">
            <FAQ items={faq} />
          </div>
        </Container>
      </section>

      <SourcesAndDisclaimer
        lastReviewed={updated}
        sources={[
          "Steam store page for It Reaches (App ID 4119360)",
          "Steam Community global achievement statistics",
          "DanQ8000 full gameplay walkthrough (chapter structure)",
        ]}
      />
    </>
  );
}
