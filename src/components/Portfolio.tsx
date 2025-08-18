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
  <div className="glassmorphism rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 group flex flex-col">
    {/* Image */}
    <div className="relative aspect-[16/10] w-full overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
          {type === 'Design' ? 'Design' : 'Development'}
        </span>
        <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
          {project.year}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-8 flex flex-col justify-between flex-1">
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-foreground/70 mb-4">{project.description}</p>

        {/* Metrics */}
        {type === "Design" && project.metrics && (
          <ul className="mb-4 flex flex-wrap gap-2">
            {project.metrics.map((m: string, idx: number) => (
              <li
                key={idx}
                className="text-sm px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30"
              >
                {m}
              </li>
            ))}
          </ul>
        )}

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool: string, idx: number) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto">
        {type === "Design" ? (
          <>
            <Button
              variant="outline"
              className="flex-1 border-primary hover:bg-primary/10 text-foreground"
              asChild
            >
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
            <Button className="flex-1 gradient-bg-neon text-white border-0" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
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
          </>
        )}
      </div>
    </div>
  </div>
);

export default function Portfolio() {
  const allProjects = [
    ...designProjects.map((p) => ({ ...p, type: "Design" as const })),
    ...devProjects.map((p) => ({ ...p, type: "Dev" as const })),
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-neon">Portfolio</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Selected projects showcasing product design and development with measurable impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} type={project.type} />
          ))}
        </div>
      </div>
    </section>
  );
}
