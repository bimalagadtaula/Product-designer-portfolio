import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Import mockup images
import mindGarden from "@/assets/mockup/unsplash mockup-2.png";
import energyPlanner from "@/assets/mockup/unsplash mockup-1.png";
import breakRitual from "@/assets/mockup/break  ritual.png";

// Additional mockups for the placeholder sections
import IA from "@/assets/mockup/IA.png";
import analytics from "@/assets/mockup/analytics.png";
import addSeed from "@/assets/mockup/add seed.png";
import progress from "@/assets/mockup/break  ritual.png";
import reflection from "@/assets/mockup/unsplash mockup-1.png";
import settings from "@/assets/mockup/unsplash mockup-6.png";
import userPersona from "@/assets/mockup/analytics.png";

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
                  <img 
                    src={userPersona} 
                    alt="Sarah Martinez - User Persona" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
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

         {/* User Empathy Section */}
<motion.section 
  className="mb-32"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl sm:text-4xl font-bold mb-8">User Empathy</h2>
  <div className="bg-accent/5 rounded-2xl p-8 sm:p-12">
    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
      This empathy map captures the emotional, cognitive, and behavioral landscape of a typical GrowSlow user, someone who values mindful productivity, but often struggles within rigid, hustle-driven systems.
    </p>
    
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <span className="text-blue-600 font-bold">T</span>
            </div>
            Thinks
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• "Why can't I stay consistent like others?"</li>
            <li>• "There must be a better way to work sustainably"</li>
            <li>• "I keep trying productivity tools, but nothing really sticks."</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <span className="text-green-600 font-bold">D</span>
            </div>
            Does
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Journals and captures creative thoughts</li>
            <li>• Avoids rigid schedules and strict plans</li>
            <li>• Starts new side projects with excitement, but often abandons them</li>
          </ul>
        </div>
      </div>
      
      {/* Right Column */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <span className="text-purple-600 font-bold">S</span>
            </div>
            Says
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• "I want to work with flow, not pressure."</li>
            <li>• "I just spent more time organizing my tasks than actually doing them."</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
              <span className="text-red-600 font-bold">F</span>
            </div>
            Feels
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Guilty for resting or slowing down</li>
            <li>• Constantly switches between productivity apps</li>
            <li>• Battles self-doubt, especially during low-energy phases</li>
            <li>• Avoids looking at overdue tasks</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</motion.section>

  
         {/* Information Architecture Visual */}
<motion.section 
  className="mb-32"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl sm:text-4xl font-bold mb-8">Information Architecture</h2>
  <div className="bg-accent/5 rounded-2xl p-8 sm:p-12">
    <img 
      src={IA} 
      alt="GrowSlow Information Architecture Diagram" 
      className="w-full h-auto rounded-lg"
    />
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
              {[
                { src: analytics, alt: "Analytics Dashboard", title: "Analytics" },
                { src: addSeed, alt: "Add New Habit", title: "Add Seed" },
                { src: progress, alt: "Progress Tracking", title: "Progress" },
                { src: reflection, alt: "Daily Reflection", title: "Reflection" },
                { src: settings, alt: "App Settings", title: "Settings" },
                { src: energyPlanner, alt: "Energy Planning", title: "Energy Planner" }
              ].map((mockup, index) => (
                <div key={index} className="bg-accent/5 rounded-2xl p-8 flex items-center justify-center aspect-[9/16]">
                  <img 
                    src={mockup.src} 
                    alt={mockup.alt}
                    className="w-full max-w-[200px] h-auto drop-shadow-xl"
                  />
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
                <div className="w-full aspect-square rounded-2xl bg-[#A8C090] mb-3"></div>
                <p className="font-medium mb-1">Calm Green</p>
                <p className="text-sm text-muted-foreground">#A8C090</p>
              </div>
              <div>
                <div className="w-full aspect-square rounded-2xl bg-[#238644] mb-3"></div>
                <p className="font-medium mb-1">Dark Green</p>
                <p className="text-sm text-muted-foreground">#238644</p>
              </div>
              <div>
                <div className="w-full aspect-square rounded-2xl bg-[#434C52] mb-3"></div>
                <p className="font-medium mb-1">Ashwood Charcoal</p>
                <p className="text-sm text-muted-foreground">#434C52</p>
              </div>
              <div>
                <div className="w-full aspect-square rounded-2xl bg-[#FDE68A] mb-3"></div>
                <p className="font-medium mb-1">Light yellow</p>
                <p className="text-sm text-muted-foreground">#FDE68A</p>
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
  <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl p-12 sm:p-16">
    <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
      Let's Create Something Great Together
    </h2>
    
    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
      I believe good design understands both people and technology. If you're looking for someone who can design with empathy and understand the technical side too, I'd love to chat.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
      <Button 
        size="lg"
        onClick={() => navigate('/#contact')}
        className="text-lg px-8 py-6"
      >
        Get in Touch
      </Button>
      
      <div className="flex items-center gap-3 text-muted-foreground">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        <span className="text-lg">bimalagadtaula0@gmail.com</span>
      </div>
    </div>
    
    <div className="flex justify-center space-x-6 pt-6 border-t border-border/50">
      <a 
        href="https://www.linkedin.com/in/bmalagadtaula/" 
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="LinkedIn"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      <a 
        href="https://dribbble.com/bimalagadtaula" 
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Dribbble"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
        </svg>
      </a>
      <a 
        href="https://github.com/bimalagadtaula" 
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="GitHub"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
    </div>
  </div>
</motion.section>

        </div>
      </main>
      <Footer />
    </>
  );
}