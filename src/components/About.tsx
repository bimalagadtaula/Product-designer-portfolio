import { FadeIn } from "@/components/motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 scroll-mt-24">
      <div className="container max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-display font-bold mb-4">About <span className="gradient-text">Me</span></h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              I’m a product designer with a focus on clarity, craft, and measurable outcomes. I partner with teams to ship thoughtful, user‑centered products.
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
          <FadeIn delay={0.05}><div className="p-6 rounded-xl border bg-card">Design systems • Accessibility • Prototyping</div></FadeIn>
          <FadeIn delay={0.1}><div className="p-6 rounded-xl border bg-card">User research • Usability testing • Workshops</div></FadeIn>
          <FadeIn delay={0.15}><div className="p-6 rounded-xl border bg-card">SaaS • E‑commerce • Mobile apps</div></FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;