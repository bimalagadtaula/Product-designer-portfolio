import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import portrait from "@/assets/designer-portrait.jpg";
import { FadeIn, SlideInImage } from "@/components/motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center scroll-mt-24">
      <div className="container max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl md:text-hero font-extrabold leading-tight tracking-tight">
                I’m Bmala,
                <br className="hidden sm:block" />
                <span className="text-foreground/90">Product Designer</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto md:mx-0">
                I design clear, modern interfaces and experiences that feel effortless.
              </p>
            </FadeIn>

            <FadeIn delay={0.06}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:opacity-90 transition-transform active:scale-95">
                  <a href="#projects" className="inline-flex items-center">
                    Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-transform active:scale-95">
                  <a href="#contact">Hire Me</a>
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="relative flex items-center justify-center">
              <SlideInImage>
                <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px]">
                  <div className="absolute inset-0 rounded-full bg-primary shadow-[0_20px_40px_hsl(var(--primary)/0.35)]" />
                  <div className="absolute inset-2 rounded-full overflow-hidden ring-1 ring-white/30">
                    <img src={portrait} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4">
                    <div className="flex items-center gap-2 rounded-full bg-card border shadow px-3 py-1 text-xs sm:text-sm">
                      <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary fill-primary" />
                      <span>1 Year Experience</span>
                    </div>
                  </div>
                </div>
              </SlideInImage>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;