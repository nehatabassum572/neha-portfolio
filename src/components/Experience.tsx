import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  year: string;
  description: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Contributor",
      company: "GSSoC 2025",
      year: "July 2025 - Present",
      description:
        "Contributed to open-source projects under GSSoC 2025 by fixing issues, adding new features, and collaborating with maintainers. Gained hands-on experience in Git, GitHub, and large-scale project workflows while improving code quality and documentation.",
    },
    {
      id: 2,
      title: "SDE Intern",
      company: "Hashcron Technologies",
      year: "June 2024 - August 2024",
      description:
        "Developed and optimized Joget-based applications, and implemented AI-driven features that increased user engagement by 40%.",
    },
    {
      id: 3,
      title: "Graphic Designer",
      company: "Uni Club",
      year: "July 2024 - Present",
      description:
        "Designed scroll-stopping visuals for social media and event promotions. Blended creativity with speed using Photoshop and Canva to bring aesthetic harmony across posters, reels, and everything in between.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }} // animate in & out
          className="text-3xl font-myfont text-[#30A6C7] text-center mb-16"
        >
          My Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-500"></div>

          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.3 }} // triggers on scroll in & out
              whileHover={{ scale: 1.05, y: -6 }} // hover animation
              className={`relative mb-10 ${
                index % 2 === 0
                  ? "md:text-right md:pr-6"
                  : "md:text-left md:pl-6"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-slate-900"></div>

              {/* Card */}
              <div
                className={`bg-slate-800/70 backdrop-blur-sm rounded-lg p-4 shadow-lg ml-8 md:ml-0 transition-all max-w-lg${
                  index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                }`}
              >
                <div className="text-blue-400 font-medium mb-1 text-sm">{item.year}</div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <div className="text-blue-300 text-sm mb-2">{item.company}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
