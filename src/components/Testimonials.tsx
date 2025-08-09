import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Emma's design work is exceptional. She has a keen eye for detail and always delivers designs that exceed expectations. Her user research insights have been invaluable to our product development.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Mike Chen", 
    role: "CEO",
    company: "StartupX",
    content: "Working with Emma was a game-changer for our product. Her design thinking and user-centered approach helped us achieve a 40% increase in user engagement.",
    rating: 5,
    avatar: "MC"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 section-dark">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="gradient-text">Testimonials</span> That Speak to My Results
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            What clients and colleagues say about working with me
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift card-dark border-muted/20 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-8 leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 orange-circle-bg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="font-bold text-primary-foreground text-lg">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                    <div className="text-muted-foreground">
                      {testimonial.role} at <span className="text-primary">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;