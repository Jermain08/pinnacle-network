import SectionHeading from "../../components/ui/SectionHeading";

const focusAreas = [
  { title: "Identity", question: "Who is requesting access?" },
  { title: "Device", question: "Is the device known, authorized, and appropriately secured?" },
  { title: "Application", question: "What resource is being requested?" },
  { title: "Access", question: "What level of access is actually required?" },
  { title: "Visibility", question: "Can the organization detect and understand activity?" },
  { title: "Segmentation", question: "Can access be contained to the resources that actually need it?" },
];

export default function ZeroTrustSection() {
  return (
    <section className="border-t border-[var(--color-line)] bg-[var(--color-surface)]/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Zero Trust"
          title="Security should follow the resource, not just the network boundary"
          description="Modern organizations have users working from offices, homes, cloud environments, branch locations, and personal devices. A traditional perimeter alone cannot answer every access question. Pinnacle approaches Zero Trust as an architectural strategy focused on reducing implicit trust and controlling access based on users, devices, resources, and context — closer to NIST's Zero Trust model than a firewall or VPN simply marketed as “Zero Trust.”"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="rounded-2xl border border-[var(--color-line)] p-6">
              <h3 className="font-[family-name:var(--font-display)] text-base font-medium text-[var(--color-signal)]">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-mist)]">{area.question}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}