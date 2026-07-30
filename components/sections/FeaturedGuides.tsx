import { GuideCard } from "@/components/cards/GuideCard";
import { Container } from "@/components/layout/Container";
import { GuideIcon } from "@/components/ui/GuideIcon";
import type { GuideCardData } from "@/lib/content";

interface FeaturedGuidesProps {
  latest: GuideCardData[];
  updated: GuideCardData[];
  popular: GuideCardData[];
}

function GuideRow({ title, guides }: { title: string; guides: GuideCardData[] }) {
  return (
    <div className="mb-16 last:mb-0">
      <div className="flex items-center gap-2 mb-8">
        <span className="w-2 h-2 bg-accent rounded-full" />
        <h2 className="font-label text-label-caps text-on-surface-variant uppercase tracking-widest">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guides.map((guide) => (
          <GuideCard
            key={guide.href}
            title={guide.title}
            description={guide.description}
            image={guide.image}
            href={guide.href}
            icon={<GuideIcon name={guide.iconName} />}
            badge={guide.badge}
            status={guide.status}
            readingTime={guide.readingTime}
            updated={guide.updated}
            difficulty={guide.difficulty}
          />
        ))}
      </div>
    </div>
  );
}

export function FeaturedGuides({ latest, updated, popular }: FeaturedGuidesProps) {
  return (
    <section className="py-24">
      <Container>
        <GuideRow title="Latest Guides" guides={latest} />
        <GuideRow title="Recently Updated" guides={updated} />
        <GuideRow title="Popular Guides" guides={popular} />
      </Container>
    </section>
  );
}
