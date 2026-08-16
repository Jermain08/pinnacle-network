import type { Metadata } from "next";
import ContactForm from "../components/contact/ContactForm";
import { siteConfig } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pinnacle Network & Security to discuss enterprise network engineering, cybersecurity, firewall, Zero Trust, and infrastructure modernization.",
};

export default function ContactPage() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
            Contact
          </span>
          <h1 className="mt-6 text-balance font-[family-name:var(--font-display)] text-4xl font-medium leading-tight text-[var(--color-paper)] sm:text-5xl">
            Let&apos;s talk about your infrastructure.
          </h1>
          <p className="mt-8 text-balance text-base leading-relaxed text-[var(--color-mist)]">
            Whether you&apos;re planning a major network deployment,
            reviewing your security architecture, modernizing legacy
            infrastructure, or dealing with a complex firewall environment,
            we&apos;d like to understand what you&apos;re working with.
          </p>

          <div className="mt-12 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
            <p className="font-[family-name:var(--font-display)] text-base font-medium text-[var(--color-paper)]">
              {siteConfig.name}
            </p>
            <address className="mt-3 not-italic text-sm leading-relaxed text-[var(--color-mist)]">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </address>
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 lg:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}