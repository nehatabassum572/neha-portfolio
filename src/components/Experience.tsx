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
      year: "July 2025 – November 2025",
      description:
        "Contributed to open-source projects under GSSoC 2025 by fixing issues, adding new features, and collaborating with maintainers. Gained hands-on experience in Git, GitHub, and large-scale project workflows while improving code quality and documentation.",
    },
    {
      id: 2,
      title: "SDE Intern",
      company: "Hashcron Technologies",
      year: "June 2024 – August 2024",
      description:
        "Developed and optimized Joget-based applications, and implemented AI-driven features that increased user engagement by 40%.",
    },
    {
      id: 3,
      title: "Graphic Designer",
      company: "Uni Club",
      year: "July 2024 – Present",
      description:
        "Designed scroll-stopping visuals for social media and event promotions. Blended creativity with speed using Photoshop and Canva to bring aesthetic harmony across posters, reels, and everything in between.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-myfont text-[#f8e8f7] text-center mb-4"
        >
          My Experience
        </motion.h2>

        {/* Accent line — consistent with Skills & Projects */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="mx-auto mb-20 h-[2px] w-20 rounded-full"
          style={{ background: "linear-gradient(to right, #06b6d4, #a855f7)" }}
        />

        <div className="relative">

          {/* Center vertical line */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, #a855f7 10%, #06b6d4 90%, transparent)",
            }}
          />

          {/* Mobile left line */}
          <div
            className="md:hidden absolute left-4 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, #a855f7 10%, #06b6d4 90%, transparent)",
            }}
          />

          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLeft ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative flex items-center mb-14 md:mb-16"
              >
                {/* ── LEFT SIDE (even items on desktop) ── */}
                <div className="hidden md:flex w-1/2 justify-end pr-10">
                  {isLeft && (
                    <motion.div
                      whileHover={{ scale: 1.03, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-full max-w-sm bg-black/25 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl text-right"
                    >
                      <div className="text-[11px] tracking-widest uppercase text-white/40 mb-1 font-medium">
                        {item.year}
                      </div>
                      <h3 className="font-myfont text-xl text-white mb-0.5">
                        {item.title}
                      </h3>
                      <div className="font-smooch tracking-[0.08em] text-[#c49bc6] text-base mb-3">
                        {item.company}
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* ── CENTER DOT ── */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                  {/* Outer glow ring */}
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #06b6d4, #a855f7)",
                      boxShadow: "0 0 12px 3px rgba(168,85,247,0.4)",
                    }}
                  >
                    {/* Inner dot */}
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </div>

                {/* ── RIGHT SIDE (odd items on desktop) ── */}
                <div className="hidden md:flex w-1/2 justify-start pl-10">
                  {!isLeft && (
                    <motion.div
                      whileHover={{ scale: 1.03, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-full max-w-sm bg-black/25 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl text-left"
                    >
                      <div className="text-[11px] tracking-widest uppercase text-white/40 mb-1 font-medium">
                        {item.year}
                      </div>
                      <h3 className="font-myfont text-xl text-white mb-0.5">
                        {item.title}
                      </h3>
                      <div className="font-smooch tracking-[0.08em] text-[#c49bc6] text-base mb-3">
                        {item.company}
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* ── MOBILE: single column with left line ── */}
                <div className="md:hidden flex items-start w-full pl-10">
                  {/* Mobile dot */}
                  <div
                    className="absolute left-[10px] -translate-x-1/2 z-10 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #06b6d4, #a855f7)",
                      boxShadow: "0 0 10px 2px rgba(168,85,247,0.4)",
                      top: "4px",
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full bg-black/25 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl"
                  >
                    <div className="text-[11px] tracking-widest uppercase text-white/40 mb-1 font-medium">
                      {item.year}
                    </div>
                    <h3 className="font-myfont text-xl text-white mb-0.5">
                      {item.title}
                    </h3>
                    <div className="font-smooch tracking-[0.08em] text-[#c49bc6] text-base mb-3">
                      {item.company}
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;