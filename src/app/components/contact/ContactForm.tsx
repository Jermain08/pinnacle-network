"use client";
import { useState, type FormEvent } from "react";
import { contactOptions } from "../../../lib/site-data";

const inputClasses =
  "w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-paper)] placeholder:text-[var(--color-mist-dim)] outline-none transition-colors focus:border-[var(--color-signal)]";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: replace with a real submission handler (API route, Resend, etc.)
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-[var(--color-signal-dim)] bg-[var(--color-surface)] p-8 text-center">
        <p className="font-[family-name:var(--font-display)] text-xl font-medium text-[var(--color-paper)]">
          Thank you.
        </p>
        <p className="mt-2 text-sm text-[var(--color-mist)]">
          We&apos;ve received your request and will follow up shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs uppercase tracking-wide text-[var(--color-mist-dim)]">
          First name
          <input required name="firstName" type="text" className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2 text-xs uppercase tracking-wide text-[var(--color-mist-dim)]">
          Last name
          <input required name="lastName" type="text" className={inputClasses} />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs uppercase tracking-wide text-[var(--color-mist-dim)]">
          Business email
          <input required name="email" type="email" className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2 text-xs uppercase tracking-wide text-[var(--color-mist-dim)]">
          Phone
          <input name="phone" type="tel" className={inputClasses} />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-xs uppercase tracking-wide text-[var(--color-mist-dim)]">
        Company
        <input required name="company" type="text" className={inputClasses} />
      </label>

      <label className="flex flex-col gap-2 text-xs uppercase tracking-wide text-[var(--color-mist-dim)]">
        What can we help with?
        <select required name="topic" defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Select an area
          </option>
          {contactOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 text-xs uppercase tracking-wide text-[var(--color-mist-dim)]">
        Tell us about your environment
        <textarea name="message" rows={5} className={inputClasses} />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-signal)] px-6 py-3 text-sm font-medium tracking-wide text-[#04060a] transition-colors hover:bg-[#6fa3ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-signal)]"
      >
        Request a Consultation
      </button>
    </form>
  );
}