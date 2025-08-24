import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaHtml5,
  FaCss3Alt, FaJsSquare, FaDatabase, FaBrain
} from "react-icons/fa";
import {
  SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript, SiVercel,
  SiRedis, SiNextdotjs, SiExpress, SiGithub, SiMysql, SiBootstrap, SiDatabricks
} from "react-icons/si";
import { GiCircuitry } from "react-icons/gi";
import { RiBracesFill } from "react-icons/ri";
import { MdEngineering } from "react-icons/md";

// Custom placeholders for C and C++
const CIcon = () => <span className="font-bold text-blue-400 text-2xl">c</span>;
const CppIcon = () => <span className="font-bold text-blue-500 text-2xl">c++</span>;

const Skills: React.FC = () => {
  // --- your arrays unchanged ---
  const languagesAndDB = [
    { name: "C++", icon: <CppIcon />, color: "text-blue-500" },
    { name: "C", icon: <CIcon />, color: "text-blue-400" },
    { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
    { name: "MySQL", icon: <SiMysql />, color: "text-sky-600" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-sky-700" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "Redis", icon: <SiRedis />, color: "text-red-500" },
  ];

  const frameworksAndLibs = [
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-500" },
  ];

  const devTools = [
    { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
    { name: "GitHub", icon: <SiGithub />, color: "text-white" },
    { name: "Vercel", icon: <SiVercel />, color: "text-white" },
    { name: "REST APIs", icon: <FaDatabase />, color: "text-emerald-400" },
  ];

  const coreSubjects = [
    { name: "Machine Learning", icon: <FaBrain />, color: "text-green-400" },
    { name: "Software Engineering", icon: <MdEngineering />, color: "text-pink-400" },
    { name: "DSA", icon: <GiCircuitry />, color: "text-purple-400" },
    { name: "DBMS", icon: <SiDatabricks />, color: "text-indigo-400" },
    { name: "OOPS", icon: <RiBracesFill />, color: "text-yellow-400" },
  ];

  // Reusable slider
  const SkillSlider = ({ skills, reverse = false }: { skills: any[]; reverse?: boolean }) => (
    <div className="relative max-w-4xl mx-auto px-4 mb-12 overflow-hidden">
      <motion.div
        animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="flex space-x-12 whitespace-nowrap py-2"
      >
        {[...skills, ...skills].map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8, scale: 1.1 }}
            className="flex items-center space-x-3 flex-shrink-0 cursor-pointer"
          >
            <span className={`text-2xl transition-colors duration-300 ${skill.color}`}>
              {skill.icon}
            </span>
            <span
              className={`text-sm font-semibold text-gray-300 transition-colors duration-300 hover:${skill.color}`}
            >
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <motion.section
      id="skills"
      className="py-20 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // re-animates when scrolled in/out
    >
      <div className="container mx-auto max-w-6xl mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl font-myfont text-[#30A6C7] text-center mb-16"
        >
          My Skills
        </motion.h2>
      </div>

      {/* rows with sliders */}
      <SkillSlider skills={languagesAndDB} />
      <SkillSlider skills={frameworksAndLibs} reverse />
      <SkillSlider skills={devTools} />
      <SkillSlider skills={coreSubjects} reverse />
    </motion.section>
  );
};

export default Skills;
