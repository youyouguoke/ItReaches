import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Check, ShieldCheck } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  background: string;
  features?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trust?: {
    verifiedLabel?: string;
    coverage?: string[];
    lastReviewed?: string;
    version?: string;
  };
}

export function Hero({
  title,
  subtitle,
  background,
  features,
  primaryCta,
  secondaryCta,
  trust,
}: HeroProps) {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={background}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-container-max px-edge-mobile md:px-gutter w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-display-lg-mobile md:text-display-lg text-foreground leading-tight">
                {title}
              </h1>
              <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
                {subtitle}
              </p>
            </div>

            {features && features.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 font-label text-label-caps uppercase tracking-widest"
                  >
                    <Check size={14} />
                    {feature}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              )}
            </div>

            {trust && (
              <div className="bg-surface/80 backdrop-blur-sm border border-white/5 p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck size={18} />
                  <span className="font-label text-label-caps uppercase tracking-widest">
                    Evidence-based guide
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Every claim is labeled by evidence level: Verified, Community
                  reported, or Unverified. We do not publish guessed codes,
                  locations, or unlock conditions.
                </p>
                {trust.coverage && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {trust.coverage.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-on-surface-variant text-sm"
                      >
                        <Check size={14} className="text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-4 text-xs text-on-surface-variant font-mono border-t border-white/5 pt-4">
                  {trust.version && <span>Version: {trust.version}</span>}
                  {trust.lastReviewed && <span>Last reviewed: {trust.lastReviewed}</span>}
                </div>
              </div>
            )}
          </div>

          <div className="hidden lg:block">
            <div className="relative aspect-video border border-white/10 bg-surface/50 overflow-hidden">
              <Image
                src="/images/screenshot-1.webp"
                alt="It Reaches gameplay screenshot"
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4">
                <span className="text-xs text-on-surface-variant font-mono uppercase tracking-widest">
                  Gameplay Preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
