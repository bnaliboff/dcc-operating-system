import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'DCC Operating System',
  description:
    'The managerial operating system for Dickinson Cameron Construction. Matrix structure, decision rights, pivotal values.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-[var(--color-paper)] text-[var(--color-ink)] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[var(--color-paper-2)] focus:px-3 focus:py-2 focus:text-[var(--color-ink)] focus:outline focus:outline-[var(--color-accent)]"
        >
          Skip to content
        </a>
        <NavBar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
