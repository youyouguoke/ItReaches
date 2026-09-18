import { cn } from "@/lib/utils";

export type VerificationStatus = "verified" | "community" | "unverified";

interface VerificationBadgeProps {
  status: VerificationStatus;
  className?: string;
}

const config: Record<
  VerificationStatus,
  { label: string; className: string; icon: React.ReactNode }
> = {
  verified: {
    label: "Verified",
    className: "bg-primary-container/20 border border-primary/30 text-primary",
    icon: (
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  community: {
    label: "Community reported",
    className: "bg-warning/15 border border-warning/30 text-warning",
    icon: (
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
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  unverified: {
    label: "Unverified",
    className: "bg-surface-container border border-white/15 text-on-surface-variant",
    icon: (
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
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
};

export function VerificationBadge({ status, className }: VerificationBadgeProps) {
  const c = config[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 font-label text-[10px] uppercase tracking-widest",
        c.className,
        className
      )}
    >
      {c.icon}
      Verification: {c.label}
    </span>
  );
}
