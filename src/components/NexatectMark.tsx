interface MarkProps {
  className?: string;
}

/** NEXATECT monogram — interlocked navy N + champagne gold chevron. Vector, no raster box. */
const NexatectMark = ({ className }: MarkProps) => (
  <svg viewBox="0 0 64 64" className={className} role="img" aria-label="NEXATECT">
    <defs>
      <linearGradient id="nx-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#E4D3B6" />
        <stop offset="55%" stopColor="#CBB393" />
        <stop offset="100%" stopColor="#A98C63" />
      </linearGradient>
      <linearGradient id="nx-navy" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2C4E7C" />
        <stop offset="100%" stopColor="#1F385C" />
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="62" height="62" rx="14" fill="url(#nx-navy)" stroke="#CBB393" strokeOpacity="0.35" />
    {/* N uprights + diagonal */}
    <path d="M13 51V13h6l17 26V13h6v38h-6L19 27v24z" fill="url(#nx-gold)" />
    {/* gold chevron accent */}
    <path d="M26 19l6 20 6-20h-4.6L32 28l-1.4-9z" fill="#F3E6CE" opacity="0.9" />
  </svg>
);

export default NexatectMark;
