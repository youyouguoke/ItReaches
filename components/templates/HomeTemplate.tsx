import { Hero } from "@/components/sections/Hero";
import { GameInfo } from "@/components/sections/GameInfo";
import { DocGrid } from "@/components/sections/DocGrid";
import { LatestUpdates } from "@/components/sections/LatestUpdates";
import { FAQ } from "@/components/article/FAQ";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { VideoGameSchema } from "@/components/seo/VideoGameSchema";
import { WebSiteSchema } from "@/components/seo/WebSiteSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { Container } from "@/components/layout/Container";
import { chapters } from "@/lib/game-data";
import { Lock, Trophy, Compass, Package, ArrowRight } from "lucide-react";
import Link from "next/link";
import type {
  SiteConfig,
  DocCategory,
  UpdateItem,
  FAQItem,
} from "@/lib/content";

interface HomeTemplateProps {
  siteConfig: SiteConfig;
  docCategories: DocCategory[];
  latestUpdates: UpdateItem[];
  faqItems: FAQItem[];
}

const problemCards = [
  {
    icon: Lock,
    title: "Puzzles & Codes",
    promise: "Find the solution to a specific puzzle.",
    href: "/puzzles",
  },
  {
    icon: Trophy,
    title: "Achievements",
    promise: "Find how to unlock a specific achievement.",
    href: "/achievements",
  },
  {
    icon: Compass,
    title: "Walkthrough",
    promise: "Find where you are and what to do next.",
    href: "/walkthrough",
  },
  {
    icon: Package,
    title: "Collectibles",
    promise: "Find missable items and their locations.",
    href: "/collectibles",
  },
];

export function HomeTemplate({
  siteConfig,
  docCategories,
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
        title="Stuck in It Reaches?"
        subtitle="Find the exact solution, location, or unlock condition. One page per problem — every claim labeled Verified, Community reported, or Unverified."
        background={game.heroBackground}
        features={["Get unstuck fast", "No guessed codes", "Official Steam data"]}
        primaryCta={{ label: "Puzzles & Codes", href: "/puzzles" }}
        secondaryCta={{ label: "All 20 Achievements", href: "/achievements" }}
        trust={{
          coverage: trust.coverage,
          lastReviewed: trust.lastReviewed,
          version: trust.version,
        }}
      />

      {/* Get Unstuck — the four problem doors */}
      <section className="py-20 bg-surface border-y border-white/5">
        <Container>
          <div className="flex items-center gap-2 mb-3 text-primary">
            <span className="font-label text-label-caps uppercase tracking-widest">
              Get Unstuck
            </span>
          </div>
          <h2 className="font-headline-md text-foreground mb-2">
            What do you need?
          </h2>
          <p className="text-on-surface-variant mb-10 max-w-2xl">
            Pick the exact kind of problem you are facing. Each hub leads to
            single-problem pages that answer in the first screen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {problemCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group bg-surface-container-low p-6 border border-white/5 hover:border-primary transition-all flex flex-col h-full"
                >
                  <div className="text-primary mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-headline-sm text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-6 flex-grow">
                    {card.promise}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-label uppercase tracking-wider">
                    Open{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Where am I? — chapter strip from the canonical data source */}
      <section className="py-20">
        <Container>
          <div className="flex items-center gap-2 mb-3 text-primary">
            <span className="font-label text-label-caps uppercase tracking-widest">
              Where am I?
            </span>
          </div>
          <h2 className="font-headline-md text-foreground mb-2">
            Five chapters in walkthrough footage
          </h2>
          <p className="text-on-surface-variant mb-8 max-w-2xl">
            Chapter names and boundaries follow chapter markers in full-game
            walkthrough footage.{" "}
            <span className="inline-flex align-middle ml-1">
              <VerificationBadge status="community" />
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {chapters.map((chapter) => (
              <Link
                key={chapter.slug}
                href={`/walkthrough/${chapter.slug}`}
                className="group bg-surface-container-low border border-white/5 hover:border-primary transition-all p-5 flex flex-col"
              >
                <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 mb-2">
                  Chapter {chapter.order} — {chapter.playtime}
                </div>
                <div className="font-headline-sm text-foreground mb-1">
                  {chapter.name}
                </div>
                <div className="text-xs text-on-surface-variant flex-grow">
                  {chapter.summary}
                </div>
                <span className="inline-flex items-center gap-2 text-primary text-xs font-label uppercase tracking-wider mt-4">
                  Guide{" "}
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Verified game facts + evidence policy */}
      <section className="py-20 bg-surface border-y border-white/5">
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
              <h2 className="font-headline-md text-foreground mb-6">
                Evidence first, always
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed mb-8">
                A guide that guesses a code wastes your time. Every page on this
                site shows its verification status up front, and unverified
                answers are never published — we would rather say &quot;not yet
                verified&quot; than invent a plausible-looking number.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-surface-container-low border border-white/5">
                  <VerificationBadge status="verified" />
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Confirmed against official sources (Steam store, achievement
                    data) or reproducible in-game evidence.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-surface-container-low border border-white/5">
                  <VerificationBadge status="community" />
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Supported by player footage or reports that have not been
                    independently reproduced.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-surface-container-low border border-white/5">
                  <VerificationBadge status="unverified" />
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Not yet confirmed. The page says what is known and stops
                    there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <DocGrid categories={docCategories} />
      <LatestUpdates updates={latestUpdates} />

      <Container>
        <FAQ items={faqItems} />
      </Container>
    </main>
  );
}
