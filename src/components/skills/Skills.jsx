import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import IconCloudDemo from "../globe";
import { Code2, Database, Wrench, Server, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "../../utils/motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaDatabase,
  FaEye,
  FaBrain,
  FaNetworkWired,
  FaRobot,
  FaProjectDiagram,
  FaCommentDots,
  FaMagic,
  FaSearch,
  FaAws,
  FaKaggle,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVercel,
  SiVite,
  SiJavascript,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiMongodb,
  SiPostman,
  SiRender,
  SiOracle,
  SiOpenai,
  SiKnime,
  SiTableau,
  SiCisco,
  SiRedux,
  SiChartdotjs,
} from "react-icons/si";
import { TbBrandVscode, TbBrandThreejs } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";
import { DiCss3, DiHtml5 } from "react-icons/di";

const SkillCard = ({ icon: Icon, title, skills, color, index }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.75)}>
    <Card className="group relative overflow-hidden bg-tertiary border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
      <CardContent className="p-6 relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-xl bg-violet-50 dark:bg-white/20 ${color} group-hover:scale-110 transition-transform duration-300 border border-white/5`}>
            <Icon className="w-8 h-8" />
          </div>
          {/* Enhanced Title - Aware of Theme */}
          <h3 className="text-2xl font-bold text-white group-hover:text-[#915eff] transition-all">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 my-auto">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="group/badge relative bg-primary hover:bg-white/10 text-white border-gray-700 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 rounded-md">
              <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>
              <span className="font-medium text-xs text-white">{skill.name}</span>
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
      color: "text-blue-400",
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
        { name: "Bootstrap", icon: <FaBootstrap className="w-4 h-4 text-[#7952B3]" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        { name: "Three.js", icon: <TbBrandThreejs className="w-4 h-4 text-white" /> },
        { name: "Chart.js", icon: <SiChartdotjs className="w-4 h-4 text-[#FF6384]" /> },
        { name: "HTML5", icon: <DiHtml5 className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <DiCss3 className="w-4 h-4 text-[#1572B6]" /> },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="w-4 h-4 text-white" />,
        },
        {
          name: "Flask",
          icon: <SiFlask className="w-4 h-4 text-white" />,
        },
        {
          name: "FastAPI",
          icon: <SiFastapi className="w-4 h-4 text-[#009688]" />,
        },
        {
          name: "REST APIs",
          icon: <AiOutlineApi className="w-4 h-4 text-gray-300" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-yellow-400",
      skills: [
        { name: "SQL Plus", icon: <SiOracle className="w-4 h-4 text-[#F80000]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "IndexedDB", icon: <FaDatabase className="w-4 h-4 text-white" /> },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Workflow",
      color: "text-pink-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="w-4 h-4 text-white" /> },
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Render", icon: <SiRender className="w-4 h-4 text-white" /> },
        { name: "Postman", icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "NPM", icon: <FaNpm className="w-4 h-4 text-[#CB3837]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "KNIME", icon: <SiKnime className="w-4 h-4 text-[#FFD700]" /> },
        { name: "Tableau", icon: <SiTableau className="w-4 h-4 text-[#E97627]" /> },
        { name: "Amazon Cloud", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Cisco Packet Tracer", icon: <SiCisco className="w-4 h-4 text-[#1BA0D7]" /> },
      ],
    },
    {
      icon: Brain,
      title: "AI & ML",
      color: "text-purple-400",
      skills: [
        { name: "NLC", icon: <FaCommentDots className="w-4 h-4 text-blue-300" /> },
        { name: "Computer Vision", icon: <FaEye className="w-4 h-4 text-green-300" /> },
        { name: "ML", icon: <FaBrain className="w-4 h-4 text-pink-300" /> },
        { name: "DL", icon: <FaNetworkWired className="w-4 h-4 text-yellow-300" /> },
        { name: "RL", icon: <FaRobot className="w-4 h-4 text-orange-300" /> },
        { name: "Soft Computing", icon: <FaProjectDiagram className="w-4 h-4 text-purple-300" /> },
        { name: "RAG", icon: <FaSearch className="w-4 h-4 text-blue-400" /> },
        { name: "Generative AI", icon: <FaMagic className="w-4 h-4 text-purple-400" /> },
        { name: "LLM", icon: <SiOpenai className="w-4 h-4 text-green-400" /> },
      ],
    },
    {
      icon: FaCode,
      title: "Competitive Platforms",
      color: "text-orange-400",
      skills: [
        { name: "Kaggle", icon: <FaKaggle className="w-4 h-4 text-[#20BEFF]" /> },
        { name: "Codolio", icon: <FaCode className="w-4 h-4 text-white" /> },
      ],
    },
  ];

  return (
    <main className="pt-24 lg:pt-16 text-white min-h-screen bg-primary relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <section className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-lg uppercase tracking-wider">My technical expertise</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00cea8] animate-pulse">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center mb-16"
        >
          <IconCloudDemo />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              index={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default SkillsSection;