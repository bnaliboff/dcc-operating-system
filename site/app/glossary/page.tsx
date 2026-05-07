import Link from 'next/link';

export const metadata = { title: 'Glossary — DCC Operating System' };

type Entry = {
  term: string;
  definition: string;
  href?: string;
};

const entries: Entry[] = [
  {
    term: '360 Review',
    definition:
      'Quarterly calibration where Functional Leader, Pod Co-Leaders, and the employee align on growth. Never tied to compensation.',
    href: '/operating-rhythm#360',
  },
  {
    term: 'Action Item',
    definition:
      'A discrete, owned commitment that emerges from a retrospective. Reviewed at the next retrospective before any new data is discussed.',
    href: '/operating-rhythm#pod-practices',
  },
  {
    term: 'Daily Practice',
    definition:
      'The small repeated habit that builds the muscle behind a Pivotal Value.',
    href: '/values',
  },
  {
    term: 'Defining Moment',
    definition:
      'What a manager does when the value is hardest to live by. The test, not the routine.',
    href: '/values',
  },
  {
    term: 'Department',
    definition:
      'The career home. Where craft mastery, professional identity, and the promotion path live.',
    href: '/organization',
  },
  {
    term: 'FeedForward',
    definition:
      'Forward-looking development input — "what could they do more of next month?" — used in place of backward-looking critique.',
    href: '/operating-rhythm#dual-layer',
  },
  {
    term: 'Functional Leader',
    definition:
      'The Department head. Accountable for skill standards, performance reviews, and promotion recommendations.',
    href: '/organization',
  },
  {
    term: 'Matrix Organization',
    definition:
      'A structure in which every employee answers to two managers — a Functional Leader for craft and career, and Pod Co-Leaders for daily execution.',
    href: '/organization',
  },
  {
    term: 'Peripheral Value',
    definition:
      'A pod-specific norm. How each team expresses the core identity. Loose, adaptable, owned by Pod Co-Leaders.',
    href: '/values',
  },
  {
    term: 'Pivotal Value',
    definition:
      'A non-negotiable, company-wide commitment. Tight. Identical in Carlsbad, New York, and Honolulu.',
    href: '/values',
  },
  {
    term: 'Pod',
    definition:
      'The cultural home. A persistent group of leaders co-leading multiple projects, where daily belonging is felt.',
    href: '/organization',
  },
  {
    term: 'Pod Co-Leader',
    definition:
      "One of two leaders (typically SPM + FOM) who jointly own a pod’s daily execution and team health.",
    href: '/organization',
  },
  {
    term: 'Pod Scorecard',
    definition:
      'A monthly view of pod-level schedule, budget, safety, and client-satisfaction data. Displayed for cohesion, not competition.',
    href: '/operating-rhythm#pod-practices',
  },
  {
    term: 'Project Team',
    definition:
      'The execution home. A temporary group assembled for a single build, dissolved when the build is done.',
    href: '/organization',
  },
  {
    term: 'RAPID',
    definition:
      'A decision-rights framework: Recommend, Agree, Perform, Input, Decide. Exactly one Decide per recurring decision.',
    href: '/organization#rapid',
  },
  {
    term: 'SBI (Situation-Behavior-Impact)',
    definition:
      'A feedback structure: name the situation, describe the behavior, state the impact. Used in recognition and coaching alike.',
    href: '/operating-rhythm#pod-practices',
  },
  {
    term: 'SMART Goal',
    definition:
      'A specific, measurable, achievable, relevant, time-bound objective. Set in the annual review, revisited monthly.',
    href: '/operating-rhythm#dual-layer',
  },
  {
    term: 'Team Health Pulse',
    definition:
      'A monthly anonymous survey aggregated at the pod level. Frequency-scaled, ~15–17 questions, ~18 minutes. Measures collective experience over time.',
    href: '/operating-rhythm#dual-layer',
  },
  {
    term: 'Two-Manager Model',
    definition:
      "DCC's matrix in practice: Functional Leader owns career and standards; Pod Co-Leaders own daily work and team health.",
    href: '/organization',
  },
];

const grouped = entries.reduce<Record<string, Entry[]>>((acc, entry) => {
  const letter = entry.term[0].toUpperCase();
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(entry);
  return acc;
}, {});

const letters = Object.keys(grouped).sort();

export default function GlossaryPage() {
  return (
    <>
      {/* Page header */}
      <section className="container-page pt-24 pb-16">
        <p className="eyebrow">Glossary</p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.015em]">
          Defined terms.
        </h1>
        <div className="mt-6 h-px w-[120px] bg-[var(--color-accent)]" aria-hidden />
        <p className="mt-8 max-w-[58ch] text-[1.0625rem] leading-[1.6]">
          {entries.length} entries. Each links to where it's used in the site.
        </p>
      </section>

      {/* Alphabetical entries */}
      <section className="container-page border-t border-t-[var(--color-rule)] py-16">
        {letters.map((letter) => (
          <div key={letter} id={`letter-${letter}`} className="mb-16">
            <p className="font-display text-[3rem] leading-none text-[var(--color-mute)] mb-6">
              {letter}
            </p>
            <dl className="space-y-px bg-[var(--color-rule)]">
              {grouped[letter].map((entry) => (
                <div key={entry.term} className="bg-[var(--color-paper)] py-6 px-0">
                  <div className="grid grid-cols-12 gap-x-6">
                    <dt className="col-span-12 md:col-span-4 font-display text-[1.125rem] leading-[1.3] px-0">
                      {entry.href ? (
                        <Link href={entry.href} className="link-underline">
                          {entry.term}
                        </Link>
                      ) : (
                        entry.term
                      )}
                    </dt>
                    <dd className="col-span-12 md:col-span-8 text-[1.0625rem] leading-[1.6] text-[var(--color-mute)]">
                      {entry.definition}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </section>
    </>
  );
}
