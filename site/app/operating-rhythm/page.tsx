export const metadata = { title: 'Operating Rhythm — DCC Operating System' };

const roles = [
  {
    label: 'Pod Co-Leaders',
    who: 'SPM + FOM',
    owns: 'Project execution and pod culture',
    detail:
      'Run the work. Hit the schedule, the budget, and the quality bar. Build the daily habits and rituals that make the pod feel like a team — field and office, same chain.',
  },
  {
    label: 'Department Manager',
    who: 'Functional Head — also called Department Head',
    owns: 'Individual development and pod health',
    detail:
      'Coach the craft. Run the 1:1s, set the SMART goals, watch the career trajectory. Collectively, the Department Managers also monitor the health of every pod and intervene when a team is struggling.',
  },
];

const conversations = [
  {
    num: '01',
    title: 'Project Check-ins',
    owner: 'Pod Co-Leaders',
    cadence: 'Weekly',
    purpose: 'Execution focus and commitment management.',
    what: 'Project Huddles, OAC Calls, Schedule Review, Budget and Change Order Reviews. Where culture is practiced, not described.',
  },
  {
    num: '02',
    title: 'Functional 1:1',
    owner: 'Department Manager',
    cadence: 'Monthly',
    purpose: 'Craft development, professional standards, career trajectory.',
    what: 'How are you growing professionally? Focus on annual SMART Goals. Skills feedback and coaching on upward mobility.',
  },
  {
    num: '03',
    title: '360 Review',
    owner: 'All Three Parties',
    cadence: 'Quarterly',
    purpose: 'Surface tension, align goals, reconcile conflicting direction.',
    what: 'The pressure valve. The mandatory mechanism that prevents the two-boss problem from festering. Facilitated by the Department Manager.',
  },
];

export default function OperatingRhythmPage() {
  return (
    <>
      {/* Page header */}
      <section className="container-page pt-24 pb-16">
        <p className="eyebrow">Operating Rhythm</p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-balance max-w-[22ch]">
          Two managers, three conversations.
        </h1>
        <div className="mt-6 h-px w-[120px] bg-[var(--color-accent)]" aria-hidden />
        <p className="mt-8 max-w-[58ch] text-[1.0625rem] leading-[1.6] text-pretty">
          The matrix runs on two distinct roles with two distinct lanes. Pod Co-Leaders run the
          work. Department Managers develop the people. Three regular conversations keep the lanes
          aligned and the team healthy.
        </p>
      </section>

      {/* Two roles */}
      <section
        id="two-roles"
        className="container-page border-t border-t-[var(--color-rule)] py-16"
      >
        <p className="eyebrow mb-2">Two Roles, Two Lanes</p>
        <h2 className="font-display text-[2rem] leading-[1.2] tracking-[-0.01em] mb-8">
          Who owns what
        </h2>
        <div className="grid grid-cols-1 gap-px bg-[var(--color-rule)] md:grid-cols-2">
          {roles.map((r) => (
            <div key={r.label} className="bg-[var(--color-paper)] p-10">
              <p className="eyebrow mb-1">{r.who}</p>
              <h3 className="font-display text-[1.5rem] leading-[1.25] tracking-[-0.01em]">
                {r.label}
              </h3>
              <p className="mt-4 text-[1.0625rem] leading-[1.6] font-medium">{r.owns}</p>
              <p className="mt-3 text-[1.0625rem] leading-[1.6] text-[var(--color-mute)]">
                {r.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Three conversations */}
      <section
        id="three-conversations"
        className="container-page border-t border-t-[var(--color-rule)] py-16"
      >
        <p className="eyebrow mb-2">The Cadence</p>
        <h2 className="font-display text-[2rem] leading-[1.2] tracking-[-0.01em] mb-8">
          Three Conversations
        </h2>
        <p className="max-w-[58ch] text-[1.0625rem] leading-[1.6] mb-10">
          Each conversation has a different owner, a different purpose, and a different cadence.
          Together they form the organizational feedback loop.
        </p>
        <div className="space-y-px bg-[var(--color-rule)]">
          {conversations.map((c) => (
            <div key={c.num} className="grid grid-cols-12 gap-x-6 bg-[var(--color-paper)] p-10">
              <div className="col-span-12 md:col-span-1">
                <span className="font-display text-[2.5rem] leading-none text-[var(--color-mute)]">
                  {c.num}
                </span>
              </div>
              <div className="col-span-12 md:col-span-11">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-[1.75rem] leading-[1.2] tracking-[-0.01em]">
                    {c.title}
                  </h3>
                  <p className="eyebrow">
                    {c.owner} · {c.cadence}
                  </p>
                </div>
                <p className="mt-4 text-[1.0625rem] leading-[1.6] font-medium">{c.purpose}</p>
                <p className="mt-2 text-[1.0625rem] leading-[1.6] text-[var(--color-mute)]">{c.what}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inside the Department Manager role */}
      <section
        id="department-manager"
        className="container-page border-t border-t-[var(--color-rule)] py-16"
      >
        <p className="eyebrow mb-2">Inside the Department Manager Role</p>
        <h2 className="font-display text-[2rem] leading-[1.2] tracking-[-0.01em] mb-8">
          Two monthly responsibilities
        </h2>
        <p className="max-w-[58ch] text-[1.0625rem] leading-[1.6] mb-10">
          The Department Manager isn't only running individual 1:1s. They also collect pod-level
          health data — and as a group, the Department Managers use that data to keep every pod
          performing well.
        </p>
        <div className="grid grid-cols-1 gap-px bg-[var(--color-rule)] md:grid-cols-2">
          <div className="bg-[var(--color-paper)] p-10">
            <p className="eyebrow mb-1">Responsibility 1</p>
            <h3 className="font-display text-[1.5rem] leading-[1.25] tracking-[-0.01em]">
              Skills Feedback
            </h3>
            <p className="mt-1 text-[0.9375rem] text-[var(--color-mute)]">Individual development — 1:1</p>
            <ul className="mt-6 space-y-3 text-[1.0625rem] leading-[1.6]">
              <li>Department Manager aligns in 1:1 to review SMART Goals from the Annual Review</li>
              <li>January meeting sets the year's objectives</li>
              <li>10 opportunities throughout the year for formal skills feedback</li>
              <li>Active coaching on upward mobility within the organization</li>
              <li className="text-[var(--color-mute)]">FeedForward: "What could they do more of?"</li>
              <li>December is a formal review of annual progress</li>
            </ul>
          </div>
          <div className="bg-[var(--color-paper)] p-10">
            <p className="eyebrow mb-1">Responsibility 2</p>
            <h3 className="font-display text-[1.5rem] leading-[1.25] tracking-[-0.01em]">
              Team Health Pulse
            </h3>
            <p className="mt-1 text-[0.9375rem] text-[var(--color-mute)]">Pod health monitoring — across the team</p>
            <p className="mt-6 text-[1.0625rem] leading-[1.6]">
              Always anonymous, always aggregated at the pod level. Measures collective experience,
              not individual performance. Creates trend data over time.
            </p>
            <ul className="mt-4 space-y-2 text-[0.9375rem] leading-[1.55] text-[var(--color-mute)]">
              <li>"I feel comfortable raising concerns"</li>
              <li>"Our pod communicates well office ↔ field"</li>
              <li>"When [person] commits, they follow through"</li>
              <li>"I understand how our work contributes"</li>
              <li>"One thing we could do better this month?"</li>
            </ul>
            <p className="mt-5 eyebrow">
              ~15–17 questions · ~18 minutes · 75% scaled / 25% open-ended
            </p>
          </div>
        </div>
      </section>

      {/* Forward pointer */}
      <section
        id="next"
        className="container-page border-t border-t-[var(--color-rule)] py-16"
      >
        <p className="max-w-[58ch] text-[1.0625rem] leading-[1.6]">
          The 360 Review is where the two lanes converge — and it&apos;s a system in its own
          right. The rater matrix, the data-collection model, and the failure modes that the
          design protects against live on the{' '}
          <a
            href="/360-review"
            className="underline decoration-[var(--color-accent)] underline-offset-4 hover:text-[var(--color-accent)]"
          >
            360 Review page
          </a>
          .
        </p>
      </section>
    </>
  );
}
