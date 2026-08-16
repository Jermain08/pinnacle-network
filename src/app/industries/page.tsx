// app/industries/page.tsx
// Industries index page.

import type { Metadata } from "next";
import SectionHeading from "../components/ui/SectionHeading";
import IndustriesSection from "../components/home/IndustriesSection";
import CtaSection from "../components/home/CtaSection";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry-specific network engineering and security for healthcare, financial services, government, manufacturing, professional services, and enterprise organizations.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Industries"
            title="Different industries. Different risks. One engineering standard."
            description="Pinnacle recognizes that network requirements vary dramatically by industry. The infrastructure supporting a healthcare organization doesn't have the same priorities as a manufacturing environment or financial institution. Our engineering approach starts with understanding those differences — then we build around them."
          />
        </div>
      </section>
      <IndustriesSection />
      <CtaSection />
    </>
  );
}