import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Company Name",
      duration: "Jun 2023 - Aug 2023",
      location: "Remote",
      description: "Developed responsive web applications using React.js and collaborated with cross-functional teams to deliver high-quality user interfaces.",
      responsibilities: [
        "Built 5+ responsive web components using React.js and Tailwind CSS",
        "Collaborated with UI/UX designers to implement pixel-perfect designs",
        "Optimized application performance resulting in 30% faster load times",
        "Participated in code reviews and maintained clean, documented code"
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Git", "REST APIs"]
    },
    {
      title: "Web Development Freelancer",
      company: "Self-Employed",
      duration: "Jan 2023 - Present",
      location: "Remote",
      description: "Providing web development services to small businesses and startups, creating modern and responsive websites.",
      responsibilities: [
        "Delivered 10+ complete website projects for various clients",
        "Managed project timelines and client communications effectively",
        "Implemented SEO best practices improving client website rankings",
        "Provided ongoing maintenance and support for deployed applications"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"]
    },
    {
      title: "Competitive Programming Enthusiast",
      company: "Various Platforms",
      duration: "2022 - Present",
      location: "Online",
      description: "Active participant in competitive programming contests with consistent problem-solving practice.",
      responsibilities: [
        "Solved 540+ problems across LeetCode, CodeForces, and CodeChef",
        "Achieved Pupil rating on CodeForces and 3★ on CodeChef",
        "Participated in weekly contests maintaining consistent performance",
        "Mentored junior students in data structures and algorithms"
      ],
      technologies: ["C++", "Python", "Data Structures", "Algorithms", "Problem Solving"]
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
            My <span className="text-[#915eff]">Experience</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My professional journey and hands-on experience in web development and competitive programming.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#915eff] to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#915eff] rounded-full border-4 border-primary z-10"></div>

                {/* Content Card */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-tertiary rounded-2xl p-8 shadow-card border border-gray-700/50 hover:border-[#915eff]/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <h4 className="text-xl text-[#915eff] mb-2">{exp.company}</h4>
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                      </div>
                      <div className="sm:text-right">
                        <span className="inline-block bg-[#915eff]/20 text-[#915eff] px-4 py-2 rounded-full text-sm font-medium mb-2">
                          {exp.duration}
                        </span>
                        <p className="text-gray-400 text-sm">{exp.location}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#915eff] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-black-200 text-gray-300 rounded-full text-sm border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-tertiary rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">
              Ready for <span className="text-[#915eff]">New Opportunities</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm actively seeking full-time opportunities where I can contribute my skills in frontend development, 
              problem-solving, and collaborative teamwork to build amazing products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-[#915eff]/20 text-[#915eff] rounded-full font-medium">
                Available for Full-time Roles
              </span>
              <span className="px-6 py-3 bg-green-500/20 text-green-400 rounded-full font-medium">
                Open to Remote Work
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;