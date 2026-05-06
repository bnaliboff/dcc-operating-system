type BehaviorBlockProps = {
  label: string;
  name: string;
  description: string;
  example: string;
};

export default function BehaviorBlock({ label, name, description, example }: BehaviorBlockProps) {
  return (
    <article className="border-t border-t-[var(--color-rule)] pt-10">
      <p className="eyebrow">{label}</p>
      <h2 className="mt-3 font-display text-[1.75rem] leading-[1.25] tracking-[-0.01em]">
        {name}
      </h2>
      <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-[1.6] text-pretty">
        {description}
      </p>
      <div className="mt-8 border-l-2 border-l-[var(--color-accent)] pl-6">
        <p className="eyebrow mb-2">In practice</p>
        <p className="text-[1.0625rem] leading-[1.6] text-[var(--color-mute)]">{example}</p>
      </div>
    </article>
  );
}
