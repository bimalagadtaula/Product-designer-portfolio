import { Button } from "@/components/ui/button";
import { CTAPrimary, CTASecondary } from "@/components/CTA";
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
      className="relative min-h-screen flex flex flex-col items-center justify-center pt-24 overflow-hidden bg-background"
      aria-label="Introduction section"
    >
      <div className="absolute inset-0 grid-pattern opacity-30 md:opacity-50" />
      <div className="absolute inset-0 hero-stars opacity-60" />
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1500" />
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-primary/15 rounded-full blur-xl animate-pulse delay-2000" />
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center mb-16">
        {/* Left Text */}
        <div className="flex-1 min-w-0 text-center lg:text-left">
          {/* Overline tagline */}
          <div className="mb-5 flex items-center justify-center lg:justify-start gap-3 text-base md:text-lg text-foreground/70">
            <span>Hi, I’m Bimala Gadtaula</span>
          </div>

          <div className="mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] gradient-text-neon neon-glow text-shadow font-display">
              Product Designer
              <span className="block md:inline"> & UX Designer</span>
            </h1>
          </div>

          <p className="text-base md:text-lg text-foreground/80 leading-[1.65] mt-6 mb-10 md:mb-12 max-w-2xl mx-auto lg:mx-0">
          I help startups and SaaS platforms create user-centered products that increase engagement,
           improve conversions, and delight users. With hands-on experience designing web and mobile apps for both international and local clients, I combine research, design strategy, 
          and interactive prototypes to deliver meaningful digital experiences.
          </p>

          <div className="mt-6 flex items-center justify-center lg:justify-start gap-5 md:gap-6">
            <CTAPrimary href="#portfolio" className="" >View Case Studies</CTAPrimary>
            <CTASecondary href="#contact" className="">Work Together</CTASecondary>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 min-w-0 flex justify-center lg:justify-end">
          <div className="relative mt-6 lg:mt-0 perspective-1000 transform-style-preserve-3d">
            {/* Glow Effects */}
            <div className="absolute -inset-4 rounded-full blur-2xl animated-gradient-glow" />
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl" />

            {/* Image Container */}
            <div className="relative glassmorphism rounded-2xl p-2 overflow-hidden transition-3d hover-rotate-y-12 hover:shadow-xl cursor-pointer">
              <img
                src={meImage}
                alt="Portrait of Bimala Gadtaula, UI/UX Designer"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl scale-x-[-1]"
                loading="eager"
              />

              {/* Neon Overlay Effects */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-t-xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-b-xl pointer-events-none" />
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

