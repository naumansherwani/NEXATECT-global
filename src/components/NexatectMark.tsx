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
        <stop offset="0%" stopColor="#4C7CB8" />
        <stop offset="55%" stopColor="#2A4E7E" />
        <stop offset="100%" stopColor="#1F385C" />
      </linearGradient>
    </defs>
    {/* Navy stems */}
    <g fill="url(#nx-navy)">
      <rect x="10" y="14" width="16" height="72" rx="2" />
      <rect x="74" y="14" width="16" height="72" rx="2" />
    </g>
    {/* Champagne-gold diagonal ribbon linking the stems */}
    <path d="M26 14 L42 14 L90 82 L90 86 L74 86 L74 82 L26 20 Z" fill="url(#nx-gold)" />
  </svg>
);

export default NexatectMark;
