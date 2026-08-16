import SectionHeading from "../../components/ui/SectionHeading";

const principles = [
  {
    n: "01",
    title: "Precision",
    copy: "Network engineering requires attention to the details that often determine reliability and security.",
  },
  {
    n: "02",
    title: "Security by Design",
    copy: "Security is considered throughout architecture and implementation, not treated as an afterthought.",
  },
  {
    n: "03",
    title: "Practical Engineering",
    copy: "Recommendations are designed around real infrastructure, real constraints, and real operational requirements.",
  },
  {
    n: "04",
    title: "Vendor-Aware Expertise",
    copy: "We work with enterprise technologies and architectures appropriate for complex network environments.",
  },
  {
    n: "05",
    title: "Long-Term Thinking",
    copy: "The goal isn't simply to complete a deployment. The goal is to leave you with infrastructure that can evolve.",
  },
];

export default function WhyPinnacle() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading
        eyebrow="Why Pinnacle"
        title="Engineering first. Security always."
        description="Pinnacle isn't built around selling a predefined package. We start with the environment — every organization has different applications, traffic patterns, users, infrastructure, risk tolerance, and business requirements. Our role is to understand those variables and engineer an environment that works for the organization behind it."
      />

      <div className="mt-14 grid grid-cols-1 gap-0 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)] sm:grid-cols-1">
        {principles.map((p) => (
          <div key={p.n} className="grid grid-cols-[auto_1fr] items-start gap-6 py-6 sm:grid-cols-[80px_240px_1fr] sm:items-center">
            <span className="font-mono text-sm text-[var(--color-signal)]">{p.n}</span>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-paper)]">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--color-mist)] sm:col-start-3">{p.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}