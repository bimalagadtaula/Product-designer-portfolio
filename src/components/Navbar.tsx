"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPrimary } from "@/components/CTA";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-20% 0px -55% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  };

  // Determine active section based on current route
  const getCurrentActiveSection = () => {
    if (location.pathname.includes("/case-studies/")) {
      return "portfolio";
    }
    return activeSection;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="glassmorphism-nav rounded-2xl px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BG</span>
              </div>
              <span className="text-white font-semibold text-lg">Portfolio</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "HOME" },
                { id: "services", label: "SERVICES" },
                { id: "portfolio", label: "PORTFOLIO" },
                { id: "contact", label: "CONTACT" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={getCurrentActiveSection() === item.id ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    getCurrentActiveSection() === item.id
                      ? "text-blue-400 neon-glow"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <CTAPrimary href="#contact" className="border-0">Hire Me</CTAPrimary>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden border-slate-600 text-white hover:bg-white/10"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glassmorphism border-l border-white/10">
                <div className="flex flex-col space-y-6 mt-8">
                  {[
                    { id: "home", label: "HOME" },
                    { id: "services", label: "SERVICES" },
                    { id: "portfolio", label: "PORTFOLIO" },
                    { id: "contact", label: "CONTACT" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      aria-current={getCurrentActiveSection() === item.id ? 'page' : undefined}
                      className={`text-left text-lg font-medium transition-colors duration-200 ${
                        getCurrentActiveSection() === item.id
                          ? "text-blue-400 neon-glow"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <CTAPrimary href="#contact" className="border-0 mt-4">Hire Me</CTAPrimary>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500 opacity-50" />
    </nav>
  );
}