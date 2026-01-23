import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../../styles';
import { textVariant } from '../../utils/motion';

const Experience = () => {
  const experiences = [
    {
      title: "Student Placement Co-ordinator",
      company_name: "CSE Department Nirma University",
      iconBg: "#E6DEDD",
      date: "Jan 2026 - Present",
      location: "Nirma University · Hybrid",
      icon: "🎓",
      points: [
        "Coordinating placement activities for the CSE Department.",
        "Facilitating communication between students and recruiters."
      ],
      skills: ["Leadership", "Management"]
    },
    {
      title: "Web Developer Intern",
      company_name: "Zidio Development",
      iconBg: "#E6DEDD",
      date: "May 2025 - Jul 2025",
      location: "Bengaluru, Karnataka, India · Remote",
      icon: "💻",
      points: [
        "Worked as a Web Developer Intern.",
        "Gained hands-on experience with the MERN Stack."
      ],
      skills: ["MERN Stack", "Web Development"]
    },
    {
      title: "Core Committee Member",
      company_name: "Computer Society of India, Nirma University",
      iconBg: "#E6DEDD",
      date: "Feb 2025 - Present",
      location: "Ahmedabad, Gujarat, India · On-site",
      icon: "👥",
      points: [
        "Serving as a Core Committee Member.",
        "Previously served as Executive Committee Member (Oct 2024 - Feb 2025)."
      ],
      skills: ["Team Leadership", "Event Management"]
    },
    {
      title: "Senior Editor",
      company_name: "Cyber Security Club Nirma University",
      iconBg: "#E6DEDD",
      date: "Nov 2024 - Jul 2025",
      location: "Ahmedabad, Gujarat, India · On-site",
      icon: "🛡️",
      points: [
        "Responsible for editing duties within the club.",
        "Served as a Member from Oct 2024 to Nov 2024."
      ],
      skills: ["Editing", "Content Management"]
    },
    {
      title: "Member",
      company_name: "Data Science Club, Nirma University",
      iconBg: "#E6DEDD",
      date: "Oct 2024 - Present",
      location: "Ahmedabad, Gujarat, India · On-site",
      icon: "📊",
      points: [
        "Active member of the Data Science Club.",
        "Participating in data science related activities and workshops."
      ],
      skills: ["Data Science", "Machine Learning"]
    },
    {
      title: "Member",
      company_name: "CodeAdda - Programming Club, Nirma University",
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      location: "Ahmedabad, Gujarat, India · On-site",
      icon: "👾",
      points: [
        "Active member of the programming community.",
        "Participating in coding contests and peer learning sessions."
      ],
      skills: ["Competitive Programming", "Algorithms"]
    },
  ];

  return (
    <section className="min-h-screen bg-primary py-20 overflow-hidden relative" id="experience">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <p className="text-gray-400 text-lg uppercase tracking-wider">What I have done so far</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00cea8] animate-pulse">Experience</span>
        </h2>
      </motion.div>

      <div className="flex flex-col relative z-10">
        <VerticalTimeline animate={true} lineColor="#915eff">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', boxShadow: 'none', padding: 0 }}
              contentArrowStyle={{ borderRight: '7px solid var(--accent-primary)' }}
              date={experience.date}
              iconStyle={{ background: experience.iconBg, color: '#fff', boxShadow: '0 0 0 4px #915eff' }}
              icon={
                <div className="flex justify-center items-center w-full h-full text-2xl animate-pulse">
                  {experience.icon}
                </div>
              }
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={250}
                className="w-full h-full"
              >
                <div className="relative group bg-tertiary p-6 rounded-xl overflow-hidden border border-white/10 hover:border-[#915eff]/50 transition-all duration-300 shadow-[0_5px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(145,94,255,0.25)]">

                  {/* Shining Effect Layer */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-0" />

                  {/* Glassmorphism Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#915eff]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    <h3 className="text-white text-[24px] font-bold group-hover:text-[#915eff] transition-colors duration-300">{experience.title}</h3>
                    <p className="text-gray-400 text-[16px] font-semibold" style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                    <p className="text-gray-500 text-[12px] mt-1 italic flex items-center gap-1">
                      <span className="text-[#915eff]">📍</span> {experience.location}
                    </p>

                    <ul className="mt-5 list-disc ml-5 space-y-2">
                      {experience.points.map((point, index) => (
                        <li
                          key={`experience-point-${index}`}
                          className="text-white-100 text-[14px] pl-1 tracking-wider"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>

                    {experience.skills && (
                      <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {experience.skills.map((skill, idx) => (
                          <span key={idx} className="text-[12px] bg-gradient-to-r from-[#915eff]/10 to-purple-900/10 text-gray-300 px-2.5 py-1 rounded-md border border-[#915eff]/20 hover:border-[#915eff] hover:text-white transition-all cursor-default">
                            #{skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Tilt>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;