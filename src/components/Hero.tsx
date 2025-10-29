import { CTAPrimary } from "@/components/CTA";
import { motion } from "framer-motion";
import meImage from "../assets/animated.jpg";
import { Sparkles, Palette, Users, Code } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">Product & UX Designer</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block text-foreground">Crafting Digital</span>
                <span className="block gradient-text-neon">Experiences</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
            >
              I design user-centered products that increase engagement, improve conversions, 
              and create meaningful digital experiences.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto py-8"
            >
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold gradient-text-neon">5+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold gradient-text-neon">20+</div>
                <div className="text-sm text-foreground/60">Projects Delivered</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold gradient-text-neon">100%</div>
                <div className="text-sm text-foreground/60">Client Satisfaction</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center gap-4"
            >
              <CTAPrimary href="/projects">View Projects</CTAPrimary>
              <CTAPrimary href="/about">About Me</CTAPrimary>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-16"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                className="glassmorphism rounded-2xl p-6 border border-primary/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Design Systems</h3>
                <p className="text-sm text-foreground/60">Scalable design foundations</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                className="glassmorphism rounded-2xl p-6 border border-primary/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">User Research</h3>
                <p className="text-sm text-foreground/60">Data-driven insights</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                className="glassmorphism rounded-2xl p-6 border border-primary/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Prototyping</h3>
                <p className="text-sm text-foreground/60">Interactive demos</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
