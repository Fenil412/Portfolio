import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import IconCloudDemo from "../globe";
import { Code2, Database, Wrench } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVercel,
  SiVite,
  SiJavascript,
  SiExpress,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";
import { DiCss3, DiHtml5 } from "react-icons/di";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.02 }}
  >
    <Card className="group relative overflow-hidden bg-gray-900/80 dark:bg-gray-900/80 light:bg-white/90 border-gray-700 dark:border-gray-700 light:border-gray-200 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 light:hover:shadow-indigo-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] light:via-[rgba(99,102,241,0.1)] light:group-hover:via-[rgba(99,102,241,0.2)] animate-shimmer"></div>
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-xl bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-100 ${color} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-gray-400 light:from-gray-800 light:to-gray-600">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 dark:bg-gray-800/50 dark:hover:bg-gray-700/80 light:bg-gray-50 light:hover:bg-gray-100 text-gray-100 dark:text-gray-100 light:text-gray-700 border-gray-600 dark:border-gray-600 light:border-gray-300 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 light:hover:shadow-indigo-500/20"
            >
              <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>
              <span className="font-medium">{skill.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400 light:text-blue-600",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "JavaScript (ES6+)",
          icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        { name: "HTML5", icon: <DiHtml5 className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <DiCss3 className="w-4 h-4 text-[#1572B6]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400 light:text-green-600",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="w-4 h-4 text-white dark:text-white light:text-gray-800" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "REST APIs",
          icon: <AiOutlineApi className="w-4 h-4 text-gray-300 dark:text-gray-300 light:text-gray-600" />,
        },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Workflow",
      color: "text-pink-400 light:text-pink-600",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="w-4 h-4 text-white dark:text-white light:text-gray-800" /> },
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white dark:text-white light:text-gray-800" /> },
        { name: "NPM", icon: <FaNpm className="w-4 h-4 text-[#CB3837]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
  ];

  return (
    <main className="pt-24 lg:pt-16 text-white dark:text-white light:text-gray-800 min-h-screen bg-[#04081A] dark:bg-[#04081A] light:bg-gradient-to-br light:from-gray-50 light:to-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      <section className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-[#915eff] dark:text-[#915eff] light:text-indigo-600">Skills</span>
          </h1>
          <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with to bring ideas to life through innovative solutions.
          </p>
        </motion.div>

        {/* Enhanced 3D Icon Cloud */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center mb-20"
        >
          <div className="relative">
            {/* Glow effect behind the icon cloud */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full scale-150 dark:opacity-100 light:opacity-30"></div>
            <IconCloudDemo />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>

        {/* Competitive Programming Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-4xl font-bold mb-12 text-center">
            Competitive Programming <span className="text-[#915eff] dark:text-[#915eff] light:text-indigo-600">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/80 dark:bg-gray-900/80 light:bg-white/90 rounded-3xl p-10 text-center border border-gray-700 dark:border-gray-700 light:border-gray-200 hover:shadow-2xl hover:shadow-blue-500/20 light:hover:shadow-indigo-500/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:opacity-100 light:opacity-50"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-[#915eff] dark:text-[#915eff] light:text-indigo-600 mb-4">540+</div>
                <div className="text-white dark:text-white light:text-gray-800 font-semibold mb-2 text-lg">Problems Solved</div>
                <div className="text-gray-400 dark:text-gray-400 light:text-gray-600">LeetCode Platform</div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/80 dark:bg-gray-900/80 light:bg-white/90 rounded-3xl p-10 text-center border border-gray-700 dark:border-gray-700 light:border-gray-200 hover:shadow-2xl hover:shadow-blue-500/20 light:hover:shadow-indigo-500/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 dark:opacity-100 light:opacity-50"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-[#915eff] dark:text-[#915eff] light:text-indigo-600 mb-4">Pupil</div>
                <div className="text-white dark:text-white light:text-gray-800 font-semibold mb-2 text-lg">CodeForces Rating</div>
                <div className="text-gray-400 dark:text-gray-400 light:text-gray-600">800+ Problems Solved</div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/80 dark:bg-gray-900/80 light:bg-white/90 rounded-3xl p-10 text-center border border-gray-700 dark:border-gray-700 light:border-gray-200 hover:shadow-2xl hover:shadow-blue-500/20 light:hover:shadow-indigo-500/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:opacity-100 light:opacity-50"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-[#915eff] dark:text-[#915eff] light:text-indigo-600 mb-4">3★</div>
                <div className="text-white dark:text-white light:text-gray-800 font-semibold mb-2 text-lg">CodeChef Rating</div>
                <div className="text-gray-400 dark:text-gray-400 light:text-gray-600">Global Rank 148</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default SkillsSection;