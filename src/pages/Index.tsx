import Hero from "@/components/Hero";
import { lazy, Suspense } from "react";
const Services = lazy(() => import("@/components/Services"));
const Experience = lazy(() => import("@/components/Experience"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Hero />
        <Suspense fallback={<div className="text-center py-10 text-foreground/60">Loading…</div>}>
          <Services />
          <Experience />
          <Portfolio />
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
