import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";

const WhyHireMe = () => {
  return (
    <section id="why" className="py-20 px-4 scroll-mt-24">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <div className="aspect-square w-full max-w-md mx-auto rounded-2xl bg-primary/10 ring-1 ring-primary/20" />
          </FadeIn>

          <div className="space-y-6">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold">Why <span className="gradient-text">Hire Me</span></h2>
              <p className="text-muted-foreground text-bodyLg max-w-prose">I blend product thinking with craft to design experiences that are both usable and beautiful.</p>
            </FadeIn>
            <FadeIn delay={0.06}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border bg-card p-6 text-center">
                  <div className="text-3xl font-extrabold mb-1">450+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="rounded-xl border bg-card p-6 text-center">
                  <div className="text-3xl font-extrabold mb-1">450+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:opacity-90 shadow-sm hover:shadow">
                <a href="#contact">Hire Me</a>
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;