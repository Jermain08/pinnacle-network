"use client";
type AccordionItem = {
  question: string;
  answer: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="flex flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
      {items.map((item) => (
        <details key={item.question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
            <span className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-paper)]">
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 text-xl text-[var(--color-signal)] transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--color-mist)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}