import { ExternalLink, Github, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPrimary } from "@/components/CTA";
import meImage from "@/assets/CRM-GLOSIFI.png";
import { motion } from "framer-motion";
import { useMemo } from "react";
import growSlowImage from "@/assets/break-ritual.png";
import Agriai from "@/assets/agriai.png";

type CaseStudyType = "Design" | "Dev";

const designProjects = [
  {
    title: "Glosifi Web App",
    description:
      "Beauty & wellness booking platform with dashboards, booking flows, provider tools, and a scalable design system.",
    image: meImage,
    year: "2025",
    tools: ["Figma", "Design System", "User Research", "Prototyping"],
    metrics: ["Booking completion +40%", "Support tickets -60%"],
    liveUrl: "https://glosifi.com/",
    caseStudyUrl: "/case-studies/glosifi-web-app",
  },
  {
    title: "GrowSlow – Reflective Productivity App",
    description:
      "Mindful, non-linear productivity tool for creatives and neurodivergent users with journaling and emotional check-ins.",
    image: growSlowImage,
    year: "2025",
    tools: ["Figma", "Accessibility", "Prototyping"],
    liveUrl: "#",
    caseStudyUrl: "/case-studies/growslow-reflective-productivity-app",
  },
  {
    title: "Agri App",
    description:
      "Agri AI is an intelligent agriculture app designed to help farmers make data-driven decisions. It provides weather forecasts, plant disease detection, and actionable recommendations to optimize crop health and yield.",
    image: Agriai,
    year: "2025",
    tools: ["Figma", "UI design", "Prototyping"],
    liveUrl: "#",
    caseStudyUrl: "/case-studies/growslow-reflective-productivity-app",
  },
];

const devProjects = [
  {
    title: "Epaath-Geometric Shapes",
    description:
      "Mindful productivity app for neurodivergent users with journaling and progress tracking features.",
    image: meImage,
    year: "2024",
    tools: ["React", "TypeScript"],
    liveUrl: "https://dev.epaath.olenepal.org/activity.html?id=matngs01&lang=en&grade=2",
    githubUrl: "#",
  },
  {
    title: "Epaath-Hamro Bidhyalaya",
    description:
      "Mindful productivity app for neurodivergent users with journaling and progress tracking features.",
    image: meImage,
    year: "2024",
    tools: ["React", "TypeScript"],
    liveUrl: "https://dev.epaath.olenepal.org/activity.html?id=nepbcd01&lang=np&pg=2&scId=0&grade=2",
    githubUrl: "#",
  },
   {
    title: "Learning about Plants",
    description:
      "Mindful productivity app for neurodivergent users with journaling and progress tracking features.",
    image: meImage,
    year: "2024",
    tools: ["React", "TypeScript"],
    liveUrl: "https://dev.epaath.olenepal.org/activity.html?id=scilap01&lang=en&pg=1&scId=0&grade=1",
    githubUrl: "#",
  },
];

const CaseStudy = ({
  project,
  type,
  index,
}: {
  project: any;
  type: CaseStudyType;
  index: number;
}) => {
  const ghostTitle = useMemo(() => {
    const base = String(project.title || "");
    return base.split(" ").slice(0, 3).join(" ");
  }, [project.title]);

  return (
    <section className="relative py-12 md:py-16">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left: Text + card */}
          <div className="relative order-2 md:order-1">
            <div className="pointer-events-none select-none absolute -top-8 -left-2 md:-left-6 text-foreground/10 font-black tracking-tight leading-none whitespace-pre-wrap">
              <span className="block text-[clamp(2.75rem,8vw,6.5rem)] md:text-[clamp(5rem,9vw,9rem)] -tracking-[0.04em]">
                {ghostTitle}
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.45, once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-3 py-1 bg-card/90 text-foreground rounded-full border border-border">
                  {type === "Design" ? "Design" : "Development"}
                </span>
                <span className="text-xs px-3 py-1 bg-card/90 text-foreground rounded-full border border-border">
                  {project.year}
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-3 text-foreground font-display">
                {project.title}
              </h3>
              <p className="text-foreground/80 mb-6 md:mb-8 max-w-prose">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {type === "Design" &&
                  project.metrics?.map((m: string, i: number) => (
                    <span
                      key={`m-${index}-${i}`}
                      className="text-xs md:text-sm px-3 py-1 bg-card/90 text-foreground rounded-full border border-border"
                    >
                      {m}
                    </span>
                  ))}
                {project.tools.map((tool: string, i: number) => (
                  <span
                    key={`t-${index}-${i}`}
                    className="text-xs md:text-sm px-3 py-1 bg-card/90 text-foreground rounded-full border border-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {type === "Design" ? (
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

          {/* Right: Image */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.975, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ amount: 0.45, once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[540px]"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-border bg-card/60 backdrop-blur-xl shadow-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
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
    <section id="portfolio" className="relative py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title mb-3">
            <span className="text-foreground">Selected </span>
            <span className="gradient-text-neon">Work</span>
          </h2>
          <p className="section-subtitle">
            Creative case studies designed with the same system I use to build
            scalable products.
          </p>
        </div>
      </div>

      {allProjects.map((p, idx) => (
        <CaseStudy key={idx} project={p} type={p.type} index={idx} />
      ))}

      <div className="container mx-auto px-4">
        <div className="text-center mt-8 md:mt-10">
          <CTAPrimary href="#contact">Get in touch</CTAPrimary>
        </div>
      </div>
    </section>
  );
}
