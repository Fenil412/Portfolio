import React from 'react';
import { motion } from 'framer-motion';
import { profiles } from '../../constants';
import { leetcode, codeforces, codechef, github } from '../../assets';
import Tilt from 'react-parallax-tilt';

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
        "JEE Main, JEE Advance and Gujcet Topper",
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

  // Certificate Files from public folder (excluding resume & progress report)
  const certificatesData = [
    { name: "365 Days of LeetCode (2024)", file: "/365_days_leetcode.png", type: "image" },
    { name: "Adobe Certificate 2025", file: "/Adobe_certificate_page-0001.jpg", type: "image" },
    { name: "Mine Hackathon 2025", file: "/Mine_Hackthon_2025_page-0001.jpg", type: "image" },
    { name: "Mined Sprint 2025", file: "/Mined Sprint_page-0001.jpg", type: "image" },
    { name: "AU Hackathon 2025", file: "/au_hackathon_page-0001.jpg", type: "image" },
    { name: "EC Council 2024", file: "/ec-council_page-0001.jpg", type: "image" },
    { name: "Flipkart GRiD 6.0 (2024)", file: "/filpcart_page-0001.jpg", type: "image" },
    { name: "Hackout 2024", file: "/hackout_2024.jpg", type: "image" },
    { name: "SIH 2024", file: "/sih_page-0001.jpg", type: "image" },
    { name: "TATA Crucible Campus Quiz 2024", file: "/TATA Crucible Campus Quiz 2024.jpg", type: "image" },
    { name: "TATA Crucible Campus Quiz 2025", file: "/TATA Crucible Campus Quiz 2025.jpg", type: "image" },
    { name: "Webcube Tech (2024)", file: "/webcube tech certificatr_page-0001.jpg", type: "image" }
  ];

  // Specific Profiles map
  const profilesData = [
    {
      title: "Data Structure and Algorithm",
      platform: "LeetCode",
      link: "https://leetcode.com/u/Sagivian/", // From constants/index.js (profiles[0])
      icon: leetcode,
      color: "from-yellow-600 to-orange-500",
      description: "Solved ~785 problems | 2058 Rating | Knight Badge"
    },
    {
      title: "Competitive Programming",
      platforms: [
        { name: "CodeForces", link: "https://codeforces.com/profile/Sagivian", icon: codeforces },
        { name: "CodeChef", link: "https://www.codechef.com/users/sagivian", icon: codechef }
      ],
      color: "from-blue-500 to-cyan-400",
      description: "Rated 'Pupil' (Max 1300) on Codeforces | 3★ Coder (1653) on CodeChef"
    },
    {
      title: "Git & GitHub Mastery",
      platform: "GitHub",
      link: "https://github.com/Fenil412",
      icon: github,
      color: "from-gray-700 to-black",
      description: "Active Open Source Contributor | 500+ Contributions in last year"
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
                                {achievement.replace("Gujcet", "Gujcet")}
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

        {/* Certifications & Profiles Section */}
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

          {/* Profiles Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {profilesData.map((profile, index) => (
              <div
                key={index}
                className="relative bg-tertiary rounded-2xl p-[1px] overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${profile.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative bg-[#151030] h-full p-6 rounded-2xl flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 p-2 group-hover:bg-white/20 transition-colors">
                    <img src={profile.icon || github} alt={profile.platform || "Platform"} className="w-full h-full object-contain" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">{profile.title}</h4>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">{profile.description}</p>

                  {profile.platforms ? (
                    <div className="flex gap-4">
                      {profile.platforms.map((p, i) => (
                        <a
                          key={i}
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-[#915eff]/10 hover:bg-[#915eff] text-[#915eff] hover:text-white rounded-lg text-sm font-medium transition-all"
                        >
                          {p.name}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-[#915eff]/10 hover:bg-[#915eff] text-[#915eff] hover:text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2"
                    >
                      Visit Profile <span className="text-lg">↗</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certificates Grid */}
          <motion.div
            className="mt-16"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="text-3xl font-bold text-white mb-10 pl-6 border-l-8 border-[#915eff] inline-block shadow-[0_4px_20px_rgba(145,94,255,0.3)] bg-black/20 py-2 pr-6 rounded-r-full">
              EARNED CERTIFICATIONS
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {certificatesData.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                  }}
                >
                  <Tilt
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    scale={1.05}
                    transitionSpeed={450}
                    className="h-full"
                  >
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block h-full bg-gradient-to-br from-[#151030]/90 to-[#1e1645]/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-[0_0_30px_rgba(145,94,255,0.4)] transition-all duration-300"
                    >
                      {/* Image Container with Overlay */}
                      <div className="relative h-48 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-[#915eff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
                          <span className="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider transform scale-0 group-hover:scale-100 transition-transform duration-300 border border-[#915eff]">
                            VIEW CERTIFICATE
                          </span>
                        </div>

                        {cert.type === "image" ? (
                          <img
                            src={cert.file}
                            alt={cert.name}
                            className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-[#151030]">
                            <span className="text-6xl animate-bounce">📄</span>
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-6 relative z-20">
                        {/* Decorative line */}
                        <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#915eff]/50 to-transparent" />

                        <h5 className="text-white text-lg font-bold mb-2 line-clamp-1 group-hover:text-[#915eff] transition-colors" title={cert.name}>
                          {cert.name}
                        </h5>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5 group-hover:border-[#915eff]/30 group-hover:text-gray-300 transition-all uppercase tracking-wider">
                            {cert.type}
                          </span>
                          <span className="text-[#915eff] transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                            ➜
                          </span>
                        </div>
                      </div>

                      {/* Glowing Corner Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#915eff] to-[#00cea8] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500 -z-10" />
                    </a>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Education;