import Button from "../../components/ui/Button";

const capabilities = [
  "Architecture planning",
  "Deployment",
  "Migration",
  "Configuration",
  "Security policy design",
  "Rule optimization",
  "High availability architecture",
  "Network segmentation",
  "VPN connectivity",
  "Traffic analysis",
  "Performance optimization",
  "Configuration review",
  "Lifecycle planning",
];

export default function FirewallSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid grid-cols-1 gap-12 rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 lg:grid-cols-[1.1fr_1fr] lg:p-14">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
            Firewall Engineering
          </span>
          <h2 className="mt-6 text-balance font-[family-name:var(--font-display)] text-3xl font-medium leading-tight text-[var(--color-paper)] sm:text-4xl">
            Enterprise firewall engineering without the guesswork
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-mist)]">
            Your firewall is more than a box sitting at the edge of the
            network. It is a critical control point for traffic inspection,
            segmentation, access policies, threat prevention, visibility, and
            connectivity.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-mist)]">
            Pinnacle provides engineering expertise for complex Palo Alto
            Networks firewall environments, including large-scale deployments
            and infrastructure transitions.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-mist-dim)]">
            Palo Alto&apos;s PA-7000 series is designed for large enterprise and
            carrier-class environments, including high-availability
            deployments.
          </p>
          <Button href="/contact" variant="primary" className="mt-8">
            Discuss Your Firewall Environment
          </Button>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-mist-dim)]">
            Services include
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-[var(--color-mist)]"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-signal)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}