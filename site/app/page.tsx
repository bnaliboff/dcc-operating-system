import Link from 'next/link';
import TimelineItem from '@/components/TimelineItem';

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
    href: '/operating-rhythm#failure-modes',
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
        <div className="container-page py-32 md:py-40">
          <h1 className="font-display text-[clamp(2.75rem,7vw,5rem)] leading-[1.05] tracking-[-0.02em] text-balance max-w-[18ch]">
            Build the forest. Not just the next tree.
          </h1>
          <p className="mt-8 text-[1.0625rem] text-[var(--color-mute)]">
            Dickinson Cameron Construction <span aria-hidden>—</span> Managerial Operating System.
          </p>
        </div>
      </section>

      {/* Editorial transition — synthesized from the preface */}
      <section className="container-page scroll-fade py-28 md:py-32">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow text-[var(--color-mute)]">A Living System</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="font-display text-[clamp(1.375rem,2.4vw,1.75rem)] leading-[1.4] tracking-[-0.005em] text-balance max-w-[58ch]">
              DCC is not a machine. Machines wear down. Parts are replaced. Outputs are fixed.
              DCC is a living system — one where the interactions between people produce something
              that no individual, no matter how talented, could produce alone.
            </p>
            <p className="mt-8 text-[1.0625rem] leading-[1.65] text-[var(--color-mute)] max-w-[58ch]">
              Our organizational design reflects this. We operate in three layers, each serving
              a different function.
            </p>
          </div>
        </div>
      </section>

      {/* Three layers */}
      <section className="container-page border-t border-t-[var(--color-rule)] py-24">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="eyebrow">The Three Layers, Defined</h2>
          <Link href="/organization" className="eyebrow link-underline">
            Full org view
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-px bg-[var(--color-rule)] md:grid-cols-3">
          {layers.map((layer) => (
            <div key={layer.label} className="bg-[var(--color-paper)] p-10">
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

      {/* Rollout timeline */}
      <section className="container-page border-t border-t-[var(--color-rule)] py-24">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="eyebrow">Where You Are in the Rollout</h2>
          <Link href="/roadmap" className="eyebrow link-underline">
            Full roadmap
          </Link>
        </div>
        <ol className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-5">
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
      <section className="container-page border-t border-t-[var(--color-rule)] py-24">
        <h2 className="eyebrow mb-12">Quick Reference</h2>
        <div className="grid grid-cols-1 gap-px bg-[var(--color-rule)] md:grid-cols-3">
          {quickRef.map((tile) => (
            <Link
              key={tile.href}
              href={tile.href}
              className="group block bg-[var(--color-paper)] p-8 transition-colors hover:bg-[var(--color-paper-2)] border-l-2 border-l-transparent hover:border-l-[var(--color-accent)]"
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
