type GaugeProps = {
  value: number;
  color?: string;
  showLabels?: boolean;
  min?: string;
  max?: string;
};

const TICKS = 40;
const CENTER = 100;
const R = 80;

export function Gauge({
  value,
  color = "#ef4d23",
  showLabels = false,
  min,
  max,
}: GaugeProps) {
  const activeCount = Math.round((value / 100) * TICKS);

  return (
    <div className="mx-auto w-full" style={{ maxWidth: 260 }}>
      <svg viewBox="0 0 200 120" className="w-full">
        {Array.from({ length: TICKS }).map((_, i) => {
          const angle = Math.PI + (i / (TICKS - 1)) * Math.PI;
          const cos = Math.cos(angle);
          const sin = Math.sin(angle);
          const isActive = i < activeCount;
          return (
            <line
              key={i}
              x1={CENTER + cos * (R - 10)}
              y1={CENTER + sin * (R - 10)}
              x2={CENTER + cos * R}
              y2={CENTER + sin * R}
              stroke={isActive ? color : "#d4d4d8"}
              strokeWidth={2.5}
              strokeLinecap="round"
            />
          );
        })}
        <text
          x={100}
          y={105}
          textAnchor="middle"
          fontSize={22}
          fontWeight={600}
          fill="currentColor"
        >
          {value}%
        </text>
      </svg>
      {showLabels ? (
        <div
          className="flex justify-between text-neutral-500"
          style={{ fontSize: 11 }}
        >
          <span>{min}</span>
          <span>{max}</span>
        </div>
      ) : null}
    </div>
  );
}

export default Gauge;
