import { Card, CardContent } from "@/components/ui/card";
import { Palette, Monitor, Layout, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion";

const services = [
  { icon: Palette, title: "UI/UX Design", description: "User research, wireframing, and prototypes that balance aesthetics with usability" },
  { icon: Monitor, title: "Web Design", description: "Responsive websites designed to communicate clearly and convert effectively" },
  { icon: Layout, title: "Landing Page", description: "High‑impact landing pages optimized for campaigns and product launches" }
];

const Services = () => {
  return (
    <section id="service" className="relative py-20 px-4 bg-secondary/30 scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rotate-12 bg-primary/10 rounded-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 -rotate-12 bg-primary/10 rounded-3xl" />
      <div className="container max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Services</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Tailored design solutions to help you launch, grow, and differentiate</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.06}>
              <Card className="group border bg-card text-center p-6 shadow-none hover:bg-muted/20 transition-all hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl ring-1 ring-border flex items-center justify-center group-hover:ring-primary transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  <div className="flex justify-center">
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;