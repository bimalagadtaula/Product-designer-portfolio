import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import designerPortrait from "@/assets/designer-portrait.jpg";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width; // -0.5..0.5
      const dy = (e.clientY - cy) / rect.height; // -0.5..0.5
      setMouseOffset({ x: dx, y: dy });
    };

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY;
        const h = window.innerHeight;
        const progress = Math.min(Math.max(y / h, 0), 1); // 0..1 within first viewport
        setScrollYProgress(progress);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // parallax helpers
  const translate = (multX: number, multY: number, extraY = 0) => {
    const tx = mouseOffset.x * multX;
    const ty = mouseOffset.y * multY + scrollYProgress * extraY;
    return { transform: `translate3d(${tx}px, ${ty}px, 0)` };
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center py-24 px-4 scroll-mt-24">
      <div ref={containerRef} className="container max-w-6xl relative">
        {/* Background parallax blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -top-10 -left-6 w-40 h-40 rounded-full bg-primary/20 blur-2xl"
            style={translate(-20, -10, 40)}
          />
          <div
            className="absolute top-1/3 -right-10 w-32 h-32 rounded-full bg-accent/70 blur-xl"
            style={translate(15, -15, -20)}
          />
          <div
            className="absolute bottom-6 left-1/4 w-24 h-24 rounded-full bg-primary/30 blur-xl"
            style={translate(-10, 20, 60)}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4" style={translate(-10, -6, -10)}>
              <div className="inline-block">
                <span className="text-muted-foreground text-lg">👋 Hi there!</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-shadow">
                I'm <span className="gradient-text">Emma</span>,<br />
                Product Designer
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Creating digital experiences that solve real problems and delight users. 
                Specialized in UX/UI design, user research, and design systems.
              </p>
            </div>
            
            <div className="flex items-center gap-4" style={translate(-6, -4, 20)}>
              <span className="text-primary font-semibold">⭐⭐⭐⭐⭐</span>
              <span className="text-muted-foreground">3 Years Experience</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4" style={translate(-4, -2, 30)}>
              <Button size="lg" className="group hover-lift">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative" style={translate(20, 12, -30)}>
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src={designerPortrait} 
                  alt="Emma - Product Designer" 
                  className="w-full h-full object-cover will-change-transform"
                  style={translate(-8, -8, -10)}
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full" style={translate(16, -12, -10)}></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent rounded-full" style={translate(-14, 10, 30)}></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-primary/20 rounded-full" style={translate(10, 8, 20)}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;