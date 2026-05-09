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
  const corporate = 10 + Math.floor(pods / 3) * 3;
  const execLayer = 2 + vps;
  const total     = pods * POD_HEADCOUNT + execLayer + corporate;
  let stage: string;
  if (pods <= 3) stage = 'Established';
  else if (pods <= 6) stage = 'Growth';
  else if (pods <= 10) stage = 'Multi-division';
  else stage = 'National';
  return { pods, vps, divisions, corporate, execLayer, total, stage };
}

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

// Stepper ─────────────────────────────────────────────────────────────────────
function Stepper({ value, onChange, min = CAP_MIN, max = CAP_MAX, step = 1 }: {
  value: number; onChange: (v: number) => void;
  min?: number; max?: number; step?: number;
}) {
  const btn: React.CSSProperties = {
    // 36×36 on mobile for touch, 26×26 on larger screens via CSS
    width: 36, height: 36, borderRadius: 8,
    border: '0.5px solid rgba(26,24,22,0.18)',
    background: 'var(--color-paper-2)', cursor: 'pointer', fontSize: 16,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    lineHeight: 1, color: 'var(--color-ink)', flexShrink: 0, userSelect: 'none',
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <button type="button" aria-label="decrease" disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - step))}
        style={{ ...btn, opacity: value <= min ? 0.35 : 1 }}>−</button>
      <span style={{ fontSize: 13, fontVariantNumeric: 'lining-nums', minWidth: 40, textAlign: 'center', color: 'var(--color-ink)' }}>
        ${value}M
      </span>
      <button type="button" aria-label="increase" disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + step))}
        style={{ ...btn, opacity: value >= max ? 0.35 : 1 }}>+</button>
    </div>
  );
}

// SliderRow — stacked on mobile, inline on md+ ────────────────────────────────
function SliderRow({ id, label, min, max, step, value, fill, onChange, display }: {
  id: string; label: string; min: number; max: number; step: number;
  value: number; fill: number; onChange: (v: number) => void; display: string;
}) {
  return (
    <div className="mb-5 last:mb-0">
      {/* Label + value always visible together */}
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={id} className="text-sm text-[var(--color-mute)]">{label}</label>
        <span className="font-medium tabular-nums text-[var(--color-ink)] text-sm"
          style={{ fontVariantNumeric: 'lining-nums' }}>
          {display}
        </span>
      </div>
      {/* Slider full-width below */}
      <input
        id={id} type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="calc-slider w-full"
        style={{ '--fill': `${fill}%` } as React.CSSProperties}
        aria-valuetext={display}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
export default function ScalingCalculator() {
  const [revM, setRevM]   = useState(80);
  const [capM, setCapM]   = useState(27);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [podCapOverrides, setPodCapOverrides] = useState<Record<number, number>>({});

  const org      = computeOrg(revM, capM);
  const revShare = revM / org.pods;

  const podCap  = (idx: number) => podCapOverrides[idx] ?? capM;
  const podUtil = (idx: number) => Math.round((revShare / podCap(idx)) * 100);

  const totalModeledCap = Array.from({ length: org.pods }, (_, i) => podCap(i + 1))
    .reduce((sum, c) => sum + c, 0);
  const capacityGap = revM - totalModeledCap;
  const hasGap      = capacityGap > 0;

  function updatePodCap(idx: number, val: number) {
    setPodCapOverrides(prev => ({ ...prev, [idx]: val }));
  }

  const ceilingPods   = Math.ceil(500 / capM);
  const revFill       = ((revM - 25) / 475) * 100;
  const capFill       = ((capM - 18) / 22) * 100;
  const revenueGrowth = revM === 80 ? 'current' : revM > 80 ? `+${Math.round((revM / 80 - 1) * 100)}% vs today` : '';
  const podDelta      = org.pods === 3 ? 'current' : org.pods > 3 ? `+${org.pods - 3} new` : '';

  const callouts: { label: string; tone: string }[] = [];
  if (org.pods >= 4)       callouts.push({ label: '4th pod online',              tone: 'info' });
  if (org.pods >= 5)       callouts.push({ label: 'Eastern expansion',            tone: 'info' });
  if (org.vps >= 3)        callouts.push({ label: '3rd VP added',                 tone: 'success' });
  if (org.divisions >= 2)  callouts.push({ label: `${org.divisions} regional divisions`, tone: 'success' });
  if (org.vps >= 4)        callouts.push({ label: 'COO layer needed',             tone: 'warning' });
  if (org.pods >= 10)      callouts.push({ label: 'National GC tier',             tone: 'success' });
  if (org.pods >= 15)      callouts.push({ label: 'ENR Top 100 territory',        tone: 'success' });

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="hero-texture bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="container-page py-12 md:py-24">
          <p className="eyebrow mb-3 md:mb-4" style={{ color: 'rgba(244,239,231,0.55)' }}>
            Growth modeling
          </p>
          <h1
            className="font-display hero-heading mb-4 md:mb-5"
            style={{ color: 'var(--color-paper)', fontSize: 'clamp(2rem,6vw,4.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em', fontWeight: 400 }}
          >
            Dream big.<br />Watch it scale.
          </h1>
          <p
            className="hero-sub max-w-[38rem]"
            style={{ color: 'rgba(244,239,231,0.70)', fontSize: 'clamp(0.9375rem,2.5vw,1.125rem)', lineHeight: 1.6 }}
          >
            Set a revenue target, then tune each pod's capacity individually.
            The org responds in real time and flags any gap.
          </p>

          {/* Today / Ceiling stat strip — nowrap prevents line-break on small screens */}
          <div
            className="mt-8 md:mt-10 inline-flex items-center gap-4 md:gap-6 rounded-xl px-4 md:px-6 py-3 md:py-4"
            style={{ border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.05)' }}
          >
            <div style={{ whiteSpace: 'nowrap' }}>
              <div style={{ fontSize: '0.625rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 3 }}>Today</div>
              <div style={{ fontSize: 'clamp(1rem,3vw,1.375rem)', fontWeight: 500, fontVariantNumeric: 'lining-nums' }}>$80M · 3 pods</div>
            </div>
            <div style={{ width: 1, height: '2rem', background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
            <div style={{ whiteSpace: 'nowrap' }}>
              <div style={{ fontSize: '0.625rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 3 }}>Ceiling modeled</div>
              <div style={{ fontSize: 'clamp(1rem,3vw,1.375rem)', fontWeight: 500, fontVariantNumeric: 'lining-nums' }}>${'500M'} · {ceilingPods} pods</div>
            </div>
          </div>

          {/* Reactive staff-count chips */}
          <div className="mt-4 md:mt-5 flex flex-wrap gap-2">
            {[
              { label: 'Field Operations Managers', count: org.pods },
              { label: 'Senior Project Managers',   count: org.pods },
              { label: 'Field Staff',               count: org.pods * FIELD_PER_POD },
              { label: 'Office Staff',              count: org.pods * OFFICE_PER_POD },
            ].map(({ label, count }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full px-3 py-1.5"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <span className="font-display"
                  style={{ fontSize: '0.9375rem', fontWeight: 500, fontVariantNumeric: 'lining-nums', color: 'var(--color-paper)', lineHeight: 1 }}>
                  {count}
                </span>
                <span style={{ fontSize: '0.6875rem', color: 'rgba(244,239,231,0.55)', lineHeight: 1 }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Calculator ───────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-paper-2)]">
        <div className="container-page py-8 md:py-16">
          <div
            className="mx-auto rounded-2xl bg-[var(--color-paper)]"
            style={{ border: '0.5px solid rgba(26,24,22,0.12)', maxWidth: 840 }}
          >
            {/* Sliders */}
            <div className="p-5 md:p-8" style={{ borderBottom: '0.5px solid rgba(26,24,22,0.10)' }}>
              <SliderRow
                id="rev-slider" label="Annual revenue"
                min={25} max={500} step={5} value={revM}
                fill={revFill} onChange={setRevM} display={`$${revM}M`}
              />
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
                <div className="mt-3">
                  <SliderRow
                    id="cap-slider" label="Default per pod"
                    min={18} max={40} step={1} value={capM}
                    fill={capFill}
                    onChange={v => { setCapM(v); setPodCapOverrides({}); }}
                    display={`$${capM}M`}
                  />
                </div>
              )}
            </div>

            {/* Stats grid */}
            <div className="p-5 md:p-8" style={{ borderBottom: '0.5px solid rgba(26,24,22,0.10)' }}>
              <div className="grid grid-cols-2 gap-2.5 md:gap-3">
                {[
                  { label: 'Revenue target',  value: `$${revM}M`,            sub: revenueGrowth },
                  { label: 'Active pods',      value: String(org.pods),        sub: podDelta },
                  { label: 'Total headcount',  value: `~${org.total}`,         sub: `${org.pods} × ${POD_HEADCOUNT} + exec` },
                  { label: 'Modeled capacity', value: `$${totalModeledCap}M`,
                    sub: hasGap ? `$${capacityGap}M gap` : 'fully covered', warn: hasGap },
                ].map(({ label, value, sub, warn }) => (
                  <div key={label} className="rounded-xl p-3 md:p-4"
                    style={{ background: warn ? toneStyles.danger.bg : 'var(--color-paper-2)', transition: 'background 0.2s' }}>
                    <div className="text-xs mb-1" style={{ color: warn ? toneStyles.danger.text : 'var(--color-mute)' }}>{label}</div>
                    <div className="font-display"
                      style={{ fontSize: 'clamp(1.125rem,3vw,1.5rem)', fontWeight: 400, lineHeight: 1.1, fontVariantNumeric: 'lining-nums', color: warn ? toneStyles.danger.text : 'var(--color-ink)' }}>
                      {value}
                    </div>
                    {sub && (
                      <div className="text-xs mt-1"
                        style={{ color: warn ? toneStyles.danger.text : 'var(--color-mute)', opacity: warn ? 1 : 0.7, fontWeight: warn ? 500 : 400 }}>
                        {sub}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Gap banner */}
            {hasGap && (
              <div
                className="mx-5 md:mx-8 mt-4 md:mt-5 rounded-xl px-4 py-3 flex items-start gap-3"
                style={{ background: toneStyles.danger.bg, border: '1px solid #f7c1c1' }}
                role="alert"
              >
                <span style={{ fontSize: 15, lineHeight: 1, marginTop: 1, color: toneStyles.danger.text, flexShrink: 0 }}>⚠</span>
                <div>
                  <div className="text-sm font-medium" style={{ color: toneStyles.danger.text }}>
                    Capacity gap of ${capacityGap}M
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: toneStyles.danger.text, opacity: 0.8 }}>
                    Pods cover ${totalModeledCap}M but the revenue target is ${revM}M.
                    Increase pod capacities below or add pods via the revenue dial.
                  </div>
                </div>
              </div>
            )}

            {/* Exec layer */}
            <div className="px-5 md:px-8 pt-4 md:pt-5">
              <div className="rounded-xl p-3.5 md:p-4 mb-4"
                style={{ border: '0.5px solid rgba(26,24,22,0.10)' }}>
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div>
                    <div className="eyebrow mb-1.5">Executive layer</div>
                    <div className="text-sm text-[var(--color-ink)]">
                      Founder + President · {org.vps} VPs · {org.corporate} corporate
                    </div>
                    {org.divisions > 1 && (
                      <div className="text-xs text-[var(--color-mute)] mt-1">
                        {org.divisions} regional divisions
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mt-0.5">
                    {Array.from({ length: org.vps }).map((_, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-md text-[var(--color-mute)]"
                        style={{ background: 'var(--color-paper-2)' }}>VP</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pod grid */}
            <div className="px-5 md:px-8">
              <div
                className="grid gap-2.5 md:gap-3 mb-4 md:mb-5"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}
              >
                {Array.from({ length: org.pods }).map((_, i) => {
                  const idx          = i + 1;
                  const isNew        = idx > 3 && revM > 80;
                  const cap          = podCap(idx);
                  const util         = podUtil(idx);
                  const uc           = utilColor(util);
                  const ub           = utilBg(util);
                  const fillPct      = Math.min(util, 130);
                  const overCapacity = util > 100;

                  return (
                    <div
                      key={idx}
                      className="rounded-xl p-3"
                      style={{
                        background: 'var(--color-paper)',
                        border: overCapacity
                          ? `1.5px solid #f7c1c1`
                          : isNew
                            ? '2px solid #185fa5'
                            : '0.5px solid rgba(26,24,22,0.12)',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-[var(--color-ink)]">Pod {idx}</span>
                        <span className="text-xs text-[var(--color-mute)] tabular-nums">${revShare.toFixed(1)}M</span>
                      </div>

                      {/* Stepper */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-[var(--color-mute)]">Capacity</span>
                        <Stepper value={cap} onChange={v => updatePodCap(idx, v)} />
                      </div>

                      {/* Util bar */}
                      <div className="rounded-full mb-1.5 overflow-hidden"
                        style={{ height: 3, background: 'var(--color-paper-2)' }}>
                        <div style={{ height: '100%', width: `${fillPct}%`, background: uc, transition: 'width 0.2s ease' }} />
                      </div>
                      <span className="inline-block text-xs px-2 py-0.5 rounded-md mb-2.5"
                        style={{ background: ub, color: uc }}>
                        {util}% capacity
                      </span>

                      {/* Staffing detail — hidden on mobile, shown on sm+ */}
                      <div className="hidden sm:block">
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
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Milestone chips */}
            {callouts.length > 0 && (
              <div className="px-5 md:px-8 pt-2 pb-5 md:pb-8"
                style={{ borderTop: '0.5px solid rgba(26,24,22,0.10)', marginTop: '0.25rem' }}>
                <div className="pt-3 md:pt-4 flex flex-wrap gap-2">
                  {callouts.map(({ label, tone }) => (
                    <span key={label} className="text-xs px-2.5 py-1 rounded-md"
                      style={{ background: toneStyles[tone].bg, color: toneStyles[tone].text }}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {callouts.length === 0 && <div className="pb-5 md:pb-6" />}
          </div>
        </div>
      </section>

      <style>{`
        .calc-slider {
          -webkit-appearance: none; appearance: none;
          height: 4px;
          background: linear-gradient(to right, var(--color-accent) var(--fill), var(--color-paper-2) var(--fill));
          border-radius: 2px; outline: none; cursor: pointer;
          display: block; width: 100%;
        }
        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 20px; height: 20px; border-radius: 50%;
          background: var(--color-ink); cursor: pointer;
          border: 2.5px solid var(--color-paper);
          box-shadow: 0 0 0 1.5px var(--color-ink);
        }
        .calc-slider::-moz-range-thumb {
          width: 20px; height: 20px; border-radius: 50%;
          background: var(--color-ink); cursor: pointer;
          border: 2.5px solid var(--color-paper);
          box-shadow: 0 0 0 1.5px var(--color-ink);
        }
        /* Shrink stepper buttons on wider screens */
        @media (min-width: 640px) {
          .stepper-btn { width: 26px !important; height: 26px !important; }
        }
      `}</style>
    </>
  );
}
