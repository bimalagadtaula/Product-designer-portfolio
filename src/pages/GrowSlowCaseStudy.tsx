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
                GrowSlow is a conceptual productivity app designed as an antidote to "hustle culture." Based on research into productivity app fatigue and burnout patterns, the concept addresses how aggressive goal-setting and constant notifications contribute to user overwhelm and abandonment.
              </p>
              <p>
                This concept reimagines productivity by centering on mental health and sustainable practices. The app introduces energy-based planning, where users would schedule tasks around their natural energy rhythms rather than rigid time blocks, alongside reflection-driven goals that emerge from self-awareness rather than external pressure.
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
                Traditional productivity apps often exacerbate stress through aggressive notifications, unrealistic goal-setting, and metrics that prioritize quantity over mental wellbeing. Industry research suggests that users abandon these apps not due to lack of motivation, but because they increase anxiety and create unsustainable work patterns.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-xl font-semibold text-foreground mb-2">User Overwhelm</div>
                  <p className="text-sm text-muted-foreground">Aggressive productivity apps create anxiety and stress</p>
                </div>
                <div>
                  <div className="text-xl font-semibold text-foreground mb-2">App Abandonment</div>
                  <p className="text-sm text-muted-foreground">Users quit due to unrealistic expectations</p>
                </div>
                <div>
                  <div className="text-xl font-semibold text-foreground mb-2">Need for Balance</div>
                  <p className="text-sm text-muted-foreground">Demand for sustainable productivity tools</p>
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
                  Analyzed existing research on productivity app fatigue and behavioral psychology patterns. Studied intrinsic vs. extrinsic motivation frameworks and how energy-based scheduling could potentially outperform time-based scheduling for wellbeing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Design System & Aesthetics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Developed a unique color palette inspired by nature therapy principles. Intentionally removed red notifications, aggressive CTAs, and competitive elements common in productivity apps. The interface emphasizes calm through soft gradients, muted colors, and gentle animations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Conceptual Framework</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Designed a "wellbeing-first" approach that would prioritize mental health alongside task completion. The concept includes gradual feature introduction to prevent overwhelming users and focuses on sustainable habit formation rather than quick results.
                </p>
              </div>
            </div>
          </motion.section>

          {/* User Persona */}
          <motion.section 
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">User Persona</h2>
            <div className="bg-accent/5 rounded-2xl p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-32 h-32 rounded-full bg-primary/10 mb-4"></div>
                  <h3 className="text-2xl font-bold">Sarah Martinez</h3>
                  <p className="text-lg text-muted-foreground">Product Manager, 32</p>
                  <div className="space-y-2 pt-4">
                    <div>
                      <p className="font-semibold mb-1">Goals</p>
                      <p className="text-muted-foreground">Build sustainable productivity habits without burnout</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Frustrations</p>
                      <p className="text-muted-foreground">Aggressive productivity apps increase anxiety and stress</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Background</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Sarah has tried multiple productivity apps but found them overwhelming. She values mental wellbeing and wants to be productive without sacrificing her health.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Behaviors</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Plans tasks around energy levels</li>
                      <li>• Prefers reflection over aggressive goals</li>
                      <li>• Values sustainable over quick wins</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Information Architecture */}
          <motion.section 
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Information Architecture</h2>
            <div className="bg-accent/5 rounded-2xl p-8 sm:p-12">
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The app structure was designed to minimize cognitive load while providing intuitive access to all features. We organized content around the user's natural workflow.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="font-semibold">Home Dashboard</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Today's energy level</li>
                    <li>• Planned tasks</li>
                    <li>• Quick reflections</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="font-semibold">Energy Planner</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Energy mapping</li>
                    <li>• Task scheduling</li>
                    <li>• Break rituals</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="font-semibold">Mind Garden</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Progress visualization</li>
                    <li>• Reflections</li>
                    <li>• Insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Mockups Section */}
          <motion.section 
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Additional Mockups</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Detailed mockups showcasing the app's interface across different scenarios and user interactions.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-accent/5 rounded-2xl p-8 flex items-center justify-center aspect-[9/16]">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-3"></div>
                    <p className="text-sm text-muted-foreground">Mockup {i}</p>
                  </div>
                </div>
              ))}
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

          {/* Design Goals */}
          <motion.section 
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Design Goals</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-xl font-semibold text-foreground mb-2">User Wellbeing</div>
                <p className="text-sm font-medium mb-1">Primary Focus</p>
                <p className="text-sm text-muted-foreground">Prioritize mental health over aggressive productivity metrics</p>
              </div>
              <div>
                <div className="text-xl font-semibold text-foreground mb-2">Mindful Engagement</div>
                <p className="text-sm font-medium mb-1">Quality Time</p>
                <p className="text-sm text-muted-foreground">Encourage reflection and self-awareness practices</p>
              </div>
              <div>
                <div className="text-xl font-semibold text-foreground mb-2">Reduce Anxiety</div>
                <p className="text-sm font-medium mb-1">Stress Management</p>
                <p className="text-sm text-muted-foreground">Remove aggressive notifications and competitive elements</p>
              </div>
              <div>
                <div className="text-xl font-semibold text-foreground mb-2">Sustainable Habits</div>
                <p className="text-sm font-medium mb-1">Long-term Success</p>
                <p className="text-sm text-muted-foreground">Build lasting practices without burnout</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Key Design Insights</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Less can be more powerful</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The concept emphasizes "feature subtraction" - intentionally removing common productivity app elements that create anxiety rather than adding more features.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Energy beats time management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The design prioritizes energy-based planning over fixed time blocks, potentially allowing users to work with their natural rhythms rather than against them.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Community without comparison</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The concept explores social features that would provide support without triggering unhealthy competition or comparison.
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
