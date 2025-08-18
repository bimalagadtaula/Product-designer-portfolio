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

const Slide = ({ project, type, index, onInView }: { project: any; type: "Design" | "Dev"; index: number; onInView: (i: number) => void }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.6 });
  useEffect(() => {
    if (isInView) onInView(index);
  }, [isInView, index, onInView]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const yOverlay = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section ref={ref} className="relative h-screen snap-start flex items-end pb-10">
      {/* Background visual */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover" style={{ y: yImg }} />
        <motion.div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" style={{ y: yOverlay }} />
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
    </section>
  );
};

export default function Portfolio() {
  const allProjects = [
    ...designProjects.map((p) => ({ ...p, type: "Design" as const })),
    ...devProjects.map((p) => ({ ...p, type: "Dev" as const })),
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = allProjects.length + 2; // intro + projects + outro

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollTop / el.clientHeight);
      setCurrentSlide(Math.max(0, Math.min(totalSlides - 1, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true } as AddEventListenerOptions);
    onScroll();
    return () => el.removeEventListener("scroll", onScroll as any);
  }, [totalSlides]);

  const scrollToSlide = (idx: number) => {
    const el = containerRef.current;
    if (!el) return;
    const target = el.children[idx] as HTMLElement | undefined;
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollNext = () => {
    if (currentSlide < totalSlides - 1) scrollToSlide(currentSlide + 1);
  };
  const scrollPrev = () => {
    if (currentSlide > 0) scrollToSlide(currentSlide - 1);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || (e.target as HTMLElement)?.isContentEditable) return;
      if (e.key === "PageDown" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        scrollNext();
      } else if (e.key === "PageUp" || e.key === "ArrowUp") {
        e.preventDefault();
        scrollPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentSlide, totalSlides]);

  return (
    <section id="portfolio" className="relative">
      {/* Floating navigation buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        {currentSlide > 0 && (
          <Button onClick={scrollPrev} className="rounded-full p-0 h-12 w-12 bg-card text-foreground border border-border hover:scale-105 transition-transform" aria-label="Previous section">
            <ChevronUp className="w-5 h-5" />
          </Button>
        )}
        {currentSlide < totalSlides - 1 && (
          <Button onClick={scrollNext} className="rounded-full p-0 h-12 w-12 gradient-bg-neon text-white border-0 hover:scale-105 transition-transform" aria-label="Next section">
            <ChevronDown className="w-5 h-5" />
          </Button>
        )}
      </div>

      {/* Right-side progress dots */}
      <div className="hidden md:block sticky top-1/2 -translate-y-1/2 right-6 md:right-10 z-30 float-right mr-4">
        <div className="flex flex-col gap-3 items-center">
          {allProjects.map((_, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full border ${active === i ? 'bg-accent border-accent' : 'bg-border border-border'}`} />
          ))}
        </div>
      </div>

      <div ref={containerRef} className="snap-y snap-mandatory h-screen overflow-y-auto">
        {/* Intro slide */}
        <section className="relative h-screen snap-start flex items-center">
          <div className="absolute inset-0 grid-pattern" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight gradient-text-neon mb-4">Selected Work</h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">Explore case studies with a focus on product outcomes, interaction details, and design systems.</p>
          </div>
        </section>

        {allProjects.map((p, idx) => (
          <Slide key={idx} project={p} type={p.type} index={idx} onInView={setActive} />
        ))}

        {/* Outro slide */}
        <section className="relative h-screen snap-start flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto glassmorphism rounded-2xl p-8">
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Want the full story?</h3>
              <p className="text-foreground/80 mb-6">Deep dives include research process, design system specs, and measurable results.</p>
              <Button className="gradient-bg-neon text-white border-0" asChild>
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
