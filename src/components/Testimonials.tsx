import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Product Manager",
    company: "Glosifi",
    content:
      "The beauty and wellness booking platform redesign delivered a seamless experience for our users. The designer’s collaboration and attention to detail improved user engagement significantly.",
    rating: 5,
  },
  {
    name: "Michael Davis",
    role: "Project Lead",
    company: "Agri AI",
    content:
      "Their mobile UI design for our agriculture app made complex workflows intuitive and easy to use for farmers. The prototyping and user testing phases were very thorough.",
    rating: 5,
  },
  {
    name: "Sophia Miller",
    role: "Founder",
    company: "GrowSlow",
    content:
      "The mindful productivity app design truly captures the needs of neurodivergent users. The user research and accessibility focus have been invaluable.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Client </span>
            <span className="gradient-text-neon">Testimonials</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear from our clients about their experiences with our immersive technology solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl p-8 hover:scale-105 transition-transform duration-300 group"
            >
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-foreground font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-foreground font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-foreground/60 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}