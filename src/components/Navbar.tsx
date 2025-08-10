import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const [progress, setProgress] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 8);
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const p = total > 0 ? (window.scrollY / total) * 100 : 0;
        setProgress(p);
        tickingRef.current = false;
      });
    };

    const sectionIds = navItems.map((n) => n.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((sec) => observer.observe(sec));

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        isScrolled ? "border-b bg-background/80 shadow-sm" : "bg-background/40 border-transparent"
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-xl tracking-tight font-display">
          <span className="gradient-text">Emma</span> Wilson
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "group relative text-sm text-muted-foreground hover:text-foreground transition-colors",
                activeId === item.href.slice(1) && "text-foreground"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "pointer-events-none absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                  activeId === item.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="#contact">Hire me</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a href={item.href} className="text-base font-medium text-foreground">
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-2">
                    <a href="#contact">Hire me</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px">
        <div className="h-[2px] bg-primary/80" style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
};

export default Navbar;