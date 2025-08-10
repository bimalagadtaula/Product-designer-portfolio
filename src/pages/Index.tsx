import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import WhyHireMe from "@/components/WhyHireMe";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Hero />
        <About />
        <Services />
        <Experience />
        <WhyHireMe />
        <Portfolio />
        <Testimonials />
        <Blog />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
