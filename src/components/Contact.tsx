import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 section-light">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Have an Awesome Project Idea? <span className="gradient-text">Let's Discuss</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's collaborate and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-foreground">Let's Connect there</h3>
              <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                I'm always open to discussing new opportunities, creative projects, 
                or potential partnerships. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group hover-lift">
                <div className="w-16 h-16 orange-circle-bg rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">Email</div>
                  <div className="text-muted-foreground text-lg">emma@designstudio.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group hover-lift">
                <div className="w-16 h-16 orange-circle-bg rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">Phone</div>
                  <div className="text-muted-foreground text-lg">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group hover-lift">
                <div className="w-16 h-16 orange-circle-bg rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">Location</div>
                  <div className="text-muted-foreground text-lg">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border-0 card-dark hover-lift">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground font-semibold">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-muted/10 border-muted text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground font-semibold">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-muted/10 border-muted text-foreground" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-muted/10 border-muted text-foreground" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground font-semibold">Subject</Label>
                  <Input id="subject" placeholder="Project Discussion" className="bg-muted/10 border-muted text-foreground" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-semibold">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    className="min-h-[150px] bg-muted/10 border-muted text-foreground"
                  />
                </div>
                
                <Button className="w-full hover-lift bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;