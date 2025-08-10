import { Card, CardContent } from "@/components/ui/card";
import { Palette, Smartphone, Monitor, Users } from "lucide-react";
import { FadeIn } from "@/components/motion";

const services = [
  {
    icon: Palette,
    title: "UX Design",
    description: "User research, wireframing, and prototyping to create intuitive user experiences"
  },
  {
    icon: Smartphone,
    title: "App Design",
    description: "Mobile app interfaces that are both beautiful and functional across all devices"
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "Responsive web designs that convert visitors into customers"
  },
  {
    icon: Users,
    title: "User Research",
    description: "In-depth user analysis to inform design decisions and improve usability"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-secondary/30 scroll-mt-24">
      <div className="container max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive design solutions to bring your digital products to life
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.06}>
              <Card className="service-card border-0 text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
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