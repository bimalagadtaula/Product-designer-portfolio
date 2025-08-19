import { Calendar, MapPin, GraduationCap } from "lucide-react";

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

const educationItems: EducationItem[] = [
  {
    degree: "Bachelor of Information Management (BIM)",
    institution: "Tribhuvan University",
    period: "2019 - 2023",
    location: "Kathmandu, Nepal",
    description:
      "Focused on human-computer interaction, product design fundamentals, and front-end development while collaborating on cross-functional projects.",
    highlights: ["HCI", "Design Systems", "Frontend", "Team Projects"],
  },
  {
    degree: "Design Bootcamp (UI/UX)",
    institution: "Online Programs",
    period: "2023",
    location: "Remote",
    description:
      "Completed intensive coursework in user research, wireframing, prototyping, and usability testing with a strong emphasis on practical, portfolio-ready work.",
    highlights: ["User Research", "Prototyping", "Usability Testing"],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Formal </span>
            <span className="gradient-text-neon">Education</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Foundation in design and technology with a focus on user-centered practices.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2" />

          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full border-4 border-slate-900 transform -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <div className="glassmorphism rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                          <GraduationCap className="w-5 h-5 mr-2 text-blue-300" />
                          {item.degree}
                        </h3>
                        <div className="text-blue-400 font-medium">{item.institution}</div>
                      </div>
                    </div>

                    {/* Period & Location */}
                    <div className="flex items-center space-x-4 text-sm text-white/60 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {item.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 mb-6 leading-relaxed">{item.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                        >
                          {tag}
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

