import { Notice } from "@/components/ui/Notice";

interface QuickAnswerProps {
  title?: string;
  children: React.ReactNode;
  as?: "h2" | "h3" | "h4";
}

export function QuickAnswer({ title = "Quick Answer", children, as: Tag = "h4" }: QuickAnswerProps) {
  return (
    <Notice variant="info" title={title} titleAs={Tag}>
      {children}
    </Notice>
  );
}
