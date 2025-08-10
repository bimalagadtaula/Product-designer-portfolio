import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import portfolioApp from "@/assets/portfolio-app.jpg";
import portfolioWeb from "@/assets/portfolio-web.jpg";
import { FadeIn } from "@/components/motion";

const projects = [
  {
    title: "FoodieGo - Food Delivery App",
    description: "A complete mobile app redesign focusing on user experience and conversion optimization. Increased user engagement by 45% and order completion by 30%.",
    image: portfolioApp,
    category: "Mobile App",
    tools: ["Figma", "Prototyping", "User Research", "Design System"],
    year: "2023"
  },
  {
    title: "ShopFlow - E-commerce Platform",
    description: "Comprehensive e-commerce website design with focus on conversion optimization and user journey improvement.",
    image: portfolioWeb,
    category: "Web Design",
    tools: ["Sketch", "InVision", "A/B Testing", "Responsive Design"],
    year: "2023"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/30 scroll-mt-24">
      <div className="container max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's have a look at my <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recent projects showcasing my design process and problem-solving skills
            </p>
          </div>
        </FadeIn>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.08}>
              <Card className="overflow-hidden hover-lift border-0 bg-card">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover-lift">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;