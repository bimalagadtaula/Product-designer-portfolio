import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, BookOpen, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import glosifiImage from "@/assets/CRM-GLOSIFI.png";
import growSlowImage from "@/assets/break-ritual.png";
import agriaiImage from "@/assets/agriai.png";

const designProjects = [
  {
    title: "Glosifi Web App",
    description: "Beauty & wellness booking platform with dashboards, booking flows, provider tools, and a scalable design system.",
    image: glosifiImage,
    year: "2025",
    tools: ["Figma", "Design System", "User Research", "Prototyping"],
    metrics: ["Booking completion +40%", "Support tickets -60%"],
    liveUrl: "https://glosifi.com/",
    caseStudyUrl: "/case-studies/glosifi-web-app",
  },
  {
    title: "GrowSlow – Reflective Productivity App",
    description: "Mindful, non-linear productivity tool for creatives and neurodivergent users with journaling and emotional check-ins.",
    image: growSlowImage,
    year: "2025",
    tools: ["Figma", "Accessibility", "Prototyping"],
    liveUrl: "#",
    caseStudyUrl: "/case-studies/growslow-reflective-productivity-app",
  },
  {
    title: "Agri App",
    description: "Agri AI is an intelligent agriculture app designed to help farmers make data-driven decisions. It provides weather forecasts, plant disease detection, and actionable recommendations to optimize crop health and yield.",
    image: agriaiImage,
    year: "2025",
    tools: ["Figma", "UI design", "Prototyping"],
    liveUrl: "#",
    caseStudyUrl: "/case-studies/growslow-reflective-productivity-app",
  },
];

const devProjects = [
  {
    title: "Epaath-Geometric Shapes",
    description: "Interactive educational module for teaching geometric concepts to elementary students.",
    year: "2024",
    tools: ["React", "TypeScript"],
    liveUrl: "https://dev.epaath.olenepal.org/activity.html?id=matngs01&lang=en&grade=2",
    githubUrl: "#",
  },
  {
    title: "Epaath-Hamro Bidhyalaya",
    description: "Educational platform for Nepali language learning with interactive activities.",
    year: "2024",
    tools: ["React", "TypeScript"],
    liveUrl: "https://dev.epaath.olenepal.org/activity.html?id=nepbcd01&lang=np&pg=2&scId=0&grade=2",
    githubUrl: "#",
  },
  {
    title: "Learning about Plants",
    description: "Science education module teaching students about plant life cycles and biology.",
    year: "2024",
    tools: ["React", "TypeScript"],
    liveUrl: "https://dev.epaath.olenepal.org/activity.html?id=scilap01&lang=en&pg=1&scId=0&grade=1",
    githubUrl: "#",
  },
];

const ProjectCard = ({ project, type }: { project: any; type: "design" | "dev" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="glassmorphism rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 group"
    >
      {/* Image */}
      {project.image && (
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
            {type === "design" ? "Design" : "Development"}
          </span>
          <span className="text-xs px-3 py-1 bg-card/90 text-foreground rounded-full border border-border">
            {project.year}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-foreground/70 line-clamp-3">
          {project.description}
        </p>

        {/* Tools & Metrics */}
        <div className="flex flex-wrap gap-2">
          {type === "design" && project.metrics?.map((m: string, i: number) => (
            <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
              {m}
            </span>
          ))}
          {project.tools.map((tool: string, i: number) => (
            <span key={i} className="text-xs px-2 py-1 bg-card/90 text-foreground/70 rounded-full border border-border">
              {tool}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          {type === "design" ? (
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
              <Button variant="outline" className="text-foreground" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const allProjects = [
    ...designProjects.map((p) => ({ ...p, type: "design" as const })),
    ...devProjects.map((p) => ({ ...p, type: "dev" as const })),
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 bg-background">
        <section className="relative py-20">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                <span className="text-foreground">Selected </span>
                <span className="gradient-text-neon">Work</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-foreground/70"
              >
                A collection of design and development projects showcasing user-centered solutions.
              </motion.p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="dev">Development</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProjects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} type={project.type} />
                ))}
              </TabsContent>

              <TabsContent value="design" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {designProjects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} type="design" />
                ))}
              </TabsContent>

              <TabsContent value="dev" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {devProjects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} type="dev" />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
