import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Palette, Globe, Layout } from "lucide-react";
import { FadeIn } from "@/components/motion";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user interfaces with focus on user experience."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Design",
    description: "Designing responsive and modern websites that work perfectly across all devices."
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Landing Page",
    description: "Crafting high-converting landing pages that drive results and engagement."
  }
];

const Services = () => {
  return (
    <section id="service" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full translate-x-24 translate-y-24"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              I offer comprehensive design services to help bring your digital vision to life
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
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