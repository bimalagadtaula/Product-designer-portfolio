import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Have an Awesome Project<br />
            Idea? <span className="text-primary">Let's Discuss</span>
          </h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 hover:shadow-lg transition-all">
            Get Started
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default CallToAction;