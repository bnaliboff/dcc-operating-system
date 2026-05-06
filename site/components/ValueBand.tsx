import Link from 'next/link';
import type { Value } from '@/lib/values';

export default function ValueBand({ value, index }: { value: Value; index: number }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <article className="border-t border-t-[var(--color-rule)] py-16 first:border-t-0 first:pt-0">
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 md:col-span-2">
          <span className="font-display text-[3rem] leading-none text-[var(--color-mute)]">
            {num}
          </span>
        </div>
        <div className="col-span-12 md:col-span-10">
          <h2 className="font-display text-[3rem] leading-[1.05] tracking-[-0.015em]">
            {value.name}
          </h2>
          <p className="mt-3 text-[1.25rem] leading-[1.4] text-[var(--color-mute)]">
            {value.tagline}
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
            <div>
              <dt className="eyebrow">The Habit</dt>
              <dd className="mt-2 font-display text-[1.25rem] leading-[1.35]">
                {value.dailyPractice.name}
              </dd>
              <dd className="mt-2 text-[1.0625rem] leading-[1.6] text-[var(--color-ink)]/85">
                {value.dailyPractice.description}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">When It’s Hard</dt>
              <dd className="mt-2 font-display text-[1.25rem] leading-[1.35]">
                {value.definingMoment.name}
              </dd>
              <dd className="mt-2 text-[1.0625rem] leading-[1.6] text-[var(--color-ink)]/85">
                {value.definingMoment.description}
              </dd>
            </div>
          </dl>

          <Link
            href={`/values/${value.slug}`}
            className="mt-10 inline-block eyebrow link-underline"
          >
            Read full
          </Link>
        </div>
      </div>
    </article>
  );
}
