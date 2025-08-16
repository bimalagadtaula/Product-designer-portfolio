import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, Users, Target, CheckCircle, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GlosifiCaseStudy() {
  const navigate = useNavigate();

  const study = {
    title: "Glosifi Web App",
    subtitle: "Beauty & Wellness Booking Platform",
    description: "Solo UI/UX designer, collaborating with a design consultant, leading end-to-end design of a beauty and wellness booking platform with various flows including dashboards, booking, partners, and landing pages, all built with a scalable design system.",
    image: "/src/assets/glosifi-mockup.png",
    category: "UX/UI Design",
    year: "2025",
    duration: "6 months",
    team: "1 Designer + 1 Consultant",
    tools: ["Figma", "User Research", "Prototyping", "User Testing"],
    liveUrl: "https://glosifi.com/",
    challenge: "Design a comprehensive booking platform that serves both customers and service providers in the beauty and wellness industry, ensuring seamless user experience across multiple user types and complex booking flows.",
    solution: "Created a scalable design system with modular components, conducted extensive user research to understand pain points, and designed intuitive flows for customers, service providers, and administrators.",
    keyMetrics: [
      { label: "Booking Completion", value: "+40%", icon: TrendingUp },
      { label: "Support Tickets", value: "-60%", icon: Award },
      { label: "User Satisfaction", value: "95%", icon: CheckCircle }
    ],
    process: [
      {
        phase: "Research & Discovery",
        description: "Conducted user interviews with 25+ beauty service customers and 15+ service providers to understand booking pain points and preferences.",
        deliverables: ["User Personas", "Journey Maps", "Competitive Analysis"],
        duration: "2 weeks"
      },
      {
        phase: "Design System",
        description: "Built a comprehensive design system with 50+ reusable components to ensure consistency across all platform touchpoints.",
        deliverables: ["Component Library", "Design Tokens", "Style Guide"],
        duration: "3 weeks"
      },
      {
        phase: "Prototyping & Testing",
        description: "Created high-fidelity prototypes and conducted usability testing with 20+ users to validate design decisions.",
        deliverables: ["Interactive Prototypes", "Usability Test Reports", "Design Iterations"],
        duration: "4 weeks"
      }
    ]
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-16 animate-fade-in">
            <Button
              variant="ghost"
              onClick={() => navigate('/case-studies')}
              className="mb-8 text-muted-foreground hover:text-foreground hover-scale"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="secondary" className="bg-primary/10 text-primary animate-scale-in">
                  {study.category}
                </Badge>
                <Badge variant="outline" className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                  {study.year}
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-foreground">{study.title.split(' ')[0]} </span>
                <span className="gradient-text-neon">{study.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              
              <p className="text-2xl text-primary mb-6">{study.subtitle}</p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {study.description}
              </p>

              {/* Project Meta */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Duration</span>
                  </div>
                  <p className="font-semibold text-foreground">{study.duration}</p>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Team</span>
                  </div>
                  <p className="font-semibold text-foreground">{study.team}</p>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Role</span>
                  </div>
                  <p className="font-semibold text-foreground">Lead Designer</p>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <Button variant="outline" asChild className="w-full hover-scale">
                    <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Project
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-20 animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/20 aspect-video shadow-2xl">
              <img
                src={study.image}
                alt={study.title}
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
                  <p className="text-lg font-medium">Project Preview</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">Impact & Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {study.keyMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-card rounded-3xl p-8 border border-border hover-scale text-center group transition-all duration-300 hover:shadow-xl animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-foreground mb-3 gradient-text-neon">{metric.value}</div>
                    <div className="text-muted-foreground font-medium">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-20 animate-fade-in">
            <div className="bg-card rounded-3xl p-8 border border-border hover-scale group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Challenge</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{study.challenge}</p>
            </div>
            
            <div className="bg-card rounded-3xl p-8 border border-border hover-scale group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Solution</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{study.solution}</p>
            </div>
          </div>

          {/* Design Process */}
          <div className="mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold mb-16 text-center">Design Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {study.process.map((phase, index) => (
                <div key={index} className="relative group">
                  {index < study.process.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                  )}
                  
                  <div className="bg-card rounded-3xl p-8 border border-border hover-scale relative z-10 group-hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <h4 className="text-xl font-bold text-foreground">{phase.phase}</h4>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {phase.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <h5 className="text-sm font-semibold text-foreground">Deliverables:</h5>
                      {phase.deliverables.map((deliverable, delIndex) => (
                        <div key={delIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-2 rounded-full inline-block">
                      {phase.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Used */}
          <div className="mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {study.tools.map((tool, index) => (
                <div
                  key={index}
                  className="px-8 py-4 bg-card text-foreground rounded-full border border-border hover:bg-accent hover-scale transition-all duration-200 font-medium"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in">
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-16 border border-border">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Interested in working together?
              </h2>
              <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's discuss how we can create amazing user experiences for your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="hover-scale">
                  <a href="/#contact">Get in Touch</a>
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/case-studies')} className="hover-scale">
                  View More Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}