import Link from "next/link";

interface PuzzleCardProps {
  name: string;
  location: string;
  difficulty: string;
  href: string;
}

export function PuzzleCard({ name, location, difficulty, href }: PuzzleCardProps) {
  const difficultyColor = {
    Easy: "text-success",
    Medium: "text-warning",
    Hard: "text-primary",
    Extreme: "text-danger",
  }[difficulty] || "text-on-surface-variant";

  return (
    <Link
      href={href}
      className="group block bg-surface-container-low glass-edge p-6 hover:border-primary/30 transition-all"
    >
      <h3 className="font-headline-sm text-foreground mb-2 group-hover:text-primary transition-colors">
        {name}
      </h3>
      <div className="flex items-center justify-between text-sm">
        <span className="text-on-surface-variant">{location}</span>
        <span className={difficultyColor}>{difficulty}</span>
      </div>
    </Link>
  );
}
