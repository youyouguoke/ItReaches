import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

interface AchievementCardProps {
  title: string;
  description: string;
  missable: boolean;
  href: string;
}

export function AchievementCard({
  title,
  description,
  missable,
  href,
}: AchievementCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-surface-container-low glass-edge p-6 hover:-translate-y-1 transition-all"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-headline-sm text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        {missable && <Badge variant="warning">Missable</Badge>}
      </div>
      <p className="text-sm text-on-surface-variant">{description}</p>
    </Link>
  );
}
