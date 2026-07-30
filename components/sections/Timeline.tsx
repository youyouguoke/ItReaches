interface TimelineItem {
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l border-white/10 pl-8 space-y-12">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <span className="absolute -left-[39px] top-1 w-5 h-5 bg-accent border-4 border-background" />
          <h3 className="font-headline-sm text-foreground mb-2">{item.title}</h3>
          <p className="text-on-surface-variant leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
