import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-slate-200 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-2 text-slate-900">Emma Wilson</h3>
            <p className="text-slate-600">Product Designer crafting digital experiences</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hover-lift text-slate-600 hover:text-blue-600 hover:bg-blue-50">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift text-slate-600 hover:text-blue-600 hover:bg-blue-50">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift text-slate-600 hover:text-blue-600 hover:bg-blue-50">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift text-slate-600 hover:text-blue-600 hover:bg-blue-50">
              <Dribbble className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-8 pt-8 text-center text-slate-500">
          <p>&copy; 2024 Emma Wilson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;