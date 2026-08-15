const stats = [
  { value: "3.4x", label: "more coverage per campaign" },
  { value: "12 hrs", label: "saved per account, weekly" },
  { value: "98%", label: "client retention across 2025" },
  { value: "2M+", label: "verified media contacts" },
];

export function Stats() {
  return (
    <div className="px-3 sm:px-4">
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-neutral-200/70 bg-white px-5 py-6 text-left"
          >
            <div
              className="text-neutral-900"
              style={{ fontSize: "clamp(26px, 6vw, 36px)", fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              {s.value}
            </div>
            <div className="mt-1 text-neutral-500" style={{ fontSize: 13, lineHeight: 1.5 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
