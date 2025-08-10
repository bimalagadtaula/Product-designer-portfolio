import { Code, Palette, Smartphone, Globe, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "UI Design",
    description: "Beautiful and intuitive user interfaces designed with modern design principles and accessibility in mind."
  },
  {
    icon: Palette,
    title: "UX Research",
    description: "Comprehensive user research including user interviews, surveys, and usability testing to inform design decisions."
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description: "Responsive mobile-first designs that provide seamless experiences across all devices and screen sizes."
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Modern web applications with engaging user experiences and intuitive navigation patterns."
  },
  {
    icon: Zap,
    title: "Prototyping",
    description: "Interactive prototypes and wireframes that bring your ideas to life before development begins."
  },
  {
    icon: Shield,
    title: "Design Systems",
    description: "Comprehensive design systems that ensure consistency and scalability across all your products."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text-neon">Services</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We specialize in creating immersive digital experiences that push the boundaries of what's possible.
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