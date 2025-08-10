import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  speedSec?: number;
  className?: string;
};

export const Marquee = ({ items, speedSec = 28, className }: MarqueeProps) => {
  const trackStyle = { animation: `marquee ${speedSec}s linear infinite` } as const;

  const Track = ({ ariaHidden }: { ariaHidden?: boolean }) => (
    <div
      className={cn(
        "flex items-center gap-4 py-3 px-4 text-muted-foreground text-base md:text-lg font-medium",
        "[animation-play-state:running] group-hover:[animation-play-state:paused]"
      )}
      style={trackStyle}
      aria-hidden={ariaHidden}
    >
      {items.map((item) => (
        <span
          key={item}
          className={cn(
            "whitespace-nowrap px-3 py-1 rounded-full border",
            "bg-background/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-colors",
            "hover:bg-background"
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("relative overflow-hidden border rounded-xl bg-card/70 group", className)}>
      <div className="whitespace-nowrap flex min-w-[200%]">
        <Track />
        <Track ariaHidden />
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
};

export default Marquee;