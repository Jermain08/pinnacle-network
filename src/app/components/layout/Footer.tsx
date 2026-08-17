import Image from "next/image";
import Link from "next/link";
import { footerNav, siteConfig } from "../../../lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/pinnacle-logo.jpeg"
                alt="Pinnacle Network & Security"
                width={824}
                height={553}
                className="h-30 w-auto sm:h-20 rounded-xl"
              />
              {/* <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-paper)]">
                {siteConfig.name}
              </p> */}
            </div>
            <p className="mt-4 text-sm text-[var(--color-mist)]">{siteConfig.tagline}</p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
              {siteConfig.slogan}
            </p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-[var(--color-mist-dim)]">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </address>
          </div>

          <FooterColumn title="Services" links={footerNav.services} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Legal" links={footerNav.legal} />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-line)] pt-8 text-xs text-[var(--color-mist-dim)] sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Designed for enterprise network engineering &amp; security.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-mist-dim)]">{title}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-[var(--color-mist)] transition-colors hover:text-[var(--color-signal)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}