

import Link from "next/link";
import SectionHeading from "../../components/ui/SectionHeading";
import { industriesNav } from "../../../lib/site-data";

export default function IndustriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading
        eyebrow="Industries"
        title="Built for environments where reliability matters"
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industriesNav.map((industry) => (
          <Link
            key={industry.href}
            href={industry.href}
            className="group flex flex-col justify-between rounded-2xl border border-[var(--color-line)] p-8 transition-colors hover:border-[var(--color-signal-dim)] hover:bg-[var(--color-surface)]"
          >
            <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-paper)]">
              {industry.label}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-mist)]">{industry.description}</p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-signal)] opacity-80 transition-opacity group-hover:opacity-100">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}