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
      image: "/assets/Screenshot 2025-08-24 175306.png",
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
      //liveUrl: "#",
      //githubUrl: "#",
     },
     {
      id: 3,
      title: "Hand Gesture Recognition System",
      description: 
      "This project demonstrates a real-time hand gesture recognition system using Python, and OpenCV, designed to detect and classify hand gestures (wave, point, peace, fist) for intuitive human-computer interaction. Leveraging computer vision techniques, it processes webcam input to enable seamless gesture-based control.",
      image: "/assets/hand_gesture.png",
      technologies: ["Python", "OpenCV"],
      //liveUrl: "https://github.com/nehatabassum572/hand-gesture-recognition",
      githubUrl: "https://github.com/nehatabassum572/hand-gesture-recognition",
     },
     {
      id: 4,
      title: "InfraAlert",
      description: 
      "InfraAlert is a full-stack civic-tech platform that enables citizens to report local infrastructure issues such as potholes, garbage overflow, and water leaks. It uses attention levels and role-based reporting to help authorities prioritize and resolve issues efficiently.",
      image: "/assets/InfraAlert.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Node.js", "Express.js", "Drizzle ORM", "PostgreSQL"],
      //liveUrl: "https://github.com/nehatabassum572/hand-gesture-recognition",
      githubUrl: "https://github.com/nehatabassum572/Infra-Alert",
     },
     {
      id: 5,
      title: "Portfolio",
      description: 
      "A personal portfolio showcasing my projects, skills, and experience in full-stack development and machine learning, built with a focus on clean design, performance, and user experience.",
      image: "/assets/portfolio.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://neha-portfolio-gamma.vercel.app/",
      githubUrl: "https://github.com/nehatabassum572/neha-portfolio",
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
        <h2 className="text-4xl font-myfont text-[#f8e8f7] text-center mb-16">
          My Projects
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
            }
            className="absolute left-2 md:left-0 z-[60] p-2 rounded-full bg-[#f8e8f7] hover:bg-[#f1d1ee]"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Carousel */}
          <div className="flex w-full justify-center relative h-[500px] overflow-visible md:overflow-hidden">
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
                      opacity: position === "center" ? 1 : window.innerWidth < 768 ? 0 : 0.3,
                      scale: position === "center" ? 0.95 : window.innerWidth < 768 ? 0.9 : 0.85,
                      x:
                         window.innerWidth < 768
                          ? "0%"
                          : position === "center"
                          ? "0%"
                          : position === "left"
                          ? "-65%"
                          : position === "right"
                          ? "65%"
                          : "200%",
                      zIndex: position === "center" ? 25 : 10,
                      filter: position === "center" ? "blur(0px)" :  window.innerWidth < 768 ?  "blur(0px)"  : "blur(3px)",
                    }}
                    whileHover={position === "center" ? { scale: 1.02, y: -10 } : {}}
                    transition={{ duration: 0.6 }}
                    className={`absolute w-[90vw] max-w-[380px] h-auto md:h-[500px] rounded-xl shadow-lg overflow-hidden flex flex-col ${
                      position === "center" ? "bg-black/25 backdrop-blur-xl": "bg-slate-800"
                    }`}
                  >
                    {/* Image */}
                    <div className=" h-44 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover brightness-75"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-myfont text-lg font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="font-smooch tracking-[0.08em] text-gray-300 leading-relaxed text-m flex-1">
                        {project.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1 mt-3 mb-4">
                        {project.technologies.map((tech) => (
                          <motion.span
                            whileHover={{ scale: 1.1, y: -2 }}
                            key={tech}
                            className="px-2 py-0.5 bg-[#f8e8f7]/60 rounded-full text-[10px] text-black cursor-default"
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
            className="absolute right-2 md:right-0 z-[60] p-2 rounded-full bg-[#f8e8f7] hover:bg-[#f1d1ee]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

