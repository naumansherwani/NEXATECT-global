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
    {/* N uprights + diagonal */}
    <path d="M10 54V10h7l20 30V10h7v44h-7L17 24v30z" fill="url(#nx-navy)" />
    {/* gold chevron overlay */}
    <path d="M20 16l12 34 12-34h-8l-4 13-4-13z" fill="url(#nx-gold)" opacity="0.95" />
  </svg>
);

export default NexatectMark;
