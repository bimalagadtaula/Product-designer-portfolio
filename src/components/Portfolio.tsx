import { ExternalLink, Github, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import meImage from "@/assets/glosifi-mockup.png";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const designProjects = [
  {
    title: "Glosifi – Beauty & Wellness Platform",
    description: "Redesigned dashboards and booking flows for a SaaS platform, built a scalable design system.",
    image: meImage,
    year: "2025",
    tools: ["Figma", "User Research", "Prototyping"],
    metrics: ["Reduced booking steps 40%", "Partner engagement +25%"],
    liveUrl: "https://glosifi.com/",
    caseStudyUrl: "/case-studies/glosifi-web-app",
  },
  {
    title: "GrowSlow – Reflective Productivity App",
    description: "Mindful productivity app for neurodivergent users with journaling and progress tracking features.",
    image: meImage,
    year: "2025",
    tools: ["Figma", "Accessibility", "User Testing"],
    metrics: ["User satisfaction +30%", "High accessibility scores"],
    liveUrl: "#",
    caseStudyUrl: "/case-studies/growslow-reflective-productivity-app",
  },
];

const devProjects = [
  {
    title: "Epaath – Plant Classification",
    description: "Interactive educational platform teaching plant classification with engaging visuals.",
    image: meImage,
    year: "2023",
    tools: ["JavaScript", "jQuery", "Handlebars"],
    liveUrl: "https://epaath.olenepal.org/start.html?id=matngs01&lang=en&grade=2",
    githubUrl: "#",
  },
  {
    title: "Geometric Shapes Learning",
    description: "Web-based learning tool for geometric concepts with interactive exercises.",
    image: meImage,
    year: "2023",
    tools: ["JavaScript", "CSS", "HTML"],
    liveUrl: "https://epaath.olenepal.org/start.html?id=scilap01&lang=en&grade=1",
    githubUrl: "#",
  },
];

const StackCard = ({ project, type, idx, activeIdx }: { project: any; type: "Design" | "Dev"; idx: number; activeIdx: number }) => {
  const relative = idx - activeIdx; // 0 = active, >0 upcoming, <0 passed
  const clamped = Math.max(-2, Math.min(3, relative));
  const scale = relative <= 0 ? 1 : Math.max(0.85, 1 - 0.05 * relative);
  const y = relative <= 0 ? 0 : relative * 28;
  const rotate = relative <= 0 ? 0 : (idx % 2 === 0 ? -1 : 1) * Math.min(3, relative * 1.2);
  const opacity = relative < 0 ? 0 : Math.max(0, 1 - relative * 0.15);

  return (
    <motion.section
      className="absolute inset-0 flex items-end pb-10"
      style={{ zIndex: 100 - idx, pointerEvents: relative === 0 ? "auto" : "none" }}
      animate={{ scale, y, rotate, opacity }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      {/* Background visual */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
      </div>

      {/* Foreground content */}
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-3 py-1 bg-card/90 text-foreground rounded-full border border-border">{type === 'Design' ? 'Design' : 'Development'}</span>
            <span className="text-xs px-3 py-1 bg-card/90 text-foreground rounded-full border border-border">{project.year}</span>
          </div>

          <h3 className="text-4xl md:text-6xl font-bold text-foreground mb-3">{project.title}</h3>
          <p className="text-foreground/80 max-w-2xl mb-6 hidden md:block">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {type === 'Design' && project.metrics?.map((m: string, i: number) => (
              <span key={i} className="text-xs md:text-sm px-3 py-1 bg-card/90 text-foreground rounded-full border border-border">
                {m}
              </span>
            ))}
            {project.tools.map((tool: string, i: number) => (
              <span key={i} className="text-xs md:text-sm px-3 py-1 bg-card/90 text-foreground rounded-full border border-border">
                {tool}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {type === 'Design' ? (
              <>
                <Button variant="outline" className="text-foreground" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button className="gradient-bg-neon text-white border-0" asChild>
                  <a href={project.caseStudyUrl}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Case Study
                  </a>
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" className="text-foreground" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" className="border-secondary hover:bg-secondary/10 text-foreground" asChild>
                  <a href={project.githubUrl}>
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default function Portfolio() {
  const allProjects = [
    ...designProjects.map((p) => ({ ...p, type: "Design" as const })),
    ...devProjects.map((p) => ({ ...p, type: "Dev" as const })),
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const totalSlides = allProjects.length; // only project cards in stack
  const [lastWheelAt, setLastWheelAt] = useState(0);

  const next = () => setActive((i) => Math.min(totalSlides - 1, i + 1));
  const prev = () => setActive((i) => Math.max(0, i - 1));

  const onWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelAt < 650) return; // throttle
    if (e.deltaY > 20) {
      next();
      setLastWheelAt(now);
    } else if (e.deltaY < -20) {
      prev();
      setLastWheelAt(now);
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || (e.target as HTMLElement)?.isContentEditable) return;
      if (e.key === "PageDown" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "PageUp" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [totalSlides]);

  return (
    <section id="portfolio" className="relative">
      {/* Floating navigation buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        {active > 0 && (
          <Button onClick={prev} className="rounded-full p-0 h-12 w-12 bg-card text-foreground border border-border hover:scale-105 transition-transform" aria-label="Previous">
            <ChevronUp className="w-5 h-5" />
          </Button>
        )}
        {active < totalSlides - 1 && (
          <Button onClick={next} className="rounded-full p-0 h-12 w-12 gradient-bg-neon text-white border-0 hover:scale-105 transition-transform" aria-label="Next">
            <ChevronDown className="w-5 h-5" />
          </Button>
        )}
      </div>

      {/* Right-side progress dots */}
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-6 md:right-10 z-30">
        <div className="flex flex-col gap-3 items-center">
          {allProjects.map((_, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full border ${active === i ? 'bg-accent border-accent' : 'bg-border border-border'}`} />
          ))}
        </div>
      </div>

      <div ref={containerRef} className="h-screen overflow-hidden" onWheel={onWheel}>
        <div className="absolute inset-0">
          {allProjects.map((p, idx) => (
            <StackCard key={idx} project={p} type={p.type} idx={idx} activeIdx={active} />
          ))}
        </div>
        {/* Header overlay */}
        <div className="absolute top-6 left-0 right-0 z-30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text-neon">Selected Work</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
