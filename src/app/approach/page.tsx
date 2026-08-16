import type { Metadata } from "next";
import ApproachSection from "../components/home/ApproachSection";
import CtaSection from "../components/home/CtaSection";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How Pinnacle Network & Security engineers enterprise infrastructure — from discovery and assessment through architecture, implementation, validation, and optimization.",
};

const questions = [
  "What does the organization need to accomplish?",
  "How does the network work today?",
  "Where are the dependencies?",
  "Where is the risk?",
  "What needs to change?",
  "What cannot be disrupted?",
];

export default function ApproachPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
            How we work
          </span>
          <h1 className="mt-6 text-balance font-[family-name:var(--font-display)] text-4xl font-medium leading-tight text-[var(--color-paper)] sm:text-5xl">
            Engineering starts with understanding.
          </h1>
          <p className="mt-8 text-balance text-lg leading-relaxed text-[var(--color-mist)]">
            We don&apos;t begin with a product recommendation. We begin with
            questions — then we engineer around the answers.
          </p>

          <ul className="mt-10 flex flex-col gap-4 border-t border-[var(--color-line)] pt-8">
            {questions.map((q) => (
              <li key={q} className="flex items-start gap-3 text-base text-[var(--color-paper)]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-signal)]" />
                {q}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ApproachSection />
      <CtaSection />
    </>
  );
}