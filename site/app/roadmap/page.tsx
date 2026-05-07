export const metadata = { title: 'Roadmap — DCC Operating System' };

const milestones = [
  {
    date: 'Q2 2026',
    title: 'Design System',
    description:
      'Gain buy-in from Pod Leaders. Onboard Perform Yard and introduce program language. Complete Action Items.',
    isCurrent: true,
    status: 'In flight',
  },
  {
    date: 'Q2 2026',
    title: 'Invest in Pod 1',
    description:
      'Prescott and Schaub push Iovino and Dagata to invest in strengthening their relationship. Create a go-forward plan.',
    isCurrent: true,
    status: 'In flight',
  },
  {
    date: 'Q3 2026',
    title: 'Pilot Program',
    description:
      'Three-month sprint. Collect feedback and refine the process across all three pods.',
    isCurrent: false,
    status: 'Upcoming',
  },
  {
    date: 'Q4 2026',
    title: 'First Quarterly Deep Review',
    description:
      'Each pod produces its Peripheral Value document. Pod Scorecards reviewed. Final buy-in.',
    isCurrent: false,
    status: 'Upcoming',
  },
  {
    date: '2027',
    title: 'Launch Annual Cycle',
    description:
      'Rollout formal Employee Review process and structured Pod-Department communication process.',
    isCurrent: false,
    status: 'Upcoming',
  },
];

const actionItems = [
  {
    id: 'AI 01',
    title: 'RAPID Matrix Completion',
    owner: 'Pod Leaders',
    description:
      'Complete and agree on the RAPID matrix for all five recurring decisions. Distribution to all managers.',
  },
  {
    id: 'AI 02',
    title: 'Pod Practices Implementation',
    owner: 'Pod Co-Leaders — long-term',
    description:
      'Establish all six pod practices within each pod. Adapt to each pod\'s style; consistency of cadence matters more than uniformity of form.',
  },
  {
    id: 'AI 03',
    title: 'Pod Scorecards',
    owner: 'Executive',
    description:
      'Design and deploy monthly pod-level scorecards covering schedule, budget, safety, and client satisfaction.',
  },
  {
    id: 'AI 04',
    title: 'Team Health Pulse',
    owner: 'Executive',
    description:
      'Select or configure the anonymous survey tool. Define the 15–17 questions. Establish the aggregation-at-pod-level protocol before first run.',
  },
  {
    id: 'AI 05',
    title: 'Pod 1 Relationship Investment',
    owner: 'Prescott, Schaub',
    description:
      'Prescott and Schaub create a structured go-forward plan for Iovino and Dagata to strengthen their co-leader relationship. Check in monthly.',
  },
];

export default function RoadmapPage() {
  return (
    <>
      {/* Page header */}
      <section className="container-page pt-24 pb-16">
        <p className="eyebrow">Roadmap</p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-balance max-w-[22ch]">
          Rollout sequence and action items.
        </h1>
        <div className="mt-6 h-px w-[120px] bg-[var(--color-accent)]" aria-hidden />
        <p className="mt-8 max-w-[58ch] text-[1.0625rem] leading-[1.6] text-pretty">
          The operating system launches in sequence — not all at once. Each phase builds the
          conditions for the next. As of April 2026, Q2 is in flight.
        </p>
      </section>

      {/* Photo break: aerial excavation */}
      <div className="relative w-full h-[260px] md:h-[340px] overflow-hidden">
        <img
          src="/images/photo-aerial-excavation.jpg"
          alt="Aerial view of an active excavation site"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--color-ink)] opacity-20" />
      </div>

      {/* Rollout timeline */}
      <section className="container-page border-t border-t-[var(--color-rule)] py-16">
        <p className="eyebrow mb-10">Rollout Sequence</p>
        <ol className="space-y-px bg-[var(--color-rule)]">
          {milestones.map((m) => (
            <li
              key={m.title}
              className={`grid grid-cols-12 gap-x-6 p-10 ${
                m.isCurrent ? 'bg-[var(--color-paper-2)]' : 'bg-[var(--color-paper)]'
              }`}
            >
              <div className="col-span-12 md:col-span-2">
                <p
                  className={`font-mono text-[0.8125rem] leading-none ${
                    m.isCurrent ? 'text-[var(--color-accent)]' : 'text-[var(--color-mute)]'
                  }`}
                >
                  {m.date}
                </p>
                <p
                  className={`mt-1 eyebrow ${
                    m.isCurrent ? 'text-[var(--color-accent)]' : 'text-[var(--color-mute)]'
                  }`}
                >
                  {m.status}
                </p>
              </div>
              <div className="col-span-12 md:col-span-10">
                <h2
                  className={`font-display text-[1.75rem] leading-[1.2] tracking-[-0.01em] ${
                    m.isCurrent ? '' : 'text-[var(--color-ink)]'
                  }`}
                >
                  {m.title}
                </h2>
                <p className="mt-3 text-[1.0625rem] leading-[1.6] text-[var(--color-mute)]">
                  {m.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Action items */}
      <section className="container-page border-t border-t-[var(--color-rule)] py-16">
        <p className="eyebrow mb-10">Action Items</p>
        <div className="space-y-px bg-[var(--color-rule)]">
          {actionItems.map((ai) => (
            <div key={ai.id} className="grid grid-cols-12 gap-x-6 bg-[var(--color-paper)] p-8">
              <div className="col-span-12 md:col-span-1">
                <span className="font-mono text-[0.8125rem] text-[var(--color-mute)]">{ai.id}</span>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-display text-[1.25rem] leading-[1.3]">{ai.title}</h3>
                <p className="mt-1 eyebrow">{ai.owner}</p>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="text-[1.0625rem] leading-[1.6] text-[var(--color-mute)]">
                  {ai.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing pull-quote */}
      <section className="container-page border-t border-t-[var(--color-rule)] py-24">
        <blockquote className="max-w-[52ch]">
          <p className="font-display text-[clamp(1.5rem,3vw,2rem)] leading-[1.3] tracking-[-0.01em]">
            The companies that scale successfully through the $50M–$150M range are the ones that
            stop treating the three layers as a problem to solve and start treating them as an
            operating system to maintain.
          </p>
          <footer className="mt-8">
            <p className="text-[1.0625rem] leading-[1.6] text-[var(--color-mute)]">
              Core values, relationship commitment, craft respect, and the promise made to every
              client — preserved. Technology, structure, management systems — evolved.
            </p>
            <p className="mt-6 eyebrow text-[var(--color-mute)]">
              Dickinson Cameron Construction · 33 years · 1,500+ projects · 85% repeat clients
            </p>
          </footer>
        </blockquote>
      </section>
    </>
  );
}
