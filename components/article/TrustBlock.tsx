import { Badge } from "@/components/ui/Badge";

interface TrustBlockProps {
  lastReviewed: string;
  verified?: boolean;
}

export function TrustBlock({ lastReviewed, verified = true }: TrustBlockProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-surface-container-low border border-white/5">
      {verified && <Badge variant="verified">Verified Guide</Badge>}
      <Badge variant="updated">Last reviewed: {lastReviewed}</Badge>
      <span className="text-sm text-on-surface-variant">
        Based on the current Steam version of It Reaches.
      </span>
    </div>
  );
}
