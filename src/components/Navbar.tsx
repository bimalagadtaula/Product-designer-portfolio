import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#service", label: "Service" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "backdrop-blur bg-background/80 border-b" : "backdrop-blur bg-background/50"
      )}
    >
      <div className="container max-w-6xl mx-auto h-16 flex items-center justify-center px-4">
        <nav className="rounded-full border bg-card/90 shadow-sm px-4 sm:px-6 py-2">
          <ul className="flex items-center gap-4 sm:gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative px-2 py-1 text-muted-foreground hover:text-foreground transition-colors",
                    activeId === item.href.slice(1) && "text-foreground"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all",
                      activeId === item.href.slice(1) ? "w-6" : "w-0 group-hover:w-6"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px">
        <div className="h-[2px] bg-primary/80" style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
};

export default Navbar;