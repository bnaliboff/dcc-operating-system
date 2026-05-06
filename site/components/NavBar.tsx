'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/organization', label: 'Organization' },
  { href: '/values', label: 'Values' },
  { href: '/operating-rhythm', label: 'Operating Rhythm' },
  { href: '/360-review', label: '360 Review' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/glossary', label: 'Glossary' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-b-[var(--color-rule)] bg-[var(--color-paper)]">
      <div className="container-page flex items-baseline justify-between py-5">
        <Link
          href="/"
          className="font-display text-[1.0625rem] tracking-tight"
          aria-label="DCC Operating System — home"
        >
          DCC <span className="text-[var(--color-mute)]">Operating System</span>
        </Link>
        <nav aria-label="Primary">
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
      </div>
    </header>
  );
}
