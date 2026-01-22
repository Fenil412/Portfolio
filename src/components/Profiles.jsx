import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { profiles } from "../constants";

const ProfileCard = ({
  index,
  testimonial,
  name,
  profile_link,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="w-full h-full"
  >
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.02}
      transitionSpeed={250}
      className="w-full h-full"
    >
      <div className="w-full h-full bg-[#1d1836] p-10 rounded-3xl relative group overflow-hidden border border-white/10 hover:border-[#915eff]/50 transition-all duration-300 shadow-[0_5px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(145,94,255,0.25)] flex flex-col justify-between">

        {/* Shining Effect Layer */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-0" />

        {/* Glassmorphism Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#915eff]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <p className="text-white font-black text-[48px]">"</p>
            <div className="mt-1">
              <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
            </div>
          </div>

          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <a
                href={profile_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium text-[16px] hover:underline"
              >
                <span className="blue-text-gradient">@</span> {name}
              </a>
            </div>

            <a
              href={profile_link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20"
            >
              <img
                src={image}
                alt={`feedback_by-${name}`}
                className="w-auto h-10 rounded-full object-cover hover:scale-110 transition-transform duration-200 bg-transparent"
              />
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Profiles = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My online profiles</p>
          <h2 className={styles.sectionHeadText}>Where I code.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 md:grid-cols-2 gap-7`}>
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.name} index={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Profiles, "");