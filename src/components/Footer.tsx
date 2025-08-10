import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Dribbble, Mail, Phone, MapPin } from "lucide-react";

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4 7.5h5.2c1.2 0 2.1.3 2.7.8.5.4.7 1 .7 1.7 0 .9-.5 1.6-1.2 2 .9.3 1.6 1.1 1.6 2.3 0 .8-.3 1.5-.8 2-.7.7-1.7 1-2.9 1H4V7.5zm3.8 3.6h1.8c.5 0 .8-.1 1-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.6-.2-.2-.5-.2-1-.2H7.8v1.8zm0 4h2.1c.5 0 .9-.1 1.1-.3.3-.2.4-.5.4-.8s-.1-.6-.4-.8c-.3-.2-.7-.3-1.3-.3H7.8v2.2zM15.4 12.6c.1-.7.4-1.3.9-1.8.6-.6 1.5-1 2.7-1 1.2 0 2.1.3 2.7.9.4.4.7.9.8 1.6h-2.1c-.1-.3-.2-.5-.4-.7-.3-.3-.6-.4-1.1-.4-.5 0-.9.2-1.2.5-.3.3-.5.8-.5 1.4 0 .6.2 1 .5 1.4.3.3.7.5 1.2.5.5 0 .9-.2 1.1-.4.2-.2.3-.4.4-.7H22c-.1.7-.4 1.2-.8 1.6-.6.6-1.5.9-2.7.9s-2.1-.4-2.7-1c-.5-.5-.8-1.1-.9-1.8h0zm.3-4.3h4.3v1.1h-4.3V8.3z"/>
  </svg>
);

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
                <a href="#" aria-label="Behance" className="text-white/80 hover:text-white transition-colors"><BehanceIcon className="h-6 w-6" /></a>
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