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
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A journey of growth and impact in product design
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg animate-glow hidden md:block"></div>
                
                <Card className="ml-0 md:ml-16 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <h3 className="font-bold text-lg">{exp.position}</h3>
                          <span className="text-primary font-semibold">@ {exp.company}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-muted-foreground">
                          <span>{exp.period}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{exp.location}</span>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                              {skill}
                            </Badge>
                          ))}
                        </div>
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