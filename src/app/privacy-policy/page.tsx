import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-paper)]">
        Privacy Policy
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-[var(--color-mist)]">
        This page is a placeholder. Final privacy policy language should be
        reviewed and provided by Pinnacle Network &amp; Security LLC and/or
        legal counsel before publishing, covering what information is
        collected through this site (e.g. the contact form), how it is used,
        and how it is protected.
      </p>
    </section>
  );
}