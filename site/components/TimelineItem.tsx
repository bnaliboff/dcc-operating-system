type Props = {
  date: string;
  title: string;
  description?: string;
  isCurrent?: boolean;
};

export default function TimelineItem({ date, title, description, isCurrent }: Props) {
  return (
    <li
      className={`relative flex-1 border-t pt-5 ${
        isCurrent ? 'border-t-2 border-t-[var(--color-accent)]' : 'border-t-[var(--color-rule)]'
      }`}
    >
      {isCurrent && (
        <span
          className="absolute -top-[5px] left-0 inline-block h-[9px] w-[9px] -translate-y-1/2 rounded-full bg-[var(--color-accent)]"
          aria-hidden
        />
      )}
      <div
        className={`eyebrow ${
          isCurrent ? 'text-[var(--color-accent)]' : 'text-[var(--color-mute)]'
        }`}
      >
        {date}
        {isCurrent && <span className="ml-2 normal-case tracking-normal">— current</span>}
      </div>
      <h3 className="mt-1 font-display text-[1.25rem] leading-[1.3] tracking-[-0.005em]">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-[0.9375rem] leading-[1.55] text-[var(--color-mute)]">
          {description}
        </p>
      )}
    </li>
  );
}
