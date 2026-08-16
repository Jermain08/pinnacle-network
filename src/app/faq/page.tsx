import type { Metadata } from "next";
import SectionHeading from "../components/ui/SectionHeading";
import Accordion from "../components/ui/Accordion";
import CtaSection from "../components/home/CtaSection";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with Pinnacle Network & Security.",
};

const faqs = [
  {
    question: "What type of organizations does Pinnacle support?",
    answer:
      "Pinnacle focuses on organizations that require professional network engineering, infrastructure modernization, and security-focused architecture.",
  },
  {
    question: "Do you only work with new networks?",
    answer:
      "No. We can evaluate and improve existing environments as well as design new infrastructure.",
  },
  {
    question: "Can Pinnacle help with Palo Alto firewalls?",
    answer:
      "Yes. Pinnacle provides engineering services around enterprise Palo Alto firewall environments, including architecture, deployment, migration, configuration, optimization, and related network security work.",
  },
  {
    question: "What is Zero Trust?",
    answer:
      "Zero Trust is an architectural approach that avoids automatically trusting users, devices, or resources based solely on their location within a network. NIST SP 800-207 provides a foundational reference for Zero Trust architecture.",
  },
  {
    question: "Does Zero Trust replace a firewall?",
    answer:
      "No. Zero Trust is broader than a single security product. Firewalls can be part of a Zero Trust architecture, but identity, devices, applications, data, access controls, segmentation, and monitoring also matter.",
  },
  {
    question: "Can you modernize an existing network?",
    answer:
      "Yes. Modernization can involve architecture redesign, segmentation, firewall upgrades, connectivity improvements, cloud integration, and other infrastructure changes.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Support and advisory options are discussed on a per-engagement basis. Let us know what your organization needs and we'll outline what's available.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start with a conversation about your current infrastructure, business requirements, and the challenge you're trying to solve.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Resources" title="Frequently asked questions" />
          <div className="mt-14">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}