import Link from "next/link";
import { ArrowRight, BookOpen, Puzzle, Trophy, Skull } from "lucide-react";

interface StartCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const cards: StartCard[] = [
  {
    title: "Beginner Walkthrough",
    description: "New to the abandoned hospital? Start with the chapter-by-chapter walkthrough.",
    href: "/walkthrough",
    icon: <BookOpen size={24} />,
  },
  {
    title: "Stuck on a Puzzle?",
    description: "Find every combination, code, and solution organized by chapter.",
    href: "/puzzles",
    icon: <Puzzle size={24} />,
  },
  {
    title: "Unlock Every Ending",
    description: "See the exact requirements for the Good, Bad, and Secret endings.",
    href: "/endings",
    icon: <Trophy size={24} />,
  },
  {
    title: "Survive the Monsters",
    description: "Learn patrol patterns, weaknesses, and hiding spots for every entity.",
    href: "/monsters",
    icon: <Skull size={24} />,
  },
];

export function StartHere() {
  return (
    <section className="py-24">
      <div className="max-w-container-max mx-auto px-edge-mobile md:px-gutter">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 bg-accent rounded-full" />
          <h2 className="font-label text-label-caps text-on-surface-variant uppercase tracking-widest">
            Start Here
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-surface-container-low p-6 border border-white/5 hover:border-primary transition-all flex flex-col h-full"
            >
              <div className="text-primary mb-4">{card.icon}</div>
              <h3 className="font-headline-sm text-foreground mb-2">{card.title}</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-grow">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-2 text-primary text-sm font-label uppercase tracking-wider">
                Go <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
