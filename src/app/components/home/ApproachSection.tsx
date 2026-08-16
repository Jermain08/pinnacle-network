import SectionHeading from "../../components/ui/SectionHeading";

const steps = [
  { title: "Discover", copy: "We begin by understanding your infrastructure, applications, users, connectivity, security requirements, and business priorities." },
  { title: "Assess", copy: "We examine the current architecture to identify performance constraints, security gaps, dependencies, and opportunities for improvement." },
  { title: "Architect", copy: "We develop an architecture designed around your operational and security requirements." },
  { title: "Implement", copy: "We execute the solution carefully, with change management and business continuity in mind." },
  { title: "Validate", copy: "We verify functionality, security controls, connectivity, performance, and operational readiness." },
  { title: "Optimize", copy: "Infrastructure should evolve with the organization. We help identify opportunities for continuous improvement." },
];

export default function ApproachSection() {
  return (
    <section className="border-t border-[var(--color-line)] bg-[var(--color-surface)]/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="Our approach" title="From complexity to control" />

        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-4">
              <div className="trace-divider" />
              <span className="font-mono text-xs text-[var(--color-mist-dim)]">
                Step {i + 1} of {steps.length}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[var(--color-paper)]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-mist)]">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}