import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import WhyHireMe from "@/components/WhyHireMe";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import TagList from "@/components/TagList";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Experience />
        <WhyHireMe />
        <Portfolio />
        <Testimonials />
        <CallToAction />
        <TagList />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
