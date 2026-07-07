import SectionReveal from "./SectionReveal";

type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  number,
  eyebrow,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <SectionReveal className={align === "center" ? "text-center" : undefined}>
      <div
        className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="font-[family-name:var(--font-display)] text-sm text-[var(--color-text-dim)]">
          {number}
        </span>
        <span className="h-px w-8 bg-[var(--color-border)]" />
        <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </SectionReveal>
  );
}
