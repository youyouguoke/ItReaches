import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <section className="mt-section-gap max-w-3xl">
      <h2 className="font-headline-md text-foreground mb-8 uppercase tracking-widest">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <details
            key={index}
            className="bg-surface-container-low glass-edge overflow-hidden group"
          >
            <summary className="flex w-full items-center justify-between p-6 text-left cursor-pointer list-none">
              <span className="font-body text-lg text-foreground font-semibold">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180"
              />
            </summary>
            <div className="px-6 pb-6 pt-0 text-on-surface-variant border-t border-white/5">
              <p className="py-4 leading-relaxed">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
