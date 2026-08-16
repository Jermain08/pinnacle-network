type NetworkTopologyProps = {
  className?: string;
  variant?: "hero" | "compact";
};

const NODES: Array<{ x: number; y: number; r: number; delay: number }> = [
  { x: 80, y: 120, r: 4, delay: 0 },
  { x: 260, y: 60, r: 3, delay: 0.4 },
  { x: 420, y: 160, r: 5, delay: 0.8 },
  { x: 600, y: 90, r: 3, delay: 1.2 },
  { x: 760, y: 200, r: 4, delay: 0.2 },
  { x: 340, y: 260, r: 3, delay: 1.6 },
  { x: 540, y: 300, r: 4, delay: 0.6 },
  { x: 150, y: 260, r: 3, delay: 1.0 },
  { x: 900, y: 130, r: 4, delay: 1.4 },
  { x: 700, y: 320, r: 3, delay: 1.8 },
];

const EDGES: Array<[number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 4], [2, 5], [5, 6],
  [0, 7], [7, 5], [3, 8], [4, 9], [6, 9], [1, 3],
];

export default function NetworkTopology({ className = "", variant = "hero" }: NetworkTopologyProps) {
  const strokeOpacity = variant === "hero" ? 0.35 : 0.5;
  return (
    <svg
      viewBox="0 0 960 380"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {EDGES.map(([a, b], i) => {
        const from = NODES[a];
        const to = NODES[b];
        return (
          <line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="var(--color-signal)"
            strokeOpacity={strokeOpacity}
            strokeWidth={1}
          />
        );
      })}
      {NODES.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r + 6}
            fill="var(--color-signal)"
            opacity={0.08}
          />
          <circle cx={n.x} cy={n.y} r={n.r} fill="var(--color-signal)" opacity={0.9} />
        </g>
      ))}
    </svg>
  );
}