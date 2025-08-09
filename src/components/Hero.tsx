import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import designerPortrait from "@/assets/designer-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen section-dark flex items-center justify-center py-20 px-4">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-8 lg:order-1">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-muted-foreground text-lg font-medium">👋 Hi there!</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                I'm <span className="gradient-text">Emma</span>,<br />
                Product Designer
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Creating digital experiences that solve real problems and delight users. 
                Specialized in UX/UI design, user research, and design systems.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-primary text-2xl">⭐⭐⭐⭐⭐</span>
              </div>
              <div className="text-muted-foreground">
                <span className="font-semibold text-foreground">3 Years</span> Experience
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group hover-lift bg-primary hover:bg-primary/90 text-primary-foreground">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="hover-lift border-muted-foreground/30 text-foreground hover:bg-muted">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Image Content - Right Side */}
          <div className="relative lg:order-2 flex justify-center">
            <div className="profile-container">
              <div className="profile-bg animate-pulse-slow">
                <img 
                  src={designerPortrait} 
                  alt="Emma - Product Designer" 
                  className="profile-image"
                />
              </div>
              
              {/* Floating Orange Elements matching reference */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-primary/30 rounded-full animate-float blur-sm"></div>
              <div className="absolute -bottom-12 -left-12 w-16 h-16 bg-primary/40 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/3 -right-12 w-12 h-12 bg-primary/35 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 -left-8 w-14 h-14 bg-primary/25 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;