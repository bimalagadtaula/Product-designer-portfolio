import { Linkedin, Twitter, Github, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <a href="#home" className="font-extrabold text-xl tracking-tight">
              <span className="gradient-text">Emma</span> Wilson
            </a>
            <p className="text-muted-foreground mt-2">Product designer for web and mobile products.</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" strokeWidth={2.25} />
            </a>
            <a href="#" aria-label="Twitter/X" className="text-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" strokeWidth={2.25} />
            </a>
            <a href="#" aria-label="GitHub" className="text-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" strokeWidth={2.25} />
            </a>
            <a href="#" aria-label="Dribbble" className="text-foreground hover:text-primary transition-colors">
              <Dribbble className="h-6 w-6" strokeWidth={2.25} />
            </a>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Emma Wilson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;