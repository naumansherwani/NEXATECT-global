interface MarkProps {
  className?: string;
}

/**
 * NEXATECT original mark — navy hex core (network node) with a champagne-gold
 * "N" cut as a continuous ribbon, plus two orbit nodes. Pure vector.
 */
const NexatectMark = ({ className }: MarkProps) => (
  <svg viewBox="0 0 64 64" className={className} role="img" aria-label="NEXATECT">
    <defs>
      <linearGradient id="nx-gold" x1="12" y1="10" x2="52" y2="54" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F0E2C6" />
        <stop offset="45%" stopColor="#CBB393" />
        <stop offset="100%" stopColor="#9C7F55" />
      </linearGradient>
      <linearGradient id="nx-navy" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#33598C" />
        <stop offset="60%" stopColor="#1F385C" />
        <stop offset="100%" stopColor="#132844" />
      </linearGradient>
    </defs>

    {/* hex core */}
    <path
      d="M32 3.5 55.5 17v30L32 60.5 8.5 47V17z"
      fill="url(#nx-navy)"
      stroke="url(#nx-gold)"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />

    {/* gold N ribbon */}
    <path
      d="M21 45V19.5l22 25V19"
      fill="none"
      stroke="url(#nx-gold)"
      strokeWidth="5.2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />

    {/* orbit nodes */}
    <circle cx="21" cy="19.5" r="3.1" fill="url(#nx-gold)" />
    <circle cx="43" cy="44.5" r="3.1" fill="url(#nx-gold)" />
  </svg>
);

export default NexatectMark;
