import { ExternalLink, Github, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import meImage from "@/assets/glosifi-mockup.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useEffect, useState } from "react";

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

const ProjectCard = ({ project, type }: { project: any; type: "Design" | "Dev" }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const yOverlay = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <div ref={ref} className="glassmorphism rounded-2xl overflow-hidden hover-lift group flex flex-col">
      {/* Image with parallax */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{ y }}
        />
        <motion.div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" style={{ y: yOverlay }} />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="text-xs px-3 py-1 bg-card text-foreground/80 rounded-full border border-border">
            {type === 'Design' ? 'Design' : 'Development'}
          </span>
          <span className="text-xs px-3 py-1 bg-card text-foreground/80 rounded-full border border-border">
            {project.year}
          </span>
        </div>
        {/* Title overlay for more visual focus */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">{project.title}</h3>
          </div>
        </div>
      </div>

      {/* Content: minimal text, supportive chips */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
        <div>
          {/* Keep description subtle to emphasize visuals */}
          <p className="text-foreground/70 mb-4 hidden md:block">{project.description}</p>

          {/* Metrics (design only) */}
          {type === "Design" && project.metrics && (
            <ul className="mb-4 flex flex-wrap gap-2">
              {project.metrics.map((m: string, idx: number) => (
                <li key={idx} className="text-sm px-3 py-1 bg-card text-foreground/80 rounded-full border border-border">
                  {m}
                </li>
              ))}
            </ul>
          )}

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool: string, idx: number) => (
              <span key={idx} className="text-xs px-3 py-1 bg-card text-foreground/80 rounded-full border border-border">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-3 mt-auto">
          {type === "Design" ? (
            <>
              <Button variant="outline" className="flex-1 text-foreground" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button className="flex-1 gradient-bg-neon text-white border-0" asChild>
                <a href={project.caseStudyUrl}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Case Study
                </a>
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" className="flex-1 text-foreground" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" className="flex-1 border-secondary hover:bg-secondary/10 text-foreground" asChild>
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
  );
};

export default function Portfolio() {
  const allProjects = [
    ...designProjects.map((p) => ({ ...p, type: "Design" as const })),
    ...devProjects.map((p) => ({ ...p, type: "Dev" as const })),
  ];

  // Stacked card visuals: center column stack with parallax offsets
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-neon">Portfolio</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Selected projects with a focus on visual storytelling and product impact.
          </p>
        </div>

        {/* Sticky progress bar for the portfolio section */}
        <SectionStack allProjects={allProjects} />
      </div>
    </section>
  );
}

function SectionStack({ allProjects }: { allProjects: Array<any> }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end start"] });
  const isSmallScreen = useIsSmallScreen();

  const transforms = useMemo(
    () =>
      allProjects.map((_, idx) => {
        const offsetPx = idx * 24;
        const baseScale = Math.max(0.94, 1 - idx * 0.02);
        const baseRotate = isSmallScreen ? 0 : (idx % 2 === 0 ? -1 : 1) * Math.min(0.6, idx * 0.2);
        return { offsetPx, baseScale, baseRotate };
      }),
    [allProjects, isSmallScreen]
  );

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto">
      <div className="sticky top-20 z-20 mb-8">
        <div className="h-1 w-full bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </div>

      <div className="relative" style={{ perspective: 1000 }}>
        {allProjects.map((project, idx) => {
          const { offsetPx, baseScale, baseRotate } = transforms[idx];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: baseScale + 0.01, boxShadow: "0 14px 60px rgba(0,0,0,0.40)" }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.06 }}
              className="will-change-transform"
              style={{ y: offsetPx, scale: baseScale, rotate: baseRotate, boxShadow: "0 8px 32px rgba(0,0,0,0.30)" }}
            >
              <ProjectCard project={project} type={project.type} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsSmall(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return isSmall;
}
