import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center space-y-8">
            <FadeIn delay={0.1}>
              <h1 className="display-text text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
                Designing products that feel{" "}
                <span className="text-primary">effortless</span> and{" "}
                <span className="text-accent">human-centered</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Product designer crafting meaningful digital experiences through research, 
                strategy, and thoughtful design for SaaS and mobile applications.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex items-center justify-center gap-6 pt-4">
                <Button 
                  onClick={handleScrollToPortfolio}
                  size="lg" 
                  className="h-12 px-8 text-base font-medium group"
                >
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-12 px-8 text-base font-medium group"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Learn About Me
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Abstract Visual Element */}
          <FadeIn delay={0.7}>
            <div className="mt-20 flex justify-center">
              <div className="relative">
                {/* Geometric shapes */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-6 blur-xl" />
                  <div className="absolute inset-4 bg-gradient-to-tr from-muted to-card rounded-2xl shadow-2xl" />
                  <div className="absolute inset-8 bg-primary/10 rounded-xl" />
                  <div className="absolute inset-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg" />
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full animate-pulse" />
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent rounded-full animate-bounce" />
                  <div className="absolute top-1/2 -left-8 w-6 h-6 bg-muted-foreground rounded-full animate-ping" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}