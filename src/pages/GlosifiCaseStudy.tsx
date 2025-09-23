import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Target, CheckCircle, Award, TrendingUp, Lightbulb, Eye, Palette, Code, Star, Phone, Clock, Briefcase, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPrimary, CTASecondary } from "@/components/CTA";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function GlosifiCaseStudy() {
  const navigate = useNavigate();

  const mockups = [
    { src: "/src/assets/glosifi-mockup.png", alt: "Glosifi Homepage - Hero section with booking CTA", caption: "Landing page with clear value proposition and booking entry point" },
    { src: "/src/assets/CRM-GLOSIFI.png", alt: "Service provider dashboard overview", caption: "Provider dashboard showing appointments, earnings, and client management" },
    { src: "/src/assets/glosifi-mockup.png", alt: "Customer booking flow - service selection", caption: "Streamlined service selection with visual categories and filters" },
    { src: "/src/assets/CRM-GLOSIFI.png", alt: "Provider profile and availability calendar", caption: "Provider profiles with real-time availability and reviews" },
    { src: "/src/assets/glosifi-mockup.png", alt: "Booking confirmation and payment", caption: "Simplified checkout with secure payment processing" },
    { src: "/src/assets/CRM-GLOSIFI.png", alt: "Customer appointment management", caption: "Customer dashboard for managing appointments and preferences" },
    { src: "/src/assets/glosifi-mockup.png", alt: "Mobile responsive booking interface", caption: "Mobile-optimized experience for on-the-go bookings" },
    { src: "/src/assets/CRM-GLOSIFI.png", alt: "Admin panel analytics and insights", caption: "Comprehensive admin dashboard with business intelligence" }
  ];

  const keyMetrics = [
    { label: "Booking Completion Rate", value: "+47%", icon: TrendingUp, detail: "From 32% to 47% through simplified flows" },
    { label: "Support Ticket Reduction", value: "-65%", icon: Award, detail: "Self-service features eliminated common issues" },
    { label: "User Satisfaction Score", value: "4.8/5", icon: CheckCircle, detail: "Based on 500+ post-launch reviews" },
    { label: "Provider Onboarding Time", value: "-58%", icon: Clock, detail: "Reduced from 45 to 19 minutes average" }
  ];

  const designProcess = [
    {
      phase: "Project Overview & Context",
      icon: Briefcase,
      duration: "Week 1",
      description: "Stakeholder alignment and project scoping session with Glosifi's founding team.",
      deliverables: ["Project Charter", "Stakeholder Map", "Success Metrics Definition"],
      details: "Glosifi approached us to redesign their existing booking platform that was experiencing high abandonment rates. The platform served beauty salons, spas, and individual practitioners across 15 cities."
    },
    {
      phase: "Problem Definition & Research",
      icon: Target,
      duration: "Weeks 2-3",
      description: "Comprehensive user research across three user groups: customers, service providers, and salon owners.",
      deliverables: ["User Interview Scripts", "Competitive Analysis", "Current State Journey Maps"],
      details: "Through 40+ interviews, we identified decision paralysis in provider selection (average 8 comparisons) and complex scheduling conflicts as primary pain points."
    },
    {
      phase: "Research & Insights",
      icon: Lightbulb,
      duration: "Week 4",
      description: "Data synthesis and persona development based on research findings.",
      deliverables: ["User Personas (Confidential)", "Opportunity Map", "Design Principles"],
      details: "Key insight: Users prioritized convenience over choice abundance. This led to our 'guided discovery' approach in the redesign."
    },
    {
      phase: "Ideation & Concepting",
      icon: Eye,
      duration: "Weeks 5-6",
      description: "Concept development and information architecture restructuring.",
      deliverables: ["IA Wireframes (Internal Only)", "User Flow Diagrams", "Feature Prioritization Matrix"],
      details: "Developed three distinct concepts focusing on different interaction paradigms: guided, exploratory, and hybrid approaches."
    },
    {
      phase: "Design System & Wireframes",
      icon: Palette,
      duration: "Weeks 7-10",
      description: "Comprehensive design system creation and low-fidelity wireframe development.",
      deliverables: ["Component Library", "Design Tokens", "Wireframe Prototypes"],
      details: "Built 60+ reusable components with accessibility as a core principle. Established visual hierarchy supporting three user types."
    },
    {
      phase: "Prototyping & Iterations",
      icon: Code,
      duration: "Weeks 11-16",
      description: "High-fidelity prototyping with continuous user feedback integration.",
      deliverables: ["Interactive Prototypes", "Usability Test Reports", "Design Iterations (v1-v4)"],
      details: "Conducted 4 rounds of usability testing with 32 participants. Major iteration involved simplifying the provider comparison interface."
    },
    {
      phase: "Visual Design & Mockups",
      icon: Star,
      duration: "Weeks 17-20",
      description: "Final visual design refinement and comprehensive screen designs.",
      deliverables: ["High-Fidelity Mockups", "Responsive Design Specs", "Micro-interaction Guidelines"],
      details: "Created designs for 40+ unique screens across customer, provider, and admin interfaces. Prioritized mobile-first approach."
    },
    {
      phase: "Implementation & Handover",
      icon: CheckCircle,
      duration: "Weeks 21-24",
      description: "Developer collaboration and design quality assurance during implementation.",
      deliverables: ["Development Handoff Package", "QA Testing Guidelines", "Post-Launch Monitoring Plan"],
      details: "Worked closely with the dev team using Figma's dev mode. Conducted design QA on 3 staging environments before launch."
    }
  ];

  const tools = [
    "Figma", "FigJam", "Maze", "Hotjar", "Google Analytics", "Slack", "Jira", "Zeplin", "Principle", "Adobe Creative Suite"
  ];

  const learnings = [
    {
      title: "Multi-sided marketplace complexity",
      insight: "Designing for three distinct user types required careful balance of feature exposure and workflow optimization."
    },
    {
      title: "Progressive disclosure is powerful",
      insight: "Showing only essential information upfront increased task completion by 34% across all user types."
    },
    {
      title: "Design system ROI",
      insight: "Our modular component system enabled 40% faster feature development in subsequent releases."
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
                    Product Design
                  </Badge>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <Badge variant="outline">
                    2024-2025
                  </Badge>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Badge variant="outline">
                    B2B SaaS
                  </Badge>
                </motion.div>
              </div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="gradient-text-neon">Glosifi</span>
              </motion.h1>

              <motion.p 
                className="text-2xl text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Beauty & Wellness Booking Platform Redesign
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed max-w-4xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Leading the complete redesign of a multi-sided booking platform serving customers, service providers, and salon owners. 
                Transformed a fragmented user experience into a cohesive ecosystem that significantly improved user satisfaction 
                through comprehensive UX research and iterative design.
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
                  <p className="font-semibold text-foreground">Lead Designer + PM</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-foreground/80 mb-1">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Role</span>
                  </div>
                  <p className="font-semibold text-foreground">Lead Product Designer</p>
                </div>
                <div className="flex gap-3">
                  <CTAPrimary href="https://glosifi.com/" className="w-full">Live Project</CTAPrimary>
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
                  <p className="text-xl font-semibold text-foreground mb-2">Glosifi Platform Demo</p>
                  <p className="text-sm text-muted-foreground">Interactive walkthrough of the redesigned booking experience</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            <p className="text-center text-muted-foreground mt-4 text-sm">Complete platform walkthrough showing user flows and interface improvements</p>
          </motion.div>

          {/* Project Context */}
          <div className="mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">Project Context</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-card to-accent/5 border-border">
                <CardContent className="space-y-6 p-0">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Glosifi approached me to redesign their existing booking platform that was struggling with high abandonment rates 
                    and user complaints. The platform served a complex ecosystem of beauty salons, spas, individual practitioners, 
                    and customers across 15 cities.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">15</div>
                      <div className="text-sm text-muted-foreground">Cities Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">200+</div>
                      <div className="text-sm text-muted-foreground">Service Providers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                      <div className="text-sm text-muted-foreground">Monthly Bookings</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Problem Definition */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">The Challenge</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-800">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-2xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <CardTitle className="text-xl text-red-800 dark:text-red-200">User Experience Issues</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800 dark:text-red-200">High Abandonment Rate</p>
                      <p className="text-sm text-red-700 dark:text-red-300">68% of users left during provider selection phase</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800 dark:text-red-200">Decision Paralysis</p>
                      <p className="text-sm text-red-700 dark:text-red-300">Users compared 8+ providers before making choice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800 dark:text-red-200">Confusing Interface</p>
                      <p className="text-sm text-red-700 dark:text-red-300">Different UIs for each user type caused inconsistency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 border-green-200 bg-green-50/50 dark:bg-green-950/20 dark:border-green-800">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-xl text-green-800 dark:text-green-200">Design Solution</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-200">Unified Experience</p>
                      <p className="text-sm text-green-700 dark:text-green-300">Consistent design system across all user types</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-200">Guided Selection</p>
                      <p className="text-sm text-green-700 dark:text-green-300">Smart filtering to reduce decision paralysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-200">Streamlined Booking</p>
                      <p className="text-sm text-green-700 dark:text-green-300">Simplified 3-step booking process</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

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

          {/* Visual Design & Interface Showcase */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Visual Design & Interface</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Creating a cohesive design system that serves three distinct user types while maintaining 
                visual consistency and accessibility standards across all touchpoints.
              </p>
            </div>

            {/* Design Principles */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center">Design Principles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-card to-primary/5 border-primary/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg">Clarity First</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Prioritize information hierarchy and reduce cognitive load through progressive disclosure and clear visual cues.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-card to-accent/5 border-accent/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-lg">Multi-User Harmony</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Maintain consistent visual language while adapting interface complexity for customers, providers, and admins.
                  </p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-card to-secondary/5 border-secondary/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-secondary" />
                    </div>
                    <h4 className="font-semibold text-lg">Accessible by Design</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    WCAG 2.1 AA compliant with 4.5:1 contrast ratios, keyboard navigation, and screen reader optimization.
                  </p>
                </Card>
              </div>
            </motion.div>

            {/* Design System Showcase */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center">Design System & Brand Identity</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 bg-gradient-to-br from-card to-primary/5">
                  <h4 className="font-semibold text-xl mb-4 text-primary">Color Psychology & Accessibility</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary rounded-lg shadow-md"></div>
                      <div>
                        <p className="font-medium">Primary Blue (#2563EB)</p>
                        <p className="text-sm text-muted-foreground">Trust, reliability, professional service</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-green-500 rounded-lg shadow-md"></div>
                      <div>
                        <p className="font-medium">Success Green (#10B981)</p>
                        <p className="text-sm text-muted-foreground">Confirmations, positive actions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg shadow-md"></div>
                      <div>
                        <p className="font-medium">Warning Orange (#F59E0B)</p>
                        <p className="text-sm text-muted-foreground">Attention, pending states</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-card to-accent/5">
                  <h4 className="font-semibold text-xl mb-4 text-accent">Typography & Hierarchy</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-2xl font-bold mb-1">Poppins Bold</p>
                      <p className="text-sm text-muted-foreground">Headlines, key actions, branding</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold mb-1">Poppins Semibold</p>
                      <p className="text-sm text-muted-foreground">Subheadings, section titles</p>
                    </div>
                    <div>
                      <p className="text-base font-medium mb-1">Poppins Medium</p>
                      <p className="text-sm text-muted-foreground">Body text, form labels</p>
                    </div>
                    <div>
                      <p className="text-sm font-normal">Poppins Regular</p>
                      <p className="text-xs text-muted-foreground">Supporting text, captions</p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Key Interface Screens */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-center">Interface Showcase</h3>
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
                    <Card className="overflow-hidden hover-scale transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-card to-accent/5">
                      <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/15 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
                        <div className="text-center z-10 p-8">
                          <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-2xl border border-border/50 group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-12 h-12 text-primary ml-1" />
                          </div>
                          <div className="space-y-2">
                            <p className="text-lg font-semibold text-foreground">{mockup.alt}</p>
                            <div className="text-xs text-muted-foreground bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                              Interactive Prototype
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6 bg-card/50">
                        <p className="text-muted-foreground text-sm leading-relaxed font-medium">{mockup.caption}</p>
                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-muted-foreground">Responsive Design</span>
                          <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                          <span className="text-xs text-muted-foreground">WCAG AA</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Interface Elements */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {mockups.slice(4).map((mockup, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3, once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden hover-scale transition-all duration-300 group">
                    <div className="aspect-[3/4] bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center relative">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                          <Play className="w-8 h-8 text-primary ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-xs text-muted-foreground leading-tight">{mockup.caption}</p>
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
                      <Lightbulb className="w-6 h-6 text-primary" />
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
                  Ready to transform your product?
                </h2>
                <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                  Let's collaborate on creating user experiences that drive measurable business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAPrimary href="/#contact">Start a Project</CTAPrimary>
                  <CTASecondary href="/case-studies/growslow-reflective-productivity-app">Next Case Study</CTASecondary>
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

