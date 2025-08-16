import { ExternalLink, Github, Eye, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import meImage from "@/assets/me.jpg";

const designProjects = [
  {
    title: "Glosifi Web App",
    description:
      "Solo UI/UX designer, collaborating with a design consultant, leading end-to-end design of a beauty and wellness booking platform with various flows including dashboards, booking, partners, and landing pages, all built with a scalable design system.",
    image: meImage,
    category: "UX/UI Design",
    year: "2025",
    tools: ["Figma", "User Research", "Prototyping", "User Testing"],
    liveUrl: "https://glosifi.com/",
    caseStudyUrl: "/case-studies/glosifi-web-app",
  },
  {
    title: "GrowSlow – Reflective Productivity App",
    description:
      "A mindful, non-linear productivity tool designed for creatives and neurodivergent users. Features journaling, emotional check-ins, and creative progress tracking without hustle culture pressure.",
    image: meImage,
    category: "App Design",
    year: "2025",
    tools: ["Figma", "User Research", "Accessibility", "Prototyping"],
    liveUrl: "#",
    caseStudyUrl: "/case-studies/growslow-reflective-productivity-app",
  },
  {
    title: "Design System Creation",
    description:
      "Developed a comprehensive design system for 'Glosifi' a SaaS platform, ensuring consistency across all products and improving design efficiency.",
    image: meImage,
    category: "Design System",
    year: "2025",
    tools: ["Figma", "Component Library", "Documentation", "Design Tokens"],
    liveUrl: "#",
    caseStudyUrl: "#",
  },
  {
    title: "Agri App UI",
    description:
      "Mobile UI for farmers and suppliers to connect, manage orders, and track produce quality. (UI Only)",
    image: meImage,
    category: "UI Design",
    year: "2024",
    tools: ["Adobe XD", "User Testing", "Mobile Design", "Prototyping"],
    liveUrl: "#",
    caseStudyUrl: "#",
  },
];

const codeProjects = [
  {
    title: "Epaath-Learning about plants",
    description:
      "Educational web application to help students learn how to classify plants, utilizing modern web technologies for interactive learning experiences.",
    image: meImage,
    category: "Web Development",
    year: "2023",
    tools: ["JavaScript", "jQuery", "Handlebars", "CSS"],
    liveUrl: "https://epaath.olenepal.org/start.html?id=matngs01&lang=en&grade=2",
    githubUrl: "#",
  },
  {
    title: "Geometric Shapes Learning",
    description:
      "Interactive educational platform designed to teach students fundamental concepts of geometric shapes and their components through engaging web interfaces.",
    image: meImage,
    category: "Web Development",
    year: "2023",
    tools: ["JavaScript", "CSS", "HTML"],
    liveUrl: "https://epaath.olenepal.org/start.html?id=scilap01&lang=en&grade=1",
    githubUrl: "#",
  },
];

const ProjectCard = ({ project, isCodeProject = false }: { project: any, isCodeProject?: boolean }) => (
  <div className="bg-card rounded-3xl overflow-hidden border border-border hover-scale group transition-all duration-300 hover:shadow-xl">
    {/* Project Image */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          const nextSibling = target.nextElementSibling as HTMLElement;
          target.style.display = 'none';
          if (nextSibling) nextSibling.style.display = 'flex';
        }}
      />
      <div className="hidden w-full h-full items-center justify-center absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20">
        <Eye className="w-16 h-16 text-muted-foreground" />
      </div>
      
      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-2 bg-primary/90 text-primary-foreground text-sm rounded-full font-medium backdrop-blur-sm">
          {project.category}
        </span>
      </div>
      
      {/* Year */}
      <div className="absolute top-4 right-4">
        <span className="px-2 py-1 bg-background/80 text-foreground text-sm rounded-lg backdrop-blur-sm">
          {project.year}
        </span>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* Project Content */}
    <div className="p-8">
      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed text-base">
        {project.description}
      </p>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tools.map((tool: string, toolIndex: number) => (
          <span
            key={toolIndex}
            className="px-3 py-1 bg-accent/50 text-accent-foreground text-sm rounded-full border border-border hover:bg-accent transition-colors duration-200"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          size="default"
          className="flex-1 hover-scale"
          asChild
        >
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        </Button>
        
        {isCodeProject ? (
          <Button
            variant="outline"
            size="default"
            className="flex-1 hover-scale"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          </Button>
        ) : (
          <Button
            variant="outline"
            size="default"
            className="flex-1 hover-scale"
            asChild
          >
            <a href={project.caseStudyUrl}>
              <BookOpen className="w-4 h-4 mr-2" />
              Case Study
            </a>
          </Button>
        )}
      </div>
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Featured </span>
            <span className="gradient-text-neon">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated selection of design projects and development work showcasing user-centered solutions and technical expertise.
          </p>
        </div>

        {/* Design Projects Section */}
        <div className="mb-20 animate-fade-in">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Design Projects</h3>
              <p className="text-muted-foreground">UI/UX design, research, and user experience solutions</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {designProjects.map((project, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Code Projects Section */}
        <div className="animate-fade-in">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <Github className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Development Projects</h3>
              <p className="text-muted-foreground">Web development and interactive applications</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {codeProjects.map((project, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard project={project} isCodeProject={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}