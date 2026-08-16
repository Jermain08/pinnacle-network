import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-signal)]";

const variants: Record<string, string> = {
  primary:
    "bg-[var(--color-signal)] text-[#04060a] hover:bg-[#6fa3ff]",
  secondary:
    "border border-[var(--color-line)] text-[var(--color-paper)] hover:border-[var(--color-signal)] hover:text-[var(--color-signal)]",
  ghost:
    "text-[var(--color-mist)] hover:text-[var(--color-paper)]",
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}