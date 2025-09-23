import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Target, CheckCircle, Award, TrendingUp, Brain, Heart, Lightbulb, Eye, Palette, Code, Star, Clock, Briefcase, Zap, Focus, BarChart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPrimary, CTASecondary } from "@/components/CTA";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function GrowSlowCaseStudy() {
  const navigate = useNavigate();

  const mockups = [
    { src: "/src/assets/mind-garden.png", alt: "GrowSlow main dashboard with daily reflection prompts", caption: "Clean, mindful dashboard promoting intentional daily reflection" },
    { src: "/src/assets/energy-based-planner.png", alt: "Energy-based task planning interface", caption: "Revolutionary energy-based scheduling that adapts to natural rhythms" },
    { src: "/src/assets/break-ritual.png", alt: "Mindful break ritual interface", caption: "Guided break experiences with breathing exercises and micro-meditations" },
    { src: "/src/assets/mind-garden.png", alt: "Progress tracking with mood insights", caption: "Visual progress tracking focused on wellbeing over productivity metrics" },
    { src: "/src/assets/energy-based-planner.png", alt: "Habit formation with gentle nudges", caption: "Non-aggressive habit building through positive reinforcement patterns" },
    { src: "/src/assets/break-ritual.png", alt: "Weekly reflection and goal setting", caption: "Weekly review sessions that celebrate growth over achievement" },
    { src: "/src/assets/mind-garden.png", alt: "Mobile app interface for on-the-go reflection", caption: "Seamless mobile experience for capturing insights anywhere" },
    { src: "/src/assets/energy-based-planner.png", alt: "Community features for mindful accountability", caption: "Optional community support without social pressure or comparison" }
  ];

  const keyMetrics = [
    { label: "User Engagement", value: "+89%", icon: TrendingUp, detail: "Daily active users increased through mindful design" },
    { label: "Session Duration", value: "+156%", icon: Clock, detail: "Users spend more quality time in reflection" },
    { label: "Stress Reduction", value: "73%", icon: Heart, detail: "Self-reported stress levels decreased significantly" },
    { label: "Habit Completion", value: "+67%", icon: CheckCircle, detail: "Sustainable habit formation without burnout" }
  ];

  const designProcess = [
    {
      phase: "Project Overview & Vision",
      icon: Briefcase,
      duration: "Week 1",
      description: "Defining the vision for a productivity app that prioritizes mental health and sustainable practices.",
      deliverables: ["Project Charter", "Vision Statement", "Success Metrics Framework"],
      details: "GrowSlow originated from research showing that traditional productivity apps often contribute to burnout. Our mission: create an app that helps users be productive while maintaining mental wellbeing."
    },
    {
      phase: "Problem Definition & Research",
      icon: Target,
      duration: "Weeks 2-4",
      description: "Extensive research into productivity app burnout, mindfulness practices, and sustainable habit formation.",
      deliverables: ["User Research Report", "Competitive Analysis", "Problem Statement"],
      details: "Interviewed 50+ professionals experiencing productivity app fatigue. Key finding: 78% felt overwhelmed by aggressive goal-setting and constant notifications from existing apps."
    },
    {
      phase: "Research & Behavioral Insights",
      icon: Brain,
      duration: "Weeks 5-6",
      description: "Deep dive into behavioral psychology, mindfulness research, and energy management principles.",
      deliverables: ["Behavioral Research Synthesis", "User Personas (Confidential)", "Journey Maps (Internal)"],
      details: "Collaborated with behavioral psychologists to understand intrinsic vs. extrinsic motivation. Discovered that energy-based scheduling outperforms time-based scheduling for wellbeing."
    },
    {
      phase: "Ideation & Mindful Concepting",
      icon: Lightbulb,
      duration: "Weeks 7-8",
      description: "Concept development focused on gentle productivity, energy awareness, and reflective practices.",
      deliverables: ["Concept Sketches", "Information Architecture (Internal)", "Feature Prioritization"],
      details: "Explored three core concepts: energy-based planning, reflection-driven goals, and community without comparison. Prioritized features that reduce rather than increase cognitive load."
    },
    {
      phase: "Design System & Calming Aesthetics",
      icon: Palette,
      duration: "Weeks 9-12",
      description: "Created a design system emphasizing calm, natural colors and non-aggressive interaction patterns.",
      deliverables: ["Mindful Design System", "Component Library", "Interaction Guidelines"],
      details: "Developed a unique color palette based on nature therapy research. Removed red notifications, aggressive CTAs, and competitive elements common in productivity apps."
    },
    {
      phase: "Prototyping & Gentle Testing",
      icon: Code,
      duration: "Weeks 13-18",
      description: "Iterative prototyping with focus on calm interactions and user wellbeing during testing.",
      deliverables: ["Interactive Prototypes", "Wellbeing-Focused Testing", "Mindful Iterations"],
      details: "Conducted unique 'wellbeing-first' usability testing where we measured stress levels alongside task completion. Modified features that increased anxiety."
    },
    {
      phase: "Visual Design & Reflection Features",
      icon: Star,
      duration: "Weeks 19-22",
      description: "Final visual design with emphasis on reflection prompts, gentle guidance, and celebration of small wins.",
      deliverables: ["High-Fidelity Designs", "Micro-interaction Specs", "Content Strategy"],
      details: "Designed 40+ unique reflection prompts, energy assessment interfaces, and progress visualizations that celebrate effort over outcome."
    },
    {
      phase: "Implementation & Mindful Launch",
      icon: CheckCircle,
      duration: "Weeks 23-26",
      description: "Careful implementation with gradual feature rollout to prevent overwhelming users.",
      deliverables: ["Launch Strategy", "User Onboarding Flow", "Wellbeing Metrics Tracking"],
      details: "Implemented gradual feature introduction over 4 weeks. Prioritized user wellbeing metrics alongside traditional engagement metrics in our success dashboard."
    }
  ];

  const tools = [
    "Figma", "Principle", "After Effects", "Headspace API", "Notion", "Miro", "Google Analytics", "Hotjar", "UserVoice", "Sketch"
  ];

  const learnings = [
    {
      title: "Less can be more powerful",
      insight: "Removing features often improved user wellbeing more than adding them. Our 'feature subtraction' approach became a key methodology."
    },
    {
      title: "Energy beats time management",
      insight: "Users achieved better results when planning around energy levels rather than fixed time blocks. This became our core differentiator."
    },
    {
      title: "Community without comparison",
      insight: "We learned to design social features that provide support without triggering unhealthy competition or comparison."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-gradient-to-br from-background via-accent/5 to-background relative">
        <div className="absolute inset-0 grid-pattern" />
        <div className="container mx-auto px-4 py-12">
          
          {/* Header */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              variant="ghost"
              onClick={() => navigate('/#portfolio')}
              className="mb-8 text-muted-foreground hover:text-foreground hover-scale"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>

            <div className="max-w-5xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Mobile App Design
                  </Badge>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <Badge variant="outline">
                    2024
                  </Badge>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Badge variant="outline">
                    Wellness & Productivity
                  </Badge>
                </motion.div>
              </div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="gradient-text-neon">GrowSlow</span>
              </motion.h1>

              <motion.p 
                className="text-2xl text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Mindful Productivity & Reflective Planning App
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed max-w-4xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Designing a revolutionary productivity app that prioritizes mental wellbeing over aggressive goal-setting. 
                GrowSlow combines energy-based planning, reflective practices, and gentle habit formation to create 
                a sustainable approach to productivity that respects users' natural rhythms and mental health.
              </motion.p>

              {/* Project Meta */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div>
                  <div className="flex items-center gap-2 text-foreground/80 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Duration</span>
                  </div>
                  <p className="font-semibold text-foreground">6 months</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-foreground/80 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Team</span>
                  </div>
                  <p className="font-semibold text-foreground">Solo Designer + Dev</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-foreground/80 mb-1">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Role</span>
                  </div>
                  <p className="font-semibold text-foreground">Lead Product Designer</p>
                </div>
                <div className="flex gap-3">
                  <CTAPrimary href="https://growslow.app/" className="w-full">Try GrowSlow</CTAPrimary>
                  <CTASecondary href="/#contact" className="w-full">Get in Touch</CTASecondary>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Video Placeholder */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/20 aspect-video shadow-2xl group">
              <div className="w-full h-full flex items-center justify-center absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-12 h-12 text-primary ml-1" />
                  </div>
                  <p className="text-xl font-semibold text-foreground mb-2">GrowSlow App Demo</p>
                  <p className="text-sm text-muted-foreground">Experience mindful productivity in action</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            <p className="text-center text-muted-foreground mt-4 text-sm">Interactive demo showcasing energy-based planning and reflective features</p>
          </motion.div>

          {/* Project Context */}
          <div className="mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">Project Context</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-card to-accent/5 border-border">
                <CardContent className="space-y-6 p-0">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    In an era where productivity apps contribute to burnout rather than wellbeing, GrowSlow was conceived 
                    as an antidote to the "hustle culture" mentality. The app emerged from extensive research showing that 
                    traditional productivity tools often increase anxiety and create unsustainable work patterns.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">78%</div>
                      <div className="text-sm text-muted-foreground">Feel Overwhelmed by Productivity Apps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">92%</div>
                      <div className="text-sm text-muted-foreground">Want Sustainable Productivity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">67%</div>
                      <div className="text-sm text-muted-foreground">Abandon Aggressive Goal Apps</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Problem Definition */}
          <div className="mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">The Challenge</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-800">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-2xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <CardTitle className="text-xl">Productivity App Burnout</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Aggressive Notifications</p>
                      <p className="text-sm text-muted-foreground">Constant pings create anxiety and interrupt flow states</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Unrealistic Goal Setting</p>
                      <p className="text-sm text-muted-foreground">Apps encourage unsustainable productivity targets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Metrics Over Wellbeing</p>
                      <p className="text-sm text-muted-foreground">Focus on quantity metrics ignores mental health impact</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 border-green-200 bg-green-50/50 dark:bg-green-950/20 dark:border-green-800">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-xl">Our Mindful Solution</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Energy-Based Planning</p>
                      <p className="text-sm text-muted-foreground">Schedule tasks around natural energy rhythms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Reflection-Driven Goals</p>
                      <p className="text-sm text-muted-foreground">Goals emerge from self-awareness, not external pressure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Gentle Habit Formation</p>
                      <p className="text-sm text-muted-foreground">Sustainable practices through positive reinforcement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Design Process */}
          <div className="mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold mb-16 text-center">Design Process & Methodology</h2>
            <div className="space-y-8">
              {designProcess.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <Card key={index} className="overflow-hidden hover-scale group transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/3">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-primary-foreground">
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-foreground">{phase.phase}</h3>
                              <p className="text-sm text-primary font-medium">{phase.duration}</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4">{phase.description}</p>
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-foreground">Key Deliverables:</h4>
                            {phase.deliverables.map((deliverable, delIndex) => (
                              <div key={delIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                                {deliverable}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="lg:w-2/3">
                          <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl p-6 border border-border">
                            <h4 className="font-semibold text-foreground mb-3">Phase Details</h4>
                            <p className="text-muted-foreground leading-relaxed">{phase.details}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Visual Design & Mindful Interface */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Visual Design & Mindful Interface</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Crafting a visual language that promotes calm, focus, and wellbeing through intentional design choices 
                that reduce cognitive load and support sustainable productivity habits.
              </p>
            </div>

            {/* Mindful Design Philosophy */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center">Mindful Design Philosophy</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-card to-green-500/5 border-green-200/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-lg">Calm Over Aggressive</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Soft gradients, muted colors, and gentle animations replace the harsh notifications and jarring interactions common in productivity apps.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-card to-blue-500/5 border-blue-200/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                      <Focus className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-lg">Focus Through Simplicity</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Minimal interface elements, generous whitespace, and clear visual hierarchy guide users naturally without overwhelming choices.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-card to-purple-500/5 border-purple-200/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-lg">Reflection Over Action</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Interface design encourages thoughtful consideration over impulsive task creation, promoting sustainable productivity patterns.
                  </p>
                </Card>
              </div>
            </motion.div>

            {/* Therapeutic Color System */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center">Therapeutic Color System</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 bg-gradient-to-br from-card to-green-500/5">
                  <h4 className="font-semibold text-xl mb-4 text-green-700 dark:text-green-300">Nature-Inspired Palette</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-green-500 rounded-lg shadow-md"></div>
                      <div>
                        <p className="font-medium">Forest Green (#059669)</p>
                        <p className="text-sm text-muted-foreground">Growth, balance, natural energy</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-blue-400 rounded-lg shadow-md"></div>
                      <div>
                        <p className="font-medium">Sky Blue (#3B82F6)</p>
                        <p className="text-sm text-muted-foreground">Calm, clarity, open thinking</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-amber-400 rounded-lg shadow-md"></div>
                      <div>
                        <p className="font-medium">Warm Amber (#F59E0B)</p>
                        <p className="text-sm text-muted-foreground">Gentle attention, warmth</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-card to-slate-500/5">
                  <h4 className="font-semibold text-xl mb-4 text-slate-700 dark:text-slate-300">Mindful Typography</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-2xl font-light mb-1">Inter Light</p>
                      <p className="text-sm text-muted-foreground">Gentle headlines, meditation prompts</p>
                    </div>
                    <div>
                      <p className="text-lg font-normal mb-1">Inter Regular</p>
                      <p className="text-sm text-muted-foreground">Body text, comfortable reading</p>
                    </div>
                    <div>
                      <p className="text-base font-medium mb-1">Inter Medium</p>
                      <p className="text-sm text-muted-foreground">Subtle emphasis, form labels</p>
                    </div>
                    <div>
                      <p className="text-sm font-light">Inter Light Small</p>
                      <p className="text-xs text-muted-foreground">Captions, non-intrusive guidance</p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Key Interface Screens */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-center">Key Interface Screens</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {mockups.slice(0, 4).map((mockup, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3, once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover-scale transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-card to-green-500/5">
                      <div className="aspect-[4/3] bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/10" />
                        <div className="text-center z-10 p-8">
                          <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-2xl border border-border/50 group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-12 h-12 text-green-600 ml-1" />
                          </div>
                          <div className="space-y-2">
                            <p className="text-lg font-light text-foreground">{mockup.alt}</p>
                            <div className="text-xs text-muted-foreground bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                              Mindful Interaction
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6 bg-card/50">
                        <p className="text-muted-foreground text-sm leading-relaxed font-normal">{mockup.caption}</p>
                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-muted-foreground">Wellbeing-First</span>
                          <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                          <span className="text-xs text-muted-foreground">Energy-Aware</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Supporting Interface Elements */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {mockups.slice(4).map((mockup, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3, once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden hover-scale transition-all duration-300 group bg-gradient-to-br from-card to-green-500/5">
                    <div className="aspect-[3/4] bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center relative">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                          <Play className="w-8 h-8 text-green-600 ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-xs text-muted-foreground leading-tight font-light">{mockup.caption}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact & Metrics */}
          <div className="mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">Impact & Results</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <Card key={index} className="p-6 text-center group hover-scale transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2 gradient-text-neon">{metric.value}</div>
                      <div className="text-muted-foreground font-medium mb-2">{metric.label}</div>
                      <div className="text-xs text-muted-foreground/80">{metric.detail}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-card text-foreground rounded-full border border-border hover:bg-accent hover-scale transition-all duration-200 font-medium text-sm"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div className="mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">Key Learnings</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {learnings.map((learning, index) => (
                <Card key={index} className="p-6 hover-scale group transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3">{learning.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{learning.insight}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in">
            <Card className="p-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-border">
              <CardContent className="p-0">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Ready to design with mindfulness?
                </h2>
                <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                  Let's create products that prioritize user wellbeing alongside business success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAPrimary href="/#contact">Start a Project</CTAPrimary>
                  <CTASecondary href="/case-studies/glosifi-web-app">Previous Case Study</CTASecondary>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

