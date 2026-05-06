export const metadata = { title: 'Organization — DCC Operating System' };

const pods = [
  { name: 'Pod Dagata / Iovino', leaders: 'Craig Dagata · John Iovino' },
  { name: 'Pod Boulenger / Wagner', leaders: 'Max Boulenger · Stephen Wagner' },
  { name: 'Pod Dyson / Powell', leaders: 'Danielle Dyson · Grady Powell' },
];

const podFieldRoles = [
  'Senior Superintendent',
  'Superintendent',
  'Associate Superintendent',
  'Shift Supervisor',
  'Assistant Superintendent',
];

const podOfficeRoles = [
  'Senior Project Manager',
  'Project Manager',
  'Project Engineer',
  'Project Coordinator',
];

type SubUnit = { name: string; items?: string[] };
type Department = { leader: string; title: string; subUnits: SubUnit[] };

const departments: Department[] = [
  {
    leader: 'Maryam Samady',
    title: 'Back Office & Project Coordination',
    subUnits: [{ name: 'Back Office' }, { name: 'Project Coordination' }],
  },
  {
    leader: 'Tom Smulski',
    title: 'Pre-Construction',
    subUnits: [],
  },
  {
    leader: 'John Schaub',
    title: 'Project Management',
    subUnits: [],
  },
  {
    leader: 'Brian Prescott',
    title: 'Field Operations',
    subUnits: [],
  },
  {
    leader: 'Brian Naliboff',
    title: 'Business Development',
    subUnits: [],
  },
];

const rapidRows = [
  {
    decision: 'Hire into discipline',
    recommend: 'Functional Leader',
    agree: '—',
    perform: '—',
    input: '—',
    decide: 'Executive',
  },
  {
    decision: 'Assign to project',
    recommend: '—',
    agree: '—',
    perform: '—',
    input: '—',
    decide: 'Pod co-leaders (jointly)',
  },
  {
    decision: 'Annual review',
    recommend: '—',
    agree: '—',
    perform: 'Functional Leader',
    input: 'Pod leaders',
    decide: 'Functional Leader',
  },
  {
    decision: 'Daily task priority',
    recommend: '—',
    agree: '—',
    perform: '—',
    input: '—',
    decide: 'Pod co-leaders',
  },
  {
    decision: 'Promotion',
    recommend: 'Functional Leader',
    agree: '—',
    perform: '—',
    input: '—',
    decide: 'Executive',
  },
];

export default function OrganizationPage() {
  return (
    <>
      {/* Page header */}
      <section className="container-page pt-24 pb-16">
        <p className="eyebrow">Organization</p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-balance max-w-[22ch]">
          Three layers, one company.
        </h1>
        <div className="mt-6 h-px w-[120px] bg-[var(--color-accent)]" aria-hidden />
        <p className="mt-8 max-w-[58ch] text-[1.0625rem] leading-[1.6] text-pretty">
          Department, Pod, and Project Team each serve a different function. You don't choose between
          them — you invest in all three simultaneously, because each one creates the conditions for
          the others to thrive.
        </p>
      </section>

      {/* Operations: Pods */}
      <section
        id="pods"
        className="container-page border-t border-t-[var(--color-rule)] py-16"
      >
        <p className="eyebrow mb-2">Operations</p>
        <h2 className="font-display text-[2rem] leading-[1.2] tracking-[-0.01em] mb-3">
          Three Pods Today
        </h2>
        <p className="max-w-[58ch] text-[1.0625rem] leading-[1.6] mb-10">
          Each pod is a self-contained operational unit led by an FOM and a Sr. PM. They run their
          own projects, build their own culture, and own their own results. Scaling means adding
          pods — not adding layers.
        </p>

        {/* Three pod cards */}
        <div className="grid grid-cols-1 gap-px bg-[var(--color-rule)] md:grid-cols-3 mb-12">
          {pods.map((pod) => (
            <div key={pod.name} className="bg-[var(--color-paper)] p-6">
              <h3 className="font-display text-[1.125rem] leading-[1.3] tracking-[-0.005em]">
                {pod.name}
              </h3>
              <p className="mt-2 text-[0.9375rem] text-[var(--color-mute)]">{pod.leaders}</p>
            </div>
          ))}
        </div>

        {/* Pod anatomy diagram */}
        <p className="eyebrow mb-4">Pod Anatomy</p>
        <p className="max-w-[58ch] text-[1.0625rem] leading-[1.6] mb-8">
          Inside every pod: two co-leaders, a field roster, and an office roster. Headcount per
          role varies by pod size and project mix.
        </p>
        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 960 480"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Anatomy of a pod: co-leaders at the top, with field and office role columns below"
            role="img"
            className="w-full max-w-[960px]"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {/* Co-leader combined box */}
            <rect x="240" y="20" width="480" height="72" fill="var(--color-paper-2)" stroke="var(--color-rule)" strokeWidth="1" />
            <line x1="480" y1="20" x2="480" y2="92" stroke="var(--color-rule)" strokeWidth="1" />
            <text x="360" y="50" fontSize="12" fontWeight="500" fill="var(--color-ink)" textAnchor="middle">
              Field Operations Manager
            </text>
            <text x="360" y="72" fontSize="11" fill="var(--color-mute)" textAnchor="middle">
              FOM
            </text>
            <text x="600" y="50" fontSize="12" fontWeight="500" fill="var(--color-ink)" textAnchor="middle">
              Senior Project Manager
            </text>
            <text x="600" y="72" fontSize="11" fill="var(--color-mute)" textAnchor="middle">
              Sr. PM
            </text>

            {/* Connector lines from co-leader to columns */}
            <line x1="480" y1="92" x2="480" y2="124" stroke="var(--color-rule)" strokeWidth="1" />
            <line x1="260" y1="124" x2="700" y2="124" stroke="var(--color-rule)" strokeWidth="1" />
            <line x1="260" y1="124" x2="260" y2="158" stroke="var(--color-rule)" strokeWidth="1" />
            <line x1="700" y1="124" x2="700" y2="158" stroke="var(--color-rule)" strokeWidth="1" />

            {/* Column headers */}
            <text x="260" y="170" fontSize="10" letterSpacing="0.08em" fill="var(--color-mute)" textAnchor="middle" style={{ textTransform: 'uppercase' }}>
              Field
            </text>
            <text x="700" y="170" fontSize="10" letterSpacing="0.08em" fill="var(--color-mute)" textAnchor="middle" style={{ textTransform: 'uppercase' }}>
              Office
            </text>

            {/* Field role boxes */}
            {podFieldRoles.map((role, i) => {
              const y = 188 + i * 56;
              return (
                <g key={role}>
                  <rect x="140" y={y} width="240" height="48" fill="none" stroke="var(--color-rule)" strokeWidth="1" />
                  <text x="260" y={y + 30} fontSize="12" fill="var(--color-ink)" textAnchor="middle">
                    {role}
                  </text>
                </g>
              );
            })}

            {/* Office role boxes */}
            {podOfficeRoles.map((role, i) => {
              const y = 188 + i * 56;
              return (
                <g key={role}>
                  <rect x="580" y={y} width="240" height="48" fill="none" stroke="var(--color-rule)" strokeWidth="1" />
                  <text x="700" y={y + 30} fontSize="12" fill="var(--color-ink)" textAnchor="middle">
                    {role}
                  </text>
                </g>
              );
            })}

            {/* Accent mark */}
            <rect x="240" y="14" width="2" height="6" fill="var(--color-accent)" />
          </svg>
        </div>
      </section>

      {/* Functional Departments */}
      <section
        id="departments"
        className="container-page border-t border-t-[var(--color-rule)] py-16"
      >
        <p className="eyebrow mb-2">Functional Departments</p>
        <h2 className="font-display text-[2rem] leading-[1.2] tracking-[-0.01em] mb-3">
          Craft, Standards, Career
        </h2>
        <p className="max-w-[58ch] text-[1.0625rem] leading-[1.6] mb-10">
          Five functional departments, each headed by a senior leader. Department heads own
          professional standards, career development, and the 360 review for everyone in their
          discipline — including staff embedded inside pods.
        </p>
        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 960 260"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Five functional departments and their leaders, with sub-units shown beneath where applicable"
            role="img"
            className="w-full max-w-[960px]"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {departments.map((dept, i) => {
              const x = 15 + i * 190;
              const cx = x + 85;
              const SUB_TOP = 130;
              const SUB_GAP = 18;
              let yCursor = SUB_TOP;
              return (
                <g key={dept.leader}>
                  {/* Leader box */}
                  <rect
                    x={x}
                    y="20"
                    width="170"
                    height="72"
                    fill="var(--color-paper-2)"
                    stroke="var(--color-rule)"
                    strokeWidth="1"
                  />
                  <text
                    x={cx}
                    y="50"
                    fontSize="12"
                    fontWeight="500"
                    fill="var(--color-ink)"
                    textAnchor="middle"
                  >
                    {dept.leader}
                  </text>
                  <text
                    x={cx}
                    y="72"
                    fontSize="10"
                    fill="var(--color-mute)"
                    textAnchor="middle"
                  >
                    {dept.title}
                  </text>

                  {/* Connector from leader to first sub-unit */}
                  {dept.subUnits.length > 0 && (
                    <line
                      x1={cx}
                      y1="92"
                      x2={cx}
                      y2={SUB_TOP}
                      stroke="var(--color-rule)"
                      strokeWidth="1"
                    />
                  )}

                  {/* Sub-units */}
                  {dept.subUnits.map((sub, j) => {
                    const subH = sub.items
                      ? 30 + sub.items.length * 18 + 10
                      : 50;
                    const subY = yCursor;
                    const subBottom = subY + subH;
                    yCursor = subBottom + SUB_GAP;
                    return (
                      <g key={sub.name}>
                        <rect
                          x={x}
                          y={subY}
                          width="170"
                          height={subH}
                          fill="none"
                          stroke="var(--color-rule)"
                          strokeWidth="1"
                        />
                        {sub.items ? (
                          <>
                            <text
                              x={cx}
                              y={subY + 22}
                              fontSize="11"
                              fontWeight="500"
                              fill="var(--color-ink)"
                              textAnchor="middle"
                            >
                              {sub.name}
                            </text>
                            {sub.items.map((item, k) => (
                              <text
                                key={item}
                                x={cx}
                                y={subY + 44 + k * 18}
                                fontSize="10"
                                fill="var(--color-mute)"
                                textAnchor="middle"
                              >
                                {item}
                              </text>
                            ))}
                          </>
                        ) : (
                          <text
                            x={cx}
                            y={subY + subH / 2 + 4}
                            fontSize="11"
                            fill="var(--color-ink)"
                            textAnchor="middle"
                          >
                            {sub.name}
                          </text>
                        )}
                        {/* Connector to next sub-unit */}
                        {j < dept.subUnits.length - 1 && (
                          <line
                            x1={cx}
                            y1={subBottom}
                            x2={cx}
                            y2={subBottom + SUB_GAP}
                            stroke="var(--color-rule)"
                            strokeWidth="1"
                          />
                        )}
                      </g>
                    );
                  })}
                </g>
              );
            })}

            {/* Accent mark */}
            <rect x="15" y="14" width="2" height="6" fill="var(--color-accent)" />
          </svg>
        </div>
        <p className="mt-6 max-w-[58ch] text-[0.9375rem] leading-[1.55] text-[var(--color-mute)]">
          Each department head owns the discipline wherever it lives — including staff embedded
          inside pods. A Field Operations team member working in a pod still reports functionally
          to Brian Prescott for craft and career; a Project Coordinator in a pod still reports to
          Maryam&apos;s Project Coordination team.
        </p>
      </section>

      {/* Two-manager model */}
      <section className="container-page border-t border-t-[var(--color-rule)] py-16">
        <p className="eyebrow mb-10">The Two-Manager Model</p>
        <p className="max-w-[58ch] text-[1.0625rem] leading-[1.6] mb-10">
          84% of US companies operate with matrix structures. The tension between functional
          excellence and execution speed is designed into the system — because it forces the right
          trade-offs. Two managers is a feature, not a bug.
        </p>
        <div className="grid grid-cols-1 gap-px bg-[var(--color-rule)] md:grid-cols-2">
          <div className="bg-[var(--color-paper)] p-10">
            <h2 className="font-display text-[1.75rem] leading-[1.2] tracking-[-0.01em]">
              Functional Leader
            </h2>
            <p className="mt-1 eyebrow text-[var(--color-accent)]">e.g. Aramy Kang, Brian Prescott, Thomas Smulski</p>
            <ul className="mt-6 space-y-3 text-[1.0625rem] leading-[1.6]">
              <li className="flex gap-3"><span className="text-[var(--color-mute)] font-mono text-[0.875rem] mt-0.5">01</span>Sets professional standards</li>
              <li className="flex gap-3"><span className="text-[var(--color-mute)] font-mono text-[0.875rem] mt-0.5">02</span>Owns career development</li>
              <li className="flex gap-3"><span className="text-[var(--color-mute)] font-mono text-[0.875rem] mt-0.5">03</span>Writes performance reviews</li>
              <li className="flex gap-3"><span className="text-[var(--color-mute)] font-mono text-[0.875rem] mt-0.5">04</span>Makes promotion recommendations</li>
              <li className="flex gap-3"><span className="text-[var(--color-mute)] font-mono text-[0.875rem] mt-0.5">05</span>Hires into the discipline</li>
            </ul>
          </div>
          <div className="bg-[var(--color-paper)] p-10">
            <h2 className="font-display text-[1.75rem] leading-[1.2] tracking-[-0.01em]">
              Pod Co-Leaders
            </h2>
            <p className="mt-1 eyebrow text-[var(--color-accent)]">SPM + FOM per pod</p>
            <ul className="mt-6 space-y-3 text-[1.0625rem] leading-[1.6]">
              <li className="flex gap-3"><span className="text-[var(--color-mute)] font-mono text-[0.875rem] mt-0.5">01</span>Assigns daily work and priorities</li>
              <li className="flex gap-3"><span className="text-[var(--color-mute)] font-mono text-[0.875rem] mt-0.5">02</span>Coaches on project execution</li>
              <li className="flex gap-3"><span className="text-[var(--color-mute)] font-mono text-[0.875rem] mt-0.5">03</span>Manages schedule and budget</li>
              <li className="flex gap-3"><span className="text-[var(--color-mute)] font-mono text-[0.875rem] mt-0.5">04</span>Builds pod culture and team health</li>
              <li className="flex gap-3"><span className="text-[var(--color-mute)] font-mono text-[0.875rem] mt-0.5">05</span>Provides operational feedback</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RAPID */}
      <section
        id="rapid"
        className="container-page border-t border-t-[var(--color-rule)] py-16"
      >
        <p className="eyebrow mb-2">Decision Rights</p>
        <h2 className="font-display text-[2rem] leading-[1.2] tracking-[-0.01em] mb-3">
          RAPID Framework
        </h2>
        <p className="max-w-[58ch] text-[1.0625rem] leading-[1.6] mb-10">
          Every recurring decision has exactly one Decide. Multiple roles can Recommend, Agree,
          Perform, or provide Input.
        </p>

        {/* RAPID legend */}
        <div className="grid grid-cols-5 gap-px bg-[var(--color-rule)] mb-10 max-w-3xl">
          {[
            { letter: 'R', word: 'Recommend', def: 'Proposes the course of action' },
            { letter: 'A', word: 'Agree', def: 'Must sign off — has veto power' },
            { letter: 'P', word: 'Perform', def: 'Executes the work' },
            { letter: 'I', word: 'Input', def: 'Provides information — no authority' },
            { letter: 'D', word: 'Decide', def: 'Makes the call. Accountable.' },
          ].map((r) => (
            <div
              key={r.letter}
              className={`p-5 ${r.letter === 'D' ? 'bg-[var(--color-paper-2)]' : 'bg-[var(--color-paper)]'}`}
            >
              <p className={`font-display text-[2rem] leading-none ${r.letter === 'D' ? 'text-[var(--color-accent)]' : ''}`}>
                {r.letter}
              </p>
              <p className="eyebrow mt-2">{r.word}</p>
              <p className="mt-2 text-[0.875rem] leading-[1.5] text-[var(--color-mute)]">{r.def}</p>
            </div>
          ))}
        </div>

        {/* RAPID table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-[var(--font-jetbrains)]">
            <thead>
              <tr className="border-b border-b-[var(--color-rule)]">
                {['Decision', 'Recommend', 'Agree', 'Perform', 'Input', 'Decide'].map((h) => (
                  <th
                    key={h}
                    className={`eyebrow py-3 pr-6 font-normal ${h === 'Decide' ? 'text-[var(--color-accent)]' : ''}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rapidRows.map((row) => (
                <tr key={row.decision} className="border-b border-b-[var(--color-rule)]">
                  <td className="py-4 pr-6 text-[0.9375rem] leading-[1.5]">{row.decision}</td>
                  <td className="py-4 pr-6 text-[0.9375rem] text-[var(--color-mute)]">{row.recommend}</td>
                  <td className="py-4 pr-6 text-[0.9375rem] text-[var(--color-mute)]">{row.agree}</td>
                  <td className="py-4 pr-6 text-[0.9375rem] text-[var(--color-mute)]">{row.perform}</td>
                  <td className="py-4 pr-6 text-[0.9375rem] text-[var(--color-mute)]">{row.input}</td>
                  <td className="py-4 pr-6 text-[0.9375rem] font-medium">{row.decide}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
