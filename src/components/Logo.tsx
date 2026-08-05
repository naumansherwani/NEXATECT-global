import logoAsset from "@/assets/nexatect-logo.jpg.asset.json";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "hero";
  className?: string;
  showTagline?: boolean;
  showName?: boolean;
}

const sizeMap = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-14 h-14",
  xl: "w-18 h-18",
  "2xl": "w-24 h-24",
  hero: "w-32 h-32",
};

const textSizeMap = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
  "2xl": "text-4xl",
  hero: "text-5xl",
};

const Logo = ({ size = "md", className, showName = false, showTagline = false }: LogoProps) => (
  <div className={`flex items-center gap-3 ${className || ""}`}>
    <img
      src={logoAsset.url}
      alt="NEXATECT"
      className={`${sizeMap[size]} shrink-0 object-contain rounded-md`}
      loading="lazy"
      width={512}
      height={512}
    />
    {showName && (
      <div className="flex flex-col">
        <span className={`${textSizeMap[size]} font-extrabold uppercase tracking-[0.14em] leading-none bg-gradient-to-r from-[hsl(35,34%,68%)] to-[hsl(35,45%,82%)] bg-clip-text text-transparent`}>
          Nexatect
        </span>
        {showTagline && (
          <span className="text-[11px] font-light tracking-[0.14em] mt-1 uppercase text-[hsl(35,34%,68%)]/70">
            Autonomous Revenue Infrastructure
          </span>
        )}
      </div>
    )}
  </div>
);

export default Logo;
