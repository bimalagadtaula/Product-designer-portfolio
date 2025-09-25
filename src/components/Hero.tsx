import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Creative background mesh */}
      <div className="absolute inset-0 bg-[var(--gradient-mesh)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-16 w-1 h-1 bg-emerald-dark rounded-full animate-bounce opacity-40" />
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-ping opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center space-y-12">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent mb-8">
                  <Sparkles className="w-4 h-4" />
                  Available for new opportunities
                </div>
                <h1 className="display-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground tracking-tight leading-none">
                  Crafting digital experiences
                  <br />
                  that <span className="relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-dark to-accent">inspire</span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald/20 to-accent/20 rounded-lg blur-sm" />
                  </span> and{" "}
                  <span className="text-charcoal">delight</span>
                </h1>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
                Senior Product Designer with 5+ years of experience transforming complex problems 
                into elegant, user-centered solutions for industry-leading companies.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button 
                  onClick={handleScrollToPortfolio}
                  size="lg" 
                  className="h-14 px-8 text-base font-semibold group bg-charcoal hover:bg-charcoal/90 text-white rounded-2xl shadow-elegant"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-14 px-8 text-base font-semibold group border-2 rounded-2xl hover:bg-accent/5"
                  onClick={() => {
                    window.open("mailto:hello@designer.com", "_blank");
                  }}
                >
                  Let's Connect
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Creative Visual Element */}
          <FadeIn delay={0.7}>
            <div className="mt-24 flex justify-center">
              <div className="relative">
                {/* Main creative composition */}
                <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
                  {/* Primary gradient orb */}
                  <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-emerald via-accent to-emerald-dark rounded-full blur-3xl opacity-30 animate-pulse" />
                  
                  {/* Geometric frames */}
                  <div className="absolute inset-8 border border-accent/30 rounded-3xl rotate-3 hover:rotate-6 transition-transform duration-700" />
                  <div className="absolute inset-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-creative hover:shadow-float transition-all duration-500 border border-sage/50" />
                  
                  {/* Inner content placeholder */}
                  <div className="absolute inset-24 bg-gradient-to-br from-sage/30 to-accent/20 rounded-xl opacity-60" />
                  
                  {/* Floating accent elements */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-emerald to-emerald-dark rounded-2xl rotate-12 shadow-float animate-float" />
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-xl -rotate-12 shadow-elegant animate-bounce" />
                  <div className="absolute top-8 -left-8 w-8 h-8 bg-charcoal rounded-lg rotate-45 opacity-80 animate-pulse" />
                  <div className="absolute bottom-8 -right-8 w-6 h-6 bg-emerald-dark rounded-full animate-ping" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}