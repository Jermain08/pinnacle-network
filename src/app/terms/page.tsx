import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

const lastUpdated = "August 18, 2026";

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-paper)]">
        Terms &amp; Conditions
      </h1>
      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--color-mist-dim)]">
        Last updated: {lastUpdated}
      </p>

      <p className="mt-8 text-sm leading-relaxed text-[var(--color-mist)]">
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to
        and use of pinnaclenetsec.com (the &quot;Site&quot;), operated by
        Pinnacle Network &amp; Security LLC (&quot;Pinnacle,&quot;
        &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or
        using the Site, you agree to be bound by these Terms. If you do not
        agree, please do not use the Site.
      </p>

      <PolicySection title="1. Use of the Site">
        <p>
          This Site is provided for informational purposes to help you learn
          about Pinnacle&apos;s network engineering and cybersecurity
          services and to request a consultation. You agree to use the Site
          only for lawful purposes and in a way that does not infringe the
          rights of, restrict, or inhibit anyone else&apos;s use of the
          Site.
        </p>
        <p className="mt-4">You agree not to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Attempt to gain unauthorized access to the Site, our systems, or any connected network</li>
          <li>Use automated means (bots, scrapers, crawlers) to access or extract content without our prior written consent</li>
          <li>Submit false, misleading, or malicious information through the contact form</li>
          <li>Interfere with or disrupt the Site&apos;s functionality, security, or availability</li>
        </ul>
      </PolicySection>

      <PolicySection title="2. No Professional Relationship">
        <p>
          Submitting the contact form, browsing the Site, or receiving
          general information from us does not create a client, vendor, or
          contractual relationship between you and Pinnacle. A formal
          engagement — including the scope, terms, and pricing of any
          network engineering or security services — begins only once both
          parties sign a separate services agreement or statement of work.
        </p>
      </PolicySection>

      <PolicySection title="3. Intellectual Property">
        <p>
          All content on this Site — including text, graphics, logos, the
          Pinnacle name and marks, diagrams, and design elements — is the
          property of Pinnacle Network &amp; Security LLC or its licensors
          and is protected by applicable intellectual property laws. You may
          view and print content for personal, non-commercial reference, but
          may not reproduce, distribute, modify, or create derivative works
          from any part of the Site without our prior written permission.
        </p>
      </PolicySection>

      <PolicySection title="4. Accuracy of Information">
        <p>
          We aim to keep the information on this Site current and accurate,
          including descriptions of our services, industries served, and
          approach. However, we make no warranty that content is complete,
          error-free, or up to date at all times, and technical or service
          details may change without notice. Nothing on this Site should be
          relied upon as a substitute for a formal assessment or proposal
          specific to your environment.
        </p>
      </PolicySection>

      <PolicySection title="5. Third-Party Links">
        <p>
          The Site may contain links to third-party websites or resources.
          We are not responsible for the content, accuracy, or practices of
          any third-party sites, and including a link does not imply our
          endorsement of it.
        </p>
      </PolicySection>

      <PolicySection title="6. Disclaimer of Warranties">
        <p>
          The Site and its content are provided &quot;as is&quot; and
          &quot;as available,&quot; without warranties of any kind, whether
          express or implied, including but not limited to implied
          warranties of merchantability, fitness for a particular purpose,
          and non-infringement. We do not warrant that the Site will be
          uninterrupted, secure, or error-free.
        </p>
      </PolicySection>

      <PolicySection title="7. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Pinnacle Network &amp;
          Security LLC, its owners, employees, and agents shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of data, revenue, or business
          opportunity, arising out of or related to your use of, or
          inability to use, the Site — even if we have been advised of the
          possibility of such damages.
        </p>
      </PolicySection>

      <PolicySection title="8. Indemnification">
        <p>
          You agree to indemnify and hold harmless Pinnacle Network &amp;
          Security LLC from any claims, damages, losses, or expenses
          (including reasonable attorneys&apos; fees) arising from your
          violation of these Terms or your misuse of the Site.
        </p>
      </PolicySection>

      <PolicySection title="9. Governing Law">
        <p>
          These Terms are governed by and construed in accordance with the
          laws of the State of West Virginia, without regard to its
          conflict of law principles. Any disputes arising under these Terms
          shall be subject to the exclusive jurisdiction of the state and
          federal courts located in West Virginia.
        </p>
      </PolicySection>

      <PolicySection title="10. Changes to These Terms">
        <p>
          We may revise these Terms at any time by updating this page. Your
          continued use of the Site after changes are posted constitutes
          your acceptance of the revised Terms. We encourage you to review
          this page periodically.
        </p>
      </PolicySection>

      <PolicySection title="11. Contact Us">
        <p>
          If you have questions about these Terms, please contact us at:
        </p>
        <div className="mt-4 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 text-sm">
          <p className="font-medium text-[var(--color-paper)]">
            Pinnacle Network &amp; Security LLC
          </p>
          <p className="mt-1">Martinsburg, WV</p>
          <p className="mt-1">info@pinnaclenetsec.com</p>
        </div>
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