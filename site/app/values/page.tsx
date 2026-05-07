import { values } from '@/lib/values';
import ValueBand from '@/components/ValueBand';

export const metadata = {
  title: 'Values — DCC Operating System',
};


export default function ValuesIndexPage() {
  return (
    <>
      {/* Page header */}
      <section className="container-page pt-14 md:pt-24 pb-10 md:pb-12">
        <p className="eyebrow">The Framework</p>
        <h1 className="mt-3 font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] max-w-[20ch]">
          Five values. Ten signature behaviors.
        </h1>
        <div className="mt-6 h-px w-full bg-[var(--color-accent)] max-w-[120px]" aria-hidden />
        <p className="mt-8 max-w-[60ch] text-[1.0625rem] leading-[1.6]">
          Each value has two behaviors. A Daily Practice — the habit that builds the muscle. A Defining
          Moment — what you do when it’s hard. The same in Carlsbad, New York, and Honolulu, on a $500K
          tenant improvement and a $30M flagship.
        </p>
      </section>

      {/* Photo break: NYC skyline */}
      <div className="relative w-full h-[200px] md:h-[280px] lg:h-[360px] overflow-hidden">
        <img
          src="/images/photo-values-hero.jpg"
          alt="Looking up at NYC skyscrapers against a vivid blue sky"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--color-ink)] opacity-20" />
      </div>

      {/* Pivotal vs Peripheral */}
      <section className="container-page border-t border-t-[var(--color-rule)] py-16">
        <p className="eyebrow mb-8">Pivotal vs. Peripheral</p>
        <div className="grid grid-cols-1 gap-px bg-[var(--color-rule)] md:grid-cols-2">
          <div className="bg-[var(--color-paper)] p-6 md:p-10">
            <h2 className="font-display text-[1.75rem] leading-[1.2] tracking-[-0.01em]">
              Pivotal Values
            </h2>
            <p className="mt-3 eyebrow">Tight — zero deviation tolerated</p>
            <p className="mt-5 text-[1.0625rem] leading-[1.6]">
              Non-negotiable. Company-wide. The same in Carlsbad, New York, and Honolulu. Set by
              executive leadership. Every employee must embody these to remain in good standing.
            </p>
          </div>
          <div className="bg-[var(--color-paper)] p-6 md:p-10">
            <h2 className="font-display text-[1.75rem] leading-[1.2] tracking-[-0.01em]">
              Peripheral Values
            </h2>
            <p className="mt-3 eyebrow">Loose — autonomy within boundaries</p>
            <p className="mt-5 text-[1.0625rem] leading-[1.6]">
              Desirable, adaptable. Pod-specific. Communication styles, celebration rituals,
              problem-solving approaches, mentorship practices. These are what make each pod
              distinctive.
            </p>
          </div>
        </div>
      </section>

      {/* Pivotal values — section header */}
      <section className="container-page border-t border-t-[var(--color-rule)] pt-16 pb-4">
        <p className="eyebrow mb-2">The Five Pivotal Values</p>
        <h2 className="font-display text-[2rem] leading-[1.2] tracking-[-0.01em] max-w-[40ch]">
          Non-negotiable. Company-wide.
        </h2>
        <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-[1.6]">
          Each value below has two behaviors — a Daily Practice and a Defining Moment — and shows
          what it looks like in the field and in the office.
        </p>
      </section>

      {/* Five value bands */}
      <section className="container-page py-12">
        {values.map((value, index) => (
          <ValueBand key={value.slug} value={value} index={index} />
        ))}
      </section>
    </>
  );
}
