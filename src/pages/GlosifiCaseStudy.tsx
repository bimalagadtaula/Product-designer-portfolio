import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Target, CheckCircle, Award, TrendingUp, Lightbulb, Eye, Palette, Code, Star, Phone, Clock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPrimary, CTASecondary } from "@/components/CTA";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
                  Product Design
                </Badge>
                <Badge variant="outline" className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                  2024-2025
                </Badge>
                <Badge variant="outline" className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  B2B SaaS
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display">
                <span className="gradient-text-neon">Glosifi</span>
              </h1>

              <p className="text-2xl text-primary mb-6">Beauty & Wellness Booking Platform Redesign</p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mb-8">
                Leading the complete redesign of a multi-sided booking platform serving customers, service providers, and salon owners. 
                Transformed a fragmented user experience into a cohesive ecosystem that increased booking completion rates by 47% 
                and reduced support tickets by 65%.
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
                  <p className="font-semibold text-foreground">Lead Designer + PM</p>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-2 text-foreground/80 mb-1">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Role</span>
                  </div>
                  <p className="font-semibold text-foreground">Lead Product Designer</p>
                </div>
                <div className="animate-fade-in flex gap-3" style={{ animationDelay: '0.5s' }}>
                  <CTAPrimary href="https://glosifi.com/" className="w-full">Live Project</CTAPrimary>
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
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-lg font-medium">Glosifi Platform Overview</p>
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
          <div className="mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">The Challenge</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-800">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-2xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <CardTitle className="text-xl">User Experience Issues</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">High Abandonment Rate</p>
                      <p className="text-sm text-muted-foreground">68% of users left during provider selection phase</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Decision Paralysis</p>
                      <p className="text-sm text-muted-foreground">Users compared 8+ providers before making choice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Confusing Interface</p>
                      <p className="text-sm text-muted-foreground">Different UIs for each user type caused inconsistency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 border-orange-200 bg-orange-50/50 dark:bg-orange-950/20 dark:border-orange-800">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-2xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <CardTitle className="text-xl">Business Impact</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Revenue Loss</p>
                      <p className="text-sm text-muted-foreground">$2.3M annually from incomplete bookings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Support Overhead</p>
                      <p className="text-sm text-muted-foreground">40% of tickets were booking-related issues</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Provider Churn</p>
                      <p className="text-sm text-muted-foreground">25% quarterly churn due to platform complexity</p>
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
                        <p className="font-medium">Design Mockup</p>
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

