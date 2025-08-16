import { TrendingUp, CheckCircle, Zap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "./BeforeAfterSlider "; 

export default function GlosifiCaseStudy() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Button */}
      <Button variant="ghost" className="mb-8 -ml-2">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Button>

      {/* Hero Section */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-2/3">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              SaaS Product Design
            </span>
            <h1 className="text-5xl font-bold mt-2 mb-4 leading-tight">
              <span className="text-foreground">Glosifi:</span>{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Booking Platform Redesign
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Transformed a fragmented experience into a unified platform serving 3 user types—boosting conversions by 40% through strategic UX architecture.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-background border rounded-lg px-4 py-3">
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">6 months</p>
              </div>
              <div className="bg-background border rounded-lg px-4 py-3">
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="font-medium">Lead Product Designer</p>
              </div>
              <div className="bg-background border rounded-lg px-4 py-3">
                <p className="text-sm text-muted-foreground">Metrics Improved</p>
                <p className="font-medium">3 Key Areas</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-semibold mb-3">Core Contributions</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">▹</span>
                <span>End-to-end UX strategy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">▹</span>
                <span>Design system architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">▹</span>
                <span>User flow optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">▹</span>
                <span>Usability testing program</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Before/After Slider */}
      <div className="mb-20">
        <BeforeAfterSlider
          beforeImage="/src/assets/glosifi-mockup.png"
          afterImage="/src/assets/CRM-GLOSIFI.png"
          label="Provider Selection Flow"
          caption="Reduced steps from 5 → 2 while increasing information clarity"
          className="rounded-xl border shadow-lg"
        />
      </div>

      {/* Challenge & Solution */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div>
          <span className="text-sm font-medium text-primary mb-2 block">The Problem</span>
          <h2 className="text-3xl font-bold mb-6">Why Beauty Booking Needed Disruption</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-red-500/10 text-red-500 rounded-full p-2 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Decision Paralysis</h4>
                <p className="text-muted-foreground">70% abandonment during provider selection</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-red-500/10 text-red-500 rounded-full p-2 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Operational Chaos</h4>
                <p className="text-muted-foreground">3+ hours/week wasted fixing double-bookings</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <span className="text-sm font-medium text-primary mb-2 block">Our Solution</span>
          <h2 className="text-3xl font-bold mb-6">Architecting for Scale</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-green-500/10 text-green-500 rounded-full p-2 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Smart Provider Matching</h4>
                <p className="text-muted-foreground">Contextual algorithm reduces choice overload</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-500/10 text-green-500 rounded-full p-2 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Role-Specific Dashboards</h4>
                <p className="text-muted-foreground">Customized workflows for each user type</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Results */}
      <div className="mb-20">
        <span className="text-sm font-medium text-primary mb-2 block">The Impact</span>
        <h2 className="text-3xl font-bold mb-8">By the Numbers</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-primary/5 to-transparent p-6 rounded-xl border border-primary/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-3xl font-bold">40%</p>
                <p className="text-sm text-muted-foreground">Increase</p>
              </div>
            </div>
            <p className="font-medium">Booking Conversions</p>
            <p className="text-sm text-muted-foreground mt-2">Streamlined flows reduced decision fatigue</p>
          </div>
          
          <div className="bg-gradient-to-b from-primary/5 to-transparent p-6 rounded-xl border border-primary/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <p className="text-3xl font-bold">60%</p>
                <p className="text-sm text-muted-foreground">Reduction</p>
              </div>
            </div>
            <p className="font-medium">Support Tickets</p>
            <p className="text-sm text-muted-foreground mt-2">Self-service tools empowered providers</p>
          </div>
          
          <div className="bg-gradient-to-b from-primary/5 to-transparent p-6 rounded-xl border border-primary/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <div>
                <p className="text-3xl font-bold">95%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
            <p className="font-medium">User Approval</p>
            <p className="text-sm text-muted-foreground mt-2">"Finally a booking system that just works"</p>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="mb-20">
        <span className="text-sm font-medium text-primary mb-2 block">Process</span>
        <h2 className="text-3xl font-bold mb-8">Strategic Design Approach</h2>
        
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-semibold">Discovery Research</h3>
              </div>
              <p className="text-sm text-muted-foreground">2 weeks • 40+ interviews</p>
            </div>
            <div className="md:w-2/3 bg-card p-6 rounded-xl border">
              <h4 className="font-medium mb-3">Key Insights</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium">The Comparison Trap</p>
                    <p className="text-muted-foreground">Users averaged 8+ provider comparisons before booking</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium">Last-Minute Chaos</p>
                    <p className="text-muted-foreground">No system for handling cancellations under 24 hours</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-semibold">System Architecture</h3>
              </div>
              <p className="text-sm text-muted-foreground">3 weeks • 50+ components</p>
            </div>
            <div className="md:w-2/3 bg-card p-6 rounded-xl border">
              <h4 className="font-medium mb-3">Design Decisions</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium">Progressive Disclosure</p>
                    <p className="text-muted-foreground">Only show essential info upfront, reveal details on demand</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium">Flexible White-Labeling</p>
                    <p className="text-muted-foreground">Built for franchise partners to customize their branding</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Before/After - Dashboard */}
      <div className="mb-20">
        <BeforeAfterSlider
          beforeImage="/src/assets/glosifi-mockup.png"
          afterImage="/src/assets/CRM-GLOSIFI.png"
          label="Provider Dashboard"
          caption="Redesigned to surface critical actions while reducing visual noise"
          className="rounded-xl border shadow-lg"
        />
      </div>

      {/* Reflection */}
      <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-8 rounded-xl border border-primary/10 mb-16">
        <span className="text-sm font-medium text-primary mb-2 block">Reflection</span>
        <h2 className="text-3xl font-bold mb-4">Key Learnings</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            "Involving service providers earlier in testing would have revealed scheduling edge cases 3 weeks sooner. Next time, I'll conduct co-design sessions during discovery."
          </p>
          <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
            <div className="bg-primary/10 text-primary rounded-full p-2 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-medium mb-1">Client Feedback</h4>
              <p className="text-muted-foreground text-sm">
                "The design system saved us 160+ dev hours in our first market expansion.", Glosifi CTO
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="shadow-lg">
          View Live Project
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </Button>
        <Button variant="outline" size="lg">
          Next Case Study
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
            <path d="M5 12h14"></path>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Button>
      </div>
    </div>
  );
}