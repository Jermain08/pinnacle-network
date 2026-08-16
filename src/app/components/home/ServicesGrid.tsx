

import Link from "next/link";
import SectionHeading from "../../components/ui/SectionHeading";

const services = [
  {
    title: "Enterprise Network Engineering",
    copy: "Design and engineer network environments capable of supporting demanding enterprise workloads, distributed locations, cloud connectivity, and evolving operational requirements.",
    href: "/services/enterprise-network-engineering",
  },
  {
    title: "Network Architecture & Design",
    copy: "Develop network architectures around performance, availability, security, scalability, and long-term maintainability.",
    href: "/services/network-architecture",
  },
  {
    title: "Zero Trust Architecture",
    copy: "Move beyond implicit network trust with security architecture centered on identity, access, devices, resources, and continuous verification.",
    href: "/services/zero-trust",
  },
  {
    title: "Palo Alto Firewall Engineering",
    copy: "Plan, deploy, migrate, configure, optimize, and support enterprise Palo Alto firewall environments.",
    href: "/services/palo-alto-firewall",
  },
  {
    title: "Network Modernization",
    copy: "Transform aging or fragmented infrastructure into a more manageable, scalable, and security-conscious environment.",
    href: "/services/network-modernization",
  },
  {
    title: "Security Assessments",
    copy: "Evaluate network architecture, security controls, exposure, configuration, and operational practices to identify areas requiring attention.",
    href: "/services/security-assessment",
  },
];

export default function ServicesGrid() {
  return (
    <section className="border-t border-[var(--color-line)] bg-[var(--color-surface)]/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="What we do"
          title="Engineering for the network behind your business"
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col justify-between bg-[var(--color-ink)] p-8 transition-colors hover:bg-[var(--color-surface)]"
            >
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-paper)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-mist)]">{service.copy}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-signal)] opacity-80 transition-opacity group-hover:opacity-100">
                Learn more <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}