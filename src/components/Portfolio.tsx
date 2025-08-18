import { ExternalLink, Github, BookOpen, Figma, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import meImage from "@/assets/glosifi-mockup.png";

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

const ProjectCard = ({ project, type }: { project: any; type: "Design" | "Dev" }) => (
  <div className="glassmorphism rounded-2xl overflow-hidden flex flex-col md:flex-row hover:scale-105 transition-transform duration-300">
    {/* Image */}
    <img
      src={project.image}
      alt={project.title}
      className="w-full md:w-1/2 object-cover h-72 md:h-auto"
    />

    {/* Content */}
    <div className="p-6 flex flex-col justify-between flex-1">
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-foreground/70 mb-3">{project.description}</p>

        {/* Metrics */}
        {type === "Design" && project.metrics && (
          <ul className="mb-3 flex flex-wrap gap-2">
            {project.metrics.map((m: string, idx: number) => (
              <li key={idx} className="text-sm text-primary bg-primary/10 px-2 py-1 rounded-full">
                {m}
              </li>
            ))}
          </ul>
        )}

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool: string, idx: number) => (
            <span key={idx} className="text-xs bg-background/50 border border-border px-2 py-1 rounded-full text-foreground/70">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto">
        <Button
          variant="outline"
          className={`flex-1 ${type === "Design" ? "border-primary hover:bg-primary/10" : "border-secondary hover:bg-secondary/10"} text-foreground`}
          asChild
        >
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        </Button>

        {type === "Design" ? (
          <Button
            variant="outline"
            className="flex-1 border-accent hover:bg-accent/10 text-foreground"
            asChild
          >
            <a href={project.caseStudyUrl}>
              <BookOpen className="w-4 h-4 mr-2" />
              Case Study
            </a>
          </Button>
        ) : (
          <Button
            variant="outline"
            className="flex-1 border-secondary hover:bg-secondary/10 text-foreground"
            asChild
          >
            <a href={project.githubUrl}>
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        )}
      </div>
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-neon">Portfolio</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Selected projects showcasing design and development work with measurable impact.
          </p>
        </div>

        {/* Design Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Figma className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Design Projects</h3>
          </div>
          <div className="grid gap-8">
            {designProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} type="Design" />
            ))}
          </div>
        </div>

        {/* Development Projects */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Development Projects</h3>
          </div>
          <div className="grid gap-8">
            {devProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} type="Dev" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
