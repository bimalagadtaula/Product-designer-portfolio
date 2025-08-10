import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <FadeIn>
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  I'm <span className="text-primary">Bmala</span>,<br />
                  Product Designer
                </h1>
                <p className="text-gray-600 text-lg max-w-md">
                  I'm a Product Designer creating user-friendly digital experiences 
                  with a focus on usability and aesthetics.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                  Portfolio
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8"
                >
                  Hire Me
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <FadeIn delay={0.2}>
              <div className="relative">
                {/* Orange circular background */}
                <div className="w-80 h-80 bg-primary rounded-full opacity-20 absolute inset-0"></div>
                <div className="w-72 h-72 bg-primary/30 rounded-full absolute inset-4"></div>
                
                {/* Profile image */}
                <div className="relative z-10 w-72 h-72 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/d818fcbb-46ee-4736-95cf-e037c774a80c.png" 
                    alt="Bmala - Product Designer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Experience badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg border flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">1 Year<br />Experience</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;