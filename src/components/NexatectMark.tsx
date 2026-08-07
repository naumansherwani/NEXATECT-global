interface MarkProps {
  className?: string;
}

/**
 * NEXATECT monogram — cinematic build: navy stems with a champagne-gold
 * ribbon, soft gold bloom, bevelled highlights and a thin orbit ring.
 */
const NexatectMark = ({ className }: MarkProps) => (
  <svg viewBox="-6 -6 112 112" className={className} role="img" aria-label="NEXATECT logo">
    <defs>
      <linearGradient id="nx-gold" gradientUnits="userSpaceOnUse" x1="30" y1="20" x2="75" y2="85">
        <stop offset="0%" stopColor="#FFF3DC" />
        <stop offset="35%" stopColor="#EEDCBC" />
        <stop offset="62%" stopColor="#CBB393" />
        <stop offset="100%" stopColor="#8E6F49" />
      </linearGradient>
      <linearGradient id="nx-navy" gradientUnits="userSpaceOnUse" x1="10" y1="10" x2="90" y2="90">
        <stop offset="0%" stopColor="#5E90CC" />
        <stop offset="45%" stopColor="#2A4E7E" />
        <stop offset="100%" stopColor="#152B49" />
      </linearGradient>
      <linearGradient id="nx-ring" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#CBB393" stopOpacity="0.9" />
        <stop offset="45%" stopColor="#CBB393" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#5E90CC" stopOpacity="0.55" />
      </linearGradient>
      <filter id="nx-bloom" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="3.2" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Cinematic orbit ring */}
    <circle cx="50" cy="50" r="53" fill="none" stroke="url(#nx-ring)" strokeWidth="1.6" />
    <g filter="url(#nx-bloom)">
      {/* Navy stems with bevel highlight */}
      <g fill="url(#nx-navy)">
        <rect x="10" y="14" width="16" height="72" rx="2" />
        <rect x="74" y="14" width="16" height="72" rx="2" />
      </g>
      <g fill="#8FB8E6" opacity="0.35">
        <rect x="10" y="14" width="3" height="72" rx="1.5" />
        <rect x="74" y="14" width="3" height="72" rx="1.5" />
      </g>
      {/* Champagne-gold diagonal ribbon linking the stems */}
      <path d="M26 14 L42 14 L90 82 L90 86 L74 86 L74 82 L26 20 Z" fill="url(#nx-gold)" />
      <path d="M26 14 L31 14 L79 84 L74 84 Z" fill="#FFF6E4" opacity="0.4" />
    </g>
  </svg>
);

export default NexatectMark;
