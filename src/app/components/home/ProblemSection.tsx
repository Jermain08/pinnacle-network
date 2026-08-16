import SectionHeading from "../../components/ui/SectionHeading";

const pillars = [
  {
    label: "Connect",
    copy: "Create reliable, scalable infrastructure that keeps users, systems, applications, and locations connected.",
  },
  {
    label: "Protect",
    copy: "Strengthen security through layered controls, intelligent segmentation, secure access, and modern security architecture.",
  },
  {
    label: "Empower",
    copy: "Give your organization the infrastructure and visibility needed to operate confidently and grow.",
  },
];

export default function ProblemSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading
        eyebrow="Where complexity comes from"
        title="Complex infrastructure. Increasing risk. One engineering partner."
        description="Enterprise networks rarely become complicated overnight. Legacy architecture, expanding cloud environments, remote access, security requirements, growing traffic, and disconnected technologies gradually create an infrastructure that is difficult to manage and even harder to secure. Pinnacle helps organizations make sense of that complexity — assessing how your environment operates today, identifying architectural and security gaps, and engineering practical improvements that strengthen the network without unnecessarily disrupting the business."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.label}
            className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 transition-colors hover:border-[var(--color-signal-dim)]"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
              {pillar.label}
            </span>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-mist)]">{pillar.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}