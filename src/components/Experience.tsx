import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    position: "Associate UI/UX designer",
    company: "Glosifi",
    period: "2024 - Present",
    location: "Singapore",
    description: "Leading design initiatives for enterprise clients, specializing in user research, wireframing, and creating intuitive user interfaces that drive engagement and conversion.",
    skills: ["Figma", "Miro", "User Research", "Prototyping", "Design Systems"]
  },
  
  {
    position: "UI developer",
    company: "Freelance",
    period: "2023 - 2024",
    location: "Remote",
    description: "Collaborated with senior designers on various projects, learning best practices in UI/UX design and contributing to design system development.",
    skills: ["Photoshop", "Illustrator", "Sketch", "Prototyping", "Design Principles"]
  },
  {
    position: "Frontend developer",
    company: "OLE Nepal",
    period: "2023 - 2024",
    location: "Lalitpur, Nepal",
    description: "Designed user experiences for web and mobile applications, focusing on user-centered design principles and creating seamless user journeys.",
    skills: ["Adobe XD", "InVision", "User Testing", "Wireframing", "Mobile Design"]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern" />
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Work </span>
            <span className="gradient-text-neon">Experience</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My journey in creating immersive digital experiences across various cutting-edge technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background transform -translate-x-1/2 z-10" />
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="glassmorphism rounded-2xl p-8 hover-tail ease-premium">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {experience.position}
                        </h3>
                        <div className="flex items-center text-primary font-medium mb-2">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {experience.company}
                        </div>
                      </div>
                    </div>

                    {/* Period & Location */}
                    <div className="flex items-center space-x-4 text-sm text-foreground/60 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {experience.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-primary/30 to-accent/30 text-white border border-white/20 hover-tail ease-premium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}