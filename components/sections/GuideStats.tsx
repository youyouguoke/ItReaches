interface GuideStatsProps {
  stats: {
    label: string;
    value: string;
  }[];
}

export function GuideStats({ stats }: GuideStatsProps) {
  return (
    <section className="bg-surface py-16 border-y border-white/5">
      <div className="mx-auto max-w-container-max px-edge-mobile md:px-gutter">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-surface-container-low border border-white/5 text-center"
            >
              <div className="font-display text-3xl md:text-4xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
