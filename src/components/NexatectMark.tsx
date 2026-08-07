interface MarkProps {
  className?: string;
}

/**
 * NEXATECT monogram — a clean geometric N in navy with a champagne-gold
 * chevron locked into its counter. Balanced, crisp at every size.
 */
const NexatectMark = ({ className }: MarkProps) => (
  <svg viewBox="0 0 100 100" className={className} role="img" aria-label="NEXATECT logo">
    <defs>
      <linearGradient id="nx-gold" gradientUnits="userSpaceOnUse" x1="30" y1="20" x2="75" y2="85">
        <stop offset="0%" stopColor="#EEDCBC" />
        <stop offset="55%" stopColor="#CBB393" />
        <stop offset="100%" stopColor="#9C7D53" />
      </linearGradient>
      <linearGradient id="nx-navy" gradientUnits="userSpaceOnUse" x1="10" y1="10" x2="90" y2="90">
        <stop offset="0%" stopColor="#31578A" />
        <stop offset="55%" stopColor="#1F385C" />
        <stop offset="100%" stopColor="#112542" />
      </linearGradient>
    </defs>
    {/* Navy N: left stem, diagonal, right stem */}
    <g fill="url(#nx-navy)">
      <rect x="10" y="14" width="15" height="72" rx="2" />
      <rect x="75" y="14" width="15" height="72" rx="2" />
      <path d="M25 14 L40 14 L90 86 L75 86 Z" />
    </g>
    {/* Champagne-gold chevron locked in the counter */}
    <path
      d="M50 30 L69 74 L59 74 L50 51 L41 74 L31 74 Z"
      fill="url(#nx-gold)"
    />
  </svg>
);

export default NexatectMark;
