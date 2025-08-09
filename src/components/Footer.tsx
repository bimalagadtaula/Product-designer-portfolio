import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-muted/20 section-dark">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl mb-3 text-foreground">Emma Wilson</h3>
            <p className="text-muted-foreground text-lg">Product Designer crafting digital experiences</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hover-lift hover:bg-primary/10 w-12 h-12 rounded-full">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift hover:bg-primary/10 w-12 h-12 rounded-full">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift hover:bg-primary/10 w-12 h-12 rounded-full">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift hover:bg-primary/10 w-12 h-12 rounded-full">
              <Dribbble className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-muted/20 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Emma Wilson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;