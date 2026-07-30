import Link from "next/link";
import Image from "next/image";

export interface Guide {
  title: string;
  description: string;
  href: string;
  image: string;
  tag?: string;
}

interface RelatedGuideProps {
  guides: Guide[];
}

export function RelatedGuide({ guides }: RelatedGuideProps) {
  return (
    <section className="mt-section-gap mb-section-gap">
      <h2 className="font-headline-md text-foreground mb-8 flex items-center gap-4">
        Keep Investigating
        <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group block bg-surface-container-low glass-edge overflow-hidden hover:-translate-y-1 transition-all"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={guide.image}
                alt={guide.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              {guide.tag && (
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/20 text-primary text-[10px] px-2 py-1 font-label uppercase tracking-widest backdrop-blur-md">
                    {guide.tag}
                  </span>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-headline-sm text-[18px] mb-2 group-hover:text-primary transition-colors">
                {guide.title}
              </h3>
              <p className="text-sm text-on-surface-variant line-clamp-2">{guide.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
