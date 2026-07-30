import { BookOpen, Brain, Clock, Map, Puzzle, Skull, Trophy } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  map: <Map size={20} />,
  puzzle: <Puzzle size={20} />,
  trophy: <Trophy size={20} />,
  skull: <Skull size={20} />,
  clock: <Clock size={20} />,
  award: <Trophy size={20} />,
  book: <BookOpen size={20} />,
  brain: <Brain size={20} />,
};

export function GuideIcon({ name }: { name?: string }) {
  if (!name) return null;
  return <span className="text-primary">{iconMap[name] || iconMap.book}</span>;
}
