import Link from 'next/link';
import type { Value } from '@/lib/values';

export default function ValueCard({ value }: { value: Value }) {
  return (
    <Link
      href={`/values/${value.slug}`}
      className="group block border-t-2 border-t-[var(--color-rule)] pt-6 transition-colors hover:border-t-[var(--color-accent)]"
    >
      <h3 className="font-display text-[1.75rem] leading-[1.15] tracking-[-0.01em]">
        {value.name}
      </h3>
      <p className="mt-2 text-[var(--color-mute)]">{value.tagline}</p>
      <p className="mt-3 text-[0.9375rem] leading-[1.55]">
        {value.oneLineBehavior}
      </p>
      <span className="mt-5 inline-block eyebrow link-underline">
        Read full
      </span>
    </Link>
  );
}
