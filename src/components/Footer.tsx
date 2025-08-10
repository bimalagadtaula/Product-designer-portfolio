import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github, Dribbble, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a href="#home" className="font-extrabold text-xl tracking-tight">
              <span className="gradient-text">Emma</span> Wilson
            </a>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Product designer focused on crafting clear, elegant interfaces for web and mobile products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm font-semibold mb-3">Navigation</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-foreground">Services</a></li>
                <li><a href="#experience" className="hover:text-foreground">Experience</a></li>
                <li><a href="#portfolio" className="hover:text-foreground">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-foreground">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold mb-3">Contact</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:emma@designstudio.com" className="hover:text-foreground">emma@designstudio.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>

          <div className="md:text-right">
            <div className="flex md:justify-end items-center gap-3">
              <Button variant="ghost" size="icon" className="hover-lift" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-lift" aria-label="Twitter/X">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-lift" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-lift" aria-label="Dribbble">
                <Dribbble className="h-4 w-4" />
              </Button>
            </div>
            <Button asChild className="mt-4">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>&copy; {new Date().getFullYear()} Emma Wilson. All rights reserved.</p>
            <p>Available for freelance engagements</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;