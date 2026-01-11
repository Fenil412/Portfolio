import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Your University Name",
      duration: "2020 - 2024",
      grade: "CGPA: 8.5/10",
      description: "Specialized in Data Structures, Algorithms, Web Development, and Software Engineering.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Best Project Award for Final Year Project",
        "Active member of Coding Club"
      ]
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "Your School Name",
      duration: "2018 - 2020",
      grade: "Percentage: 92%",
      description: "Science stream with Mathematics, Physics, Chemistry, and Computer Science.",
      achievements: [
        "School Topper in Computer Science",
        "Participated in National Science Olympiad"
      ]
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
            My <span className="text-[#915eff]">Education</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My academic journey and educational background that shaped my technical skills and knowledge.
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-tertiary rounded-2xl p-8 shadow-card border border-gray-700/50"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-xl text-[#915eff] mb-2">{edu.institution}</h4>
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                </div>
                <div className="md:text-right">
                  <span className="inline-block bg-[#915eff]/20 text-[#915eff] px-4 py-2 rounded-full text-sm font-medium mb-2">
                    {edu.duration}
                  </span>
                  <p className="text-white font-semibold">{edu.grade}</p>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#915eff] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Certifications & <span className="text-[#915eff]">Courses</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "React.js Complete Course",
              "JavaScript ES6+ Certification",
              "Data Structures & Algorithms",
              "Web Development Bootcamp",
              "Competitive Programming",
              "Git & GitHub Mastery"
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-black-200 rounded-xl p-6 border border-gray-700/50 hover:border-[#915eff]/50 transition-colors"
              >
                <div className="w-12 h-12 bg-[#915eff]/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-[#915eff] rounded"></div>
                </div>
                <h4 className="text-white font-semibold mb-2">{cert}</h4>
                <p className="text-gray-400 text-sm">Completed with distinction</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;