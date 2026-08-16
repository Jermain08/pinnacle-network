import type { ServiceDetail } from "../../../lib/services-data";
import CtaSection from "../../components/home/CtaSection";

export default function ServiceDetailTemplate({ service }: { service: ServiceDetail }) {
  return (
    <>
      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
            {service.eyebrow}
          </span>
          <h1 className="mt-6 text-balance font-[family-name:var(--font-display)] text-4xl font-medium leading-tight text-[var(--color-paper)] sm:text-5xl">
            {service.h1}
          </h1>
          <div className="mt-8 flex flex-col gap-4">
            {service.intro.map((paragraph, i) => (
              <p key={i} className="text-balance text-base leading-relaxed text-[var(--color-mist)] sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-mist-dim)]">
          {service.listLabel}
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {service.list.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-mist)]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-signal)]" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CtaSection
        title={service.cta ?? "Better infrastructure starts with a better conversation."}
        description="Tell us where your network is today, where you need it to go, and what's standing in the way."
      />
    </>
  );
}