import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Star } from "lucide-react";
import portrait from "@/assets/designer-portrait.jpg";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/motion";
import Marquee from "@/components/Marquee";

const Hero = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      setMouse({ x: (e.clientX - cx) / r.width, y: (e.clientY - cy) / r.height });
    };
    const onScroll = () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        setScroll(Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1));
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const t = (mx: number, my: number, sy = 0) => ({
    transform: `translate3d(${mouse.x * mx}px, ${mouse.y * my + scroll * sy}px, 0)`
  });

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden scroll-mt-24">
      {/* Mesh background */}
      <div className="absolute inset-0 hero-mesh" />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl" style={t(-30,-20,60)} />
        <div className="absolute top-1/4 -right-24 w-60 h-60 rounded-full bg-accent/60 blur-2xl" style={t(24,-16,-30)} />
        <div className="absolute bottom-10 left-1/3 w-40 h-40 rounded-full bg-primary/30 blur-2xl" style={t(-16,18,40)} />
      </div>

      <div ref={ref} className="relative z-10 container max-w-6xl px-4">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
          {/* Left: Title and CTA */}
          <div className="space-y-8">
            <FadeIn style={t(-12,-8,-20)}>
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 text-muted-foreground text-sm">
                  <Star className="h-4 w-4 text-primary" /> Available for freelance
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
                  Designing delightful
                  <br />
                  digital <span className="gradient-text">experiences</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Product designer crafting human-centered interfaces for startups and scale-ups. I blend research, aesthetics, and usability to create products people love.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} style={t(-6,-4,10)}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group hover-lift">
                  <a href="#portfolio" className="inline-flex items-center">
                    Explore Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover-lift">
                  <a href="#" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </FadeIn>

            {/* Marquee */}
            <FadeIn delay={0.15} style={t(-8,-6,20)}>
              <Marquee
                items={[
                  "Product Strategy",
                  "UX Design",
                  "UI Design",
                  "Design Systems",
                  "Prototyping",
                  "User Research",
                  "Accessibility",
                  "Interaction Design",
                  "Product Strategy",
                ]}
                speedSec={26}
              />
            </FadeIn>
          </div>

          {/* Right: Portrait with decorative ring and badge */}
          <div className="relative h-[520px] md:h-[560px]">
            {/* Rotating badge */}
            <div className="absolute right-6 -top-6 w-28 h-28 rounded-full border bg-card/80 backdrop-blur flex items-center justify-center shadow-md" style={t(8,-8,-10)} aria-hidden>
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-[spin_12s_linear_infinite]" />
              <div className="text-xs font-semibold">Since 2021</div>
            </div>

            {/* Portrait */}
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
              <div className="relative">
                <div className="absolute -inset-8 rounded-full blur-2xl bg-primary/20" style={t(10,-6,30)} />
                <div className="rounded-full p-1 bg-gradient-to-tr from-primary/50 to-accent shadow-xl" style={t(16,10,-30)}>
                  <div className="rounded-full overflow-hidden w-[280px] h-[280px] md:w-[360px] md:h-[360px] border border-white/50 bg-card">
                    <img src={portrait} alt="Designer portrait" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating chips */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3" style={t(10,-6,30)} aria-hidden>
              <span className="px-3 py-1 rounded-full text-xs border bg-background/70 backdrop-blur">San Francisco, CA</span>
              <span className="px-3 py-1 rounded-full text-xs border bg-background/70 backdrop-blur">Product Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;