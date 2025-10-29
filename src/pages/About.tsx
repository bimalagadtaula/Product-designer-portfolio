import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Services from "@/components/Services";
import { motion } from "framer-motion";
import meImage from "@/assets/animated.jpg";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 bg-background">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative glassmorphism rounded-3xl p-4 overflow-hidden">
                    <img
                      src={meImage}
                      alt="Bimala Gadtaula"
                      className="w-full h-auto object-cover rounded-2xl scale-x-[-1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h1 className="text-5xl md:text-6xl font-bold">
                    <span className="text-foreground">Hi, I'm </span>
                    <span className="gradient-text-neon">Bimala</span>
                  </h1>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    A Product & UX Designer passionate about creating user-centered digital experiences. 
                    I help startups and SaaS platforms design products that increase engagement, 
                    improve conversions, and delight users.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    With hands-on experience designing web and mobile apps for both international and local clients, 
                    I combine research, design strategy, and interactive prototypes to deliver meaningful solutions.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <Services />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />
      </main>
      <Footer />
    </>
  );
}
