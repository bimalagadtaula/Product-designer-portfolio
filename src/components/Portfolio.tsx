import { ExternalLink, Github, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import meImage from "@/assets/glosifi-mockup.png";
import { motion } from "framer-motion";
import { useMemo } from "react";

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

type CaseStudyType = "Design" | "Dev";

const CaseStudy = ({ project, type, index }: { project: any; type: CaseStudyType; index: number }) => {
  const ghostTitle = useMemo(() => {
    const base = String(project.title || "");
    // Use first 2-3 words to keep the oversized ghost title readable
    return base.split(" ").slice(0, 3).join(" ");
  }, [project.title]);

  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Big title background + content card */}
          <div className="relative order-2 md:order-1">
            <div className="pointer-events-none select-none absolute -top-8 -left-2 md:-left-6 text-foreground/10 font-black tracking-tight leading-none whitespace-pre-wrap">
              <span className="block text-[clamp(2.75rem,8vw,6.5rem)] md:text-[clamp(5rem,9vw,9rem)] -tracking-[0.04em]">
                {ghostTitle}
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4, once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-3 py-1 bg-card/90 text-foreground rounded-full border border-border">{type === 'Design' ? 'Design' : 'Development'}</span>
                <span className="text-xs px-3 py-1 bg-card/90 text-foreground rounded-full border border-border">{project.year}</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-3 text-foreground">
                {project.title}
              </h3>
              <p className="text-foreground/80 mb-6 md:mb-8 max-w-prose">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {type === 'Design' && project.metrics?.map((m: string, i: number) => (
                  <span key={`m-${index}-${i}`} className="text-xs md:text-sm px-3 py-1 bg-card/90 text-foreground rounded-full border border-border">
                    {m}
                  </span>
                ))}
                {project.tools.map((tool: string, i: number) => (
                  <span key={`t-${index}-${i}`} className="text-xs md:text-sm px-3 py-1 bg-card/90 text-foreground rounded-full border border-border">
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
            </motion.div>
          </div>

          {/* Right: Device mock / hero visual */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ amount: 0.4, once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[540px]"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-border bg-card/60 backdrop-blur-xl shadow-2xl overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
              </div>
            </motion.div>
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

  return (
    <section id="portfolio" className="relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight gradient-text-neon mb-3">Selected Work</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">Creative case studies designed with the same system I use to build scalable products.</p>
        </div>
      </div>

      {allProjects.map((p, idx) => (
        <CaseStudy key={idx} project={p} type={p.type} index={idx} />
      ))}

      <div className="container mx-auto px-4">
        <div className="text-center mt-8 md:mt-10">
          <Button size="lg" className="gradient-bg-neon text-white border-0" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

