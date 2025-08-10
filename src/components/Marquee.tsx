import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  speedSec?: number;
}

const defaultItems = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "User Testing",
  "Design Systems",
  "Mobile Design",
  "Web Design",
  "UI Design",
  "UX Design",
  "Figma",
  "Sketch",
  "Adobe XD",
  "InVision",
  "User Interviews",
  "Personas",
  "Journey Mapping",
  "Accessibility",
  "Responsive Design",
  "Visual Design",
  "Information Architecture"
];

const orangeItems = [
  "UI/UX Designer",
  "User Experience",
  "Interface Design",
  "Design Thinking",
  "User-Centered Design"
];

export default function Marquee({ items = defaultItems, speedSec = 20 }: MarqueeProps) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent z-10" />
      
      {/* Marquee Track */}
      <div 
        className="flex whitespace-nowrap min-w-[200%]"
        style={{
          animation: `marquee ${speedSec}s linear infinite`,
          animationPlayState: 'running'
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-3 mx-2"
          >
            <span className="text-white/80 font-medium text-sm whitespace-nowrap">
              {item}
            </span>
            {index < duplicatedItems.length - 1 && (
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full ml-4 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function OrangeMarquee({ speedSec = 20 }: { speedSec?: number }) {
  const duplicatedItems = [...orangeItems, ...orangeItems];

  return (
    <div className="relative overflow-hidden">
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent z-10" />
      
      {/* Marquee Track */}
      <div 
        className="flex whitespace-nowrap min-w-[200%]"
        style={{
          animation: `marquee ${speedSec}s linear infinite reverse`,
          animationPlayState: 'running'
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-3 mx-2 rounded-lg"
          >
            <span className="text-white font-semibold text-sm whitespace-nowrap">
              {item}
            </span>
            {index < duplicatedItems.length - 1 && (
              <div className="w-2 h-2 bg-white/60 rounded-full ml-4 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}