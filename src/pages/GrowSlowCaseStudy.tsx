import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Import mockup images
import mindGarden from "@/assets/mind-garden.png";
import energyPlanner from "@/assets/energy-based-planner.png";
import breakRitual from "@/assets/break-ritual.png";

export default function GrowSlowCaseStudy() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          {/* Header with Back Button */}
          <div className="pt-24 pb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-8 -ml-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>

          {/* Project Title Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              GrowSlow
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl">
              A mindful productivity app that helps users build sustainable habits through energy-based planning and gentle reflection practices.
            </p>
            
            {/* Project Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">ROLE</p>
                <p className="font-medium">Product Designer</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">DURATION</p>
                <p className="font-medium">6 Months</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">YEAR</p>
                <p className="font-medium">2024</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">PLATFORM</p>
                <p className="font-medium">iOS & Android</p>
              </div>
            </div>
          </motion.div>

          {/* Large Hero Mockup Pair */}
          <motion.div 
            className="mb-32"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center bg-accent/5 rounded-2xl p-8 sm:p-12">
                <img 
                  src={mindGarden} 
                  alt="Mind Garden Screen" 
                  className="w-full max-w-[280px] h-auto drop-shadow-2xl"
                />
              </div>
              <div className="flex items-center justify-center bg-accent/5 rounded-2xl p-8 sm:p-12">
                <img 
                  src={energyPlanner} 
                  alt="Energy Planner Screen" 
                  className="w-full max-w-[280px] h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Overview Section */}
          <motion.section 
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Overview</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In a world where productivity apps contribute to burnout rather than wellbeing, GrowSlow emerged as an antidote to "hustle culture." Through extensive research with over 50 professionals experiencing productivity app fatigue, we discovered that 78% felt overwhelmed by aggressive goal-setting and constant notifications.
              </p>
              <p>
                GrowSlow reimagines productivity by centering on mental health and sustainable practices. The app introduces energy-based planning, where users schedule tasks around their natural energy rhythms rather than rigid time blocks, alongside reflection-driven goals that emerge from self-awareness rather than external pressure.
              </p>
            </div>
          </motion.section>

          {/* Problem Section */}
          <motion.section 
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">The Problem</h2>
            <div className="bg-accent/5 rounded-2xl p-8 sm:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Traditional productivity apps often exacerbate stress through aggressive notifications, unrealistic goal-setting, and metrics that prioritize quantity over mental wellbeing. Our research revealed that users abandon these apps not due to lack of motivation, but because they increase anxiety and create unsustainable work patterns.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-foreground mb-2">78%</div>
                  <p className="text-sm text-muted-foreground">Feel overwhelmed by productivity apps</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-foreground mb-2">67%</div>
                  <p className="text-sm text-muted-foreground">Abandon aggressive goal apps</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-foreground mb-2">92%</div>
                  <p className="text-sm text-muted-foreground">Want sustainable productivity</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Solution Section */}
          <motion.section 
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">The Solution</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                GrowSlow introduces three core innovations that distinguish it from traditional productivity tools:
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Energy-Based Planning</h3>
                <p className="text-muted-foreground">
                  Schedule tasks around natural energy rhythms instead of fixed time blocks, leading to better results and reduced burnout.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Reflection-Driven Goals</h3>
                <p className="text-muted-foreground">
                  Goals emerge from self-awareness and introspection rather than external pressure or comparison.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Gentle Habit Formation</h3>
                <p className="text-muted-foreground">
                  Sustainable practices through positive reinforcement, removing aggressive notifications and competitive elements.
                </p>
              </div>
            </div>
          </motion.section>

          {/* More Mockups */}
          <motion.div 
            className="mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center justify-center bg-accent/5 rounded-2xl p-8 sm:p-12">
                <img 
                  src={breakRitual} 
                  alt="Break Ritual Screen" 
                  className="w-full max-w-[280px] h-auto drop-shadow-2xl"
                />
              </div>
              <div className="flex items-center justify-center bg-accent/5 rounded-2xl p-8 sm:p-12">
                <img 
                  src={mindGarden} 
                  alt="Progress Tracking Screen" 
                  className="w-full max-w-[280px] h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Design Process */}
          <motion.section 
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Design Process</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Research & Discovery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Interviewed 50+ professionals experiencing productivity app fatigue. Collaborated with behavioral psychologists to understand intrinsic vs. extrinsic motivation and discovered that energy-based scheduling outperforms time-based scheduling for wellbeing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Design System & Aesthetics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Developed a unique color palette based on nature therapy research. Removed red notifications, aggressive CTAs, and competitive elements common in productivity apps. The interface emphasizes calm through soft gradients, muted colors, and gentle animations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Testing & Iteration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conducted unique "wellbeing-first" usability testing where we measured stress levels alongside task completion. Modified features that increased anxiety and implemented gradual feature introduction over 4 weeks to prevent overwhelming users.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Color Palette */}
          <motion.section 
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Color Palette</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nature-inspired colors designed to promote calm, focus, and wellbeing. Each color was carefully selected based on color psychology research and tested for accessibility.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="w-full aspect-square rounded-2xl bg-[#059669] mb-3"></div>
                <p className="font-medium mb-1">Forest Green</p>
                <p className="text-sm text-muted-foreground">#059669</p>
              </div>
              <div>
                <div className="w-full aspect-square rounded-2xl bg-[#3B82F6] mb-3"></div>
                <p className="font-medium mb-1">Sky Blue</p>
                <p className="text-sm text-muted-foreground">#3B82F6</p>
              </div>
              <div>
                <div className="w-full aspect-square rounded-2xl bg-[#1F2937] mb-3"></div>
                <p className="font-medium mb-1">Deep Slate</p>
                <p className="text-sm text-muted-foreground">#1F2937</p>
              </div>
              <div>
                <div className="w-full aspect-square rounded-2xl bg-[#F3F4F6] mb-3"></div>
                <p className="font-medium mb-1">Soft Gray</p>
                <p className="text-sm text-muted-foreground">#F3F4F6</p>
              </div>
            </div>
          </motion.section>

          {/* Impact Section */}
          <motion.section 
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Impact & Results</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">+89%</div>
                <p className="text-sm font-medium mb-1">User Engagement</p>
                <p className="text-sm text-muted-foreground">Daily active users increased through mindful design</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">+156%</div>
                <p className="text-sm font-medium mb-1">Session Duration</p>
                <p className="text-sm text-muted-foreground">Users spend more quality time in reflection</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">73%</div>
                <p className="text-sm font-medium mb-1">Stress Reduction</p>
                <p className="text-sm text-muted-foreground">Self-reported stress levels decreased</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">+67%</div>
                <p className="text-sm font-medium mb-1">Habit Completion</p>
                <p className="text-sm text-muted-foreground">Sustainable habit formation without burnout</p>
              </div>
            </div>
          </motion.section>

          {/* Key Learnings */}
          <motion.section 
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Key Learnings</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Less can be more powerful</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Removing features often improved user wellbeing more than adding them. Our "feature subtraction" approach became a key methodology.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Energy beats time management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users achieved better results when planning around energy levels rather than fixed time blocks. This became our core differentiator.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Community without comparison</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We learned to design social features that provide support without triggering unhealthy competition or comparison.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Thank You Section */}
          <motion.section 
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Thank you for reading</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in working together?
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/#contact')}
              className="text-lg px-8"
            >
              Get in Touch
            </Button>
          </motion.section>

        </div>
      </main>
      <Footer />
    </>
  );
}
