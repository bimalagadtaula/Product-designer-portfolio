import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";

const experiences = [
  { company: "Cognizant", location: "Mumbai", role: "Experience Designer", period: "Sep 2020 – Aug 2021" },
  { company: "Sugee Pvt Limited", location: "Mumbai", role: "UI/UX Designer", period: "Sep 2020 – Aug 2021" },
  { company: "Cinestox", location: "Mumbai", role: "Lead UX Designer", period: "Sep 2021" },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 scroll-mt-24">
      <div className="container max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-h2 md:text-display font-bold mb-2">My Work <span className="gradient-text">Experience</span></h2>
            <div className="mx-auto w-24 h-1 bg-primary rounded-full" />
          </div>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.company + exp.role} delay={index * 0.08}>
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-10">
                    <div className={index % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                      <Card className="border bg-card shadow-none">
                        <CardContent className="p-6">
                          <h3 className="font-semibold">{exp.company}, {exp.location}</h3>
                          <div className="text-muted-foreground mb-1">{exp.role}</div>
                          <div className="text-sm text-muted-foreground">{exp.period}</div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;