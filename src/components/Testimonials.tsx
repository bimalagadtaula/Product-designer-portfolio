import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/motion";

const testimonials = [
  {
    name: "Jane Smith",
    avatar: "JS",
    review: "Working with Bmala was an incredible experience. Her attention to detail and creative vision brought our project to life in ways we never imagined."
  },
  {
    name: "John Doe",
    avatar: "JD", 
    review: "Bmala's design skills are exceptional. She delivered exactly what we needed and exceeded our expectations. Highly recommended!"
  },
  {
    name: "Sarah Wilson",
    avatar: "SW",
    review: "Professional, creative, and reliable. Bmala transformed our ideas into beautiful, functional designs that our users love."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="container max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Testimonials That<br />
              <span className="text-primary">Speak to My Results</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <Card className="bg-gray-800 border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.review}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="font-semibold text-white text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                    </div>
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

export default Testimonials;