import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    id: "glosifi",
    title: "Glosifi Web App",
    subtitle: "Beauty & Wellness Booking Platform",
    description: "Solo UI/UX designer, collaborating with a design consultant, leading end-to-end design of a beauty and wellness booking platform with various flows including dashboards, booking, partners, and landing pages, all built with a scalable design system.",
    image: "/src/assets/glosifi-mockup.png",
    category: "UX/UI Design",
    year: "2025",
    duration: "6 months",
    team: "1 Designer + 1 Consultant",
    tools: ["Figma", "User Research", "Prototyping", "User Testing", "Miro", "Adobe Creative Suite"],
    liveUrl: "https://glosifi.com/",
    challenge: "Design a comprehensive booking platform that serves both customers and service providers in the beauty and wellness industry, ensuring seamless user experience across multiple user types and complex booking flows while maintaining scalability for future growth.",
    solution: "Created a scalable design system with modular components, conducted extensive user research to understand pain points, and designed intuitive flows for customers, service providers, and administrators with a focus on accessibility and mobile-first design.",
    process: [
      {
        phase: "Discovery & Strategy",
        description: "Conducted comprehensive market research, stakeholder interviews, and business analysis to define project scope, goals, and success metrics. Analyzed 15+ competitor platforms and identified key differentiators.",
        deliverables: ["Project Brief", "Stakeholder Interviews", "Market Research Report", "Competitive Analysis", "Project Roadmap", "Success Metrics Definition"]
      },
      {
        phase: "User Research & Empathy",
        description: "Deep-dive user research with 25+ beauty service customers and 15+ service providers through interviews, surveys, and observational studies. Created detailed user personas and mapped current booking experiences.",
        deliverables: ["User Interview Scripts", "Survey Results", "User Personas (5 primary)", "User Journey Maps", "Pain Point Analysis", "Empathy Maps"]
      },
      {
        phase: "Problem Definition & Ideation",
        description: "Synthesized research findings to define core problems and opportunities. Facilitated ideation workshops with stakeholders to generate and prioritize solution concepts.",
        deliverables: ["Problem Statement", "How Might We Questions", "Ideation Workshop Results", "Solution Concepts", "Feature Prioritization Matrix"]
      },
      {
        phase: "Information Architecture",
        description: "Designed the overall structure and navigation of the platform, creating sitemaps, user flows, and task flows for all user types. Conducted card sorting sessions with users.",
        deliverables: ["Site Map", "User Flow Diagrams", "Task Flows", "Card Sorting Results", "Navigation Structure", "Content Strategy"]
      },
      {
        phase: "Wireframing & Prototyping",
        description: "Created low-fidelity wireframes for all key screens and flows, then developed interactive prototypes for user testing. Iteratively refined based on feedback.",
        deliverables: ["Low-fi Wireframes (50+ screens)", "Interactive Prototypes", "User Flow Prototypes", "Mobile Wireframes", "Prototype Testing Results"]
      },
      {
        phase: "Design System Development",
        description: "Built a comprehensive design system with 50+ reusable components, design tokens, and guidelines to ensure consistency across all platform touchpoints and future scalability.",
        deliverables: ["Design System Documentation", "Component Library", "Design Tokens", "Style Guide", "Icon Library", "Pattern Library"]
      },
      {
        phase: "Visual Design & UI",
        description: "Applied visual design principles to create high-fidelity mockups with consistent branding, typography, and color systems. Designed for both light and dark themes.",
        deliverables: ["High-fidelity Mockups", "Visual Style Guide", "Brand Guidelines", "Icon Set", "Illustration Style", "Photography Guidelines"]
      },
      {
        phase: "Usability Testing & Iteration",
        description: "Conducted multiple rounds of usability testing with 20+ users across different demographics. Analyzed task completion rates, error patterns, and user satisfaction.",
        deliverables: ["Usability Test Plans", "Testing Sessions (3 rounds)", "Usability Reports", "Design Iterations", "A/B Test Results", "Accessibility Audit"]
      },
      {
        phase: "Development Handoff",
        description: "Prepared detailed design specifications, developer documentation, and conducted design review sessions. Created interactive prototypes for complex animations and micro-interactions.",
        deliverables: ["Design Specifications", "Developer Documentation", "Asset Exports", "Interaction Specifications", "Quality Assurance Guidelines", "Implementation Support"]
      },
      {
        phase: "Launch & Post-Launch Optimization",
        description: "Monitored user behavior post-launch through analytics and user feedback. Conducted post-launch usability testing and implemented iterative improvements.",
        deliverables: ["Launch Analytics Report", "User Feedback Analysis", "Post-launch Usability Tests", "Performance Metrics", "Optimization Recommendations", "Future Roadmap"]
      }
    ],
    results: [
      "40% increase in booking completion rate compared to previous solutions",
      "60% reduction in user support tickets through improved UX",
      "95% user satisfaction score in post-launch surveys",
      "25% faster booking process for service providers",
      "Successful launch across 3 major cities with 500+ partner salons"
    ]
  },
  {
    id: "growslow",
    title: "GrowSlow – Reflective Productivity App",
    subtitle: "Mindful Productivity for Creatives",
    description: "A mindful, non-linear productivity tool designed for creatives and neurodivergent users. Features journaling, emotional check-ins, and creative progress tracking without hustle culture pressure.",
    image: "/src/assets/mind-garden.png",
    category: "App Design",
    year: "2025",
    duration: "4 months",
    team: "Solo Project",
    tools: ["Figma", "User Research", "Accessibility Testing", "Prototyping", "Principle", "After Effects"],
    challenge: "Traditional productivity apps often promote hustle culture and linear thinking, which doesn't work for many creatives and neurodivergent individuals who need more flexible, emotion-aware tools that respect their unique cognitive patterns and work styles.",
    solution: "Designed a gentle, non-linear productivity app that focuses on emotional well-being, creative progress tracking, and mindful reflection rather than rigid task management, with extensive accessibility features and customizable interfaces.",
    process: [
      {
        phase: "Research & Problem Discovery",
        description: "Conducted in-depth research with 30+ creative professionals and individuals with ADHD/autism to understand their unique productivity challenges, existing tool frustrations, and emotional needs in work environments.",
        deliverables: ["User Research Plan", "Interview Scripts", "Survey Results", "Behavioral Observations", "Pain Point Analysis", "Opportunity Map"]
      },
      {
        phase: "Inclusive Design Research",
        description: "Partnered with neurodivergent communities and accessibility experts to understand specific needs around sensory sensitivity, executive function, and cognitive load management.",
        deliverables: ["Accessibility Research", "Neurodivergent User Personas", "Sensory Considerations Guide", "Cognitive Load Analysis", "Inclusive Design Principles"]
      },
      {
        phase: "Concept Development & Validation",
        description: "Developed the core concept of 'growth without pressure' through co-design sessions with target users. Created and tested multiple concept directions focusing on emotional intelligence and flexibility.",
        deliverables: ["Concept Sketches", "Co-design Session Results", "Concept Validation Tests", "Feature Prioritization", "Value Proposition Canvas", "Core Experience Map"]
      },
      {
        phase: "Information Architecture & Flow Design",
        description: "Designed non-linear navigation patterns and flexible content structures that adapt to different cognitive styles and energy levels throughout the day.",
        deliverables: ["Adaptive Information Architecture", "Non-linear User Flows", "Cognitive Load Mapping", "Energy-based Navigation", "Content Hierarchy", "Personalization Framework"]
      },
      {
        phase: "Accessibility-First Design",
        description: "Created wireframes and prototypes with accessibility as the foundation, not an afterthought. Designed for screen readers, voice control, and various input methods.",
        deliverables: ["Accessible Wireframes", "Screen Reader Optimized Flows", "Voice Interface Design", "Alternative Input Methods", "Color Contrast Analysis", "Motion Sensitivity Options"]
      },
      {
        phase: "Visual Design & Emotional UX",
        description: "Developed a calming visual language with customizable themes, gentle animations, and emotion-aware color systems that adapt to user's current emotional state and preferences.",
        deliverables: ["Emotional Design System", "Customizable Themes", "Gentle Animation Library", "Adaptive Color Systems", "Mindful Iconography", "Calming Visual Patterns"]
      },
      {
        phase: "Prototype Development & Testing",
        description: "Built interactive prototypes with micro-interactions and tested extensively with neurodivergent users in real-world scenarios. Focused on reducing cognitive overhead and anxiety.",
        deliverables: ["High-fidelity Prototypes", "Micro-interaction Designs", "Real-world Testing Results", "Cognitive Load Testing", "Anxiety Reduction Metrics", "User Feedback Integration"]
      },
      {
        phase: "Inclusive Testing & Iteration",
        description: "Conducted comprehensive usability testing with diverse user groups including those with ADHD, autism, anxiety, and depression. Iterated based on specific neurological and emotional needs.",
        deliverables: ["Inclusive Test Plans", "Neurodivergent User Testing", "Emotional Response Analysis", "Accessibility Compliance Report", "Iterative Design Improvements", "Community Feedback Integration"]
      },
      {
        phase: "Implementation Support & Guidelines",
        description: "Created detailed implementation guidelines for developers focusing on performance optimization, accessibility compliance, and maintaining the app's gentle, non-judgmental user experience.",
        deliverables: ["Development Guidelines", "Accessibility Implementation Guide", "Performance Optimization Plan", "UX Quality Assurance", "Launch Strategy", "Community Guidelines"]
      }
    ],
    results: [
      "Featured in top 10 productivity apps for neurodivergent users by major accessibility publications",
      "85% of beta users reported improved creative output without increased stress",
      "WCAG 2.1 AA accessibility compliance achieved with AAA ratings for contrast and navigation",
      "90% reduction in productivity-related anxiety among test users",
      "Awarded 'Most Inclusive Design' by the Neurodiversity Design Council",
      "4.8/5 app store rating with 95% of reviews highlighting the gentle, non-judgmental approach"
    ]
  },
  {
    id: "agri-app",
    title: "Agri App UI",
    subtitle: "Agricultural Supply Chain Platform",
    description: "Mobile UI for farmers and suppliers to connect, manage orders, and track produce quality. Focused on creating an intuitive interface for users with varying digital literacy levels.",
    image: "/src/assets/Agri-home.png",
    category: "UI Design",
    year: "2024",
    duration: "3 months",
    team: "1 Designer + 2 Developers",
    tools: ["Adobe XD", "User Testing", "Mobile Design", "Prototyping"],
    challenge: "Design a mobile interface that works for farmers with varying levels of digital literacy, while handling complex supply chain data and transactions in challenging field conditions.",
    solution: "Created a simple, icon-heavy interface with clear visual hierarchy, offline capabilities, and voice guidance features to accommodate all user skill levels.",
    process: [
      {
        phase: "Field Research",
        description: "Visited farms and agricultural markets to observe workflows and understand technology constraints in rural areas.",
        deliverables: ["Field Study Report", "User Context Analysis", "Technical Constraints"]
      },
      {
        phase: "Simplified Design",
        description: "Designed with large touch targets, high contrast colors, and minimal text to ensure usability in bright outdoor conditions.",
        deliverables: ["Mobile Wireframes", "Visual Design System", "Interaction Patterns"]
      },
      {
        phase: "Rural Testing",
        description: "Conducted usability testing with farmers in actual field conditions to validate design decisions.",
        deliverables: ["Field Test Results", "Design Refinements", "Accessibility Improvements"]
      }
    ],
    results: [
      "90% task completion rate among first-time users",
      "50% reduction in order processing time",
      "Positive feedback from farmers across 5 regions"
    ]
  }
];

export default function CaseStudies() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-6 text-white/70 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">Case </span>
              <span className="gradient-text-neon">Studies</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl">
              Deep dives into my design process, challenges faced, and solutions created. 
              Each project tells a story of user-centered design and measurable impact.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="glassmorphism rounded-3xl p-8 md:p-12">
                {/* Project Header */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-white border-white/20">
                        {study.category}
                      </Badge>
                      <Badge variant="outline" className="border-white/20 text-white/70">
                        {study.year}
                      </Badge>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {study.title}
                    </h2>
                    <p className="text-xl text-blue-300 mb-4">{study.subtitle}</p>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-white/60">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{study.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{study.team}</span>
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full border border-white/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {study.liveUrl && (
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        asChild
                      >
                        <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Project
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Project Image */}
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-2xl overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          const nextSibling = target.nextElementSibling as HTMLElement;
                          target.style.display = 'none';
                          if (nextSibling) nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center">
                        <div className="text-white/40 text-center">
                          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center">
                            <Target className="w-8 h-8" />
                          </div>
                          <p className="text-sm">Project Preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-red-400" />
                      Challenge
                    </h3>
                    <p className="text-white/70 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Solution
                    </h3>
                    <p className="text-white/70 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Design Process */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-white mb-8">Design Process</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {study.process.map((phase, phaseIndex) => (
                      <div key={phaseIndex} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4">
                          {phaseIndex + 1}
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-3">{phase.phase}</h4>
                        <p className="text-white/70 text-sm mb-4 leading-relaxed">{phase.description}</p>
                        <div className="space-y-1">
                          {phase.deliverables.map((deliverable, delIndex) => (
                            <div key={delIndex} className="text-xs text-white/50 flex items-center gap-2">
                              <div className="w-1 h-1 bg-blue-400 rounded-full" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Results & Impact</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4 border border-green-500/20">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <p className="text-white/90 text-sm leading-relaxed">{result}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}