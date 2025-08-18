import { Button } from "@/components/ui/button";
import Marquee, { OrangeMarquee } from "./Marquee";
import meImage from "../assets/animated.jpg";

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
  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex flex-col items-center justify-center pt-24 overflow-hidden bg-gray-900"
      aria-label="Introduction section"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1500" />
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-400/15 rounded-full blur-xl animate-pulse delay-2000" />
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-12 items-center mb-16">
        {/* Left Text */}
        <div className="flex-1 min-w-0 text-center lg:text-left">
          <div className="mb-10 max-w-lg mx-auto lg:mx-0">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight neon-glow leading-tight text-white"
              style={{
                textShadow:
                  "0 0 6px rgba(0,132,255,0.75), 0 0 12px rgba(0,132,255,0.5)",
              }}
            >
            Hi, I’m Bimala — 
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight gradient-text-neon mt-2">
            Product & UX Designer
            </h2>
          </div>

          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
           I help startups and SaaS platforms create user-centered products that increase engagement,
            improve conversions, and delight users. With hands-on experience designing web and mobile apps for both international and local clients, I combine research, design strategy,
            and interactive prototypes to deliver meaningful digital experiences.
          </p>

          <Button
            className="gradient-bg-neon text-white text-lg px-8 py-4 rounded-xl hover:scale-105 hover:shadow-lg transition-transform duration-200 font-semibold focus:outline-none focus:ring-4 focus:ring-pink-500"
            onClick={handleScrollToPortfolio}
            aria-label="View Portfolio"
          >
            View Portfolio
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex-1 min-w-0 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow Effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/25 to-pink-500/25 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-pink-400/20 rounded-full blur-xl" />

            {/* Image Container */}
            <div className="relative glassmorphism rounded-2xl p-2 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <img
                src={meImage}
                alt="Portrait of Bimala Gadtaula, UI/UX Designer"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl scale-x-[-1]"
                loading="eager"
              />

              {/* Neon Overlay Effects */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-transparent to-pink-500/10 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded-t-xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded-b-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      {/* Marquee */}
      <div className="mt-20 w-full" aria-label="Skills marquee">
        <Marquee items={defaultItems} />
        <OrangeMarquee />
      </div>
    </section>
  );
}
