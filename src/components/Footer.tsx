import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-2">Emma Wilson</h3>
            <p className="text-muted-foreground">Product Designer crafting digital experiences</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hover-lift">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift">
              <Dribbble className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Emma Wilson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;