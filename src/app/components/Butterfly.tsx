export function Butterfly({
  className = "",
  color = "#ef4d23",
  opacity = 1,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      style={{ opacity }}
      fill="none"
    >
      <path
        d="M24 24C18 10 6 8 5 15c-1 7 8 11 19 9Z"
        fill={color}
        fillOpacity={0.85}
      />
      <path
        d="M24 24C30 10 42 8 43 15c1 7-8 11-19 9Z"
        fill={color}
        fillOpacity={0.55}
      />
      <path
        d="M24 24C19 36 9 41 7 35c-2-6 6-11 17-11Z"
        fill={color}
        fillOpacity={0.45}
      />
      <path
        d="M24 24C29 36 39 41 41 35c2-6-6-11-17-11Z"
        fill={color}
        fillOpacity={0.7}
      />
      <rect x="23" y="14" width="2" height="21" rx="1" fill={color} />
    </svg>
  );
}

export default Butterfly;
