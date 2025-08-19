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
      className="relative min-h-screen flex flex flex-col items-center justify-center pt-24 overflow-hidden bg-background"
      aria-label="Introduction section"
    >
      <div className="absolute inset-0 grid-pattern" />
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1500" />
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-primary/15 rounded-full blur-xl animate-pulse delay-2000" />
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-16">
        {/* Left Text */}
        <div className="flex-1 min-w-0 text-center lg:text-left">
          {/* Overline tagline */}
          <div className="mb-3 flex items-center justify-center lg:justify-start gap-3 text-sm md:text-base text-foreground/70">
            <span>Hi, I’m Bimala Gadtaula</span>
          </div>

          <div className="mb-6 md:mb-7 max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight gradient-text-neon neon-glow font-display">
              Product Designer
            </h1>
          </div>

          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mt-5 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0">
            I design scalable SaaS dashboards and marketplaces — transforming complex workflows into simple, revenue-driving experiences.
          </p>

          <div className="mt-4 flex items-center justify-center lg:justify-start gap-3">
            <Button
              className="gradient-bg-neon text-white text-lg px-8 py-4 rounded-xl hover:shadow-lg transition-transform duration-200 ease-premium hover-tail font-semibold focus:outline-none focus:ring-4 focus:ring-primary"
              onClick={handleScrollToPortfolio}
              aria-label="View case studies"
            >
              View Case Studies
            </Button>
            <Button variant="outline" className="border-secondary hover:bg-secondary/10 text-foreground hover:shadow-md hover:translate-y-[-1px] transition ease-premium hover-tail" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 min-w-0 flex justify-center lg:justify-end">
          <div className="relative mt-6 lg:mt-0">
            {/* Glow Effects */}
            <div className="absolute -inset-4 rounded-full blur-2xl animated-gradient-glow" />
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl" />

            {/* Image Container */}
            <div className="relative glassmorphism rounded-2xl p-2 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
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

