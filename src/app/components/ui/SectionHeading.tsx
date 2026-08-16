type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left";
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-signal)]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-medium leading-tight text-[var(--color-paper)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-balance text-base leading-relaxed text-[var(--color-mist)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}