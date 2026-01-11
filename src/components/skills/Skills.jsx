import React from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from '../canvas';
import { technologies } from '../../constants';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "C++", "Python", "Java", "TypeScript"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Node.js", "MongoDB"]
    },
    {
      title: "Competitive Programming",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "LeetCode", "CodeForces", "CodeChef"]
    }
  ];

  return (
    <section className="min-h-screen bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#915eff]">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Technology Balls */}
        <div className="flex flex-row flex-wrap justify-center gap-10 mb-20">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-tertiary rounded-2xl p-8 shadow-card border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-black-200 rounded-lg p-4 text-center border border-gray-700/50 hover:border-[#915eff]/50 transition-colors"
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competitive Programming Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Competitive Programming <span className="text-[#915eff]">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-tertiary rounded-2xl p-8 text-center border border-gray-700/50">
              <div className="text-4xl font-bold text-[#915eff] mb-2">540+</div>
              <div className="text-white font-semibold mb-1">Problems Solved</div>
              <div className="text-gray-400 text-sm">LeetCode Platform</div>
            </div>
            <div className="bg-tertiary rounded-2xl p-8 text-center border border-gray-700/50">
              <div className="text-4xl font-bold text-[#915eff] mb-2">Pupil</div>
              <div className="text-white font-semibold mb-1">CodeForces Rating</div>
              <div className="text-gray-400 text-sm">800+ Problems Solved</div>
            </div>
            <div className="bg-tertiary rounded-2xl p-8 text-center border border-gray-700/50">
              <div className="text-4xl font-bold text-[#915eff] mb-2">3★</div>
              <div className="text-white font-semibold mb-1">CodeChef Rating</div>
              <div className="text-gray-400 text-sm">Global Rank 148</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;