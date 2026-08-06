import NexatectMark from "@/components/NexatectMark";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "hero";
  className?: string;
  showTagline?: boolean;
  showName?: boolean;
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
  "2xl": "w-20 h-20",
  hero: "w-28 h-28",
};

const textSizeMap = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
  "2xl": "text-4xl",
  hero: "text-5xl",
};

const Logo = ({ size = "md", className, showName = false, showTagline = false }: LogoProps) => (
  <div className={`flex items-center gap-3 ${className || ""}`}>
    <NexatectMark className={`${sizeMap[size]} shrink-0`} />
    {showName && (
      <div className="flex flex-col">
        <span className={`${textSizeMap[size]} font-extrabold uppercase tracking-[0.22em] leading-none text-primary`}>
          Nexatect
        </span>
        {showTagline && (
          <span className="text-[10px] font-medium tracking-[0.28em] mt-1.5 uppercase text-primary/60">
            Autonomous Revenue Infrastructure
          </span>
        )}
      </div>
    )}
  </div>
);

export default Logo;
