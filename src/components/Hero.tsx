import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Star } from "lucide-react";
import portfolioApp from "@/assets/portfolio-app.jpg";
import portfolioWeb from "@/assets/portfolio-web.jpg";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/motion";

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
                <Button size="lg" className="group hover-lift">
                  Explore Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="hover-lift">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </FadeIn>

            {/* Marquee */}
            <FadeIn delay={0.15} style={t(-8,-6,20)}>
              <div className="relative overflow-hidden border rounded-xl bg-card/70">
                <div className="whitespace-nowrap flex min-w-[200%] animate-[marquee_18s_linear_infinite]">
                  <div className="flex items-center gap-6 py-3 px-4 text-sm text-muted-foreground">
                    <span>UX Design</span>
                    <span>UI Design</span>
                    <span>Design Systems</span>
                    <span>Prototyping</span>
                    <span>User Research</span>
                    <span>Accessibility</span>
                    <span>Interaction Design</span>
                    <span>Product Strategy</span>
                  </div>
                  <div className="flex items-center gap-6 py-3 px-4 text-sm text-muted-foreground">
                    <span>UX Design</span>
                    <span>UI Design</span>
                    <span>Design Systems</span>
                    <span>Prototyping</span>
                    <span>User Research</span>
                    <span>Accessibility</span>
                    <span>Interaction Design</span>
                    <span>Product Strategy</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Floating project cards and badge */}
          <div className="relative h-[520px] md:h-[560px]" aria-hidden>
            {/* Rotating badge */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-28 h-28 rounded-full border bg-card/80 backdrop-blur flex items-center justify-center shadow-md" style={t(8,-8,-10)}>
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-[spin_12s_linear_infinite]" />
              <div className="text-xs font-semibold">Since 2021</div>
            </div>

            {/* Cards */}
            <div className="absolute top-16 left-2 right-10">
              <div className="ml-auto w-[78%] rounded-2xl overflow-hidden shadow-xl border bg-card hover-lift" style={t(16,10,-30)}>
                <img src={portfolioWeb} alt="E‑commerce Platform" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">Web Design</div>
                  <div className="font-semibold">E‑commerce Platform</div>
                </div>
              </div>
            </div>

            <div className="absolute top-44 right-0 left-10">
              <div className="w-[72%] rounded-2xl overflow-hidden shadow-xl border bg-card hover-lift" style={t(-20,8,20)}>
                <img src={portfolioApp} alt="Food Delivery App" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">Mobile App</div>
                  <div className="font-semibold">Food Delivery App</div>
                </div>
              </div>
            </div>

            {/* Small floating chips */}
            <div className="absolute bottom-8 left-2/3 -translate-x-1/2 flex gap-3" style={t(10,-6,30)}>
              <span className="px-3 py-1 rounded-full text-xs border bg-background/70 backdrop-blur">Case Studies</span>
              <span className="px-3 py-1 rounded-full text-xs border bg-background/70 backdrop-blur">Design Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;