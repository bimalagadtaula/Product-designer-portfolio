import { Button } from "@/components/ui/button";
import Marquee, { OrangeMarquee } from "./Marquee";
import meImage from "../assets/me.jpg";

// Import the default items for the marquee
const defaultItems = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "User Testing",
  "Design Systems",
  "Mobile Design",
  "Web Design",
  "UI Design",
  "UX Design",
  "Figma",
  "User Interviews",
  "Personas",
  "Responsive Design",
  "Visual Design",
  "Information Architecture",
  "Empathy Mapping",
  "User Flows",
  "User Journeys",
  "User Scenarios",
  "User Stories",
  "User Personas",
  "User Journey Mapping",
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Glow Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-pink-500/30 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-purple-500/25 rounded-full blur-3xl animate-pulse delay-1500" />
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
          {/* Left Content - Text */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tight neon-glow">
                UI/UX
              </h1>
              <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tight gradient-text-neon">
                DESIGNER
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Passionate UI/UX designer creating intuitive, beautiful, and user-centered digital experiences. 
              Specializing in user research, wireframing, prototyping, and design systems that drive engagement and conversion.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button className="gradient-bg-neon text-white text-lg px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-200 font-semibold">
                See more
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-pink-400/20 rounded-full blur-xl" />
              
              {/* Image Container */}
              <div className="relative glassmorphism rounded-2xl p-2 overflow-hidden">
                <img
                  src={meImage}
                  alt="Profile"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl"
                />
                
                {/* Neon Overlay Effects */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-transparent to-pink-500/10" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded-t-xl" />
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded-b-xl" />
              </div>
            </div>
          </div>
        </div>
         
        {/* Marquee */}
        <div className="mt-16">
          <Marquee items={defaultItems} />
          <OrangeMarquee />
        </div>
      </div>
    </section>
  );
}