import { FadeIn } from "@/components/motion";

const experiences = [
  {
    company: "Cognizant, Mumbai",
    position: "Experience Designer",
    period: "Sep 2020 – Aug 2021",
    isActive: false
  },
  {
    company: "Sugee Pvt Limited, Mumbai",
    position: "UI/UX Designer",
    period: "Sep 2020 – Aug 2021",
    isActive: false
  },
  {
    company: "Cinestox, Mumbai",
    position: "Lead UX Designer",
    period: "Sep 2021",
    isActive: true
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              My Work <span className="text-primary relative">
                Experience
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"></div>
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.company} delay={index * 0.1}>
                <div className="relative flex items-center">
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white ${
                    exp.isActive ? 'bg-primary' : 'bg-gray-300'
                  } shadow-lg z-10`}></div>

                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold text-lg text-gray-800">{exp.company}</h3>
                      <p className="text-primary font-medium">{exp.position}</p>
                      <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
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