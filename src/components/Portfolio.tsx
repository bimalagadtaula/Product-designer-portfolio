import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import portfolioApp from "@/assets/portfolio-app.jpg";
import portfolioWeb from "@/assets/portfolio-web.jpg";

const projects = [
  {
    title: "Lirante - Food Delivery Solution",
    description: "A complete mobile app redesign focusing on user experience and conversion optimization. Increased user engagement by 45% and order completion by 30%.",
    image: portfolioApp,
    category: "Mobile App",
    tools: ["Figma", "Prototyping", "User Research", "Design System"],
    year: "2023"
  },
  {
    title: "Lirante - E-commerce Platform", 
    description: "Comprehensive e-commerce website design with focus on conversion optimization and user journey improvement.",
    image: portfolioWeb,
    category: "Web Design",
    tools: ["Sketch", "InVision", "A/B Testing", "Responsive Design"],
    year: "2023"
  }
];

const Portfolio = () => {
  return (
    <section className="py-24 px-4 section-light">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's have a look at my <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Recent projects showcasing my design process and problem-solving skills
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-lift border-0 card-dark group">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground font-semibold">{project.year}</span>
                </div>
                
                <h3 className="font-bold text-2xl mb-4 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="outline" className="text-xs bg-muted/10 border-muted">
                      {tool}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1 hover-lift border-primary/30 text-primary hover:bg-primary/10">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 hover-lift border-primary/30 text-primary hover:bg-primary/10">
                    <Github className="mr-2 h-4 w-4" />
                    Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" className="hover-lift bg-primary hover:bg-primary/90 text-primary-foreground px-12">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;