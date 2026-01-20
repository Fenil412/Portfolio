import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../../styles'
import { services } from '../../constants'
import { me } from '../../assets'
import { fadeIn, textVariant } from '../../utils/motion'
import { SectionWrapper } from '../../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      glareEnable={false}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div className='flex flex-col xl:flex-row gap-10 mt-12 items-center'>
        <motion.div
          variants={fadeIn('right', 'spring', 0.5, 0.75)}
          className='w-full xl:w-[40%] flex justify-center items-center'
        >
          <img
            src={me}
            alt='My Profile'
            className='profile-picture'
          />
        </motion.div>

        <div className='w-full xl:w-[60%] flex flex-col justify-center'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a final-year Computer Science student at Nirma University (CGPA: 8.62) with a strong foundation in Data Structures & Algorithms. I have experience as a Web Developer Intern at Zidio Development, where I built scalable applications using the MERN stack. My expertise spans Full-Stack Development, Machine Learning, and Competitive Programming (Knight on LeetCode). I'm passionate about building fast, user-centric web apps and exploring AI-driven solutions.
          </motion.p>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')