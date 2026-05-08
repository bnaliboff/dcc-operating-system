'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const items = [
  { href: '/organization', label: 'Organization' },
  { href: '/values', label: 'Values' },
  { href: '/operating-rhythm', label: 'Operating Rhythm' },
  { href: '/360-review', label: '360 Review' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/scaling-calculator', label: 'Scale' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-b-[var(--color-rule)] bg-[var(--color-paper)]">
      <div className="container-page flex items-center justify-between py-5">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="DCC Operating System — home"
        >
          <img
            src="/images/dcc-logo.png"
            alt="Dickinson Cameron Construction"
            className="h-11 w-auto [mix-blend-mode:multiply]"
          />
          <span className="font-display text-[0.875rem] tracking-tight text-[var(--color-mute)] whitespace-nowrap">
            Operating System
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-baseline gap-x-7 text-[0.9375rem]">
            {items.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={
                      isActive
                        ? 'text-[var(--color-accent)] font-medium'
                        : 'link-underline'
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden relative flex h-10 w-10 flex-shrink-0 items-center justify-center -mr-2"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`absolute block h-px w-5 bg-[var(--color-ink)] transition-transform duration-200 origin-center ${
              isOpen ? 'rotate-45' : '-translate-y-[5px]'
            }`}
          />
          <span
            className={`absolute block h-px w-5 bg-[var(--color-ink)] transition-opacity duration-200 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute block h-px w-5 bg-[var(--color-ink)] transition-transform duration-200 origin-center ${
              isOpen ? '-rotate-45' : 'translate-y-[5px]'
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-t-[var(--color-rule)]">
          <nav aria-label="Primary mobile">
            <ul className="container-page flex flex-col py-2">
              {items.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block py-3 text-[0.9375rem] border-b border-b-[var(--color-rule)] last:border-b-0 ${
                        isActive
                          ? 'text-[var(--color-accent)] font-medium'
                          : 'text-[var(--color-ink)]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
