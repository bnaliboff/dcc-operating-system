export const metadata = { title: '360 Review — DCC Operating System' };

const steps = [
  {
    step: '1',
    title: 'Pod Leaders → Functional Leader',
    detail:
      'Project execution feedback shared in a brief 1:1. Framed as development, never evaluation. The Pod Leader selects 1–2 focus areas for the next quarter. SPM and FOM complete together; notes shared by Functional Leader.',
  },
  {
    step: '2',
    title: 'Peer Review Feedback',
    detail:
      "Full pod input managed by the Functional Leader. Aggregated team pulse scores displayed as trends over time. The pod identifies one collective improvement action. Last quarter's action reviewed before new data is discussed.",
  },
  {
    step: '3',
    title: 'Quarterly Deep Review',
    detail:
      'Co-leaders and Functional Leader have a formal check-in that forms the full 360 Review for the individual. Meeting is facilitated and maintained by the Functional Leader.',
  },
];

const raters = [
  {
    group: 'Functional Leader',
    weight: '20%',
    focus: 'Skill mastery, standards compliance, professional growth, career readiness',
    who: 'Aramy for PCs · Prescott for FOMs · Smulski for PreCon',
  },
  {
    group: 'Pod Co-Leaders',
    weight: '35%',
    focus: 'Operational execution, schedule adherence, field coordination, daily leadership',
    who: 'SPM + FOM of assigned pod',
  },
  {
    group: 'Project Teammates',
    weight: '30%',
    focus: 'Collaboration, communication, on-site problem-solving, reliability',
    who: '2–3 peers from current project team(s)',
  },
  {
    group: 'Self-Assessment',
    weight: '15%',
    focus: 'Growth awareness, goal-setting realism, self-identified development needs',
    who: 'The employee',
  },
];

const failureModes = [
  {
    mode: 'Lack-of-Action Fatigue',
    prevention:
      "Every retrospective produces one visible action. Last month's action reviewed first. If nothing changed, acknowledge it — don't pretend.",
  },
  {
    mode: 'Performative Feedback',
    prevention:
      'Behavioral frequency scales, not trait-based questions. "How often does X provide clear updates?" not "Is X a good communicator?" Require SBI examples.',
  },
  {
    mode: 'Recency Bias',
    prevention:
      'Prompt reviewers: "Consider the full month, not just the past week." Monthly cadence creates more data points over time to offset any single snapshot.',
  },
  {
    mode: 'Halo and Leniency Effects',
    prevention:
      'Include one forced-choice question per cycle: "Which area is this person\'s greatest strength? Greatest growth opportunity?" from a fixed list.',
  },
  {
    mode: 'Gaming and Retaliation',
    prevention:
      'Never tie results to compensation. Position exclusively as development. Confidential attribution through facilitator protects candor while maintaining accountability.',
  },
];

export default function ThreeSixtyReviewPage() {
  return (
    <>
      {/* Page header */}
      <section className="container-page pt-14 md:pt-24 pb-12 md:pb-16">
        <p className="eyebrow">360 Review</p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-balance max-w-[24ch]">
          The pressure valve for the two-manager model.
        </h1>
        <div className="mt-6 h-px w-[120px] bg-[var(--color-accent)]" aria-hidden />
        <p className="mt-8 max-w-[58ch] text-[1.0625rem] leading-[1.6] text-pretty">
          Quarterly. Mandatory. Facilitated by the Functional Leader. The 360 Review surfaces
          tension between the two managers, aligns goals, and reconciles conflicting direction
          before the matrix calcifies.
        </p>
        <p className="mt-4 max-w-[58ch] text-[1.0625rem] leading-[1.6] text-[var(--color-mute)]">
          This page covers the data-collection model, who reviews whom, and the failure modes the
          system is explicitly designed to resist.
        </p>
      </section>

      {/* Photo break: urban excavation */}
      <div className="relative w-full h-[200px] md:h-[280px] lg:h-[360px] overflow-hidden">
        <img
          src="/images/photo-excavation-urban.jpg"
          alt="Ground-level excavation in an urban setting"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--color-ink)] opacity-20" />
      </div>

      {/* Three-step model */}
      <section
        id="three-step"
        className="container-page border-t border-t-[var(--color-rule)] py-16"
      >
        <p className="eyebrow mb-2">Data Collection</p>
        <h2 className="font-display text-[2rem] leading-[1.2] tracking-[-0.01em] mb-8">
          The Three-Step Model
        </h2>
        <p className="max-w-[58ch] text-[1.0625rem] leading-[1.6] mb-10">
          This is where most programs fail. Collecting data without closing the loop destroys
          credibility faster than not asking at all.
        </p>
        <ol className="space-y-px bg-[var(--color-rule)]">
          {steps.map((s) => (
            <li
              key={s.step}
              className="grid grid-cols-12 gap-x-6 gap-y-3 md:gap-y-0 bg-[var(--color-paper)] p-8 md:p-10"
            >
              <div className="col-span-12 md:col-span-1">
                <span className="font-display text-[2.5rem] leading-none text-[var(--color-mute)]">
                  {s.step}
                </span>
              </div>
              <div className="col-span-12 md:col-span-11">
                <h3 className="font-display text-[1.5rem] leading-[1.25] tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[1.0625rem] leading-[1.6] text-[var(--color-mute)]">
                  {s.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-8 max-w-3xl">
          <p className="eyebrow mb-2">Critical</p>
          <p className="text-[1.0625rem] leading-[1.6]">
            Never tie 360 results to compensation or promotion. When feedback data influences pay,
            scores inflate, candor disappears, and the system becomes political. This is a
            development and culture tool — separate from performance evaluation.
          </p>
        </div>
      </section>

      {/* Rater matrix */}
      <section
        id="raters"
        className="container-page border-t border-t-[var(--color-rule)] py-16"
      >
        <p className="eyebrow mb-2">Who Reviews Whom</p>
        <h2 className="font-display text-[2rem] leading-[1.2] tracking-[-0.01em] mb-8">
          Rater Selection
        </h2>
        <p className="max-w-[58ch] text-[1.0625rem] leading-[1.6] mb-10">
          Different raters see different behaviors — and that divergence is the most valuable
          coaching data.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-b-[var(--color-rule)]">
                {['Rater Group', 'Weight', 'Focus', 'Who'].map((h) => (
                  <th key={h} className="eyebrow py-3 pr-8 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {raters.map((row) => (
                <tr key={row.group} className="border-b border-b-[var(--color-rule)]">
                  <td className="py-4 pr-8 text-[0.9375rem] font-medium">{row.group}</td>
                  <td className="py-4 pr-8 font-mono text-[0.9375rem]">{row.weight}</td>
                  <td className="py-4 pr-8 text-[0.9375rem] leading-[1.5] text-[var(--color-mute)]">
                    {row.focus}
                  </td>
                  <td className="py-4 pr-8 text-[0.875rem] leading-[1.5] text-[var(--color-mute)]">
                    {row.who}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-[0.9375rem] text-[var(--color-mute)]">
          Minimum 3 respondents per rater group to display results. Every question includes
          &ldquo;Unable to Rate / Not Observed&rdquo; to prevent forced guessing.
        </p>
      </section>

      {/* Failure modes */}
      <section
        id="failure-modes"
        className="container-page border-t border-t-[var(--color-rule)] py-16"
      >
        <p className="eyebrow mb-2">Designing Against Failure</p>
        <h2 className="font-display text-[2rem] leading-[1.2] tracking-[-0.01em] mb-8">
          Five Failure Modes
        </h2>
        <p className="max-w-[58ch] text-[1.0625rem] leading-[1.6] mb-10">
          Every 360 program risks degrading into theater. These are the five most common failure
          modes — and the design choices that protect against each.
        </p>
        <div className="space-y-px bg-[var(--color-rule)]">
          {failureModes.map((fm, i) => (
            <div key={fm.mode} className="grid grid-cols-12 gap-x-6 gap-y-2 md:gap-y-0 bg-[var(--color-paper)] p-6 md:p-8">
              <div className="col-span-12 md:col-span-1">
                <span className="font-mono text-[0.875rem] text-[var(--color-mute)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-display text-[1.25rem] leading-[1.3]">{fm.mode}</h3>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="text-[1.0625rem] leading-[1.6] text-[var(--color-mute)]">
                  {fm.prevention}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-[58ch] text-[1.0625rem] leading-[1.6]">
          The single strongest protection against system failure: the co-leaders&apos; relationship
          with each other. Invest in their alignment before investing in any tool.
        </p>
      </section>
    </>
  );
}
