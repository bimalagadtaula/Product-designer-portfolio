import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/motion";

const testimonials = [
  { name: "Sarah Johnson", role: "Product Manager", company: "TechCorp", content: "Emma's design work is exceptional. She has a keen eye for detail and always delivers designs that exceed expectations.", rating: 5, avatar: "SJ" },
  { name: "Mike Chen", role: "CEO", company: "StartupX", content: "Working with Emma was a game-changer for our product. Her design thinking and user-centered approach helped us achieve a 40% increase in user engagement.", rating: 5, avatar: "MC" },
  { name: "Alicia Gomez", role: "Head of Product", company: "SaaSCo", content: "Clear process, great communication, and beautiful outcomes. Highly recommend.", rating: 5, avatar: "AG" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 scroll-mt-24">
      <div className="container max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-h2 md:text-display font-bold mb-4"><span className="gradient-text">Testimonials</span> That Speak to My Results</h2>
            <p className="text-muted-foreground text-bodyLg">What clients and colleagues say about working with me</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.08}>
              <Card className="border bg-card shadow-none hover:-translate-y-0.5 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
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