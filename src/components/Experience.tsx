import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Techflow Inc.",
    position: "Senior Product Designer",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Lead design for core product features, managed design system, collaborated with cross-functional teams on user research and product strategy.",
    skills: ["Design Systems", "User Research", "Prototyping", "Team Leadership"]
  },
  {
    company: "StartupX",
    position: "UX/UI Designer", 
    period: "2021 - 2022",
    location: "Remote",
    description: "Designed mobile and web applications from concept to launch, conducted user interviews and usability testing.",
    skills: ["Mobile Design", "Web Design", "User Testing", "Figma"]
  },
  {
    company: "Creative Agency",
    position: "Junior Designer",
    period: "2020 - 2021",
    location: "New York, NY",
    description: "Created visual designs for various clients, collaborated on branding projects, developed responsive web designs.",
    skills: ["Visual Design", "Branding", "Responsive Design", "Adobe Creative Suite"]
  }
];

const Experience = () => {
  return (
    <section className="py-24 px-4 section-dark">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            A journey of growth and impact in product design
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line matching reference */}
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/60 to-primary/20 hidden md:block rounded-full"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot with glow effect */}
                <div className="absolute left-8 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg timeline-dot animate-pulse-slow hidden md:flex items-center justify-center" style={{ animationDelay: `${index * 0.5}s` }}>
                  <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                </div>
                
                <Card className="ml-0 md:ml-24 card-dark hover-lift group-hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-2xl text-foreground mb-2">{exp.position}</h3>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-primary font-bold text-lg">@ {exp.company}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{exp.location}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
                          {exp.period}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 pt-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="bg-muted/20 text-foreground border-muted hover:bg-primary/10 hover:border-primary/30 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;