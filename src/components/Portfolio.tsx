import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ExternalLink, Award, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

// Import project images
import agriAI from "@/assets/agriai.png";
import glosifi from "@/assets/CRM-GLOSIFI.png";
import mindGarden from "@/assets/mind-garden.png";
import animatedImage from "@/assets/animated.jpg";

// Project data
const designProjects = [
  {
    id: "glosifi-crm",
    title: "Glosifi CRM",
    category: "Enterprise SaaS",
    description: "Complete CRM platform redesign focusing on user workflow optimization and advanced data visualization for enterprise teams.",
    image: glosifi,
    year: "2024",
    role: "Senior Product Designer",
    tools: ["Figma", "Principle", "React"],
    impact: "40% faster task completion",
    liveUrl: "#",
    caseStudyUrl: "/case-study/glosifi"
  },
  {
    id: "agri-ai",
    title: "AgriAI Platform", 
    category: "AI & Agriculture",
    description: "Revolutionary AI-powered agricultural platform helping farmers make intelligent, data-driven decisions for optimal crop management.",
    image: agriAI,
    year: "2024",
    role: "Lead Product Designer", 
    tools: ["Figma", "Framer", "TensorFlow"],
    impact: "25% increase in crop yields",
    liveUrl: "#",
    caseStudyUrl: "/case-study/growslow"
  },
  {
    id: "mind-garden",
    title: "Mind Garden",
    category: "Health & Wellness",
    description: "Innovative mental wellness mobile app featuring personalized meditation experiences and comprehensive progress tracking.",
    image: mindGarden,
    year: "2023",
    role: "Product Designer",
    tools: ["Figma", "Principle", "Swift"],
    impact: "90% user retention rate",
    liveUrl: "#", 
    caseStudyUrl: "#"
  }
];

// Projects Grid Component
const ProjectsGrid = () => {
  return (
    <section id="portfolio" className="py-32 bg-background relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-sage/20 via-transparent to-accent/10" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 text-sm font-medium text-emerald-dark mb-6">
              <Award className="w-4 h-4" />
              Featured Work
            </div>
            <h2 className="display-text text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight">
              Selected Projects
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
              Explore how I transform complex challenges into elegant solutions 
              that drive measurable impact for users and businesses.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {designProjects.slice(0, 2).map((project, index) => (
              <StaggerItem key={project.id}>
                <Link 
                  to={project.caseStudyUrl} 
                  className="group block h-full"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-elegant hover:shadow-creative transition-all duration-700 transform hover:-translate-y-2 h-full">
                    <div className="aspect-[16/10] overflow-hidden bg-sage/20 relative">
                      <img 
                        src={project.image} 
                        alt={`${project.title} project preview`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-dark bg-emerald/10 rounded-full mb-3">
                            {project.category}
                          </span>
                          <h3 className="text-2xl font-bold text-charcoal group-hover:text-emerald-dark transition-colors mb-2">
                            {project.title}
                          </h3>
                        </div>
                        <div className="flex items-center text-sm text-cool-gray bg-sage/30 px-3 py-1 rounded-full">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.year}
                        </div>
                      </div>
                      
                      <p className="text-cool-gray leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-sage/30">
                        <div className="flex items-center gap-4 text-sm text-cool-gray">
                          <span className="font-medium text-emerald-dark">{project.impact}</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-dark font-semibold group-hover:gap-3 transition-all">
                          <span>View Case Study</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>
          
          {/* Third project - full width */}
          {designProjects.length > 2 && (
            <StaggerItem>
              <Link 
                to={designProjects[2].caseStudyUrl} 
                className="group block"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-elegant hover:shadow-creative transition-all duration-700 transform hover:-translate-y-2">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="aspect-[16/10] lg:aspect-auto overflow-hidden bg-sage/20 relative order-2 lg:order-1">
                      <img 
                        src={designProjects[2].image} 
                        alt={`${designProjects[2].title} project preview`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-dark bg-emerald/10 rounded-full mb-4 w-fit">
                        {designProjects[2].category}
                      </span>
                      <h3 className="text-3xl font-bold text-charcoal group-hover:text-emerald-dark transition-colors mb-4">
                        {designProjects[2].title}
                      </h3>
                      <p className="text-cool-gray leading-relaxed mb-6 text-lg">
                        {designProjects[2].description}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-sage/30">
                        <span className="font-semibold text-emerald-dark">{designProjects[2].impact}</span>
                        <div className="flex items-center gap-2 text-emerald-dark font-semibold group-hover:gap-3 transition-all">
                          <span>View Case Study</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          )}
        </StaggerContainer>

        <FadeIn delay={0.6}>
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg" 
              className="group h-14 px-8 text-base font-semibold border-2 rounded-2xl hover:bg-emerald/5 hover:border-emerald"
            >
              View All Projects
              <ExternalLink className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// About Snapshot Component  
const AboutSnapshot = () => {
  const stats = [
    { icon: Users, number: "50+", label: "Projects Completed" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Zap, number: "40%", label: "Avg. Performance Boost" }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-sage/30 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-emerald/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Profile Section */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-emerald/20 to-accent/20 p-1 shadow-creative">
                  <div className="w-full h-full bg-gradient-to-br from-white to-sage/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                    <img
                      src={animatedImage}
                      alt="Bimala Gadtaula, Product Designer"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
                {/* Floating accent elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-emerald to-emerald-dark rounded-2xl rotate-12 shadow-float animate-float" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-xl -rotate-12 shadow-elegant" />
              </div>

              {/* About Content */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 text-sm font-medium text-emerald-dark mb-6">
                    <Users className="w-4 h-4" />
                    About Me
                  </div>
                  <h2 className="display-text text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
                    Turning complexity into
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-dark to-accent">
                      clarity & delight
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-cool-gray leading-relaxed">
                    I'm a Senior Product Designer with a passion for creating meaningful digital experiences. 
                    Over the past 5+ years, I've collaborated with innovative startups and established enterprises 
                    to design products that users genuinely love.
                  </p>
                  
                  <p className="text-cool-gray leading-relaxed">
                    My design philosophy centers on empathy-driven research, strategic thinking, and obsessive 
                    attention to detail. I believe the best solutions emerge when we deeply understand user 
                    needs and translate them into elegant, functional experiences.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-emerald-dark" />
                      </div>
                      <div className="text-2xl font-bold text-charcoal mb-1">{stat.number}</div>
                      <div className="text-sm text-cool-gray">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="group h-14 px-8 text-base font-semibold bg-charcoal hover:bg-charcoal/90 rounded-2xl"
                  >
                    Download Resume
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-14 px-8 text-base font-semibold border-2 rounded-2xl hover:bg-emerald/5 hover:border-emerald"
                    onClick={() => window.open("mailto:hello@designer.com", "_blank")}
                  >
                    Let's Talk
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// Main Portfolio Component
export default function Portfolio() {
  return (
    <>
      <ProjectsGrid />
      <AboutSnapshot />
    </>
  );
}