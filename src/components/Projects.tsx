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
        "A production-ready language detection engine that instantly identifies texts across 16 languages using optimized feature extraction and a lightweight model architecture.",
      image: "/assets/Screenshot 2025-08-24 175306.png",
      technologies: ["HTML", "Flask", "Vanilla Javascript", "CSS", "Python", "TF-IDF"],
      liveUrl: "https://langentify.onrender.com/",
      githubUrl: "https://github.com/nehatabassum572/Langentify",
    },
    {
      id: 2,
      title: "AgriPredict",
      description:
        "An AI-powered crop health platform for farmers. Uses CNN-based disease detection via smartphone camera and delivers treatment steps in the farmer's local language.",
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg",
      technologies: ["React", "JWT", "REST APIs", "TailwindCSS", "MobileNetV2", "Docker"],
    },
    {
      id: 3,
      title: "Hand Gesture Recognition",
      description:
        "Real-time hand gesture recognition using Python and OpenCV. Detects and classifies gestures (wave, point, peace, fist) from webcam input for intuitive human-computer interaction.",
      image: "/assets/hand_gesture.png",
      technologies: ["Python", "OpenCV"],
      githubUrl: "https://github.com/nehatabassum572/hand-gesture-recognition",
    },
    {
      id: 4,
      title: "InfraAlert",
      description:
        "A full-stack civic-tech platform for citizens to report infrastructure issues like potholes and water leaks. Uses attention levels and role-based reporting for efficient resolution.",
      image: "/assets/InfraAlert.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
      githubUrl: "https://github.com/nehatabassum572/Infra-Alert",
    },
    {
      id: 5,
      title: "Portfolio",
      description:
        "Personal portfolio showcasing projects, skills, and experience in full-stack development and ML — built with a focus on clean design and performance.",
      image: "/assets/portfolio.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://neha-portfolio-gamma.vercel.app/",
      githubUrl: "https://github.com/nehatabassum572/neha-portfolio",
    },
    {
      id: 6,
      title: "The Complaint Machine",
      description:
        "A fun stress-relief tool where users vent frustrations by submitting complaints — which get shredded with a confetti explosion. Built for joy, not utility.",
      image: "/assets/complaint-machine.png",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://complaint-machine.vercel.app/",
      githubUrl: "https://github.com/nehatabassum572/complaint-machine",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px", amount: 0.3 });
  const [current, setCurrent] = React.useState(0);

  const prev = () => setCurrent((p) => (p - 1 + projects.length) % projects.length);
  const next = () => setCurrent((p) => (p + 1) % projects.length);

  return (
    <section id="projects" className="py-20 px-6" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto max-w-6xl relative"
      >
        {/* Heading */}
        <h2 className="text-4xl font-myfont text-[#f8e8f7] text-center mb-4">
          My Projects
        </h2>

        {/* Accent line */}
        <div
          className="mx-auto mb-16 h-[2px] w-20 rounded-full"
          style={{ background: "linear-gradient(to right, #06b6d4, #a855f7)" }}
        />

        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prev}
            className="absolute left-0 md:left-4 z-[60] p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          {/* Carousel */}
          <div className="flex w-full justify-center relative h-[520px] overflow-hidden">
            <AnimatePresence initial={false}>
              {projects.map((project, index) => {
                const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

                let position: "center" | "left" | "right" | "hidden" =
                  index === current
                    ? "center"
                    : index === (current - 1 + projects.length) % projects.length
                    ? "left"
                    : index === (current + 1) % projects.length
                    ? "right"
                    : "hidden";

                // On mobile only show center
                const xOffset = isMobile
                  ? "0%"
                  : position === "center"
                  ? "0%"
                  : position === "left"
                  ? "-68%"
                  : position === "right"
                  ? "68%"
                  : "200%";

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity:
                        position === "center"
                          ? 1
                          : isMobile
                          ? 0
                          : 0.25,
                      scale:
                        position === "center" ? 0.97 : isMobile ? 0.9 : 0.82,
                      x: xOffset,
                      zIndex: position === "center" ? 25 : 10,
                      filter:
                        position === "center"
                          ? "blur(0px)"
                          : isMobile
                          ? "blur(0px)"
                          : "blur(4px)",
                    }}
                    whileHover={position === "center" ? { scale: 1.0, y: -6 } : {}}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className={`absolute w-[90vw] max-w-[400px] rounded-2xl shadow-2xl overflow-hidden flex flex-col ${
                      position === "center"
                        ? "bg-black/30 backdrop-blur-xl border border-white/10"
                        : "bg-slate-800/80"
                    }`}
                    style={{ height: "500px" }}
                  >
                    {/* Image */}
                    <div className="h-48 w-full overflow-hidden flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover brightness-80"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1 overflow-hidden">
                      
                      <h3 className="font-myfont text-xl text-white mb-2 leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="font-smooch tracking-[0.06em] text-white/65 leading-relaxed text-medium flex-1 overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Tech chips */}
                      <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <motion.span
                            whileHover={{ scale: 1.08, y: -1 }}
                            key={tech}
                            className="px-2.5 py-0.5 bg-white/10 border border-white/15 rounded-full text-[10px] text-white/80 cursor-default whitespace-nowrap"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/40 cursor-default">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-2 mt-auto">
                        {project.liveUrl && (
                          <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                          >
                            <ExternalLink size={11} />
                            <span>Live</span>
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                          >
                            <Github size={11} />
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
            onClick={next}
            className="absolute right-0 md:right-4 z-[60] p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;