import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { values, getValue } from '@/lib/values';
import BehaviorBlock from '@/components/BehaviorBlock';
import CrossLink from '@/components/CrossLink';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return values.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const value = getValue(slug);
  if (!value) return {};
  return { title: `${value.name} — DCC Operating System` };
}

export default async function ValueDetailPage({ params }: Props) {
  const { slug } = await params;
  const value = getValue(slug);
  if (!value) notFound();

  const index = values.findIndex((v) => v.slug === slug);
  const num = String(index + 1).padStart(2, '0');

  return (
    <>
      {/* Page header */}
      <section className="container-page pt-14 md:pt-24 pb-12 md:pb-16">
        <Link
          href="/values"
          className="eyebrow inline-block mb-4 text-[var(--color-mute)] hover:text-[var(--color-ink)] transition-colors"
        >
          ← All Values
        </Link>
        <p className="eyebrow">
          {num} of {values.length} — Pivotal Values
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-balance">
          {value.name}
        </h1>
        <p className="mt-3 text-[1.25rem] leading-[1.4] text-[var(--color-mute)]">
          {value.tagline}
        </p>
        <div className="mt-6 h-px w-[120px] bg-[var(--color-accent)]" aria-hidden />
        <p className="mt-8 max-w-[58ch] text-[1.0625rem] leading-[1.6] text-pretty">
          {value.openingPassage}
        </p>
      </section>

      {/* Behaviors */}
      <section
        id="daily-practice"
        className="container-page py-16 grid grid-cols-1 gap-16 md:grid-cols-2"
      >
        <BehaviorBlock
          label="The Habit — Daily Practice"
          name={value.dailyPractice.name}
          description={value.dailyPractice.description}
          example={value.dailyPractice.example}
        />
        <BehaviorBlock
          label="When It's Hard — Defining Moment"
          name={value.definingMoment.name}
          description={value.definingMoment.description}
          example={value.definingMoment.example}
        />
      </section>

      {/* In the Field / In the Office */}
      <section
        id="in-practice"
        className="container-page border-t border-t-[var(--color-rule)] py-16"
      >
        <p className="eyebrow mb-10">What it looks like</p>
        <div className="grid grid-cols-1 gap-px bg-[var(--color-rule)] md:grid-cols-2">
          <div className="bg-[var(--color-paper)] p-6 md:p-10">
            <p className="eyebrow mb-4">In the Field</p>
            <p className="text-[1.0625rem] leading-[1.6]">{value.inTheField}</p>
          </div>
          <div className="bg-[var(--color-paper)] p-6 md:p-10">
            <p className="eyebrow mb-4">In the Office</p>
            <p className="text-[1.0625rem] leading-[1.6]">{value.inTheOffice}</p>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section
        id="related"
        className="container-page py-8"
        aria-label="Related values"
      >
        <p className="eyebrow mb-2">Connects to</p>
        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {value.crossLinks.map((cl) => (
            <CrossLink key={cl.toSlug} toSlug={cl.toSlug} bridge={cl.bridge} />
          ))}
        </div>
      </section>

      {/* Back to Values index */}
      <section
        className="container-page border-t border-t-[var(--color-rule)] py-12"
        aria-label="Back to all values"
      >
        <Link
          href="/values"
          className="inline-flex items-baseline gap-3 font-display text-[1.25rem] leading-[1.3] tracking-[-0.005em] hover:text-[var(--color-accent)] transition-colors"
        >
          <span aria-hidden>←</span>
          <span>Back to all values</span>
        </Link>
      </section>
    </>
  );
}
