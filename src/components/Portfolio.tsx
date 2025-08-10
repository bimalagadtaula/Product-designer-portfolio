import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce App Redesign",
    description: "Complete redesign of a mobile e-commerce application, improving user experience and increasing conversion rates by 40% through user research and iterative design.",
    image: "/api/placeholder/400/300",
    category: "Mobile Design",
    year: "2024",
    tools: ["Figma", "User Research", "Prototyping", "User Testing"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Banking Dashboard UX",
    description: "Redesigned banking dashboard focusing on user experience, simplifying complex financial data visualization and improving task completion rates.",
    image: "/api/placeholder/400/300",
    category: "Web Design",
    year: "2023",
    tools: ["Sketch", "Adobe XD", "User Interviews", "Wireframing"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Healthcare App Case Study",
    description: "Comprehensive case study on designing a healthcare appointment booking app, including user research, personas, and accessibility considerations.",
    image: "/api/placeholder/400/300",
    category: "Case Study",
    year: "2023",
    tools: ["Figma", "User Research", "Accessibility", "Prototyping"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Design System Creation",
    description: "Developed a comprehensive design system for a SaaS platform, ensuring consistency across all products and improving design efficiency.",
    image: "/api/placeholder/400/300",
    category: "Design System",
    year: "2022",
    tools: ["Figma", "Component Library", "Documentation", "Design Tokens"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Restaurant Booking UX",
    description: "User experience redesign for a restaurant booking platform, focusing on mobile-first design and reducing booking abandonment rates.",
    image: "/api/placeholder/400/300",
    category: "UX Design",
    year: "2022",
    tools: ["Adobe XD", "User Testing", "Mobile Design", "Prototyping"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Travel App Interface",
    description: "Complete interface redesign for a travel application, improving navigation and creating a more intuitive booking experience.",
    image: "/api/placeholder/400/300",
    category: "App Design",
    year: "2021",
    tools: ["Sketch", "InVision", "User Research", "Mobile Design"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="gradient-text-neon">Projects</span>
          </h2>
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
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
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