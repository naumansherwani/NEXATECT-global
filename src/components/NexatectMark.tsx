interface MarkProps {
  className?: string;
}

/** NEXATECT monogram — navy N with interlocked champagne-gold chevron. Transparent, no box. */
const NexatectMark = ({ className }: MarkProps) => (
  <svg viewBox="0 0 64 64" className={className} role="img" aria-label="NEXATECT">
    <defs>
      <linearGradient id="nx-gold" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="#E4D3B6" />
        <stop offset="55%" stopColor="#CBB393" />
        <stop offset="100%" stopColor="#A98C63" />
      </linearGradient>
      <linearGradient id="nx-navy" x1="0" y1="0" x2="0.6" y2="1">
        <stop offset="0%" stopColor="#2C4E7C" />
        <stop offset="100%" stopColor="#1B3050" />
      </linearGradient>
    </defs>
    {/* Navy N — left upright, diagonal, right upright */}
    <path
      d="M5 57V7h9l24 33V7h9v50h-9L14 25v32z"
      fill="url(#nx-navy)"
    />
    {/* Champagne gold chevron, interlocked over the N */}
    <path
      d="M32 10L47 57h-9l-6-20-6 20h-9z"
      fill="url(#nx-gold)"
    />
    {/* gold highlight edge on the peak */}
    <path d="M32 10l4 12h-8z" fill="#F3E6CE" opacity="0.85" />
  </svg>
);

export default NexatectMark;
