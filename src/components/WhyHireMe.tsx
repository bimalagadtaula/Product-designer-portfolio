import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";

const WhyHireMe = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <FadeIn>
            <div className="relative">
              <div className="w-80 h-80 bg-primary/20 rounded-full absolute -top-4 -left-4"></div>
              <div className="relative z-10 w-80 h-80 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/d818fcbb-46ee-4736-95cf-e037c774a80c.png" 
                  alt="Designer at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right - Content */}
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why <span className="text-primary">Hire me</span>?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  With over a year of experience in product design, I bring fresh perspectives 
                  and innovative solutions to every project. I'm passionate about creating 
                  designs that not only look great but also deliver exceptional user experiences.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">450+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">450+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 hover:shadow-lg transition-all">
                Hire Me
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;