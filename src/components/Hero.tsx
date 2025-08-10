import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import designerPortrait from "@/assets/designer-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center py-20 px-4">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-muted-foreground text-lg">Namaste</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-shadow">
                I'm <span className="gradient-text">Bimala</span>,<br />
              UI/UX designer
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              With a strong focus on UX/UI design, user research, and scalable design systems, I help businesses turn ideas into products
               that are both beautiful and easy to use. 
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-primary font-semibold">⭐⭐⭐⭐⭐</span>
              <span className="text-muted-foreground">3 Years Experience</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group hover-lift">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20 animate-float">
                <img 
                  src={designerPortrait} 
                  alt="Emma - Product Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-glow"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;