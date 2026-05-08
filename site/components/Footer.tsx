export default function Footer() {
  return (
    <footer className="mt-32 border-t border-t-[var(--color-rule)]">
      <div className="container-page py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <img
            src="/images/dcc-logo.png"
            alt="Dickinson Cameron Construction"
            className="h-10 w-auto opacity-40 [mix-blend-mode:multiply]"
          />
          <div className="flex flex-col gap-2 text-[0.9375rem] text-[var(--color-mute)] sm:flex-row sm:items-baseline sm:gap-8">
            <p>Brian Naliboff, President. April 2026.</p>
            <p className="font-mono text-[0.8125rem] tracking-[0.04em] uppercase">
              33 years <span aria-hidden>·</span> 1,500+ projects <span aria-hidden>·</span> 85% repeat clients
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
