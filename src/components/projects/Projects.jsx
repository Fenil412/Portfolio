import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { externallink, github } from "../../assets";
import { projects } from "../../constants";
import { fadeIn, textVariant, staggerContainer } from "../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1.25)}>
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        scale={1.03}
        transitionSpeed={450}
        className="relative bg-black-200/40 backdrop-blur-xl p-5 rounded-2xl sm:w-[360px] w-full border border-white/10 hover:border-[#915eff]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(145,94,255,0.4)] hover:-translate-y-2 group overflow-hidden"
      >
        {/* Shine Effect - Enhanced */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 z-0 pointer-events-none" />

        {/* Glassmorphism Glow - Enhanced */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#915eff]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="relative w-full h-[230px] z-10 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-[#915eff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px] pointer-events-none">
          </div>

          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover z-20">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transform hover:scale-110 transition-transform border border-white/10 hover:border-[#915eff] group/icon"
                title="Source Code"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain opacity-80 group-hover/icon:opacity-100 transition-opacity"
                />
              </div>
            )}

            {live_demo_link && (
              Array.isArray(live_demo_link) ? (
                live_demo_link.map((link, i) => {
                  const url = typeof link === 'object' ? link.url : link;
                  const title = typeof link === 'object' ? link.title : `Live Demo ${i + 1}`;
                  return (
                    <div
                      key={i}
                      onClick={() => window.open(url, "_blank")}
                      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transform hover:scale-110 transition-transform border border-white/10 hover:border-[#915eff] group/icon"
                      title={title}
                    >
                      <img
                        src={externallink}
                        alt="live demo"
                        className="w-1/2 h-1/2 object-contain opacity-80 group-hover/icon:opacity-100 transition-opacity"
                      />
                    </div>
                  );
                })
              ) : (
                <div
                  onClick={() => window.open(live_demo_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transform hover:scale-110 transition-transform border border-white/10 hover:border-[#915eff] group/icon"
                  title="Live Demo"
                >
                  <img
                    src={externallink}
                    alt="live demo"
                    className="w-1/2 h-1/2 object-contain opacity-80 group-hover/icon:opacity-100 transition-opacity"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="mt-5 relative z-10">
          <h3 className="text-white font-bold text-[24px] group-hover:text-[#915eff] transition-colors duration-300 flex items-center gap-2">
            {name}
            {/* Status Pulse Dot */}
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 relative z-10">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} px-2 py-1 rounded-md bg-white/5 border border-white/5 hover:border-white/20 transition-colors`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="min-h-screen bg-primary py-20 px-4 overflow-hidden relative" id="work">
      {/* Ambient Background - matching Experience section */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <p className="text-gray-400 text-lg uppercase tracking-wider">My work</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-2 relative inline-block tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00cea8] animate-pulse">Projects</span>
          </h2>
          <p className="mt-4 text-gray-300 text-[17px] max-w-3xl mx-auto leading-[30px]">
            Following projects showcase my skills and experience through real-world
            examples. Each project is briefly described with links to code repositories
            and live demos. It reflects my ability to solve complex problems,
            work with different technologies, and manage projects effectively.
          </p>
        </motion.div>

        {/* Coordinated Animation Container */}
        <motion.div
          variants={staggerContainer(0.3, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap gap-7 justify-center"
        >
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </motion.div>

        {/* GitHub Profile Link - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full flex justify-center mt-20"
        >
          <a
            href="https://github.com/Fenil412"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex group items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#915eff] font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#915eff] hover:scale-105 hover:shadow-[0_0_30px_rgba(145,94,255,0.6)] overflow-hidden"
          >
            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:shadow-[0_0_50px_rgba(145,94,255,0.7)] group-hover:-inset-1 opacity-70 blur-lg group-hover:opacity-100"></div>

            {/* Button Shine Effect */}
            <div className="absolute top-0 left-0 w-full h-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

            <span className="relative flex items-center gap-3">
              <span className="text-2xl">GitHub</span>
              <svg
                className="w-7 h-7 transform group-hover:translate-x-1 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="bg-white/20 px-3 py-1 rounded text-base group-hover:bg-white/30 transition-colors">@Fenil412</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;