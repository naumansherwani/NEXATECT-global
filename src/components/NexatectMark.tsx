interface MarkProps {
  className?: string;
}

/**
 * NEXATECT monogram — navy M/X armature with the champagne-gold A/V ribbon
 * threaded through the centre, matching the sculpted reference mark.
 */
const NexatectMark = ({ className }: MarkProps) => (
  <svg viewBox="-9 -8 122 116" className={className} role="img" aria-label="NEXATECT logo">
    <defs>
      <linearGradient id="nx-gold" gradientUnits="userSpaceOnUse" x1="20" y1="0" x2="80" y2="100">
        <stop offset="0%" stopColor="#EEDCBC" />
        <stop offset="50%" stopColor="#CBB393" />
        <stop offset="100%" stopColor="#9C7D53" />
      </linearGradient>
      <linearGradient id="nx-navy" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="90" y2="100">
        <stop offset="0%" stopColor="#31578A" />
        <stop offset="55%" stopColor="#1F385C" />
        <stop offset="100%" stopColor="#112542" />
      </linearGradient>
    </defs>
    {/* Navy armature: upright, descending valley, rising arm, crossing right leg. */}
    <g stroke="url(#nx-navy)" strokeWidth="17" fill="none">
      <path d="M12 4 V96" />
      <path d="M12 8 L50 96" />
      <path d="M50 96 L84 4" />
      <path d="M64 4 L94 96" />
    </g>
    {/* Champagne-gold chevron and its descending leg. */}
    <path d="M46 4 L64 46 L55 46 L46 25 L37 46 L28 46 Z" fill="url(#nx-gold)" />
    <path d="M28 46 L37 46 L33 96 L20 96 Z" fill="url(#nx-gold)" />
  </svg>
);

export default NexatectMark;
