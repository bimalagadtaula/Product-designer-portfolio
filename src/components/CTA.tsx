import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";

const CTA = () => {
  return (
    <section id="cta" className="py-20 px-4 bg-secondary/30 scroll-mt-24">
      <div className="container max-w-5xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-h2 md:text-display font-bold mb-4">
            Have an Awesome Project Idea? <span className="gradient-text">Let's Discuss</span>
          </h2>
          <p className="text-muted-foreground text-bodyLg max-w-2xl mx-auto mb-8">
            I’m currently available for freelance work. Tell me about your project and timelines.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button asChild size="lg"><a href="#contact">Get Started</a></Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;