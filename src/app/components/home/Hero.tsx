import Button from "../ui/Button";
import NetworkTopology from "../ui/NetworkTopology";
import { siteConfig } from "../../../lib/site-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="grid-wash absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-[420px] opacity-70">
        <NetworkTopology className="h-full w-full" variant="hero" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-ink)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-start px-6 pb-28 pt-24 lg:px-10 lg:pt-32">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
          {siteConfig.tagline}
        </span>

        <h1 className="mt-6 text-balance font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.05] text-[var(--color-paper)] sm:text-6xl lg:text-7xl">
          Build a network that performs under pressure.
        </h1>

        <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-[var(--color-mist)]">
          {siteConfig.name} designs, secures, and modernizes enterprise network
          environments built for performance, resilience, and evolving cyber
          threats.
        </p>
        <p className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-[var(--color-mist)]">
          From complex firewall deployments to Zero Trust architecture and
          infrastructure modernization, we bring engineering discipline to the
          systems your business depends on.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/contact" variant="primary">
            Schedule a Consultation
          </Button>
          <Button href="/services" variant="secondary">
            Explore Our Services
          </Button>
        </div>

        <p className="mt-14 font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-mist-dim)]">
          {siteConfig.slogan}
        </p>
      </div>
    </section>
  );
}