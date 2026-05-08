'use client';

import { useState, useCallback } from 'react';

const LEADERS_PER_POD = 2;
const FIELD_PER_POD = 5;
const OFFICE_PER_POD = 4;
const POD_HEADCOUNT = LEADERS_PER_POD + FIELD_PER_POD + OFFICE_PER_POD;

function compute(rev: number, cap: number) {
  const pods = Math.max(1, Math.ceil(rev / cap));
  const revPerPod = rev / pods;
  const util = Math.round((revPerPod / cap) * 100);
  let vps: number;
  if (pods <= 3) vps = 2;
  else if (pods <= 6) vps = 3;
  else if (pods <= 10) vps = 4;
  else vps = 5;
  let divisions: number;
  if (pods <= 4) divisions = 1;
  else if (pods <= 8) divisions = 2;
  else if (pods <= 12) divisions = 3;
  else divisions = 4;
  const corporate = 10 + Math.floor(pods / 3) * 3;
  const execLayer = 2 + vps;
  const total = pods * POD_HEADCOUNT + execLayer + corporate;
  let stage: string;
  if (pods <= 3) stage = 'Established';
  else if (pods <= 6) stage = 'Growth';
  else if (pods <= 10) stage = 'Multi-division';
  else stage = 'National';
  return { pods, revPerPod, util, vps, divisions, total, stage, corporate, execLayer };
}

const utilColor = (util: number) =>
  util > 105 ? '#a32d2d' : util > 95 ? '#854f0b' : '#0f6e56';
const utilBg = (util: number) =>
  util > 105 ? '#fcebeb' : util > 95 ? '#faeeda' : '#e1f5ee';

const toneStyles: Record<string, { bg: string; text: string }> = {
  info:    { bg: '#e6f1fb', text: '#0c447c' },
  success: { bg: '#e1f5ee', text: '#0f6e56' },
  warning: { bg: '#faeeda', text: '#854f0b' },
  danger:  { bg: '#fcebeb', text: '#a32d2d' },
};

export default function ScalingCalculator() {
  const [revM, setRevM] = useState(80);
  const [capM, setCapM] = useState(27);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const s = compute(revM, capM);
  const ceilingPods = Math.ceil(500 / capM);

  const revenueGrowth = revM === 80 ? 'current' : revM > 80 ? `+${Math.round((revM / 80 - 1) * 100)}% vs today` : '';
  const podDelta = s.pods === 3 ? 'current' : s.pods > 3 ? `+${s.pods - 3} new` : '';

  const callouts: { label: string; tone: string }[] = [];
  if (s.pods >= 4) callouts.push({ label: '4th pod online', tone: 'info' });
  if (s.pods >= 5) callouts.push({ label: 'Eastern expansion', tone: 'info' });
  if (s.vps >= 3) callouts.push({ label: '3rd VP added', tone: 'success' });
  if (s.divisions >= 2) callouts.push({ label: `${s.divisions} regional divisions`, tone: 'success' });
  if (s.vps >= 4) callouts.push({ label: 'COO layer needed', tone: 'warning' });
  if (s.pods >= 10) callouts.push({ label: 'National GC tier', tone: 'success' });
  if (s.pods >= 15) callouts.push({ label: 'ENR Top 100 territory', tone: 'success' });
  if (s.util > 105) callouts.push({ label: 'Pods overloaded — split coming', tone: 'danger' });

  const revFill = ((revM - 25) / 475) * 100;
  const capFill = ((capM - 18) / 22) * 100;

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-texture bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="container-page py-16 md:py-24">
          <p className="eyebrow mb-4" style={{ color: 'rgba(244,239,231,0.55)' }}>
            Growth modeling
          </p>
          <h1
            className="font-display hero-heading mb-5"
            style={{
              color: 'var(--color-paper)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontWeight: 400,
            }}
          >
            Dream big.<br />Watch it scale.
          </h1>
          <p
            className="hero-sub max-w-[38rem]"
            style={{
              color: 'rgba(244,239,231,0.70)',
              fontSize: '1.125rem',
              lineHeight: 1.6,
            }}
          >
            Drag the slider to any revenue target. The org responds in real time — every pod, every
            VP, every headcount figure — so you can see exactly what building a national company
            looks like from the inside.
          </p>

          {/* Current-state callout strip */}
          <div
            className="mt-10 inline-flex items-center gap-6 rounded-xl px-6 py-4"
            style={{ border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.05)' }}
          >
            <div>
              <div style={{ fontSize: '0.6875rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '3px' }}>
                Today
              </div>
              <div style={{ fontSize: '1.375rem', fontWeight: 500, fontVariantNumeric: 'lining-nums' }}>
                $80M · 3 pods
              </div>
            </div>
            <div style={{ width: '1px', height: '2.25rem', background: 'rgba(255,255,255,0.15)' }} />
            <div>
              <div style={{ fontSize: '0.6875rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '3px' }}>
                Ceiling modeled
              </div>
              <div style={{ fontSize: '1.375rem', fontWeight: 500, fontVariantNumeric: 'lining-nums' }}>
                $500M · {ceilingPods} pods
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="bg-[var(--color-paper-2)] min-h-[50vh]">
        <div className="container-page py-12 md:py-16">
          <div
            className="mx-auto rounded-2xl bg-[var(--color-paper)]"
            style={{ border: '0.5px solid rgba(26,24,22,0.12)', maxWidth: '800px' }}
          >

            {/* Controls */}
            <div
              className="p-6 md:p-8"
              style={{ borderBottom: '0.5px solid rgba(26,24,22,0.10)' }}
            >
              <div className="flex items-center gap-4 mb-5">
                <label
                  htmlFor="rev-slider"
                  className="text-sm text-[var(--color-mute)] shrink-0"
                  style={{ minWidth: '8rem' }}
                >
                  Annual revenue
                </label>
                <input
                  id="rev-slider"
                  type="range"
                  min={25}
                  max={500}
                  step={5}
                  value={revM}
                  onChange={(e) => setRevM(Number(e.target.value))}
                  className="calc-slider flex-1"
                  style={{
                    '--fill': `${revFill}%`,
                  } as React.CSSProperties}
                  aria-valuetext={`$${revM}M`}
                />
                <span
                  className="font-medium tabular-nums shrink-0 text-[var(--color-ink)]"
                  style={{ minWidth: '4rem', textAlign: 'right', fontSize: '1.0625rem', fontVariantNumeric: 'lining-nums' }}
                >
                  ${revM}M
                </span>
              </div>

              <button
                type="button"
                onClick={() => setShowAdvanced((v) => !v)}
                className="text-xs text-[var(--color-mute)] flex items-center gap-1.5 hover:text-[var(--color-ink)] transition-colors"
                aria-expanded={showAdvanced}
              >
                <span style={{ fontSize: '8px' }}>{showAdvanced ? '▾' : '▸'}</span>
                Advanced: pod capacity assumption
              </button>
              {showAdvanced && (
                <div className="flex items-center gap-4 mt-3">
                  <label
                    htmlFor="cap-slider"
                    className="text-sm text-[var(--color-mute)] shrink-0"
                    style={{ minWidth: '8rem' }}
                  >
                    $ per pod / yr
                  </label>
                  <input
                    id="cap-slider"
                    type="range"
                    min={18}
                    max={40}
                    step={1}
                    value={capM}
                    onChange={(e) => setCapM(Number(e.target.value))}
                    className="calc-slider flex-1"
                    style={{
                      '--fill': `${capFill}%`,
                    } as React.CSSProperties}
                    aria-valuetext={`$${capM}M`}
                  />
                  <span
                    className="font-medium tabular-nums shrink-0 text-[var(--color-ink)]"
                    style={{ minWidth: '4rem', textAlign: 'right', fontSize: '1.0625rem', fontVariantNumeric: 'lining-nums' }}
                  >
                    ${capM}M
                  </span>
                </div>
              )}
            </div>

            {/* Stats grid */}
            <div
              className="p-6 md:p-8"
              style={{ borderBottom: '0.5px solid rgba(26,24,22,0.10)' }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Annual revenue', value: `$${revM}M`, sub: revenueGrowth },
                  { label: 'Active pods',    value: String(s.pods), sub: podDelta },
                  { label: 'Total headcount', value: `~${s.total}`, sub: `${s.pods} × ${POD_HEADCOUNT} + exec` },
                  { label: 'Org stage',       value: s.stage, sub: '' },
                ].map(({ label, value, sub }) => (
                  <div
                    key={label}
                    className="rounded-xl p-4"
                    style={{ background: 'var(--color-paper-2)' }}
                  >
                    <div className="text-xs text-[var(--color-mute)] mb-1.5">{label}</div>
                    <div
                      className="font-display text-[var(--color-ink)]"
                      style={{ fontSize: '1.5rem', fontWeight: 400, lineHeight: 1.1, fontVariantNumeric: 'lining-nums' }}
                    >
                      {value}
                    </div>
                    {sub && (
                      <div className="text-xs text-[var(--color-mute)] mt-1 opacity-70">{sub}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Exec layer */}
            <div className="px-6 md:px-8 pt-6">
              <div
                className="rounded-xl p-4 mb-5"
                style={{ border: '0.5px solid rgba(26,24,22,0.10)' }}
              >
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div>
                    <div className="eyebrow mb-1.5">Executive layer</div>
                    <div className="text-sm text-[var(--color-ink)]">
                      Founder + President · {s.vps} VPs · {s.corporate} corporate
                    </div>
                    {s.divisions > 1 && (
                      <div className="text-xs text-[var(--color-mute)] mt-1">
                        {s.divisions} regional divisions
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-0.5">
                    {Array.from({ length: s.vps }).map((_, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-md text-[var(--color-mute)]"
                        style={{ background: 'var(--color-paper-2)' }}
                      >
                        VP
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pod grid */}
            <div className="px-6 md:px-8">
              <div
                className="grid gap-3 mb-5"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))' }}
              >
                {Array.from({ length: s.pods }).map((_, i) => {
                  const podIdx = i + 1;
                  const isNew = podIdx > 3 && revM > 80;
                  const uc = utilColor(s.util);
                  const ub = utilBg(s.util);
                  const fillPct = Math.min(s.util, 130);
                  return (
                    <div
                      key={podIdx}
                      className="rounded-xl p-3.5"
                      style={{
                        background: 'var(--color-paper)',
                        border: isNew
                          ? '2px solid #185fa5'
                          : '0.5px solid rgba(26,24,22,0.12)',
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[var(--color-ink)]">Pod {podIdx}</span>
                        <span className="text-xs text-[var(--color-mute)] tabular-nums">${s.revPerPod.toFixed(1)}M</span>
                      </div>
                      <div
                        className="rounded-full mb-2 overflow-hidden"
                        style={{ height: '3px', background: 'var(--color-paper-2)' }}
                      >
                        <div
                          style={{
                            height: '100%',
                            width: `${fillPct}%`,
                            background: uc,
                            transition: 'width 0.2s ease',
                          }}
                        />
                      </div>
                      <span
                        className="inline-block text-xs px-2 py-0.5 rounded-md mb-2.5"
                        style={{ background: ub, color: uc }}
                      >
                        {s.util}% capacity
                      </span>

                      <div className="eyebrow mb-1" style={{ fontSize: '0.625rem' }}>Leadership</div>
                      <div className="text-xs leading-relaxed text-[var(--color-ink)] mb-2">
                        <div>Operations lead</div>
                        <div>Project lead</div>
                      </div>

                      <div className="eyebrow mb-1" style={{ fontSize: '0.625rem' }}>Field ({FIELD_PER_POD})</div>
                      <div className="text-xs leading-relaxed text-[var(--color-mute)] mb-2">
                        <div>1 Sr. superintendent</div>
                        <div>2 Associate supers</div>
                        <div>1 Shift super</div>
                        <div>1 Assistant super</div>
                      </div>

                      <div className="eyebrow mb-1" style={{ fontSize: '0.625rem' }}>Office ({OFFICE_PER_POD})</div>
                      <div className="text-xs leading-relaxed text-[var(--color-mute)]">
                        <div>2 Project managers</div>
                        <div>1 Project engineer</div>
                        <div>1 Project coordinator</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Callout chips */}
            {callouts.length > 0 && (
              <div
                className="px-6 md:px-8 pt-2 pb-6 md:pb-8"
                style={{ borderTop: '0.5px solid rgba(26,24,22,0.10)', marginTop: '0.25rem' }}
              >
                <div className="pt-4 flex flex-wrap gap-2">
                  {callouts.map(({ label, tone }) => (
                    <span
                      key={label}
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{ background: toneStyles[tone].bg, color: toneStyles[tone].text }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {callouts.length === 0 && <div className="pb-6" />}
          </div>
        </div>
      </section>

      {/* Slider track + thumb styles */}
      <style>{`
        .calc-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          background: linear-gradient(
            to right,
            var(--color-accent) var(--fill),
            var(--color-paper-2) var(--fill)
          );
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }
        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--color-ink);
          cursor: pointer;
          border: 2.5px solid var(--color-paper);
          box-shadow: 0 0 0 1.5px var(--color-ink);
        }
        .calc-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--color-ink);
          cursor: pointer;
          border: 2.5px solid var(--color-paper);
          box-shadow: 0 0 0 1.5px var(--color-ink);
        }
      `}</style>
    </>
  );
}
