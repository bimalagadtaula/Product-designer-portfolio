import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Behance, Dribbble, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f1115] text-white">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let’s work together</h3>
            <form className="space-y-4">
              <Input placeholder="Name" className="bg-white/5 border-white/10 text-white placeholder:text-white/50" />
              <Input type="email" placeholder="Email" className="bg-white/5 border-white/10 text-white placeholder:text-white/50" />
              <Textarea placeholder="Message" className="bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-[120px]" />
              <Button className="bg-primary text-primary-foreground hover:opacity-90">Submit</Button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">Contact</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> emma@designstudio.com</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123‑4567</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> San Francisco, CA</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Follow</h4>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="LinkedIn" className="text-white/80 hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
                <a href="#" aria-label="Behance" className="text-white/80 hover:text-white transition-colors"><Behance className="h-6 w-6" /></a>
                <a href="#" aria-label="Dribbble" className="text-white/80 hover:text-white transition-colors"><Dribbble className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/70 text-sm">
          Copyright 2025 Portfolio. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;