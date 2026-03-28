import React, { useRef } from "react";
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

const CIcon = () => (
  <span className="font-bold text-blue-400 text-2xl font-mono">c</span>
);
const CppIcon = () => (
  <span className="font-bold text-blue-500 text-xl font-mono">c++</span>
);

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

const languagesAndDB: Skill[] = [
  { name: "C++",        icon: <CppIcon />,         color: "#60a5fa" },
  { name: "C",          icon: <CIcon />,            color: "#93c5fd" },
  { name: "Python",     icon: <FaPython />,         color: "#facc15" },
  { name: "MySQL",      icon: <SiMysql />,          color: "#0ea5e9" },
  { name: "PostgreSQL", icon: <SiPostgresql />,     color: "#0284c7" },
  { name: "MongoDB",    icon: <SiMongodb />,        color: "#22c55e" },
  { name: "Redis",      icon: <SiRedis />,          color: "#ef4444" },
];

const frameworksAndLibs: Skill[] = [
  { name: "React",       icon: <FaReact />,        color: "#22d3ee" },
  { name: "Next.js",     icon: <SiNextdotjs />,    color: "#f8fafc" },
  { name: "Express.js",  icon: <SiExpress />,      color: "#d1d5db" },
  { name: "Node.js",     icon: <FaNodeJs />,       color: "#22c55e" },
  { name: "HTML5",       icon: <FaHtml5 />,        color: "#f97316" },
  { name: "CSS3",        icon: <FaCss3Alt />,      color: "#60a5fa" },
  { name: "JavaScript",  icon: <FaJsSquare />,     color: "#facc15" },
  { name: "TypeScript",  icon: <SiTypescript />,   color: "#3b82f6" },
  { name: "Tailwind CSS",icon: <SiTailwindcss />,  color: "#38bdf8" },
  { name: "Bootstrap",   icon: <SiBootstrap />,    color: "#a855f7" },
];

const devTools: Skill[] = [
  { name: "Docker",     icon: <FaDocker />,       color: "#60a5fa" },
  { name: "Git",        icon: <FaGitAlt />,       color: "#ef4444" },
  { name: "GitHub",     icon: <SiGithub />,       color: "#f8fafc" },
  { name: "Vercel",     icon: <SiVercel />,       color: "#f8fafc" },
  { name: "REST APIs",  icon: <FaDatabase />,     color: "#34d399" },
];

const coreSubjects: Skill[] = [
  { name: "Machine Learning",    icon: <FaBrain />,        color: "#4ade80" },
  { name: "Software Engineering",icon: <MdEngineering />,  color: "#f472b6" },
  { name: "DSA",                 icon: <GiCircuitry />,    color: "#c084fc" },
  { name: "DBMS",                icon: <SiDatabricks />,   color: "#818cf8" },
  { name: "OOPS",                icon: <RiBracesFill />,   color: "#facc15" },
];

// Category label + row config
const rows: { label: string; skills: Skill[]; reverse: boolean }[] = [
  { label: "Languages & Databases", skills: languagesAndDB,    reverse: false },
  { label: "Frameworks & Libraries", skills: frameworksAndLibs, reverse: true  },
  { label: "Dev Tools",              skills: devTools,          reverse: false },
  { label: "CS Fundamentals",        skills: coreSubjects,      reverse: true  },
];

// Duration scaled by number of items so all rows feel the same speed
const BASE_DURATION = 18;
const durationFor = (count: number) => (count / 7) * BASE_DURATION;

const SkillSlider: React.FC<{ skills: Skill[]; reverse?: boolean }> = ({
  skills,
  reverse = false,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const tripled = [...skills, ...skills, ...skills];
  const duration = durationFor(skills.length);

  const handleMouseEnter = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const handleMouseLeave = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  return (
    <div
      className="relative w-full overflow-hidden mb-6"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="flex w-max"
        style={{
          animation: `${reverse ? "marqueeRight" : "marqueeLeft"} ${duration}s linear infinite`,
        }}
      >
        {tripled.map((skill, i) => (
          <div
            key={i}
            className="group flex items-center gap-3 flex-shrink-0 mx-8 cursor-default select-none"
          >
            {/* Icon */}
            <span
              className="text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </span>

            {/* Name */}
            <span
              className="text-sm font-semibold tracking-wide transition-colors duration-300 text-white/60 group-hover:text-white"
            >
              {skill.name}
            </span>

            {/* Dot separator */}
            <span className="text-white/15 text-xs ml-4">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <>
      {/* Keyframes injected once */}
      <style>{`
        @keyframes marqueeLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqueeRight {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee"] { animation: none !important; }
        }
      `}</style>

      <motion.section
        id="skills"
        className="py-24 overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.15 }}
      >
        {/* Heading — constrained to match Projects section width */}
        <div className="max-w-6xl mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-4xl font-myfont text-[#f8e8f7] text-center mb-4"
          >
            My Skills
          </motion.h2>

          {/* Thin accent line under heading */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="mx-auto mb-16 h-[2px] w-20 rounded-full"
            style={{
              background: "linear-gradient(to right, #06b6d4, #a855f7)",
            }}
          />
        </div>

        {/* Rows — full width but visually padded via the slider fade masks */}
        <div className="max-w-6xl mx-auto px-8 space-y-2">
          {rows.map(({ label, skills, reverse }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: reverse ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Category label */}
              <p className="text-center text-[11px] uppercase tracking-[0.2em] text-white/30 mb-3 font-medium">
                {label}
              </p>
              <SkillSlider skills={skills} reverse={reverse} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Skills;