'use client';

import { useState } from 'react';

const LEADERS_PER_POD = 2;
const FIELD_PER_POD   = 5;
const OFFICE_PER_POD  = 4;
const POD_HEADCOUNT   = LEADERS_PER_POD + FIELD_PER_POD + OFFICE_PER_POD;

const CAP_MIN = 10;
const CAP_MAX = 60;

function computeOrg(rev: number, cap: number) {
  const pods = Math.max(1, Math.ceil(rev / cap));
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
  const corporate  = 10 + Math.floor(pods / 3) * 3;
  const execLayer  = 2 + vps;
  const total      = pods * POD_HEADCOUNT + execLayer + corporate;
  let stage: string;
  if (pods <= 3) stage = 'Established';
  else if (pods <= 6) stage = 'Growth';
  else if (pods <= 10) stage = 'Multi-division';
  else stage = 'National';
  return { pods, vps, divisions, corporate, execLayer, total, stage };
}

// Colour helpers ──────────────────────────────────────────────────────────────
function utilColor(u: number) {
  return u > 105 ? '#a32d2d' : u > 95 ? '#854f0b' : '#0f6e56';
}
function utilBg(u: number) {
  return u > 105 ? '#fcebeb' : u > 95 ? '#faeeda' : '#e1f5ee';
}

const toneStyles: Record<string, { bg: string; text: string }> = {
  info:    { bg: '#e6f1fb', text: '#0c447c' },
  success: { bg: '#e1f5ee', text: '#0f6e56' },
  warning: { bg: '#faeeda', text: '#854f0b' },
  danger:  { bg: '#fcebeb', text: '#a32d2d' },
};

// Stepper button ──────────────────────────────────────────────────────────────
function Stepper({
  value, onChange, min = CAP_MIN, max = CAP_MAX, step = 1,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  const btnBase: React.CSSProperties = {
    width: 22, height: 22, borderRadius: 6, border: '0.5px solid rgba(26,24,22,0.18)',
    background: 'var(--color-paper-2)', cursor: 'pointer', fontSize: 14,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    lineHeight: 1, color: 'var(--color-ink)', flexShrink: 0,
    userSelect: 'none',
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
      <button
        type="button"
        aria-label="decrease"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - step))}
        style={{ ...btnBase, opacity: value <= min ? 0.35 : 1 }}
      >−</button>
      <span style={{ fontSize: 12, fontVariantNumeric: 'lining-nums', minWidth: 36, textAlign: 'center', color: 'var(--color-ink)' }}>
        ${value}M
      </span>
      <button
        type="button"
        aria-label="increase"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + step))}
        style={{ ...btnBase, opacity: value >= max ? 0.35 : 1 }}
      >+</button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
export default function ScalingCalculator() {
  const [revM, setRevM]                   = useState(80);
  const [capM, setCapM]                   = useState(27);       // global default + pod-count seed
  const [showAdvanced, setShowAdvanced]   = useState(false);
  // per-pod capacity overrides keyed by 1-based pod index
  const [podCapOverrides, setPodCapOverrides] = useState<Record<number, number>>({});

  const org         = computeOrg(revM, capM);
  const revShare    = revM / org.pods;                          // equal revenue share per pod

  // Resolve each pod's capacity (override or global default)
  const podCap  = (idx: number) => podCapOverrides[idx] ?? capM;
  const podUtil = (idx: number) => Math.round((revShare / podCap(idx)) * 100);

  // Total modelled capacity and gap
  const totalModeledCap = Array.from({ length: org.pods }, (_, i) => podCap(i + 1))
    .reduce((sum, c) => sum + c, 0);
  const capacityGap  = revM - totalModeledCap;
  const hasGap       = capacityGap > 0;

  function updatePodCap(idx: number, val: number) {
    setPodCapOverrides(prev => ({ ...prev, [idx]: val }));
  }

  // Hero ceiling stat uses default cap
  const ceilingPods   = Math.ceil(500 / capM);
  const revFill       = ((revM - 25) / 475) * 100;
  const capFill       = ((capM - 18) / 22) * 100;
  const revenueGrowth = revM === 80 ? 'current' : revM > 80 ? `+${Math.round((revM / 80 - 1) * 100)}% vs today` : '';
  const podDelta      = org.pods === 3 ? 'current' : org.pods > 3 ? `+${org.pods - 3} new` : '';

  const callouts: { label: string; tone: string }[] = [];
  if (org.pods >= 4)  callouts.push({ label: '4th pod online',          tone: 'info' });
  if (org.pods >= 5)  callouts.push({ label: 'Eastern expansion',        tone: 'info' });
  if (org.vps >= 3)   callouts.push({ label: '3rd VP added',             tone: 'success' });
  if (org.divisions >= 2) callouts.push({ label: `${org.divisions} regional divisions`, tone: 'success' });
  if (org.vps >= 4)   callouts.push({ label: 'COO layer needed',         tone: 'warning' });
  if (org.pods >= 10) callouts.push({ label: 'National GC tier',         tone: 'success' });
  if (org.pods >= 15) callouts.push({ label: 'ENR Top 100 territory',    tone: 'success' });

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="hero-texture bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="container-page py-16 md:py-24">
          <p className="eyebrow mb-4" style={{ color: 'rgba(244,239,231,0.55)' }}>Growth modeling</p>
          <h1
            className="font-display hero-heading mb-5"
            style={{ color: 'var(--color-paper)', fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em', fontWeight: 400 }}
          >
            Dream big.<br />Watch it scale.
          </h1>
          <p
            className="hero-sub max-w-[38rem]"
            style={{ color: 'rgba(244,239,231,0.70)', fontSize: '1.125rem', lineHeight: 1.6 }}
          >
            Set a revenue target, then tune each pod's capacity individually. The org responds
            in real time — and flags any gap between what the pods can handle and what the
            revenue dial demands.
          </p>
          <div
            className="mt-10 inline-flex items-center gap-6 rounded-xl px-6 py-4"
            style={{ border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.05)' }}
          >
            <div>
              <div style={{ fontSize: '0.6875rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 3 }}>Today</div>
              <div style={{ fontSize: '1.375rem', fontWeight: 500, fontVariantNumeric: 'lining-nums' }}>$80M · 3 pods</div>
            </div>
            <div style={{ width: 1, height: '2.25rem', background: 'rgba(255,255,255,0.15)' }} />
            <div>
              <div style={{ fontSize: '0.6875rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 3 }}>Ceiling modeled</div>
              <div style={{ fontSize: '1.375rem', fontWeight: 500, fontVariantNumeric: 'lining-nums' }}>${'500M'} · {ceilingPods} pods</div>
            </div>
          </div>

          {/* Reactive staff-count chips — update as pod count changes */}
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              { label: 'Field Operations Managers', count: org.pods },
              { label: 'Senior Project Managers',   count: org.pods },
              { label: 'Field Staff',               count: org.pods * FIELD_PER_POD },
              { label: 'Office Staff',              count: org.pods * OFFICE_PER_POD },
            ].map(({ label, count }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full px-3.5 py-1.5"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <span
                  className="font-display"
                  style={{ fontSize: '1rem', fontWeight: 500, fontVariantNumeric: 'lining-nums', color: 'var(--color-paper)', lineHeight: 1 }}
                >
                  {count}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(244,239,231,0.55)', lineHeight: 1 }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Calculator ───────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-paper-2)] min-h-[50vh]">
        <div className="container-page py-12 md:py-16">
          <div
            className="mx-auto rounded-2xl bg-[var(--color-paper)]"
            style={{ border: '0.5px solid rgba(26,24,22,0.12)', maxWidth: 840 }}
          >

            {/* Revenue slider */}
            <div className="p-6 md:p-8" style={{ borderBottom: '0.5px solid rgba(26,24,22,0.10)' }}>
              <div className="flex items-center gap-4 mb-5">
                <label htmlFor="rev-slider" className="text-sm text-[var(--color-mute)] shrink-0" style={{ minWidth: '8rem' }}>
                  Annual revenue
                </label>
                <input
                  id="rev-slider" type="range" min={25} max={500} step={5} value={revM}
                  onChange={e => setRevM(Number(e.target.value))}
                  className="calc-slider flex-1"
                  style={{ '--fill': `${revFill}%` } as React.CSSProperties}
                  aria-valuetext={`$${revM}M`}
                />
                <span className="font-medium tabular-nums shrink-0 text-[var(--color-ink)]"
                  style={{ minWidth: '4rem', textAlign: 'right', fontSize: '1.0625rem', fontVariantNumeric: 'lining-nums' }}>
                  ${revM}M
                </span>
              </div>

              {/* Advanced: default pod capacity (seeds new pods + drives pod count) */}
              <button
                type="button"
                onClick={() => setShowAdvanced(v => !v)}
                className="text-xs text-[var(--color-mute)] flex items-center gap-1.5 hover:text-[var(--color-ink)] transition-colors"
                aria-expanded={showAdvanced}
              >
                <span style={{ fontSize: 8 }}>{showAdvanced ? '▾' : '▸'}</span>
                Advanced: default pod capacity
              </button>
              {showAdvanced && (
                <div className="flex items-center gap-4 mt-3">
                  <label htmlFor="cap-slider" className="text-sm text-[var(--color-mute)] shrink-0" style={{ minWidth: '8rem' }}>
                    Default per pod
                  </label>
                  <input
                    id="cap-slider" type="range" min={18} max={40} step={1} value={capM}
                    onChange={e => { setCapM(Number(e.target.value)); setPodCapOverrides({}); }}
                    className="calc-slider flex-1"
                    style={{ '--fill': `${capFill}%` } as React.CSSProperties}
                    aria-valuetext={`$${capM}M`}
                  />
                  <span className="font-medium tabular-nums shrink-0 text-[var(--color-ink)]"
                    style={{ minWidth: '4rem', textAlign: 'right', fontSize: '1.0625rem', fontVariantNumeric: 'lining-nums' }}>
                    ${capM}M
                  </span>
                </div>
              )}
            </div>

            {/* Stats grid */}
            <div className="p-6 md:p-8" style={{ borderBottom: '0.5px solid rgba(26,24,22,0.10)' }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Revenue target',   value: `$${revM}M`,       sub: revenueGrowth },
                  { label: 'Active pods',       value: String(org.pods),  sub: podDelta },
                  { label: 'Total headcount',   value: `~${org.total}`,   sub: `${org.pods} × ${POD_HEADCOUNT} + exec` },
                  { label: 'Modeled capacity',  value: `$${totalModeledCap}M`,
                    sub: hasGap ? `$${capacityGap}M gap` : 'fully covered',
                    warn: hasGap },
                ].map(({ label, value, sub, warn }) => (
                  <div key={label} className="rounded-xl p-4"
                    style={{ background: warn ? toneStyles.danger.bg : 'var(--color-paper-2)', transition: 'background 0.2s' }}>
                    <div className="text-xs mb-1.5" style={{ color: warn ? toneStyles.danger.text : 'var(--color-mute)' }}>{label}</div>
                    <div className="font-display" style={{ fontSize: '1.5rem', fontWeight: 400, lineHeight: 1.1, fontVariantNumeric: 'lining-nums', color: warn ? toneStyles.danger.text : 'var(--color-ink)' }}>
                      {value}
                    </div>
                    {sub && (
                      <div className="text-xs mt-1" style={{ color: warn ? toneStyles.danger.text : 'var(--color-mute)', opacity: warn ? 1 : 0.7, fontWeight: warn ? 500 : 400 }}>
                        {sub}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Capacity gap banner ────────────────────────────────────── */}
            {hasGap && (
              <div
                className="mx-6 md:mx-8 mt-5 rounded-xl px-4 py-3.5 flex items-start gap-3"
                style={{ background: toneStyles.danger.bg, border: `1px solid #f7c1c1` }}
                role="alert"
              >
                <span style={{ fontSize: 16, lineHeight: 1, marginTop: 1, color: toneStyles.danger.text }}>⚠</span>
                <div>
                  <div className="text-sm font-medium" style={{ color: toneStyles.danger.text }}>
                    Capacity gap of ${capacityGap}M
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: toneStyles.danger.text, opacity: 0.8 }}>
                    Pods are modeled at ${totalModeledCap}M combined capacity but the revenue target is ${revM}M.
                    Increase individual pod capacities below, or add pods via the revenue dial.
                  </div>
                </div>
              </div>
            )}

            {/* Exec layer */}
            <div className="px-6 md:px-8 pt-5">
              <div className="rounded-xl p-4 mb-4" style={{ border: '0.5px solid rgba(26,24,22,0.10)' }}>
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div>
                    <div className="eyebrow mb-1.5">Executive layer</div>
                    <div className="text-sm text-[var(--color-ink)]">
                      Founder + President · {org.vps} VPs · {org.corporate} corporate
                    </div>
                    {org.divisions > 1 && (
                      <div className="text-xs text-[var(--color-mute)] mt-1">{org.divisions} regional divisions</div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-0.5">
                    {Array.from({ length: org.vps }).map((_, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-md text-[var(--color-mute)]"
                        style={{ background: 'var(--color-paper-2)' }}>VP</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Pod grid ──────────────────────────────────────────────── */}
            <div className="px-6 md:px-8">
              <div className="grid gap-3 mb-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))' }}>
                {Array.from({ length: org.pods }).map((_, i) => {
                  const idx    = i + 1;
                  const isNew  = idx > 3 && revM > 80;
                  const cap    = podCap(idx);
                  const util   = podUtil(idx);
                  const uc     = utilColor(util);
                  const ub     = utilBg(util);
                  const fillPct = Math.min(util, 130);
                  const overCapacity = util > 100;

                  return (
                    <div
                      key={idx}
                      className="rounded-xl p-3.5"
                      style={{
                        background: 'var(--color-paper)',
                        border: overCapacity
                          ? `1.5px solid ${toneStyles.danger.bg}`
                          : isNew
                            ? '2px solid #185fa5'
                            : '0.5px solid rgba(26,24,22,0.12)',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      {/* Header: pod name + revenue share */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[var(--color-ink)]">Pod {idx}</span>
                        <span className="text-xs text-[var(--color-mute)] tabular-nums">${revShare.toFixed(1)}M rev share</span>
                      </div>

                      {/* Capacity stepper */}
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-xs text-[var(--color-mute)]">Capacity</span>
                        <Stepper
                          value={cap}
                          onChange={v => updatePodCap(idx, v)}
                        />
                      </div>

                      {/* Utilisation bar */}
                      <div className="rounded-full mb-2 overflow-hidden"
                        style={{ height: 3, background: 'var(--color-paper-2)' }}>
                        <div style={{ height: '100%', width: `${fillPct}%`, background: uc, transition: 'width 0.2s ease' }} />
                      </div>
                      <span className="inline-block text-xs px-2 py-0.5 rounded-md mb-2.5"
                        style={{ background: ub, color: uc }}>
                        {util}% capacity
                      </span>

                      {/* Staffing breakdown */}
                      <div className="eyebrow mb-1" style={{ fontSize: '0.625rem' }}>Leadership</div>
                      <div className="text-xs leading-relaxed text-[var(--color-ink)] mb-2">
                        <div>Field Operations Manager</div>
                        <div>Senior Project Manager</div>
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

            {/* Callout chips + org-stage milestones */}
            {callouts.length > 0 && (
              <div className="px-6 md:px-8 pt-2 pb-6 md:pb-8"
                style={{ borderTop: '0.5px solid rgba(26,24,22,0.10)', marginTop: '0.25rem' }}>
                <div className="pt-4 flex flex-wrap gap-2">
                  {callouts.map(({ label, tone }) => (
                    <span key={label} className="text-xs px-2.5 py-1 rounded-md"
                      style={{ background: toneStyles[tone].bg, color: toneStyles[tone].text }}>
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

      <style>{`
        .calc-slider {
          -webkit-appearance: none; appearance: none;
          height: 4px;
          background: linear-gradient(to right, var(--color-accent) var(--fill), var(--color-paper-2) var(--fill));
          border-radius: 2px; outline: none; cursor: pointer;
        }
        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--color-ink); cursor: pointer;
          border: 2.5px solid var(--color-paper);
          box-shadow: 0 0 0 1.5px var(--color-ink);
        }
        .calc-slider::-moz-range-thumb {
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--color-ink); cursor: pointer;
          border: 2.5px solid var(--color-paper);
          box-shadow: 0 0 0 1.5px var(--color-ink);
        }
      `}</style>
    </>
  );
}
