import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import portfolioApp from "@/assets/portfolio-app.jpg";
import portfolioWeb from "@/assets/portfolio-web.jpg";
import { FadeIn } from "@/components/motion";

const projects = [
  { title: "Lirante – Food Delivery Solution", description: "A complete mobile app design focusing on usability and conversion.", image: portfolioApp, category: "Product Design", year: "2023" },
  { title: "Lirante – Food Delivery Solution", description: "Landing page design exploring hierarchy and conversion.", image: portfolioWeb, category: "Landing Page", year: "2023" }
];

const tabs = ["Landing Page", "Product Design", "Animation", "Discussion", "Cards"];

const Portfolio = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30 scroll-mt-24">
      <div className="container max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-display font-bold mb-4">Let’s have a look at my <span className="gradient-text">Portfolio</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Selected projects showcasing process and outcomes.</p>
          </div>
        </FadeIn>
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title + index} delay={index * 0.08}>
              <Card className="overflow-hidden border bg-card shadow-none">
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tabs.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full border text-xs text-foreground/80">{t}</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1"><ExternalLink className="mr-2 h-4 w-4" />Live Demo</Button>
                    <Button variant="outline" size="sm" className="flex-1"><Github className="mr-2 h-4 w-4" />Case Study</Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;