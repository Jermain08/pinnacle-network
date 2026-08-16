import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "../components/ui/SectionHeading";
import CtaSection from "../components/home/CtaSection";
import { servicesData } from "../../lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Enterprise network engineering, security, firewall, Zero Trust, modernization, and resilience services from Pinnacle Network & Security.",
};

const categories = [
  { title: "Network Engineering", copy: "Architecture, design, deployment, optimization, and troubleshooting." },
  { title: "Security Engineering", copy: "Network security architecture, segmentation, policy, threat controls, and security assessments." },
  { title: "Firewall Engineering", copy: "Enterprise firewall design, migration, configuration, optimization, and lifecycle support." },
  { title: "Zero Trust", copy: "Architectural planning and implementation strategies based on identity, resource protection, least privilege, and continuous verification." },
  { title: "Infrastructure Modernization", copy: "Legacy assessment, architecture redesign, migration planning, and modernization." },
  { title: "Resilience", copy: "High availability, redundancy, recovery planning, and infrastructure continuity." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Services"
            title="Enterprise network & security services"
            description="Pinnacle provides specialized engineering services across network architecture, security, infrastructure modernization, and operational resilience."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.title} className="rounded-2xl border border-[var(--color-line)] p-6">
                <h3 className="font-[family-name:var(--font-display)] text-base font-medium text-[var(--color-paper)]">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-mist)]">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-mist-dim)]">
          All services
        </p>
        <div className="mt-6 flex flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {servicesData.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex items-center justify-between gap-6 py-5 transition-colors hover:text-[var(--color-signal)]"
            >
              <span className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-paper)] group-hover:text-[var(--color-signal)]">
                {service.navLabel}
              </span>
              <span aria-hidden="true" className="text-[var(--color-mist-dim)] group-hover:text-[var(--color-signal)]">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}