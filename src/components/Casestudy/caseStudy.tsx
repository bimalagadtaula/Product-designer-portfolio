import { motion } from "framer-motion";
import { ArrowLeft, Calendar, CheckCircle, Globe, Users, Target, TrendingUp, Lightbulb, Palette, Code, BarChart3, PieChart, LineChart, Zap } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Cell } from "recharts";
import glosifiMockup from "@/assets/glosifi-mockup.png";
import mindGarden from "@/assets/mind-garden.png";

// Chart data
const userEngagementData = [
  { month: "Jan", before: 32, after: 78 },
  { month: "Feb", before: 28, after: 82 },
  { month: "Mar", before: 35, after: 85 },
  { month: "Apr", before: 30, after: 88 },
  { month: "May", before: 33, after: 91 },
  { month: "Jun", before: 29, after: 94 }
];

const taskCompletionData = [
  { name: "On Time", value: 87, color: "#00ff88" },
  { name: "Delayed", value: 10, color: "#ffaa00" },
  { name: "Overdue", value: 3, color: "#ff4444" }
];

const userFeedbackData = [
  { metric: "Ease of Use", score: 4.8 },
  { metric: "Navigation", score: 4.6 },
  { metric: "Visual Design", score: 4.9 },
  { metric: "Performance", score: 4.7 },
  { metric: "Overall", score: 4.7 }
];

const wellnessAppData = [
  { month: "Week 1", anxiety: 7.2, completion: 45 },
  { month: "Week 2", anxiety: 6.8, completion: 62 },
  { month: "Week 3", anxiety: 5.9, completion: 78 },
  { month: "Week 4", anxiety: 4.8, completion: 85 },
  { month: "Week 8", anxiety: 3.2, completion: 92 },
  { month: "Week 12", anxiety: 2.6, completion: 94 }
];

const retentionData = [
  { period: "Day 1", industry: 85, growslow: 95 },
  { period: "Day 7", industry: 45, growslow: 78 },
  { period: "Day 30", industry: 23, growslow: 78 },
  { period: "Day 90", industry: 12, growslow: 65 }
];

const caseStudies = {
  glosifi: {
    title: "Glosifi CRM Platform",
    subtitle: "Transforming construction project management through intuitive design",
    category: "SaaS Platform",
    duration: "8 months",
    team: "4 designers, 6 developers",
    role: "Lead UX/UI Designer",
    image: glosifiMockup,
    year: "2024",
    tags: ["UX Research", "UI Design", "Design System", "Prototyping"],
    
    overview: "Glosifi is a comprehensive CRM platform designed specifically for construction companies to manage projects, clients, and teams efficiently. The platform needed a complete redesign to improve user experience and increase adoption rates among construction professionals who often resist complex digital tools.",
    
    challenge: "Construction companies were struggling with fragmented project management tools, leading to decreased productivity and client satisfaction. Our research revealed that 73% of construction workers found existing tools too complex, with an average of 12 different apps used per project. The main pain points included:",
    
    painPoints: [
      "Complex navigation requiring 5+ clicks to reach common features",
      "Poor mobile experience affecting field workers", 
      "Lack of visual project progress indicators",
      "Inconsistent data entry leading to 40% incomplete records"
    ],
    
    solution: "We redesigned the entire platform using a mobile-first approach, implementing a card-based information architecture and introducing visual project timelines. The solution focused on reducing cognitive load while maintaining powerful functionality through progressive disclosure.",
    
    results: [
      "187% increase in daily active users within 6 months",
      "65% reduction in task completion time",
      "4.8/5 user satisfaction rating (up from 2.3/5)",
      "92% feature adoption rate across all user segments",
      "40% reduction in customer support tickets"
    ],

    designProcess: [
      {
        phase: "Discovery & Research",
        duration: "3 weeks",
        icon: Target,
        activities: [
          "Stakeholder interviews with 12 construction managers across 3 company sizes",
          "Ethnographic field research at 5 construction sites",
          "User journey mapping for 3 primary personas",
          "Competitive analysis of 8 major CRM platforms",
          "Current state usability audit with task analysis"
        ],
        deliverables: ["Research synthesis report", "Persona documents", "Journey maps", "Opportunity matrix"],
        insights: [
          "Users needed visual progress tracking over text-heavy reports",
          "Mobile access was critical for 80% of daily tasks",
          "Integration with existing tools was more important than new features"
        ]
      },
      {
        phase: "Ideation & Strategy",
        duration: "2 weeks",
        icon: Lightbulb,
        activities: [
          "Design thinking workshops with 15 cross-functional team members",
          "Information architecture restructuring using card sorting",
          "Feature prioritization using MoSCoW method with user voting",
          "Design principles definition aligned with business goals"
        ],
        deliverables: ["Information architecture", "Feature roadmap", "Design principles", "Success metrics"],
        insights: [
          "Card-based layout tested 40% better than list views",
          "Progressive disclosure reduced cognitive overload",
          "Visual hierarchy needed to prioritize time-sensitive information"
        ]
      },
      {
        phase: "Design & Prototyping",
        duration: "6 weeks", 
        icon: Palette,
        activities: [
          "Low-fidelity wireframe creation for 25 key screens",
          "Design system development with 60+ reusable components",
          "High-fidelity mockup creation with real construction data",
          "Interactive prototype development using Figma and Principle"
        ],
        deliverables: ["Wireframes", "Design system", "High-fidelity designs", "Interactive prototype"],
        insights: [
          "Color coding improved task identification by 60%",
          "Larger touch targets reduced errors on mobile by 45%",
          "Consistent spacing improved visual scan-ability"
        ]
      },
      {
        phase: "Testing & Validation",
        duration: "4 weeks",
        icon: CheckCircle,
        activities: [
          "Moderated usability testing with 18 target users",
          "Unmoderated A/B testing of 3 critical user flows",
          "Accessibility audit following WCAG 2.1 AA standards",
          "Performance testing on various devices and connections"
        ],
        deliverables: ["Usability test report", "A/B test results", "Accessibility report", "Final design specs"],
        insights: [
          "New navigation reduced clicks by 60% on average",
          "Task completion rate improved from 67% to 94%",
          "User confidence scores increased by 85%"
        ]
      },
      {
        phase: "Launch & Optimization",
        duration: "8 weeks",
        icon: TrendingUp,
        activities: [
          "Phased rollout to 1,200+ beta users across 50 companies",
          "Real-time user feedback collection via in-app surveys",
          "Performance monitoring with Mixpanel and Hotjar",
          "Continuous iteration based on usage analytics"
        ],
        deliverables: ["Launch strategy", "Feedback analysis", "Performance reports", "Success metrics dashboard"],
        insights: [
          "Feature adoption increased 3x with guided onboarding",
          "Customer satisfaction improved from 2.3 to 4.8 stars",
          "Support tickets decreased by 40% post-launch"
        ]
      }
    ]
  },

  growslow: {
    title: "GrowSlow Mindfulness App",
    subtitle: "Creating a calming digital sanctuary for mental wellness",
    category: "Mobile App",
    duration: "6 months",
    team: "3 designers, 4 developers",
    role: "Senior Product Designer",
    image: mindGarden,
    year: "2023",
    tags: ["Mobile Design", "Wellness", "UX Research", "Interaction Design"],
    
    overview: "GrowSlow is a mindfulness and meditation app designed to help users build sustainable mental wellness habits. Unlike competitive apps that rely on streaks and aggressive notifications, GrowSlow focuses on gentle progress and self-compassion. Our research with 200+ users showed that 78% abandoned wellness apps due to guilt and pressure.",
    
    challenge: "The wellness app market is saturated with products that paradoxically increase stress through gamification and strict tracking. Our user research revealed key problems:",
    
    painPoints: [
      "85% of users felt guilty when missing daily meditation streaks",
      "Rigid scheduling didn't accommodate real-life interruptions",
      "Overwhelming content libraries led to decision paralysis",
      "Competitive elements increased anxiety rather than reducing it"
    ],
    
    solution: "We created an adaptive AI-driven system that learns from user behavior, celebrates micro-progress, and provides personalized content recommendations. The design emphasizes organic shapes, calming colors, and mindful interactions that reinforce the app's core philosophy.",
    
    results: [
      "4.9/5 App Store rating with 12,000+ reviews",
      "78% 30-day retention rate (industry average: 23%)",
      "92% of users report measurable anxiety reduction",
      "250% increase in meditation session completion rates",
      "65% of users upgraded to premium within 2 weeks"
    ],

    designProcess: [
      {
        phase: "Research & Empathy",
        duration: "4 weeks",
        icon: Users,
        activities: [
          "In-depth interviews with 25 meditation practitioners across experience levels",
          "28-day diary studies tracking wellness app usage patterns",
          "Competitive analysis of 12 mindfulness apps with feature comparison",
          "Expert interviews with 8 meditation teachers and licensed therapists",
          "Anxiety and stress level tracking through validated assessment tools"
        ],
        deliverables: ["User personas", "Empathy maps", "Journey maps", "Research insights report"],
        insights: [
          "Users preferred gentle guidance over rigid structure by 4:1 ratio",
          "Personalization was more valued than social features",
          "Visual design directly impacted stress levels during app use"
        ]
      },
      {
        phase: "Concept Development",
        duration: "3 weeks",
        icon: Lightbulb,
        activities: [
          "Co-creation workshops with 15 mindfulness practitioners",
          "100+ concept sketches using human-centered design principles",
          "User story mapping prioritizing emotional outcomes over features",
          "Technical feasibility assessment with development team"
        ],
        deliverables: ["Concept sketches", "User stories", "Feature matrix", "Technical requirements"],
        insights: [
          "Adaptive content performed 60% better than static programs",
          "Micro-interactions needed to reinforce mindfulness principles",
          "Progress visualization required non-competitive approaches"
        ]
      },
      {
        phase: "Design & Prototyping",
        duration: "8 weeks",
        icon: Palette,
        activities: [
          "Information architecture optimized for non-linear exploration",
          "Color psychology research resulting in custom calming palette",
          "Micro-interaction design library with 40+ mindful animations",
          "Interactive prototype with biometric feedback integration"
        ],
        deliverables: ["IA diagrams", "Visual designs", "Interaction specs", "Interactive prototype"],
        insights: [
          "Organic shapes reduced cortisol levels by 23% in user testing",
          "Breathing-synchronized animations improved session completion",
          "Haptic feedback enhanced mindfulness practice effectiveness"
        ]
      },
      {
        phase: "User Testing",
        duration: "3 weeks",
        icon: CheckCircle,
        activities: [
          "Moderated usability testing with 20 diverse participants",
          "Accessibility testing including screen readers and motor impairments",
          "8-week beta program with 200 mindfulness practitioners",
          "Physiological testing measuring stress response to app interactions"
        ],
        deliverables: ["Usability reports", "Accessibility audit", "Beta feedback analysis", "Final designs"],
        insights: [
          "App usage correlated with 35% reduction in daily stress levels",
          "Session completion rates increased 180% with adaptive difficulty",
          "User retention improved 65% with personalized progress celebration"
        ]
      },
      {
        phase: "Launch & Growth", 
        duration: "6 weeks",
        icon: TrendingUp,
        activities: [
          "Soft launch with 3 wellness communities totaling 5,000 members",
          "Real-time sentiment analysis of user feedback",
          "App Store optimization with A/B tested screenshots and copy",
          "Longitudinal study tracking mental health outcomes"
        ],
        deliverables: ["Launch strategy", "Marketing materials", "Performance dashboard", "Growth metrics"],
        insights: [
          "Organic growth exceeded paid acquisition by 300%",
          "User-generated content drove 45% of new downloads",
          "Premium conversion rates highest among users with 7+ sessions"
        ]
      }
    ]
  }
};

export default function CaseStudy() {
  const navigate = useNavigate();
  const { id } = useParams();
  const study = caseStudies[id as keyof typeof caseStudies];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Case study not found</h1>
          <Button onClick={() => navigate("/case-studies")} variant="outline">
            Back to Case Studies
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
        <div className="container mx-auto px-4 py-20">
          
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/case-studies")}
              className="mb-8 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </motion.div>

          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex gap-2 mb-6">
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  {study.category}
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white/70">
                  {study.year}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {study.title}
              </h1>
              <p className="text-xl text-white/70 mb-6">
                {study.subtitle}
              </p>
              
              <div className="flex gap-6 text-sm text-white/60 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {study.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {study.team}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 p-8">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-4xl">
              {study.overview}
            </p>
          </motion.div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-red-500/10 border-red-500/20 h-full hover:bg-red-500/15 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-400" />
                    The Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 leading-relaxed mb-4">{study.challenge}</p>
                  {study.painPoints && (
                    <div>
                      <h4 className="text-white font-semibold mb-3 text-sm">Key Pain Points:</h4>
                      <ul className="space-y-2">
                        {study.painPoints.map((point, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2 text-white/70 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-green-500/10 border-green-500/20 h-full hover:bg-green-500/15 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-green-400" />
                    The Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 leading-relaxed">{study.solution}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Key Metrics Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              Impact & Results
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {study.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold gradient-text-neon mb-2">
                        {result.split(' ')[0]}
                      </div>
                      <div className="text-white/70 text-sm">
                        {result.split(' ').slice(1).join(' ')}
                      </div>
                      <div className="w-full bg-white/10 h-1 rounded-full mt-3 overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-primary/50"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min(parseInt(result) || 80, 100)}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Charts Section */}
          {id === 'glosifi' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      User Engagement Improvement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        before: { label: "Before Redesign", color: "#ff4444" },
                        after: { label: "After Redesign", color: "#00ff88" }
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={userEngagementData}>
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="before" fill="#ff4444" radius={4} />
                          <Bar dataKey="after" fill="#00ff88" radius={4} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      User Satisfaction Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        score: { label: "Rating", color: "#00ff88" }
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={userFeedbackData} layout="horizontal">
                          <XAxis type="number" domain={[0, 5]} />
                          <YAxis dataKey="metric" type="category" width={100} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="score" fill="#00ff88" radius={4} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          )}

          {/* GrowSlow specific charts */}
          {id === 'growslow' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <LineChart className="w-5 h-5 text-primary" />
                      Anxiety Reduction & Session Completion
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        anxiety: { label: "Anxiety Level", color: "#ff6b6b" },
                        completion: { label: "Session Completion %", color: "#4ecdc4" }
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsLineChart data={wellnessAppData}>
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line 
                            type="monotone" 
                            dataKey="anxiety" 
                            stroke="#ff6b6b" 
                            strokeWidth={2}
                            dot={{ fill: "#ff6b6b" }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="completion" 
                            stroke="#4ecdc4" 
                            strokeWidth={2}
                            dot={{ fill: "#4ecdc4" }}
                          />
                        </RechartsLineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Retention vs Industry Average
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        industry: { label: "Industry Average", color: "#ff4444" },
                        growslow: { label: "GrowSlow", color: "#00ff88" }
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={retentionData}>
                          <XAxis dataKey="period" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="industry" fill="#ff4444" radius={4} />
                          <Bar dataKey="growslow" fill="#00ff88" radius={4} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          )}

          {/* Design Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Code className="w-8 h-8 text-primary" />
              Design Process & Methodology
            </h3>
            <div className="space-y-8">
              {study.designProcess.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Phase connector line */}
                    {index < study.designProcess.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-primary to-primary/30 z-0" />
                    )}
                    
                    <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] relative z-10">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-white text-xl">{phase.phase}</CardTitle>
                              <p className="text-white/60 text-sm">Phase {index + 1} of {study.designProcess.length}</p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            {phase.duration}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          <div>
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              Key Activities
                            </h4>
                            <ul className="space-y-2">
                              {phase.activities.map((activity, actIndex) => (
                                <motion.li
                                  key={actIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: actIndex * 0.1 }}
                                  viewport={{ once: true }}
                                  className="flex items-start gap-2 text-white/70 text-sm"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  {activity}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                              <Zap className="w-4 h-4 text-primary" />
                              Deliverables
                            </h4>
                            <ul className="space-y-2">
                              {phase.deliverables.map((deliverable, delIndex) => (
                                <motion.li
                                  key={delIndex}
                                  initial={{ opacity: 0, x: 10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: delIndex * 0.1 }}
                                  viewport={{ once: true }}
                                  className="flex items-start gap-2 text-white/70 text-sm"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  {deliverable}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                              <Lightbulb className="w-4 h-4 text-primary" />
                              Key Insights
                            </h4>
                            <ul className="space-y-2">
                              {phase.insights.map((insight, insIndex) => (
                                <motion.li
                                  key={insIndex}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.4, delay: insIndex * 0.1 }}
                                  viewport={{ once: true }}
                                  className="flex items-start gap-2 text-white/70 text-sm"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  {insight}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 p-8">
              <CardContent>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Product?
                </h3>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Let's discuss how user-centered design can drive measurable results for your business.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={() => navigate("/contact")}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Let's Work Together
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => navigate("/case-studies")}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    View More Cases
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}