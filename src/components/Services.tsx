import { Card, CardContent } from "@/components/ui/card";
import { Palette, Smartphone, Monitor, Users } from "lucide-react";

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
    <section className="py-24 px-4 section-light">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive design solutions to bring your digital products to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card text-center p-8 group">
              <CardContent className="space-y-6 p-0">
                <div className="w-20 h-20 mx-auto orange-circle-bg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-xl text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;