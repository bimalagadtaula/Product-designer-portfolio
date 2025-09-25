import Hero from "@/components/Hero";
import { lazy, Suspense } from "react";
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Contact = lazy(() => import("@/components/Contact"));
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Suspense fallback={<div className="text-center py-10 text-foreground/60">Loading…</div>}>
          <Portfolio />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
