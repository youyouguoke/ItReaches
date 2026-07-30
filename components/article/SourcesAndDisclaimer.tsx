import { Notice } from "@/components/ui/Notice";

interface SourcesAndDisclaimerProps {
  lastReviewed?: string;
  sources?: string[];
}

export function SourcesAndDisclaimer({
  lastReviewed,
  sources,
}: SourcesAndDisclaimerProps) {
  return (
    <section className="mt-16 pt-8 border-t border-white/5 scroll-mt-24">
      <div className="mx-auto max-w-container-max px-edge-mobile md:px-gutter">
        <h2 className="font-headline-md text-foreground mb-6">
          Sources & Disclaimer
        </h2>

        {sources && sources.length > 0 && (
          <div className="mb-6">
            <h3 className="font-headline-sm text-foreground mb-3">Sources</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-on-surface-variant">
              {sources.map((source, index) => (
                <li key={index}>{source}</li>
              ))}
            </ul>
          </div>
        )}

        {lastReviewed && (
          <p className="text-sm text-on-surface-variant mb-4">
            Last reviewed: {lastReviewed}
          </p>
        )}

        <Notice variant="info" title="Unofficial Fan Guide" titleAs="h3">
          This guide is an unofficial fan resource and is not affiliated with, endorsed by, or sponsored by Emberflight Games or Perp Games. All game names, characters, screenshots, and trademarks are property of their respective owners. Chapter structure and guide details are based on the current Steam description and community sources; exact content is being verified as the full release becomes available.
        </Notice>
      </div>
    </section>
  );
}
