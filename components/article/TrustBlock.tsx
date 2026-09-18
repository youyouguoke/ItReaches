import { Badge } from "@/components/ui/Badge";
import { VerificationBadge, type VerificationStatus } from "@/components/ui/VerificationBadge";

interface TrustBlockProps {
  lastReviewed: string;
  verification?: VerificationStatus;
}

export function TrustBlock({
  lastReviewed,
  verification = "unverified",
}: TrustBlockProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-surface-container-low border border-white/5">
      <VerificationBadge status={verification} />
      <Badge variant="updated">Last reviewed: {lastReviewed}</Badge>
      <span className="text-sm text-on-surface-variant">
        Based on the current Steam version of It Reaches.
      </span>
    </div>
  );
}
