import { ExternalLink, Github, Eye, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Glosifi Web App",
    description:
      "Solo UI/UX designer, collaborating with a design consultant, leading end-to-end design of a beauty and wellness booking platform with various flows including dashboards, booking, partners, and landing pages, all built with a scalable design system.",
    image: "/api/placeholder/400/300",
    category: "UX/UI Design",
    year: "2025",
    tools: ["Figma", "User Research", "Prototyping", "User Testing"],
    liveUrl: "https://glosifi.com/",
    caseStudy: "#",
  },
  // {
  //   title: "Glossybyte Landing Page",
  //   description:
  //     "Led UI design for Glossybyte’s marketing landing page, focusing on brand presentation and conversion optimization.",
  //   image: "/api/placeholder/400/300",
  //   category: "Web Design",
  //   year: "2024",
  //   tools: ["Figma", "Prototyping", "User Testing"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   title: "Partners Landing Page",
  //   description:
  //     "Designed partners landing page to enhance engagement and highlight collaboration opportunities.",
  //   image: "/api/placeholder/400/300",
  //   category: "Web Design",
  //   year: "2024",
  //   tools: ["Figma", "UI Design", "Responsive Design"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  {
    title: "GrowSlow – Reflective Productivity App",
    description:
      "A mindful, non-linear productivity tool designed for creatives and neurodivergent users. Features journaling, emotional check-ins, and creative progress tracking without hustle culture pressure.",
    image: "/api/placeholder/400/300",
    category: "App Design",
    year: "2025",
    tools: ["Figma", "User Research", "Accessibility", "Prototyping"],
    liveUrl: "#",
    caseStudy: "#",
  },
  {
    title: "Design System Creation",
    description:
      "Developed a comprehensive design system for 'Glosifi' a SaaS platform, ensuring consistency across all products and improving design efficiency.",
    image: "/api/placeholder/400/300",
    category: "Design System",
    year: "2025",
    tools: ["Figma", "Component Library", "Documentation", "Design Tokens"],
    liveUrl: "#",
    caseStudy: "#",
  },
  {
    title: "Agri App UI",
    description:
      "Mobile UI for farmers and suppliers to connect, manage orders, and track produce quality. (UI Only)",
    image: "/api/placeholder/400/300",
    category: "UI Design",
    year: "2024",
    tools: ["Adobe XD", "User Testing", "Mobile Design", "Prototyping"],
    liveUrl: "#",
    caseStudy: "#",
  },
  {
    title: "Epaath-Learning about plants",
    description:
      "This chapter was developed to help students learn how to classify plants, utilizing technologies such as Handlebars, JS, jQuery, CSS, XML, and JSON.",
    image: "/api/placeholder/400/300",
    category: "Web Development",
    year: "2023",
    tools: ["JavaScript", "jQuery", "Handlebars", "CSS"],
    liveUrl: "https://epaath.olenepal.org/start.html?id=matngs01&lang=en&grade=2",
    githubUrl: "#",
  },
  {
    title: "Geometric Shapes",
    description:
      "This chapter was developed to teach students about the basic concept of shapes and their components.",
    image: "/api/placeholder/400/300",
    category: "Web Development",
    year: "2023",
    tools: ["JavaScript", "CSS", "HTML"],
    liveUrl: "https://epaath.olenepal.org/start.html?id=scilap01&lang=en&grade=1",
    githubUrl: "#",
  },
  // {
  //   title: "Astro_web",
  //   description:
  //     "Conceptualized and developed a responsive, astro-themed portfolio website using HTML, CSS, and JavaScript.",
  //   image: "/api/placeholder/400/300",
  //   category: "Web Development",
  //   year: "2021",
  //   tools: ["HTML", "CSS", "JavaScript"],
  //   liveUrl: "https://astro-portfolio-wheat.vercel.app/",
  //   githubUrl: "#",
  // }
];


export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <a href="/case-studies" className="inline-block group">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white">Featured </span>
              <span className="gradient-text-neon">Projects</span>
            </h2>
          </a>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore our portfolio of cutting-edge virtual and augmented reality experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-pink-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Eye className="w-16 h-16 text-white/40" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/80 to-pink-500/80 text-white text-xs rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                
                {/* Year */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-white/20 text-white/80 text-xs rounded backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded border border-white/20 hover:bg-white/20 transition-colors duration-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-colors duration-200"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-colors duration-200"
                    asChild
                  >
                 <a href="/case-studies" rel="noopener noreferrer">
  <BookOpen className="w-4 h-4 mr-2" />
  Case Study
</a>

                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}