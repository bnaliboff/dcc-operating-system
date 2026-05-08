import Link from 'next/link';
import TimelineItem from '@/components/TimelineItem';
import ValueCard from '@/components/ValueCard';
import { values } from '@/lib/values';

const layers = [
  {
    label: 'Department',
    sublabel: 'Career Home',
    description:
      'Where your professional identity lives. Standards, skill development, and promotion path. The department sets the craft standard and owns the annual review.',
    examples: 'Back Office · Management · Field Operations · Coordination · Pre-Construction',
  },
  {
    label: 'Pod',
    sublabel: 'Cultural Home',
    description:
      'Where daily belonging is felt. Leadership norms, cross-project learning, team health, and shared accountability. When a project ends and the team scatters, the pod remains.',
    examples: 'Pod 01 · Pod 02 · Pod 03',
  },
  {
    label: 'Project Team',
    sublabel: 'Execution Home',
    description:
      'Where the build happens. Task-specific and temporary — assembles at project start, dissolves at close. Designed to be temporary, and that is its strength.',
    examples: 'Executive / Senior PM / Field Ops PM → PM → PC → Superintendent',
  },
];

const milestones = [
  {
    date: 'Q2 2026',
    title: 'Design System',
    description: 'Pod Leader buy-in. Perform Yard onboarding. Language introduction. Action items completed.',
    isCurrent: true,
  },
  {
    date: 'Q2 2026',
    title: 'Invest in Pod 1',
    description: 'Prescott and Schaub push Iovino and Dagata to strengthen relationship.',
    isCurrent: true,
  },
  {
    date: 'Q3 2026',
    title: 'Pilot Program',
    description: 'Three-month sprint. Feedback collection. Refinement.',
  },
  {
    date: 'Q4 2026',
    title: 'First Quarterly Deep Review',
    description: 'Each pod produces Peripheral Value document. Pod Scorecard reviewed.',
  },
  {
    date: '2027',
    title: 'Launch Annual Cycle',
    description: 'Formal Employee Review process. Structured Pod-Department communication.',
  },
];

const quickRef = [
  {
    title: 'Decision Rights (RAPID)',
    sub: 'Who decides what, on every recurring call.',
    href: '/organization#rapid',
  },
  {
    title: '360 Review Cadence',
    sub: 'Quarterly calibration across the matrix.',
    href: '/operating-rhythm#360',
  },
  {
    title: 'Pod Practices',
    sub: 'Six rituals that build pod culture.',
    href: '/operating-rhythm#pod-practices',
  },
  {
    title: 'Failure Modes',
    sub: 'Five ways the system breaks, and how to prevent each.',
    href: '/360-review#failure-modes',
  },
  {
    title: 'Org Chart',
    sub: 'Departments, pods, and project teams at a glance.',
    href: '/organization#diagram',
  },
  {
    title: 'Glossary',
    sub: 'Defined terms used across the handbook.',
    href: '/glossary',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero band */}
      <section className="hero-texture border-b border-b-[var(--color-rule)]">
        <div className="container-page py-20 md:py-32 lg:py-40">
          <h1 className="hero-heading font-display text-[clamp(2.75rem,7vw,5rem)] leading-[1.05] tracking-[-0.02em] text-balance max-w-[18ch]">
            Build the forest. Not just the next tree.
          </h1>
          <p className="hero-sub mt-6 md:mt-8 text-[1.0625rem] text-[var(--color-mute)]">
            Dickinson Cameron Construction <span aria-hidden>—</span> Managerial Operating System.
          </p>
        </div>
      </section>

      {/* Five Values */}
      <section className="container-page border-t border-t-[var(--color-rule)] py-16 md:py-24">
        <div className="section-reveal mb-10 md:mb-12 flex items-baseline justify-between">
          <h2 className="eyebrow">The Five Pivotal Values</h2>
          <Link href="/values" className="eyebrow link-underline">
            Full framework →
          </Link>
        </div>
        <div className="section-reveal grid grid-cols-1 gap-px bg-[var(--color-rule)] sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <div key={value.slug} className="value-cell bg-[var(--color-paper)] p-6 md:p-10">
              <ValueCard value={value} />
            </div>
          ))}
        </div>
      </section>

      {/* Photo break: aerial rebar deck */}
      <div className="relative w-full h-[200px] md:h-[280px] lg:h-[360px] overflow-hidden">
        <img
          src="/images/photo-band-aerial.jpg"
          alt="DCC crew working on a structural rebar deck"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--color-ink)] opacity-20" />
      </div>

      {/* Three layers */}
      <section className="container-page border-t border-t-[var(--color-rule)] py-16 md:py-24">
        <div className="section-reveal mb-10 md:mb-12 flex items-baseline justify-between">
          <h2 className="eyebrow">The Three Layers, Defined</h2>
          <Link href="/organization" className="eyebrow link-underline">
            Full org view
          </Link>
        </div>
        <div className="section-reveal grid grid-cols-1 gap-px bg-[var(--color-rule)] md:grid-cols-3">
          {layers.map((layer) => (
            <div key={layer.label} className="bg-[var(--color-paper)] p-6 md:p-10">
              <p className="eyebrow mb-1 text-[var(--color-accent)]">{layer.sublabel}</p>
              <h2 className="font-display text-[2rem] leading-[1.15] tracking-[-0.01em]">
                {layer.label}
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-[1.6]">{layer.description}</p>
              <p className="mt-5 text-[0.875rem] leading-[1.55] text-[var(--color-mute)]">
                {layer.examples}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo break: multi-story steel structure at night */}
      <div className="relative w-full h-[200px] md:h-[280px] lg:h-[360px] overflow-hidden">
        <img
          src="/images/photo-band-structure.jpg"
          alt="Multi-story steel structure rising under construction lights at night"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--color-ink)] opacity-20" />
      </div>

      {/* Rollout timeline */}
      <section className="container-page border-t border-t-[var(--color-rule)] py-16 md:py-24">
        <div className="section-reveal mb-10 md:mb-12 flex items-baseline justify-between">
          <h2 className="eyebrow">Where You Are in the Rollout</h2>
          <Link href="/roadmap" className="eyebrow link-underline">
            Full roadmap
          </Link>
        </div>
        <ol className="section-reveal grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {milestones.map((m) => (
            <TimelineItem
              key={m.title}
              date={m.date}
              title={m.title}
              description={m.description}
              isCurrent={m.isCurrent}
            />
          ))}
        </ol>
      </section>

      {/* Quick reference grid */}
      <section className="container-page border-t border-t-[var(--color-rule)] py-16 md:py-24">
        <h2 className="section-reveal eyebrow mb-10 md:mb-12">Quick Reference</h2>
        <div className="section-reveal grid grid-cols-1 gap-px bg-[var(--color-rule)] sm:grid-cols-2 md:grid-cols-3">
          {quickRef.map((tile) => (
            <Link
              key={tile.href}
              href={tile.href}
              className="group block bg-[var(--color-paper)] p-5 md:p-8 transition-colors hover:bg-[var(--color-paper-2)] border-l-2 border-l-transparent hover:border-l-[var(--color-accent)]"
            >
              <h3 className="font-display text-[1.25rem] leading-[1.3]">
                {tile.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-[1.55] text-[var(--color-mute)]">
                {tile.sub}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
