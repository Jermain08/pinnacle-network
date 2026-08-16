import Button from "../../components/ui/Button";
import NetworkTopology from "../../components/ui/NetworkTopology";

type CtaSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
};

export default function CtaSection({
  eyebrow = "Let's talk",
  title = "Better infrastructure starts with a better conversation.",
  description = "Tell us where your network is today, where you need it to go, and what's standing in the way.",
  ctaLabel = "Schedule a Consultation",
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-[var(--color-line)]">
      <div className="absolute inset-0 opacity-20">
        <NetworkTopology className="h-full w-full" variant="compact" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
          {eyebrow}
        </span>
        <h2 className="mt-6 text-balance font-[family-name:var(--font-display)] text-3xl font-medium leading-tight text-[var(--color-paper)] sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-[var(--color-mist)]">
          {description}
        </p>
        <Button href="/contact" variant="primary" className="mt-10">
          {ctaLabel} →
        </Button>
      </div>
    </section>
  );
}