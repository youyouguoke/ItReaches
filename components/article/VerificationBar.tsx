import {
  VerificationBadge,
  type VerificationStatus,
} from "@/components/ui/VerificationBadge";

interface VerificationBarProps {
  status: VerificationStatus;
  note?: string;
}

export function VerificationBar({ status, note }: VerificationBarProps) {
  return (
    <div className="mb-8 p-4 bg-surface-container-low border border-white/5">
      <div className="flex flex-wrap items-center gap-3">
        <VerificationBadge status={status} />
        {note && (
          <span className="text-sm text-on-surface-variant">{note}</span>
        )}
      </div>
      <p className="mt-2 text-xs text-on-surface-variant/70 leading-relaxed">
        Every claim on this page is labeled by evidence level. Verified means
        confirmed against official sources or reproducible in-game evidence.
        Community reported means supported by player footage or reports that
        have not been independently reproduced. Unverified means not yet
        confirmed — we do not publish guessed answers.
      </p>
    </div>
  );
}
