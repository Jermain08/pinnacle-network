import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const lastUpdated = "August 18, 2026";

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-paper)]">
        Privacy Policy
      </h1>
      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--color-mist-dim)]">
        Last updated: {lastUpdated}
      </p>

      <p className="mt-8 text-sm leading-relaxed text-[var(--color-mist)]">
        Pinnacle Network & Security LLC (&quot;Pinnacle,&quot; &quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;) respects your privacy and is
        committed to protecting it through this Privacy Policy. This policy
        explains what information we collect when you visit
        pinnaclenetsec.com (the &quot;Site&quot;), how we use it, and the
        choices you have.
      </p>

      <PolicySection title="1. Information We Collect">
        <p>
          We collect information in the following ways:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <span className="text-[var(--color-paper)]">
              Information you provide directly.
            </span>{" "}
            When you submit our contact form, we collect your name, email
            address, phone number, company name, and any details you include
            about your network engineering or security needs.
          </li>
          <li>
            <span className="text-[var(--color-paper)]">
              Information collected automatically.
            </span>{" "}
            Like most websites, we automatically collect certain technical
            information when you visit, including your IP address, browser
            type, device type, referring/exit pages, and the date and time
            of your visit. This is typically collected via standard web
            server logs and hosting infrastructure.
          </li>
          <li>
            <span className="text-[var(--color-paper)]">
              Cookies and similar technologies.
            </span>{" "}
            We may use essential cookies required for the Site to function
            properly. We do not currently use advertising or cross-site
            tracking cookies.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="2. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Respond to your inquiries and consultation requests</li>
          <li>Provide, evaluate, and scope network engineering and security services</li>
          <li>Communicate with you about your project, proposal, or account</li>
          <li>Maintain the security, integrity, and performance of the Site</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className="mt-4">
          We do not sell, rent, or trade your personal information to third
          parties for their marketing purposes.
        </p>
      </PolicySection>

      <PolicySection title="3. How We Share Information">
        <p>
          We may share information with trusted third-party service
          providers who help us operate the Site and deliver our services,
          such as website hosting and email delivery providers. These
          providers are only permitted to use your information to perform
          services on our behalf and are bound by confidentiality
          obligations.
        </p>
        <p className="mt-4">
          We may also disclose information if required by law, subpoena, or
          other legal process, or if we believe disclosure is necessary to
          protect our rights, your safety, or the safety of others.
        </p>
      </PolicySection>

      <PolicySection title="4. Data Security">
        <p>
          As a network security firm, we take the protection of your
          information seriously. We implement reasonable administrative,
          technical, and physical safeguards designed to protect information
          submitted through this Site from unauthorized access, disclosure,
          alteration, or destruction. However, no method of transmission
          over the internet is 100% secure, and we cannot guarantee absolute
          security.
        </p>
      </PolicySection>

      <PolicySection title="5. Data Retention">
        <p>
          We retain contact form submissions and related correspondence for
          as long as necessary to respond to your inquiry, maintain business
          records, and comply with legal or contractual obligations. You may
          request deletion of your information at any time (see Section 6).
        </p>
      </PolicySection>

      <PolicySection title="6. Your Rights and Choices">
        <p>
          Depending on your location, you may have the right to request
          access to, correction of, or deletion of the personal information
          we hold about you, or to opt out of certain uses. To make such a
          request, contact us using the information in Section 8 below. We
          will respond within a reasonable timeframe.
        </p>
      </PolicySection>

      <PolicySection title="7. Children's Privacy">
        <p>
          This Site is intended for business audiences and is not directed
          at individuals under the age of 18. We do not knowingly collect
          personal information from children.
        </p>
      </PolicySection>

      <PolicySection title="8. Contact Us">
        <p>
          If you have questions about this Privacy Policy or wish to
          exercise your data rights, please contact us at:
        </p>
        <div className="mt-4 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 text-sm">
          <p className="font-medium text-[var(--color-paper)]">
            Pinnacle Network & Security LLC
          </p>
          <p className="mt-1">Martinsburg, WV</p>
          <p className="mt-1">privacy@pinnaclenetsec.com</p>
        </div>
      </PolicySection>

      <PolicySection title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices or for legal, operational, or regulatory
          reasons. We will post the updated policy on this page with a
          revised &quot;Last updated&quot; date.
        </p>
      </PolicySection>
    </section>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-12">
      <h2 className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-paper)]">
        {title}
      </h2>
      <div className="mt-3 text-sm leading-relaxed text-[var(--color-mist)]">
        {children}
      </div>
    </div>
  );
}