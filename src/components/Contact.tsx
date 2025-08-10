import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((f) => ({ ...f, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.firstName.trim()) next.firstName = "Required";
    if (!form.lastName.trim()) next.lastName = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Valid email required";
    if (!form.subject.trim()) next.subject = "Required";
    if (form.message.trim().length < 10) next.message = "Please provide at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      toast({ title: "Message sent ✅", description: "Thanks! I’ll get back to you within 1–2 business days." });
      setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30 scroll-mt-24">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a project in mind? <span className="gradient-text">Let's talk.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I partner with teams to design and ship user‑centered products. Share a few details about your goals and timeline, and I’ll follow up within 1–2 business days.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Prefer email? Reach out directly or use the form. I’m currently accepting new freelance engagements and fractional design leadership roles.
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground rounded-full border px-3 py-1 bg-background/60 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-primary inline-block" /> Typically replies within 1–2 business days
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:emma@designstudio.com" className="text-muted-foreground hover:text-foreground">emma@designstudio.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href="tel:+15551234567" className="text-muted-foreground hover:text-foreground">+1 (555) 123‑4567</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-muted-foreground">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border-0 card-gradient">
            <CardContent className="p-6">
              <form className="space-y-6" onSubmit={onSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" value={form.firstName} onChange={handleChange} aria-invalid={!!errors.firstName} />
                    {errors.firstName && <p className="text-xs text-destructive">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" value={form.lastName} onChange={handleChange} aria-invalid={!!errors.lastName} />
                    {errors.lastName && <p className="text-xs text-destructive">{errors.lastName}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project discussion" value={form.subject} onChange={handleChange} aria-invalid={!!errors.subject} />
                  {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project, goals, and timeline..." 
                    className="min-h-[120px]"
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>
                
                <Button className="w-full hover-lift" size="lg" type="submit" disabled={submitting}>
                  <Send className="mr-2 h-4 w-4" />
                  {submitting ? "Sending..." : "Send message"}
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