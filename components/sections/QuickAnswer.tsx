import { Container } from "@/components/layout/Container";

interface QuickAnswerProps {
  title: string;
  answer: string;
  definition?: string;
}

export function QuickAnswer({ title, answer, definition }: QuickAnswerProps) {
  return (
    <section className="bg-surface py-16 border-y border-white/5">
      <Container>
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <span className="font-label text-label-caps uppercase tracking-widest">
              Quick Answer
            </span>
          </div>
          <h2 className="font-headline-md text-foreground mb-4">{title}</h2>
          <p className="font-body text-body-lg text-on-surface-variant leading-relaxed mb-6">
            {answer}
          </p>
          {definition && (
            <p className="text-sm text-on-surface-variant border-l-2 border-accent/50 pl-4 italic">
              {definition}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
