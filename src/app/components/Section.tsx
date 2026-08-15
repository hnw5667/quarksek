import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 shadow-sm"
      style={{ fontSize: 13 }}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-[#ef4d23]" />
      {children}
    </div>
  );
}

export function Heading({
  plain,
  italic,
  after,
}: {
  plain: string;
  italic?: string;
  after?: string;
}) {
  return (
    <h2
      className="mt-5 max-w-3xl text-neutral-900"
      style={{
        fontSize: "clamp(28px, 5.5vw, 48px)",
        lineHeight: 1.08,
        fontWeight: 500,
        letterSpacing: "-0.02em",
      }}
    >
      {plain}{" "}
      {italic ? (
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          {italic}
        </span>
      ) : null}{" "}
      {after}
    </h2>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-3 py-14 sm:px-4 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-[1100px]">{children}</div>
    </section>
  );
}

export default Section;
