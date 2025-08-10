import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";

const CTA = () => {
  return (
    <section id="cta" className="py-20 px-4 bg-secondary/30 scroll-mt-24">
      <div className="container max-w-5xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to build something <span className="gradient-text">great</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Let’s collaborate on your next product or feature. I’m currently available for freelance work.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button asChild size="lg"><a href="#contact">Hire Me</a></Button>
            <Button asChild variant="outline" size="lg"><a href="#projects">View Portfolio</a></Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;