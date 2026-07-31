import { Hero } from "@/components/sections/Hero";
import { GameInfo } from "@/components/sections/GameInfo";
import { QuickAnswer } from "@/components/sections/QuickAnswer";
import { StartHere } from "@/components/sections/StartHere";
import { DocGrid } from "@/components/sections/DocGrid";
import { FeaturedGuides } from "@/components/sections/FeaturedGuides";
import { LatestUpdates } from "@/components/sections/LatestUpdates";
import { ScreenshotGallery } from "@/components/sections/ScreenshotGallery";
import { FAQ } from "@/components/article/FAQ";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { VideoGameSchema } from "@/components/seo/VideoGameSchema";
import { WebSiteSchema } from "@/components/seo/WebSiteSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Container } from "@/components/layout/Container";
import type {
  SiteConfig,
  HomeOverview,
  DocCategory,
  GuideCardData,
  UpdateItem,
  FAQItem,
} from "@/lib/content";

interface HomeTemplateProps {
  siteConfig: SiteConfig;
  overview: HomeOverview;
  docCategories: DocCategory[];
  featuredGuides: {
    latest: GuideCardData[];
    updated: GuideCardData[];
    popular: GuideCardData[];
  };
  latestUpdates: UpdateItem[];
  faqItems: FAQItem[];
}

const gallery = [
  { src: "/images/screenshot-1.webp", alt: "It Reaches abandoned hospital corridor screenshot" },
  { src: "/images/screenshot-2.webp", alt: "It Reaches puzzle room screenshot" },
  { src: "/images/screenshot-3.webp", alt: "It Reaches monster encounter screenshot" },
];

export function HomeTemplate({
  siteConfig,
  overview,
  docCategories,
  featuredGuides,
  latestUpdates,
  faqItems,
}: HomeTemplateProps) {
  const { game, trust } = siteConfig;

  return (
    <main>
      <WebSiteSchema />
      <VideoGameSchema />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { title: "Home", href: "/" },
          { title: "It Reaches Guide" },
        ]}
      />

      <Hero
        title="It Reaches Guide - Walkthrough, Endings, Puzzles & Tips"
        subtitle="Complete walkthrough, puzzle solutions, endings, monster survival tips, and lore for It Reaches. Updated for the Steam launch version."
        background={game.heroBackground}
        features={trust.coverage}
        primaryCta={{ label: "Start Walkthrough", href: "/walkthrough" }}
        secondaryCta={{ label: "View Puzzle Solutions", href: "/puzzles" }}
        trust={{
          verifiedLabel: trust.verifiedLabel,
          coverage: trust.coverage,
          lastReviewed: trust.lastReviewed,
          version: trust.version,
        }}
      />

      <QuickAnswer
        title={overview.quickAnswer.title}
        answer={overview.quickAnswer.answer}
        definition={overview.quickAnswer.definition}
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-4">
              <GameInfo
                info={{
                  game: game.title,
                  developer: game.developer,
                  publisher: game.publisher,
                  platforms: game.platforms,
                  genres: game.genres,
                  releaseDate: game.releaseDate,
                  playtime: game.playtime,
                  modes: game.modes,
                  controllerSupport: game.controllerSupport,
                  languages: game.languages,
                  engine: game.engine,
                  price: game.price,
                  steamUrl: game.steamUrl,
                }}
              />
            </div>
            <div className="lg:col-span-8 bg-card p-8 md:p-12 glass-edge">
              <h2 className="font-headline-md text-foreground mb-6">Game Overview</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-label text-label-caps text-primary uppercase tracking-widest mb-2">Gameplay</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {overview.sections.gameplay}
                  </p>
                </div>
                <div>
                  <h3 className="font-label text-label-caps text-primary uppercase tracking-widest mb-2">Story</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {overview.sections.story}
                  </p>
                </div>
                <div>
                  <h3 className="font-label text-label-caps text-primary uppercase tracking-widest mb-2">Objective</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {overview.sections.objective}
                  </p>
                </div>
                <div>
                  <h3 className="font-label text-label-caps text-primary uppercase tracking-widest mb-2">Estimated Length</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {overview.sections.estimatedLength}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StartHere />
      <DocGrid categories={docCategories} />
      <FeaturedGuides
        latest={featuredGuides.latest}
        updated={featuredGuides.updated}
        popular={featuredGuides.popular}
      />
      <ScreenshotGallery images={gallery} />
      <LatestUpdates updates={latestUpdates} />

      <Container>
        <FAQ items={faqItems} />
      </Container>
    </main>
  );
}
