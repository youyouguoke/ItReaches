import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "verified" | "updated" | "steam" | "new" | "warning" | "danger";
}

const variants = {
  verified: "bg-primary-container/20 border border-primary/30 text-primary",
  updated: "bg-surface-container border border-white/10 text-on-surface-variant",
  steam: "bg-secondary-container text-on-secondary-container",
  new: "bg-accent text-foreground",
  warning: "bg-warning/20 border border-warning/30 text-warning",
  danger: "bg-danger/20 border border-danger/30 text-danger",
};

export function Badge({ children, variant = "verified" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 font-label text-[10px] uppercase tracking-widest",
        variants[variant]
      )}
    >
      {variant === "verified" && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
      {children}
    </span>
  );
}
