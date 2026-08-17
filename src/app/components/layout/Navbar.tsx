"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { primaryNav, siteConfig } from "../../../lib/site-data";
import Button from "../../components/ui/Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-ink)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/pinnacle-logo.jpeg"
            alt="Pinnacle Network & Security"
            width={500}
            height={450}
            priority
            className="h-30 w-auto sm:h-20 rounded-xl"
          />
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-paper)]">
              {/* {siteConfig.shortName} */}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-mist-dim)]">
              {/* {siteConfig.tagline} */}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-[var(--color-mist)] transition-colors hover:text-[var(--color-paper)]"
              >
                {item.label}
                {item.children && (
                  <span aria-hidden="true" className="text-xs text-[var(--color-mist-dim)]">
                    ▾
                  </span>
                )}
              </Link>

              {item.children && openDropdown === item.label && (
                <div className="absolute left-1/2 top-full grid w-[560px] -translate-x-1/2 grid-cols-2 gap-1 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-3 shadow-2xl shadow-black/40">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-xl px-4 py-3 transition-colors hover:bg-[var(--color-surface-2)]"
                    >
                      <p className="text-sm font-medium text-[var(--color-paper)]">{child.label}</p>
                      <p className="mt-1 text-xs text-[var(--color-mist-dim)]">{child.description}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Schedule a Consultation
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="h-px w-6 bg-[var(--color-paper)]" />
          <span className="h-px w-6 bg-[var(--color-paper)]" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-ink)] px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-base text-[var(--color-paper)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 flex flex-col border-l border-[var(--color-line)] pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-lg px-3 py-2 text-sm text-[var(--color-mist)]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Button href="/contact" variant="primary" className="mt-6 w-full justify-center">
            Schedule a Consultation
          </Button>
        </div>
      )}
    </header>
  );
}