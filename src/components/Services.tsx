import { Code, Palette, Smartphone, Globe, Zap, Shield } from "lucide-react";

const services = [
  // {
  //   icon: Code,
  //   title: "UI Design",
  //   description:
  //     "Clean, easy-to-use interfaces designed with modern design principles and accessibility in mind."
  // },
  // {
  //   icon: Palette,
  //   title: "UX Research",
  //   description:
  //     "Getting to know your users through interviews, surveys, and testing to create designs that really work."
{
  icon: Smartphone,
  title: "Feature Flow Design",
  description:
    "You have a new feature idea for your existing app; I'll design the complete user journey for it. I'll deliver a polished, interactive prototype of this specific flow that integrates seamlessly with your current product."
},
{
  icon: Globe,
  title: "MVP Launch Package",
  description:
    "You have a vision for a new product; I'll design its foundational experience. I'll architect and design the core set of screens and user flows that form your minimum viable product, giving you a complete, testable prototype."
},
{
  icon: Shield,
  title: "UI Modernization",
  description:
    "Your product's core features are set, but the design feels outdated. I'll redesign and modernize your key screens to boost usability, refresh the visual appeal, and improve user engagement."
}
  // {
  //   icon: Zap,
  //   title: "Prototyping",
  //   description:
  //     "Making clickable prototypes and wireframes so you can see and try your idea before it’s built."
  // }
 
];


export default function Services() {
  return (
    <section id="services" className="py-20 relative scroll-mt-24">
      <div className="absolute inset-0 grid-pattern" />
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="section-title mb-6">
            {/* <span className="text-foreground">My </span> */}
            <span className="gradient-text-neon">Services</span>
          </h2>
          <p className="section-subtitle">
            I focus on creating user-centered product designs that align with your business goals. Here’s how I can help bring your project to life:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl p-8 hover-tail ease-premium group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}