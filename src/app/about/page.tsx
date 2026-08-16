import type { Metadata } from "next";
import SectionHeading from "../components/ui/SectionHeading";
import CtaSection from "../components/home/CtaSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Pinnacle Network & Security, an enterprise network engineering and cybersecurity company focused on secure, resilient infrastructure.",
};

const beliefs = [
  {
    title: "Infrastructure should have a purpose.",
    copy: "Every component should contribute to performance, security, availability, or scalability.",
  },
  {
    title: "Security should be engineered.",
    copy: "Security shouldn't depend on assumptions about where a device or user happens to be.",
  },
  {
    title: "Complexity should be understandable.",
    copy: "Good engineering creates clarity, even when the underlying environment is complicated.",
  },
  {
    title: "Technology should serve the business.",
    copy: "Infrastructure decisions should support business objectives rather than exist independently from them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
            About Pinnacle
          </span>
          <h1 className="mt-6 text-balance font-[family-name:var(--font-display)] text-4xl font-medium leading-tight text-[var(--color-paper)] sm:text-5xl">
            Engineering better networks. Building stronger organizations.
          </h1>
          <p className="mt-8 text-balance text-lg leading-relaxed text-[var(--color-mist)]">
            Pinnacle Network &amp; Security LLC was founded around a
            straightforward belief: enterprise infrastructure should be
            engineered with the same precision as the business it supports.
          </p>
          <p className="mt-4 text-balance text-lg leading-relaxed text-[var(--color-mist)]">
            Organizations depend on networks for communication, applications,
            cloud services, collaboration, data, and day-to-day operations.
            When infrastructure becomes unreliable or security becomes an
            afterthought, the impact extends far beyond the IT department.
            Pinnacle helps organizations approach these challenges through
            disciplined network engineering and security-focused
            architecture.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 py-20 sm:grid-cols-2 lg:px-10">
        <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-signal)]">Our mission</p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-paper)]">
            To engineer secure, resilient, and high-performing network
            environments that help organizations operate with confidence.
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-signal)]">Our vision</p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-paper)]">
            To be the trusted engineering partner organizations turn to when
            network complexity, security requirements, and business
            continuity cannot be treated separately.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-[var(--color-surface)]/40 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="What we believe" title="Four principles that guide our work" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {beliefs.map((b) => (
              <div key={b.title} className="border-l-2 border-[var(--color-signal)] pl-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-paper)]">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-mist)]">{b.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}