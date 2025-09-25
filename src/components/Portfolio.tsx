import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/motion";
import meImage from "@/assets/CRM-GLOSIFI.png";
import growSlowImage from "@/assets/break-ritual.png";
import Agriai from "@/assets/agriai.png";
import animatedImage from "@/assets/animated.jpg";

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

// Projects Grid Preview Component
function ProjectsGrid() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="display-text text-5xl md:text-6xl font-bold text-foreground mb-6">
                Selected Work
              </h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                A collection of product design projects focused on solving real user problems 
                and creating meaningful digital experiences.
              </p>
            </div>
          </FadeIn>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {designProjects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.1}>
                <Link
                  to={project.caseStudyUrl}
                  className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
                >
                  {/* Project Image */}
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90 mb-2">{project.year}</p>
                      <p className="text-sm opacity-75">Product Design</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* View All Work CTA */}
          <FadeIn delay={0.6}>
            <div className="text-center mt-16">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                View All Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// Micro About Snapshot Component  
function AboutSnapshot() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Profile Image */}
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto lg:w-full lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src={animatedImage}
                    alt="Bimala Gadtaula, Product Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent rounded-full" />
              </div>
            </FadeIn>

            {/* About Content */}
            <FadeIn delay={0.4}>
              <div className="space-y-6">
                <h2 className="display-text text-4xl md:text-5xl font-bold text-foreground">
                  Hi, I'm Bimala — a Product Designer who believes in human-centered design
                </h2>
                
                <div className="space-y-4 body-large text-muted-foreground">
                  <p>
                    With a passion for creating meaningful digital experiences, I help startups 
                    and SaaS platforms design products that users love and businesses thrive on.
                  </p>
                  
                  <p>
                    My approach combines deep user research, strategic thinking, and thoughtful 
                    design to solve complex problems and create delightful interactions.
                  </p>
                </div>

                <Button size="lg" variant="outline" className="h-12 px-8 text-base mt-8">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <>
      <ProjectsGrid />
      <AboutSnapshot />
    </>
  );
}