import { ExternalLink, Github, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import meImage from "@/assets/glosifi-mockup.png";
import { motion } from "framer-motion";
import { useMemo } from "react";

type CaseStudyType = "Design" | "Dev";

const designProjects = [
  {
    title: "MarcoPolo World School",
    description:
      "Minimising drop-off during app onboarding and signup for an award-winning edtech brand.",
    image: meImage,
    year: "2025",
    tools: ["Figma", "Prototyping", "Usability Testing"],
    metrics: ["Drop-off -18%", "Time-to-complete -25%"],
    liveUrl: "#",
    caseStudyUrl: "/case-studies/glosifi-web-app",
  },
];

const devProjects = [
  {
    title: "Reflective Productivity App",
    description:
      "Mindful productivity app for neurodivergent users with journaling and progress tracking features.",
    image: meImage,
    year: "2024",
    tools: ["React", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const CaseStudy = ({ project, type, index }: { project: any; type: CaseStudyType; index: number }) => {
  const ghostTitle = useMemo(() => {
    const base = String(project.title || "");
    return base.split(" ").slice(0, 3).join(" ");
  }, [project.title]);

  return (
    <section className="relative py-24 md:py-28">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
          <div className="relative order-2 md:order-1">
            <div className="pointer-events-none select-none absolute -top-6 -left-1 md:-left-4 text-foreground/15 font-serif font-black tracking-tight leading-[0.9]">
              <span className="block text-[clamp(3rem,10vw,8rem)]">{ghostTitle}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.45, once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl p-6 md:p-8 shadow-2xl border border-border bg-foreground text-background"
            >
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] md:text-xs px-3 py-1 rounded-full border border-black/10 bg-white/80">{type === 'Design' ? 'Design' : 'Development'}</span>
                  <span className="text-[10px] md:text-xs px-3 py-1 rounded-full border border-black/10 bg-white/80">{project.year}</span>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold leading-tight">{project.title}</h3>
                <p className="text-sm md:text-base text-black/70 max-w-prose">{project.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {type === 'Design' && (
                    <div className="space-y-1">
                      <p className="text-[11px] tracking-widest font-semibold text-black/60">OUTCOMES</p>
                      <div className="flex flex-wrap gap-2">
                        {project.metrics?.map((m: string, i: number) => (
                          <span key={`m-${index}-${i}`} className="text-xs px-3 py-1 rounded-full border border-black/10 bg-white/80 text-black/80">{m}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="space-y-1">
                    <p className="text-[11px] tracking-widest font-semibold text-black/60">TOOLS</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool: string, i: number) => (
                        <span key={`t-${index}-${i}`} className="text-xs px-3 py-1 rounded-full border border-black/10 bg-white/80 text-black/80">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  {type === 'Design' ? (
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white" asChild>
                      <a href={project.caseStudyUrl}>View Project</a>
                    </Button>
                  ) : (
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-black/20 text-black" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" />Live</a>
                      </Button>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white" asChild>
                        <a href={project.githubUrl}><Github className="w-4 h-4 mr-2" />Code</a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.45, once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-primary/25 via-accent/20 to-secondary/25 blur-2xl" />
              <div className="relative rounded-[2rem] border border-border bg-card/70 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="aspect-[9/19.5] w-full bg-background/40">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
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

      {allProjects.map((p: any, idx: number) => (
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
