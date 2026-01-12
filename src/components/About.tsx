import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", amount: 0.3 }); 
  // amount:0.3 => triggers when 30% visible

  return (
    <section id="about" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Image Section */}
          <div className="flex justify-center lg:justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border border-white/20">
                <img
                  src="/assets/neha_portfolio_img.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-3xl bg-purple-600/20 animate-pulse"></div>
            </motion.div>
          </div>

          {/* Right Text Section */}
          <div className="bg-transparent p-8 relative">
            <div className="relative mb-6">
              <h2 className="font-myfont text-4xl text-[#f8e8f7]">About Me</h2>

              {/* Underline Animation */}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#30A6C7] to-black-500 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "50%" } : { width: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            <div className="relative">
              <motion.p
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 10, color: "#FFFFFF" }}
                className="text-[#D8D9DA] text-m leading-relaxed mb-6 cursor-pointer"
              >
                I'm a final-year college student with a passion for coding and creating things 
                through code. I love diving into complex problems, building web and software projects, 
                and experimenting with new technologies. 
              </motion.p>

              <motion.p
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, x: 10, color: "#FFFFFF" }}
                className="text-[#D8D9DA] text-m leading-relaxed mb-6 cursor-pointer"
              >
                When I’m not glued to my computer, I enjoy baking yummy treats and painting colorful pictures. 
                Baking helps me unwind, while painting lets me express myself creatively. 
                These hobbies keep me balanced and even inspire me to add creativity into my code projects.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;