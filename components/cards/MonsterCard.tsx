import Image from "next/image";
import Link from "next/link";

interface MonsterCardProps {
  name: string;
  dangerLevel: string;
  chapter: string;
  image: string;
  href: string;
}

export function MonsterCard({
  name,
  dangerLevel,
  chapter,
  image,
  href,
}: MonsterCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-surface-container-low glass-edge overflow-hidden hover:-translate-y-1 transition-all"
    >
      <div className="h-48 relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="bg-accent text-foreground text-[10px] px-2 py-1 font-label uppercase tracking-widest">
            {dangerLevel}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-headline-sm text-foreground mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-on-surface-variant">First encounter: {chapter}</p>
      </div>
    </Link>
  );
}
