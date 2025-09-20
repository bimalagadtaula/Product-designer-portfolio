import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Target, CheckCircle, Award, TrendingUp, Brain, Heart, Lightbulb, Eye, Palette, Code, Star, Clock, Briefcase, Zap, Focus, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPrimary, CTASecondary } from "@/components/CTA";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <div className="mb-16 animate-fade-in">
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
                <Badge variant="secondary" className="bg-primary/10 text-primary animate-scale-in">
                  Mobile App Design
                </Badge>
                <Badge variant="outline" className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                  2024
                </Badge>
                <Badge variant="outline" className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  Wellness & Productivity
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display">
                <span className="gradient-text-neon">GrowSlow</span>
              </h1>

              <p className="text-2xl text-primary mb-6">Mindful Productivity & Reflective Planning App</p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mb-8">
                Designing a revolutionary productivity app that prioritizes mental wellbeing over aggressive goal-setting. 
                GrowSlow combines energy-based planning, reflective practices, and gentle habit formation to help users 
                achieve sustainable productivity without burnout. The app increased user engagement by 89% while reducing 
                self-reported stress levels by 73%.
              </p>

              {/* Project Meta */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-2 text-foreground/80 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Duration</span>
                  </div>
                  <p className="font-semibold text-foreground">6 months</p>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center gap-2 text-foreground/80 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Team</span>
                  </div>
                  <p className="font-semibold text-foreground">Solo Designer + Dev</p>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-2 text-foreground/80 mb-1">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Role</span>
                  </div>
                  <p className="font-semibold text-foreground">Lead Product Designer</p>
                </div>
                <div className="animate-fade-in flex gap-3" style={{ animationDelay: '0.5s' }}>
                  <CTAPrimary href="https://growslow.app/" className="w-full">Try GrowSlow</CTAPrimary>
                  <CTASecondary href="/#contact" className="w-full">Get in Touch</CTASecondary>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Mockup */}
          <div className="mb-20 animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/20 aspect-video shadow-2xl">
              <img
                src={mockups[0].src}
                alt={mockups[0].alt}
                className="w-full h-full object-cover hover-scale transition-transform duration-700"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  const nextSibling = target.nextElementSibling as HTMLElement;
                  target.style.display = 'none';
                  if (nextSibling) nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full items-center justify-center absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="text-muted-foreground text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-card flex items-center justify-center shadow-lg">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-lg font-medium">GrowSlow App Interface</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            <p className="text-center text-muted-foreground mt-4 text-sm">{mockups[0].caption}</p>
          </div>

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

          {/* Visual Design Showcase - 8 Mockups Grid */}
          <div className="mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">Visual Design Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {mockups.slice(1).map((mockup, index) => (
                <Card key={index} className="overflow-hidden group hover-scale transition-all duration-300">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/20">
                    <img
                      src={mockup.src}
                      alt={mockup.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        const placeholder = target.parentElement?.querySelector('.placeholder');
                        target.style.display = 'none';
                        if (placeholder) placeholder.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden placeholder absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                      <div className="text-center text-muted-foreground">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-card flex items-center justify-center shadow-lg">
                          <Eye className="w-8 h-8 text-primary" />
                        </div>
                        <p className="font-medium">App Interface</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{mockup.alt}</h3>
                    <p className="text-sm text-muted-foreground">{mockup.caption}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

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

