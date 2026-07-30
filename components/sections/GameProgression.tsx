import { ArrowRight } from "lucide-react";

interface ProgressionStep {
  label: string;
  href: string;
  description: string;
}

interface GameProgressionProps {
  steps: ProgressionStep[];
}

export function GameProgression({ steps }: GameProgressionProps) {
  return (
    <section id="progression" className="mb-16 scroll-mt-24">
      <div className="mx-auto max-w-container-max px-edge-mobile md:px-gutter">
        <h2 className="font-headline-md text-foreground mb-6 border-b border-white/5 pb-2">
          Recommended Reading Order
        </h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <a
              key={step.href}
              href={step.href}
              className="group flex items-start gap-4 p-6 bg-surface-container-low border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-display text-lg font-bold shrink-0">
                {index + 1}
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-headline-sm text-foreground group-hover:text-primary transition-colors">
                    {step.label}
                  </h3>
                  <ArrowRight
                    size={18}
                    className="text-on-surface-variant group-hover:text-primary transition-colors"
                  />
                </div>
                <p className="text-sm text-on-surface-variant">{step.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
