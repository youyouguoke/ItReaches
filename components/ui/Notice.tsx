import { cn } from "@/lib/utils";

interface NoticeProps {
  children: React.ReactNode;
  variant?: "info" | "warning" | "success" | "danger";
  title?: string;
  titleAs?: "h2" | "h3" | "h4";
}

const variants = {
  info: "border-l-2 border-primary bg-surface-container-low",
  warning: "border-l-2 border-warning bg-surface-container-low",
  success: "border-l-2 border-success bg-surface-container-low",
  danger: "border-l-2 border-danger bg-surface-container-low",
};

export function Notice({ children, variant = "info", title, titleAs: Tag = "h4" }: NoticeProps) {
  return (
    <div className={cn("p-6 my-8", variants[variant])}>
      {title && (
        <Tag className="font-headline-sm text-foreground mb-2">{title}</Tag>
      )}
      <div className="text-on-surface-variant">{children}</div>
    </div>
  );
}
