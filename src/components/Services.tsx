import { Code, Palette, Smartphone, Globe, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "UI Design",
    description:
      "Clean, easy-to-use interfaces designed with modern design principles and accessibility in mind."
  },
  {
    icon: Palette,
    title: "UX Research",
    description:
      "Getting to know your users through interviews, surveys, and testing to create designs that really work."
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description:
      "Building responsive, user-friendly mobile apps that feel smooth on both iOS and Android."
  },
  {
    icon: Globe,
    title: "SaaS & Web App Design",
    description:
      "Designing web and SaaS apps that are simple, scalable, and easy to use."
  },
   {
    icon: Shield,
    title: "Design Systems",
    description:
      "Creating design systems that keep your product consistent and make future updates easier."
  },
  {
    icon: Zap,
    title: "Prototyping",
    description:
      "Making clickable prototypes and wireframes so you can see and try your idea before it’s built."
  }
 
];


export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {/* <span className="text-white">Our </span> */}
            <span className="gradient-text-neon">Services</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
          I focus on creating user-centered product designs that align with your business goals. Here’s how I can help bring your project to life:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl p-8 hover:scale-105 transition-transform duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-blue-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}