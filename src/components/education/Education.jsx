import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Nirma University, Ahmedabad",
      duration: "2023 - 2027",
      grade: "CGPA: 8.63 (Till 5th Sem)",
      description: "Focused on Data Structures, Algorithms, Web Development, and AI/ML.",
      achievements: [
        "Student Placement Co-ordinator, CSE Department (Jan 2026 - Present)",
        "Core Committee Member, Computer Society of India (Feb 2025 - Present)",
        "Executive Committee Member, Computer Society of India (Oct 2024 - Feb 2025)",
        "Member, Data Science Club (Oct 2024 - Present)",
        "Member, CodeAdda - Programming Club (Aug 2023 - Present)"
      ]
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "Tapovan Vidhyalaya, Surat, Gujarat",
      duration: "2022 - 2023",
      grade: "PR: 91.77",
      description: "Science stream with Mathematics, Physics, Chemistry, and Computer Science.",
      achievements: [
        "JEE MAIN, JEE Advance and Gujcat Topper",
        "Consistent Academic Performer"
      ]
    },
    {
      degree: "Secondary School Certificate (10th)",
      institution: "Paramhans Vidhybhavan, Surat, Gujarat",
      duration: "2020 - 2021",
      grade: "PR: 99.90",
      description: "Achieved academic excellence with highest rank in school.",
      achievements: [
        "School Topper",
        "Distinction in Mathematics and Science"
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-primary py-20 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00cea8] animate-pulse">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A timeline of academic excellence and continuous learning that fuels my technical expertise.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line for Timeline (Tablet+) */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#915eff] via-purple-500 to-transparent opacity-30 rounded-full hidden md:block" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8 relative`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-[#915eff] rounded-full border-4 border-primary z-20 hidden md:block shadow-[0_0_15px_#915eff]" />

                {/* Content Card */}
                <div className="w-full md:w-[45%] group perspective-1000">
                  <div className="relative bg-black-200/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#915eff]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,94,255,0.1)] hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#915eff]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-5xl opacity-20 transform -translate-y-2 -translate-x-2 absolute top-0 left-0">🎓</span>
                        <div className="ml-auto bg-[#915eff]/20 text-[#915eff] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                          {edu.duration}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-[#915eff] transition-colors">{edu.degree}</h3>
                      <h4 className="text-lg text-gray-400 mb-4 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        {edu.institution}
                      </h4>

                      <p className="text-gray-300 mb-6 text-sm leading-relaxed border-l-2 border-[#915eff]/30 pl-4">
                        {edu.description}
                      </p>

                      <div className="mb-4">
                        <span className="text-white text-md font-bold block mb-2">{edu.grade}</span>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Achievements</h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 group/item">
                              <span className="text-[#915eff] mt-1 transform group-hover/item:scale-150 transition-transform">▹</span>
                              <span className="text-gray-300 text-sm group-hover/item:text-white transition-colors">
                                {achievement.replace("Gujcat", "GUJCET")}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Improved Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Certifications <span className="text-[#915eff]">&</span> Continuous Learning
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
                className="group relative bg-tertiary p-1 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#915eff] to-[#00cea8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-[#151030] p-6 rounded-xl h-full flex flex-col justify-between z-10">
                  <div>
                    <div className="w-10 h-10 bg-[#915eff]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#915eff] transition-colors duration-300">
                      <span className="text-[#915eff] group-hover:text-white text-xl">📜</span>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">{cert}</h4>
                  </div>
                  <p className="text-gray-500 text-xs mt-4 group-hover:text-gray-300 transition-colors">VERIFIED • ONLINE</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;