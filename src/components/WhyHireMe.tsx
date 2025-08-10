import { FadeIn } from "@/components/motion";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Delivered" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "24h", label: "Avg. Response Time" },
];

const WhyHireMe = () => {
  return (
    <section id="why" className="py-20 px-4 bg-secondary/30 scroll-mt-24">
      <div className="container max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why <span className="gradient-text">Hire Me</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A blend of product thinking, visual craft, and reliable delivery.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06}>
              <div className="rounded-xl border bg-card p-6 text-center">
                <div className="text-3xl font-extrabold mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;