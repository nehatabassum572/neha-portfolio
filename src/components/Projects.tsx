import React, { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Langentify",
      description:
        "Langentify is a production-ready language detection engine that instantly identifies texts across 16 languages. It combines optimized feature extraction with a lightweight model architecture for fast, accurate predictions in web applications.",
      image: "Public/assests/Screenshot 2025-08-24 175306.png",
      technologies: ["HTML", "Flask", "Vanilla Javascript", "CSS", "Python", "TF-IDF vectorization"],
      liveUrl: "https://langentify.onrender.com/",
      githubUrl: "https://github.com/nehatabassum572/Langentify",
    },
    {
      id: 2,
      title: "AgriPredict",
      description:
        "AgriPredict is an AI-powered crop health platform designed for farmers in rural areas. Using just a smartphone camera, the CNN-based model detects crop diseases early and suggests treatment steps in the farmer’s local language. By combining AI and multilingual support, it help farmers reduce crop loss, increase yield, and access expert guidance anytime, anywhere.",
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg",
      technologies: ["React", "JWT", "REST APIs", "TailwindCSS", "MobileNetV2", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
     },
     {
      id: 3,
      title: "Hand Gesture Recognition System",
      description: 
      "This project demonstrates a real-time hand gesture recognition system using Python, and OpenCV, designed to detect and classify hand gestures (wave, point, peace, fist) for intuitive human-computer interaction. Leveraging computer vision techniques, it processes webcam input to enable seamless gesture-based control.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      technologies: ["Python", "OpenCV"],
      //liveUrl: "https://github.com/nehatabassum572/hand-gesture-recognition",
      githubUrl: "https://github.com/nehatabassum572/hand-gesture-recognition",
     },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px", amount: 0.3 }); 
  const [current, setCurrent] = React.useState(0);

  // margin/amount controls when it triggers

  return (
    <section id="projects" className="py-20 px-6" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto max-w-6xl relative"
      >
        <h2 className="text-3xl font-myfont text-[#30A6C7] text-center mb-16">
          My Projects
        </h2>

        {/* Your carousel code remains unchanged */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
            }
            className="absolute left-0 z-10 p-2 rounded-full bg-[#30A6C7] hover:bg-[#03bff3]"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Carousel */}
          <div className="flex overflow-hidden w-full justify-center relative h-[500px]">
            <AnimatePresence initial={false}>
              {projects.map((project, index) => {
                let position =
                  index === current
                    ? "center"
                    : index === (current - 1 + projects.length) % projects.length
                    ? "left"
                    : index === (current + 1) % projects.length
                    ? "right"
                    : "hidden";

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: position === "center" ? 1 : 0.3,
                      scale: position === "center" ? 0.95 : 0.75,
                      x:
                        position === "center"
                          ? "0%"
                          : position === "left"
                          ? "-65%"
                          : position === "right"
                          ? "65%"
                          : "200%",
                      zIndex: position === "center" ? 25 : 10,
                      filter: position === "center" ? "blur(0px)" : "blur(3px)",
                    }}
                    whileHover={position === "center" ? { scale: 1.02, y: -10 } : {}}
                    transition={{ duration: 0.6 }}
                    className={`absolute w-[380px] h-[500px] rounded-xl shadow-lg overflow-hidden flex flex-col ${
                      position === "center" ? "bg-[#1b2439]" : "bg-slate-800/40"
                    }`}
                  >
                    {/* Image */}
                    <div className="h-44 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-xs flex-1">
                        {project.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1 mt-3 mb-4">
                        {project.technologies.map((tech) => (
                          <motion.span
                            whileHover={{ scale: 1.1, y: -2 }}
                            key={tech}
                            className="px-2 py-0.5 bg-blue-600/30 text-blue-300 rounded-full text-[10px] cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex space-x-2">
                        {project.liveUrl && (
                          <motion.a
                            whileHover={{ scale: 1.1, y: -3 }}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg text-xs"
                          >
                            <ExternalLink size={12} />
                            <span>Live</span>
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            whileHover={{ scale: 1.1, y: -3 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 border border-gray-600 hover:border-gray-500 text-white px-2 py-1 rounded-lg text-xs"
                          >
                            <Github size={12} />
                            <span>Code</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right Button */}
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % projects.length)}
            className="absolute right-0 z-10 p-2 rounded-full bg-[#30A6C7] hover:bg-[#03bff3]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

