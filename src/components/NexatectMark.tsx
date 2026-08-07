interface MarkProps {
  className?: string;
}

/** NEXATECT monogram — faithful angular N/V construction with champagne-gold ribbon. */
const NexatectMark = ({ className }: MarkProps) => (
  <svg viewBox="0 0 64 64" className={className} role="img" aria-label="NEXATECT logo">
    <defs>
      <linearGradient id="nx-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F0DFC1" />
        <stop offset="48%" stopColor="#CBB393" />
        <stop offset="100%" stopColor="#9F8057" />
      </linearGradient>
      <linearGradient id="nx-navy" x1="0" y1="0" x2="0.75" y2="1">
        <stop offset="0%" stopColor="#294A76" />
        <stop offset="55%" stopColor="#1F385C" />
        <stop offset="100%" stopColor="#142844" />
      </linearGradient>
      <filter id="nx-depth" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.4" floodColor="#05070A" floodOpacity="0.65" />
      </filter>
    </defs>
    {/* Gold upper ribbon — the narrow folded chevron in the reference mark. */}
    <path
      d="M31.8 7.5 19.5 29.2l6.3 10.2 6.1-11.2 6.9 11.2 6-10.6L34.5 7.5Z"
      fill="url(#nx-gold)"
      stroke="#E4D3B6"
      strokeWidth="0.55"
      filter="url(#nx-depth)"
    />
    {/* Gold lower-left inlay that completes the interlock. */}
    <path
      d="M9 55.5h10.5l7.1-13.1-6.2-12.1L9 50.4Z"
      fill="url(#nx-gold)"
      stroke="#E4D3B6"
      strokeWidth="0.55"
      filter="url(#nx-depth)"
    />
    {/* Navy structural mark: upright, deep centre valley, rising right arm. */}
    <path
      d="M8 7.8h11.1l13 31.6L45 7.8h11L36.7 55.5h-9.4L19 35.7v19.8H8Z"
      fill="url(#nx-navy)"
      stroke="#345781"
      strokeWidth="0.65"
      strokeLinejoin="miter"
      filter="url(#nx-depth)"
    />
    {/* Fine bevels preserve the dimensional metal finish at small sizes. */}
    <path d="M9.7 9.3h8.2l13.9 33.9" fill="none" stroke="#45658B" strokeWidth="0.55" opacity="0.8" />
    <path d="M33 43.2 46 9.3h8" fill="none" stroke="#0E213A" strokeWidth="0.75" opacity="0.72" />
  </svg>
);

export default NexatectMark;
