import React from "react";
import { motion } from "framer-motion";

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
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

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
        >
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-auto h-10 rounded-full object-cover hover:scale-105 transition-transform duration-200 bg-transparent"
          />
        </a>
      </div>
    </div>
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
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.name} index={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Profiles, "");