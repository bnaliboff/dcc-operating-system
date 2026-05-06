import Link from 'next/link';
import { values } from '@/lib/values';

type CrossLinkProps = {
  toSlug: string;
  bridge: string;
};

export default function CrossLink({ toSlug, bridge }: CrossLinkProps) {
  const target = values.find((v) => v.slug === toSlug);
  if (!target) return null;

  return (
    <Link
      href={`/values/${toSlug}`}
      className="group block border-t border-t-[var(--color-rule)] pt-8 pb-8"
    >
      <p className="eyebrow mb-2">Related value</p>
      <p className="text-[0.9375rem] leading-[1.55] text-[var(--color-mute)] mb-3">{bridge}</p>
      <span className="font-display text-[1.25rem] leading-[1.3] link-underline">
        {target.name} — {target.tagline}
      </span>
    </Link>
  );
}
