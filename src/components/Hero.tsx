import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Star } from "lucide-react";
import portrait from "@/assets/designer-portrait.jpg";
import { FadeIn } from "@/components/motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center scroll-mt-24">
      <div className="container max-w-6xl px-4">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
          <div className="space-y-8">
            <FadeIn>
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 text-muted-foreground text-sm">
                  <Star className="h-4 w-4 text-primary" /> Available for freelance
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
                  Designing delightful
                  <br />
                  digital <span className="gradient-text">experiences</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Product designer crafting human-centered interfaces for startups and scale-ups. I blend research, aesthetics,
                  and usability to create products people love.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <a href="#portfolio" className="inline-flex items-center">
                    Explore Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12}>
            <div className="flex items-center justify-center">
              <div className="rounded-full overflow-hidden w-[260px] h-[260px] md:w-[340px] md:h-[340px] ring-1 ring-border shadow-sm">
                <img src={portrait} alt="Designer portrait" className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;